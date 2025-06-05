import BTSPageClient from "./BTSPageClient"

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return [
    { project: [] }, // This handles /bts
    { project: ["kuchh-aur"] }, // /bts/kuchh-aur
    { project: ["do-ghaz"] }, // /bts/do-ghaz
    { project: ["kadam"] }, // /bts/kadam
    { project: ["salaam"] }, // /bts/salaam
    { project: ["dhoop"] }, // /bts/dhoop
  ]
}

export default function BTSPage({ params }: { params: { project?: string[] } }) {
  return <BTSPageClient params={params} />
}
