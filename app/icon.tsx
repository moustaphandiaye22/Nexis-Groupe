import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 18,
        fontWeight: 800,
        background: "linear-gradient(135deg, #071a2d 0%, #0c1f35 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#d8b46a",
        borderRadius: "6px",
        border: "1px solid rgba(216, 180, 106, 0.4)",
        fontFamily: "Georgia, serif",
      }}
    >
      N
    </div>,
    {
      ...size,
    },
  );
}
