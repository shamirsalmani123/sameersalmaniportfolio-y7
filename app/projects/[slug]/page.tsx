import type { Metadata } from "next"
import ProjectDetailPageClient from "./ProjectDetailPageClient"

// Real project data for Sameer Salmani
const projectsData = {
  "kuchh-aur-zamana-kehta-hai": {
    id: 1,
    title: "Kuchh Aur Zamana Kehta Hai",
    slug: "kuchh-aur-zamana-kehta-hai",
    category: "Short Film",
    year: "2023",
    location: "Delhi, India",
    duration: "30 minutes",
    role: "Writer | Director | Editor",
    client: "Independent Production",
    description:
      "A heartwarming 30-minute short film about Chaaya, a woman in her 50s, who transitions from a keypad phone to a smartphone. Her love for old Bollywood films finds new life in the digital world, opening up unexpected experiences and connections.",
    challenge:
      "The main challenge was authentically portraying the digital divide and generational gap while maintaining emotional resonance. We needed to show the protagonist's journey without making it feel condescending or overly sentimental.",
    solution:
      "We focused on intimate character moments and used visual storytelling to show Chaaya's emotional journey. The editing rhythm mirrors her learning process, starting slow and gradually becoming more fluid as she adapts to technology.",
    results:
      "The film resonated strongly with audiences across age groups and sparked conversations about technology adoption and intergenerational relationships. It was well-received at local film screenings.",
    tags: ["Drama", "Technology", "Generational", "Bollywood", "Character Study"],
    equipment: ["Canon EOS R6", "50mm f/1.8", "Rode VideoMic Pro", "LED Panel Lights"],
    software: ["DaVinci Resolve", "Adobe Audition"],
    images: [
      "/images/projects/kuchh-aur/kuchh-aur-hero.jpg",
      "/images/projects/kuchh-aur/kuchh-aur-scene-01.jpg",
      "/images/projects/kuchh-aur/kuchh-aur-scene-02.jpg",
      "/images/projects/kuchh-aur/kuchh-aur-emotional.jpg",
    ],
    videoUrl: "https://drive.google.com/file/d/1UtNCsIlXh0wkMt2LzOVwoNyyJy30Ai08/view?usp=sharing",
    awards: [],
    nextProject: "do-ghaz-kranti",
    prevProject: "dhoop-ka-tukda",
  },
  "do-ghaz-kranti": {
    id: 2,
    title: "Do Ghaz Kranti",
    slug: "do-ghaz-kranti",
    category: "Documentary",
    year: "2021",
    location: "Greater Noida, India",
    duration: "45 minutes",
    role: "Research | Camera | Direction | Editing",
    client: "Documentary Project",
    description:
      "This documentary explores the struggles of farmers in Greater Noida dealing with land acquisition issues. The film highlights their involvement in the Farmers' Movement of 2020–21 and documents their lived experiences and resistance.",
    challenge:
      "Gaining trust of the farming community while documenting sensitive political and social issues. The challenge was to present their stories authentically without bias while maintaining journalistic integrity.",
    solution:
      "Spent extensive time with the farming families to build trust and understand their perspectives. Used observational documentary techniques and let the farmers tell their own stories in their own words.",
    results:
      "The documentary provided an important voice to the farmers' struggles and was shared widely on social media platforms. It contributed to the broader conversation about farmers' rights and land acquisition policies.",
    tags: ["Documentary", "Social Issues", "Farmers", "Politics", "Activism"],
    equipment: ["Sony A7III", "24-70mm f/2.8", "Wireless Mic System", "Tripod"],
    software: ["Premiere Pro", "DaVinci Resolve"],
    images: [
      "/images/projects/do-ghaz/do-ghaz-hero.jpg",
      "/images/projects/do-ghaz/do-ghaz-farmers.jpg",
      "/images/projects/do-ghaz/do-ghaz-interview.jpg",
      "/images/projects/do-ghaz/do-ghaz-protest.jpg",
    ],
    videoUrl: "https://youtu.be/eOtIs0o7XQ8?si=9b-OLaHhdEuNlqcS",
    awards: [],
    nextProject: "kadam-prateek-kuhad",
    prevProject: "kuchh-aur-zamana-kehta-hai",
  },
  "kadam-prateek-kuhad": {
    id: 3,
    title: "Kadam: Prateek Kuhad",
    slug: "kadam-prateek-kuhad",
    category: "Music Video",
    year: "2023",
    location: "Delhi, India",
    duration: "4 minutes",
    role: "Director | Cinematographer | Editor",
    client: "Semester Project",
    description:
      "A music video conceptualized, shot, and edited on a song by Prateek Kuhad as part of a semester project. The video explores themes of journey and self-discovery through visual metaphors and cinematic storytelling.",
    challenge:
      "Creating a compelling visual narrative that complements Prateek Kuhad's musical style while working within academic project constraints and limited budget.",
    solution:
      "Focused on strong visual composition and color grading to create mood. Used natural locations and practical lighting to achieve a cinematic look while keeping production costs minimal.",
    results:
      "The music video demonstrated strong understanding of visual storytelling and music video aesthetics. It showcased ability to work within constraints while maintaining creative vision.",
    tags: ["Music Video", "Indie Music", "Visual Storytelling", "Cinematography"],
    equipment: ["Canon EOS R6", "35mm f/1.4", "Gimbal Stabilizer", "RGB LED Lights"],
    software: ["DaVinci Resolve", "After Effects"],
    images: [
      "/images/projects/kadam/kadam-hero.jpg",
      "/images/projects/kadam/kadam-scene-01.jpg",
      "/images/projects/kadam/kadam-artistic.jpg",
      "/images/projects/kadam/kadam-mood.jpg",
    ],
    videoUrl: "https://youtu.be/c52d-qg0K8k?si=eSBxPl4THqfPlVyC",
    awards: [],
    nextProject: "salaam-bombay-recreation",
    prevProject: "do-ghaz-kranti",
  },
  "salaam-bombay-recreation": {
    id: 4,
    title: "Salaam Bombay Recreation",
    slug: "salaam-bombay-recreation",
    category: "Homage Project",
    year: "2023",
    location: "Delhi, India",
    duration: "8 minutes",
    role: "Set Designer | Director | Cinematographer | Editor",
    client: "Film Studies Project",
    description:
      "A homage to Mira Nair's 'Salaam Bombay' through a recreated scene. This project involved detailed analysis of the original film's cinematography, production design, and direction to create an authentic recreation.",
    challenge:
      "Recreating the authentic look and feel of Mira Nair's classic while working with limited resources. The challenge was to honor the original while bringing our own interpretation to the material.",
    solution:
      "Conducted thorough research on the original film's production techniques. Focused on authentic set design and lighting to match the original's aesthetic while adapting to available locations and resources.",
    results:
      "The project demonstrated deep understanding of film analysis and practical filmmaking skills. It showcased ability to work across multiple departments from production design to post-production.",
    tags: ["Homage", "Classic Cinema", "Recreation", "Film Studies", "Mira Nair"],
    equipment: ["Sony A7III", "Vintage Lenses", "Practical Lighting", "Production Design"],
    software: ["Premiere Pro", "DaVinci Resolve"],
    images: [
      "/images/projects/salaam/salaam-hero.jpg",
      "/images/projects/salaam/salaam-recreation.jpg",
      "/images/projects/salaam/salaam-set.jpg",
      "/images/projects/salaam/salaam-comparison.jpg",
    ],
    videoUrl: "https://drive.google.com/file/d/1Kyhut1yUyBISDQ4oemk-sFwskovTA5vz/view?usp=sharing",
    awards: [],
    nextProject: "dhoop-ka-tukda",
    prevProject: "kadam-prateek-kuhad",
  },
  "dhoop-ka-tukda": {
    id: 5,
    title: "Dhoop Ka Tukda",
    slug: "dhoop-ka-tukda",
    category: "Audio-Visual",
    year: "2023",
    location: "Delhi, India",
    duration: "10 minutes",
    role: "Writer | Director | Cinematographer | Editor",
    client: "Photography Final Production",
    description:
      "A 10-minute audio-visual project involving an original romantic narrative, shot and edited as part of a photography final production. The project explores themes of love, memory, and connection through visual poetry.",
    challenge:
      "Creating a cohesive narrative using primarily visual storytelling techniques while maintaining the poetic quality of the original concept. Balancing photography aesthetics with cinematic movement.",
    solution:
      "Developed a visual language that combined still photography principles with cinematic techniques. Used natural lighting and intimate framing to create an emotional connection with the audience.",
    results:
      "The project successfully demonstrated the intersection between photography and cinematography. It showcased ability to create emotional narratives through visual storytelling.",
    tags: ["Romance", "Visual Poetry", "Photography", "Narrative", "Intimate"],
    equipment: ["Canon EOS R6", "85mm f/1.8", "Natural Lighting", "Reflectors"],
    software: ["DaVinci Resolve", "Lightroom"],
    images: [
      "/images/projects/dhoop/dhoop-hero.jpg",
      "/images/projects/dhoop/dhoop-romantic.jpg",
      "/images/projects/dhoop/dhoop-artistic.jpg",
      "/images/projects/dhoop/dhoop-narrative.jpg",
    ],
    videoUrl: "https://youtu.be/T88YDPwbBKY?si=aJLSZmRF6FTajjky",
    awards: [],
    nextProject: "kuchh-aur-zamana-kehta-hai",
    prevProject: "salaam-bombay-recreation",
  },
}

// REQUIRED: This function is required for static export with dynamic routes
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} - Sameer Salmani`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <ProjectDetailPageClient params={params} />
}
