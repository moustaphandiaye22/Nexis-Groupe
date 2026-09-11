import Link from "next/link";
export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span>404</span>
        <h1>Cette page n’existe pas.</h1>
        <Link href="/" className="button button--dark">
          Retour à l’accueil
        </Link>
      </div>
    </section>
  );
}
