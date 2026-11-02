import { SITE } from "@/content/site";

export default function HomePage() {
  return (
    <main className="container">
      <h1>{SITE.name}</h1>
      <p>{SITE.tagline}</p>
    </main>
  );
}