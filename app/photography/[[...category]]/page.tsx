import PhotographyClientPage from "./PhotographyClientPage"

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return [
    { category: [] }, // This handles /photography
    { category: ["portrait"] }, // /photography/portrait
    { category: ["street"] }, // /photography/street
    { category: ["product"] }, // /photography/product
    { category: ["event"] }, // /photography/event
  ]
}

export default function PhotographyPage({ params }: { params: { category?: string[] } }) {
  return <PhotographyClientPage params={params} />
}
