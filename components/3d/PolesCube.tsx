"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sector } from "@/data/sectors";

export interface Pole3DData {
  id: string;
  name: string;
  shortName: string;
  eyebrow: string;
  group: string;
  position: THREE.Vector3;
  color: string;
  sector: Sector;
  screenPos?: { x: number; y: number; isFront: boolean };
}

interface PolesCubeProps {
  sectors: Sector[];
  activePoleIndex: number | null;
  onSelectPole: (index: number) => void;
  filterGroup: string;
  autoRotate: boolean;
}

// Single 3D Cube Dimensions
const CUBE_SIZE = 2.4;
const FACE_OFFSET = 3.2;

export const POLE_POSITIONS: THREE.Vector3[] = [
  // 8 Vertices of the single cube (Corners)
  new THREE.Vector3(-CUBE_SIZE, CUBE_SIZE, CUBE_SIZE),
  new THREE.Vector3(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE),
  new THREE.Vector3(CUBE_SIZE, -CUBE_SIZE, CUBE_SIZE),
  new THREE.Vector3(-CUBE_SIZE, -CUBE_SIZE, CUBE_SIZE),
  new THREE.Vector3(-CUBE_SIZE, CUBE_SIZE, -CUBE_SIZE),
  new THREE.Vector3(CUBE_SIZE, CUBE_SIZE, -CUBE_SIZE),
  new THREE.Vector3(CUBE_SIZE, -CUBE_SIZE, -CUBE_SIZE),
  new THREE.Vector3(-CUBE_SIZE, -CUBE_SIZE, -CUBE_SIZE),
  // 6 Face Centers of the single cube (Points)
  new THREE.Vector3(FACE_OFFSET, 0, 0),
  new THREE.Vector3(-FACE_OFFSET, 0, 0),
  new THREE.Vector3(0, FACE_OFFSET, 0),
  new THREE.Vector3(0, -FACE_OFFSET, 0),
  new THREE.Vector3(0, 0, FACE_OFFSET),
  new THREE.Vector3(0, 0, -FACE_OFFSET),
];

const GROUP_COLORS: Record<string, string> = {
  Immobilier: "#d8b46a", // Gold / Bronze
  BTP: "#e09f3e", // Warm Gold
  Mobilité: "#3b82f6", // Electric Cyan
  Services: "#10b981", // Emerald
};

