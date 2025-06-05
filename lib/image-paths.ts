// Centralized image path management for the portfolio

export const imagePaths = {
  // Photography categories
  photography: {
    portrait: [
      "/images/photography/portrait/urban-portrait-delhi.jpg",
      "/images/photography/portrait/artist-studio.jpg",
      "/images/photography/portrait/environmental-portrait.jpg",
      "/images/photography/portrait/character-study.jpg",
      "/images/photography/portrait/street-portrait.jpg",
    ],
    street: [
      "/images/photography/street/old-delhi-market.jpg",
      "/images/photography/street/metro-commute.jpg",
      "/images/photography/street/city-lights-night.jpg",
      "/images/photography/street/street-vendor.jpg",
      "/images/photography/street/monsoon-streets.jpg",
    ],
    documentary: [
      "/images/photography/documentary/farmers-hands.jpg",
      "/images/photography/documentary/craftsman-work.jpg",
      "/images/photography/documentary/social-issue.jpg",
      "/images/photography/documentary/community-gathering.jpg",
    ],
    landscape: [
      "/images/photography/landscape/himachal-golden-hour.jpg",
      "/images/photography/landscape/monsoon-reflections.jpg",
      "/images/photography/landscape/mountain-serenity.jpg",
      "/images/photography/landscape/delhi-skyline.jpg",
    ],
    event: [
      "/images/photography/event/holi-colors.jpg",
      "/images/photography/event/wedding-moments.jpg",
      "/images/photography/event/festival-celebration.jpg",
      "/images/photography/event/cultural-event.jpg",
    ],
  },

  // Project images
  projects: {
    "kuchh-aur": [
      "/images/projects/kuchh-aur/kuchh-aur-hero.jpg",
      "/images/projects/kuchh-aur/kuchh-aur-scene-01.jpg",
      "/images/projects/kuchh-aur/kuchh-aur-scene-02.jpg",
      "/images/projects/kuchh-aur/kuchh-aur-emotional.jpg",
    ],
    "do-ghaz": [
      "/images/projects/do-ghaz/do-ghaz-hero.jpg",
      "/images/projects/do-ghaz/do-ghaz-farmers.jpg",
      "/images/projects/do-ghaz/do-ghaz-interview.jpg",
      "/images/projects/do-ghaz/do-ghaz-protest.jpg",
    ],
    kadam: [
      "/images/projects/kadam/kadam-hero.jpg",
      "/images/projects/kadam/kadam-scene-01.jpg",
      "/images/projects/kadam/kadam-artistic.jpg",
      "/images/projects/kadam/kadam-mood.jpg",
    ],
    salaam: [
      "/images/projects/salaam/salaam-hero.jpg",
      "/images/projects/salaam/salaam-recreation.jpg",
      "/images/projects/salaam/salaam-set.jpg",
      "/images/projects/salaam/salaam-comparison.jpg",
    ],
    dhoop: [
      "/images/projects/dhoop/dhoop-hero.jpg",
      "/images/projects/dhoop/dhoop-romantic.jpg",
      "/images/projects/dhoop/dhoop-artistic.jpg",
      "/images/projects/dhoop/dhoop-narrative.jpg",
    ],
  },

  // BTS images
  bts: {
    "kuchh-aur": [
      "/images/bts/kuchh-aur/kuchh-aur-bts-director.jpg",
      "/images/bts/kuchh-aur/kuchh-aur-bts-camera.jpg",
      "/images/bts/kuchh-aur/kuchh-aur-bts-cast.jpg",
      "/images/bts/kuchh-aur/kuchh-aur-bts-setup.jpg",
    ],
    "do-ghaz": [
      "/images/bts/do-ghaz/do-ghaz-bts-interview.jpg",
      "/images/bts/do-ghaz/do-ghaz-bts-field.jpg",
      "/images/bts/do-ghaz/do-ghaz-bts-equipment.jpg",
      "/images/bts/do-ghaz/do-ghaz-bts-farmers.jpg",
    ],
    kadam: [
      "/images/bts/kadam/kadam-bts-lighting.jpg",
      "/images/bts/kadam/kadam-bts-creative.jpg",
      "/images/bts/kadam/kadam-bts-production.jpg",
      "/images/bts/kadam/kadam-bts-setup.jpg",
    ],
    salaam: [
      "/images/bts/salaam/salaam-bts-set.jpg",
      "/images/bts/salaam/salaam-bts-research.jpg",
      "/images/bts/salaam/salaam-bts-filming.jpg",
      "/images/bts/salaam/salaam-bts-direction.jpg",
    ],
    dhoop: [
      "/images/bts/dhoop/dhoop-bts-photo.jpg",
      "/images/bts/dhoop/dhoop-bts-creative.jpg",
      "/images/bts/dhoop/dhoop-bts-location.jpg",
      "/images/bts/dhoop/dhoop-bts-equipment.jpg",
    ],
  },

  // Portfolio/About images
  portfolio: {
    main: "/images/portfolio/sameer portrait.jpg",
    studio: "/images/portfolio/sameer-studio.jpg",
    working: "/images/portfolio/sameer-working.jpg",
    headshot: "/images/portfolio/sameer-headshot.jpg",
  },
}

// Helper function to get fallback image
export const getImageWithFallback = (imagePath: string): string => {
  return imagePath || "/placeholder.svg?height=800&width=600"
}

// Helper function to get project images
export const getProjectImages = (projectSlug: string): string[] => {
  const projectKey = projectSlug.replace("-", "") as keyof typeof imagePaths.projects
  return imagePaths.projects[projectKey] || []
}

// Helper function to get BTS images
export const getBTSImages = (projectSlug: string): string[] => {
  const projectKey = projectSlug.replace("-", "") as keyof typeof imagePaths.bts
  return imagePaths.bts[projectKey] || []
}
