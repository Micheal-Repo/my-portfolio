import {
  useState
} from "react";
import {
  motion,
  AnimatePresence
} from "framer-motion";
import {
  cn
} from "@/lib/utils";
import {
  Github,
  ExternalLink
} from "lucide-react";

type ProjectCategory = "frontend" | "fullstack" | "all";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "frontend" | "fullstack";
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
}

const projects: Project[] = [{
  id: 1,
  title: "Modern Dashboard",
  description: "A responsive admin dashboard with dark mode and interactive charts.",
  image: "/placeholder.svg",
  category: "frontend",
  tags: ["React",
    "Tailwind CSS",
    "Chart.js"],
  links: {
    github: "#",
    live: "#",
  },
},
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-featured online store with product listings, cart, and checkout.",
    image: "/placeholder.svg",
    category: "frontend",
    tags: ["Next.js",
      "TypeScript",
      "Stripe"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    id: 3,
    title: "API Service",
    description: "RESTful API with authentication, rate limiting, and comprehensive documentation.",
    image: "/placeholder.svg",
    category: "fullstack",
    tags: ["Node.js",
      "Express",
      "MongoDB"],
    links: {
      github: "#",
    },
  },
  {
    id: 4,
    title: "Database Manager",
    description: "fullstack service for efficient data processing and storage optimization.",
    image: "/placeholder.svg",
    category: "fullstack",
    tags: ["Python",
      "PostgreSQL",
      "Docker"],
    links: {
      github: "#",
    },
  },
];

export default function Projects() {
  const [activeCategory,
    setActiveCategory] = useState < ProjectCategory > ("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-accent/30 w-full">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={ { opacity: 0, y: 20 }}
          whileInView={ { opacity: 1, y: 0 }}
          transition={ { duration: 0.8 }}
          viewport={ { once: true }}
          >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore my recent work across frontend and backend development.
            Each project represents unique challenges and innovative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-accent rounded-lg">
            {[{
              id: "all", label: "All Projects"
            },
              {
                id: "frontend", label: "Frontend"
              },
              {
                id: "fullstack", label: "Fullstack"
              },
            ].map((category) => (
                <motion.button
                  key={category.id}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium relative",
                    activeCategory === category.id
                    ? "text-primary-foreground": "hover:text-foreground"
                  )}
                  onClick={() => setActiveCategory(category.id as ProjectCategory)}
                  whileHover={ { scale: 1.05 }}
                  whileTap={ { scale: 0.95 }}
                  >
                  {activeCategory === category.id && (
                    <motion.div
                      className="absolute inset-0 g3 rounded-md z-0"
                      layoutId="activeCategory"
                      transition={ { type: "spring", duration: 0.6 }}
                      />
                  )}
                  <span className={cn("relative z-10", activeCategory === category.id ? "text-white": "")}>{category.label}</span>
                </motion.button>
              ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={ { opacity: 0, y: 20 }}
                animate={ { opacity: 1, y: 0 }}
                exit={ { opacity: 0, scale: 0.9 }}
                transition={ { duration: 0.5 }}
                layout
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border"
                >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={ { scale: 1.05 }}
                    transition={ { duration: 0.5 }}
                    />
                  <div className="absolute top-2 right-2 bg-accent/80 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium capitalize">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="px-2 py-1 bg-accent rounded-md text-xs font-medium"
                        >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                        whileHover={ { scale: 1.1 }}
                        whileTap={ { scale: 0.9 }}
                        >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </motion.a>
                    )}
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                        whileHover={ { scale: 1.1 }}
                        whileTap={ { scale: 0.9 }}
                        >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Preview</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}