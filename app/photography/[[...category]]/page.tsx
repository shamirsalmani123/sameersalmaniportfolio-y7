import PhotographyClientPage from "./PhotographyClientPage"

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return [
    { category: [] }, // /photography
    { category: ["portrait"] }, // /photography/portrait
    { category: ["street"] }, // /photography/street
    { category: ["documentary"] }, // /photography/documentary
    { category: ["landscape"] }, // /photography/landscape
    { category: ["event"] }, // /photography/event
  ]
}

export default function PhotographyPage({ params }: { params: { category?: string[] } }) {
  return <PhotographyClientPage params={params} />
}