export function PolesCube({
  sectors,
  activePoleIndex,
  onSelectPole,
  filterGroup,
  autoRotate,
}: PolesCubeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hudPositions, setHudPositions] = useState<
    {
      id: string;
      x: number;
      y: number;
      isFront: boolean;
      index: number;
    }[]
  >([]);

  // Stable references for state props
  const autoRotateRef = useRef<boolean>(autoRotate);
  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  const onSelectPoleRef = useRef(onSelectPole);
  useEffect(() => {
    onSelectPoleRef.current = onSelectPole;
  }, [onSelectPole]);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubeGroupRef = useRef<THREE.Group | null>(null);

  const nodeMeshesRef = useRef<THREE.Mesh[]>([]);
  const haloMeshesRef = useRef<THREE.Mesh[]>([]);
  const targetCamPosRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 9.5));
  const targetCamLookRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  // Mouse Parallax Physics
  const mouseNormRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDraggingRef = useRef<boolean>(false);
  const prevMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const polesData = useRef<Pole3DData[]>([]);

  useEffect(() => {
    polesData.current = sectors.map((sec, idx) => {
      let groupName = "Services";
      if (
        sec.slug === "immobilier" ||
        sec.slug === "btp" ||
        sec.slug === "agro-business"
      ) {
        groupName = sec.slug === "btp" ? "BTP" : "Immobilier";
      } else if (
        sec.slug === "automobile" ||
        sec.slug === "import-export" ||
        sec.slug === "transport-logistique" ||
        sec.slug === "negoce-distribution"
      ) {
        groupName = "Mobilité";
      }

      return {
        id: sec.slug,
        name: sec.name,
        shortName: sec.shortName,
        eyebrow: sec.eyebrow,
        group: groupName,
        position: POLE_POSITIONS[idx % POLE_POSITIONS.length],
        color: GROUP_COLORS[groupName] || "#d8b46a",
        sector: sec,
      };
    });
  }, [sectors]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    container.innerHTML = "";

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Responsive camera distance based on viewport width
    const isMobile = width < 768;
    const isTablet = width < 1024;
    const initCamZ = isMobile ? 13.5 : isTablet ? 11.5 : 9.5;
    const initFov = isMobile ? 55 : 45;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(initFov, width / height, 0.1, 100);
    camera.position.set(0, 0, initCamZ);
    targetCamPosRef.current.set(0, 0, initCamZ);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // disable AA on mobile for perf
      alpha: true,
      powerPreference: isMobile ? "default" : "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd8b46a, 3.2);
    dirLight1.position.set(6, 12, 8);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3b82f6, 2.8);
    dirLight2.position.set(-6, -8, -6);
    scene.add(dirLight2);

    const cursorPointLight = new THREE.PointLight(0xfef08a, 5.5, 20);
    cursorPointLight.position.set(0, 0, 6);
    scene.add(cursorPointLight);

    // 5. UNIFIED 3D CUBE GROUP
    const cubeGroup = new THREE.Group();
    cubeGroupRef.current = cubeGroup;
    scene.add(cubeGroup);

    // ONE Single Cube Geometry
    const boxGeo = new THREE.BoxGeometry(
      CUBE_SIZE * 2,
      CUBE_SIZE * 2,
      CUBE_SIZE * 2
    );

    // Translucent Glass Faces
    const singleCubeMat = new THREE.MeshPhysicalMaterial({
      color: 0x071a2d,
      metalness: 0.3,
      roughness: 0.1,
      transmission: 0.75,
      transparent: true,
      opacity: 0.55,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const singleCubeMesh = new THREE.Mesh(boxGeo, singleCubeMat);
    cubeGroup.add(singleCubeMesh);

    // Glowing Golden Wireframe Edges on Corners
    const edgesGeo = new THREE.EdgesGeometry(boxGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0xd8b46a,
      linewidth: 2,
      transparent: true,
      opacity: 0.7,
    });
    const singleCubeEdges = new THREE.LineSegments(edgesGeo, edgesMat);
    cubeGroup.add(singleCubeEdges);

    // Radial Connecting Rays
    const rayMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      opacity: 0.4,
      transparent: true,
    });
    POLE_POSITIONS.forEach((pos) => {
      const rayPoints = [new THREE.Vector3(0, 0, 0), pos];
      const rayGeo = new THREE.BufferGeometry().setFromPoints(rayPoints);
      const rayLine = new THREE.Line(rayGeo, rayMat);
      cubeGroup.add(rayLine);
    });

    // Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(CUBE_SIZE * 1.5, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xd8b46a,
      opacity: 0.5,
      transparent: true,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    cubeGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(FACE_OFFSET * 1.08, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      opacity: 0.4,
      transparent: true,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    cubeGroup.add(ring2);

    // Particle Stars
    const particleCount = 250;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 26;
      particlePos[i + 1] = (Math.random() - 0.5) * 26;
      particlePos[i + 2] = (Math.random() - 0.5) * 26;
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePos, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xd8b46a,
      size: 0.065,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. 14 Spherical Pole Nodes
    nodeMeshesRef.current = [];
    haloMeshesRef.current = [];

    const nodeGeo = new THREE.SphereGeometry(0.24, 32, 32);
    const haloGeo = new THREE.SphereGeometry(0.42, 32, 32);

    polesData.current.forEach((pole, idx) => {
      const nodeColor = new THREE.Color(pole.color);

      // Node Sphere
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColor,
        emissive: nodeColor,
        emissiveIntensity: 0.9,
        roughness: 0.1,
        metalness: 0.9,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pole.position);
      nodeMesh.userData = { index: idx, pole };
      cubeGroup.add(nodeMesh);
      nodeMeshesRef.current.push(nodeMesh);

      // Node Halo
      const haloMat = new THREE.MeshBasicMaterial({
        color: nodeColor,
        transparent: true,
        opacity: 0.45,
        wireframe: true,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.position.copy(pole.position);
      cubeGroup.add(haloMesh);
      haloMeshesRef.current.push(haloMesh);
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Mouse & Touch Interactivity
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((event.clientX - rect.left) / width) * 2 - 1;
      const normY = -((event.clientY - rect.top) / height) * 2 + 1;

      mouse.x = normX;
      mouse.y = normY;
      mouseNormRef.current = { x: normX, y: normY };

      cursorPointLight.position.x = normX * 6;
      cursorPointLight.position.y = normY * 6;

      if (isDraggingRef.current && cubeGroupRef.current) {
        const deltaX = event.clientX - prevMousePosRef.current.x;
        const deltaY = event.clientY - prevMousePosRef.current.y;

        cubeGroupRef.current.rotation.y += deltaX * 0.008;
        cubeGroupRef.current.rotation.x += deltaY * 0.008;

        prevMousePosRef.current = { x: event.clientX, y: event.clientY };
        return;
      }

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshesRef.current);

      if (intersects.length > 0) {
        const idx = intersects[0].object.userData.index;
        setHoveredIndex(idx);
        container.style.cursor = "pointer";
      } else {
        setHoveredIndex(null);
        container.style.cursor = isDraggingRef.current ? "grabbing" : "grab";
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      isDraggingRef.current = true;
      prevMousePosRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleClick = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshesRef.current);

      if (intersects.length > 0) {
        const idx = intersects[0].object.userData.index;
        onSelectPoleRef.current(idx);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        isDraggingRef.current = true;
        prevMousePosRef.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isDraggingRef.current && event.touches.length === 1 && cubeGroupRef.current) {
        const deltaX = event.touches[0].clientX - prevMousePosRef.current.x;
        const deltaY = event.touches[0].clientY - prevMousePosRef.current.y;

        cubeGroupRef.current.rotation.y += deltaX * 0.01;
        cubeGroupRef.current.rotation.x += deltaY * 0.01;

        prevMousePosRef.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousemove", handleMouseMove);
    domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    domElement.addEventListener("click", handleClick);
    domElement.addEventListener("touchstart", handleTouchStart, { passive: true });
    domElement.addEventListener("touchmove", handleTouchMove, { passive: true });
    domElement.addEventListener("touchend", handleTouchEnd);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      const mobile = w < 768;
      // Adjust camera Z & FOV on resize
      camera.fov = mobile ? 55 : 45;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));
      // Update default camera position
      const newZ = mobile ? 13.5 : w < 1024 ? 11.5 : 9.5;
      if (targetCamPosRef.current.z === 9.5 || targetCamPosRef.current.z === 11.5 || targetCamPosRef.current.z === 13.5) {
        targetCamPosRef.current.z = newZ;
      }
    };
    // Use ResizeObserver for accurate container resize detection
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener("resize", handleResize);

    // 7. Continuous Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (cubeGroupRef.current) {
        if (autoRotateRef.current && !isDraggingRef.current) {
          cubeGroupRef.current.rotation.y += 0.0075;
          cubeGroupRef.current.rotation.x += 0.0025;
        }

        if (!isDraggingRef.current) {
          const tiltX = mouseNormRef.current.y * 0.003;
          const tiltY = mouseNormRef.current.x * 0.003;
          cubeGroupRef.current.rotation.x += tiltX;
          cubeGroupRef.current.rotation.y += tiltY;
        }
      }

      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.005;
      particles.rotation.y += 0.0004;

      haloMeshesRef.current.forEach((halo, i) => {
        const scale = 1 + Math.sin(Date.now() * 0.004 + i) * 0.18;
        halo.scale.set(scale, scale, scale);
      });

      camera.position.lerp(targetCamPosRef.current, 0.05);
      camera.lookAt(targetCamLookRef.current);

      renderer.render(scene, camera);

      // Compute 2D Screen Positions for ALL 14 Pole Points & Corners
      if (cubeGroupRef.current) {
        const newHud: {
          id: string;
          x: number;
          y: number;
          isFront: boolean;
          index: number;
        }[] = [];

        polesData.current.forEach((pole, index) => {
          const worldPos = pole.position
            .clone()
            .applyMatrix4(cubeGroupRef.current!.matrixWorld);

          const projected = worldPos.clone().project(camera);
          
          const isFront = projected.z < 0.99;
          const currentW = container.clientWidth || window.innerWidth;
          const currentH = container.clientHeight || window.innerHeight;

          const screenX = ((projected.x + 1) * currentW) / 2;
          const screenY = ((-projected.y + 1) * currentH) / 2;

          newHud.push({
            id: pole.id,
            x: screenX,
            y: screenY,
            isFront,
            index,
          });
        });

        setHudPositions(newHud);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      domElement.removeEventListener("mousemove", handleMouseMove);
      domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      domElement.removeEventListener("click", handleClick);
      domElement.removeEventListener("touchstart", handleTouchStart);
      domElement.removeEventListener("touchmove", handleTouchMove);
      domElement.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.innerHTML = "";
      }
      renderer.dispose();
    };
  }, [sectors]);

  useEffect(() => {
    if (activePoleIndex !== null && cubeGroupRef.current && cameraRef.current) {
      const activePole = polesData.current[activePoleIndex];
      if (activePole) {
        const worldPos = activePole.position
          .clone()
          .applyMatrix4(cubeGroupRef.current.matrixWorld);

        // Responsive zoom distance: further on mobile so the drawer doesn't cover the cube
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        const zoomDist = isMobile ? 10 : 6.5;
        const zoomOffset = worldPos.clone().normalize().multiplyScalar(zoomDist);
        targetCamPosRef.current.copy(zoomOffset);
        targetCamLookRef.current.copy(worldPos);
      }
    } else {
      // Restore default cam Z based on current screen size
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const isTablet = typeof window !== "undefined" && window.innerWidth < 1024;
      const defaultZ = isMobile ? 13.5 : isTablet ? 11.5 : 9.5;
      targetCamPosRef.current.set(0, 0, defaultZ);
      targetCamLookRef.current.set(0, 0, 0);
    }
  }, [activePoleIndex]);

  useEffect(() => {
    nodeMeshesRef.current.forEach((mesh, idx) => {
      const halo = haloMeshesRef.current[idx];
      const isSelected = activePoleIndex === idx;
      const isHovered = hoveredIndex === idx;
      const pole = polesData.current[idx];

      const matchesFilter =
        !filterGroup || filterGroup === "Tous" || pole?.group === filterGroup;

      const mat = mesh.material as THREE.MeshStandardMaterial;
      const haloMat = halo.material as THREE.MeshBasicMaterial;

      if (isSelected || isHovered) {
        mesh.scale.set(1.8, 1.8, 1.8);
        mat.emissiveIntensity = 2.4;
        haloMat.opacity = 0.95;
      } else if (!matchesFilter) {
        mesh.scale.set(0.6, 0.6, 0.6);
        mat.emissiveIntensity = 0.15;
        haloMat.opacity = 0.05;
      } else {
        mesh.scale.set(1, 1, 1);
        mat.emissiveIntensity = 0.85;
        haloMat.opacity = 0.4;
      }
    });
  }, [activePoleIndex, hoveredIndex, filterGroup]);

  return (
    <div className="poles-3d-canvas-container">
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="poles-3d-canvas-mount" />

      {/* Floating 2D HUD Labels ALWAYS VISIBLE - SINGLE UNIQUE BADGE PER POLE */}
      <div className="poles-3d-hud-layer">
        {hudPositions.map((hud) => {
          const pole = polesData.current[hud.index];
          if (!pole) return null;

          const isSelected = activePoleIndex === hud.index;
          const isHovered = hoveredIndex === hud.index;
          const matchesFilter =
            !filterGroup || filterGroup === "Tous" || pole.group === filterGroup;

          if (!matchesFilter && !isSelected && !isHovered) return null;

          const numStr = String(hud.index + 1).padStart(2, "0");

          return (
            <div
              key={hud.id}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: `translate3d(${hud.x}px, ${hud.y}px, 0px) translate(-50%, -50%)`,
                opacity: isSelected || isHovered ? 1 : hud.isFront ? 1 : 0.8,
              }}
              className={`poles-3d-hud-wrapper ${hud.isFront ? "front-node" : "back-node"}`}
              onClick={() => onSelectPoleRef.current(hud.index)}
              onMouseEnter={() => setHoveredIndex(hud.index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`poles-3d-hud-pill ${
                  isSelected ? "active" : isHovered ? "hovered" : ""
                }`}
              >
                <span className="poles-3d-hud-num">{numStr}</span>
                <span className="poles-3d-hud-name">{pole.name}</span>
                {(isSelected || isHovered) && (
                  <span className="poles-3d-hud-pulse" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
