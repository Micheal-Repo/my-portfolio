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
import {
  Button
} from "@/components/ui/button";
import {
  Badge
} from "@/components/ui/badge";

type ProjectCategory = "frontend" | "fullstack" | "all";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  category: "frontend" | "fullstack";
}



const projects: Project[] = [{
  id: 1,
  title: "Modern E-commerce Platform",
  description: "A full-featured e-commerce site with cart functionality, product filtering, and Stripe payment integration.",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop",
  tags: ["React",
    "Next.js",
    "TailwindCSS",
    "Stripe",
    "MongoDB"],
  demoUrl: "#",
  repoUrl: "#",
  category: "fullstack"
},
  {
    id: 2,
    title: "3D Portfolio Website",
    description: "An interactive portfolio website featuring 3D graphics with Three.js and smooth animations.",
    image: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?q=80&w=1480&auto=format&fit=crop",
    tags: ["React",
      "Three.js",
      "Framer Motion",
      "TailwindCSS"],
    demoUrl: "#",
    repoUrl: "#",
    category: "frontend"
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A modern chat application with real-time messaging, user authentication, and message history.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop",
    tags: ["React",
      "Firebase",
      "Styled Components",
      "WebSockets"],
    demoUrl: "#",
    repoUrl: "#",
    category: "fullstack"
  },
  {
    id: 4,
    title: "REST API Service",
    description: "A scalable REST API with authentication, rate limiting, and comprehensive documentation.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1374&auto=format&fit=crop",
    tags: ["Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Swagger"],
    demoUrl: "#",
    repoUrl: "#",
    category: "fullstack"
  },
  {
    id: 5,
    title: "Task Management Dashboard",
    description: "A productivity dashboard with drag-and-drop task management, charts, and progress tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    tags: ["React",
      "Redux",
      "Chart.js",
      "TailwindCSS"],
    demoUrl: "#",
    repoUrl: "#",
    category: "frontend"
  },
  {
    id: 6,
    title: "Microservice Infrastructure",
    description: "A set of microservices for handling authentication, payments, and user management with Docker and Kubernetes.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1470&auto=format&fit=crop",
    tags: ["Node.js",
      "Docker",
      "Kubernetes",
      "RabbitMQ",
      "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "#",
    category: "fullstack"
  }];

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
            I design, build, and optimize end-to-end web solutions—blending intuitive front-end experiences with high-performance back-end architecture. Each project reflects my ability to solve complex challenges through clean code, scalable systems, and innovative problem-solving.
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={ { opacity: 0, y: 20 }}
            animate={ { opacity: 1, y: 0 }}
            exit={ { opacity: 0, y: -20 }}
            transition={ { duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="rounded-2xl bg-card border-border border overflow-hidden group"
                initial={ { opacity: 0, y: 20 }}
                whileInView={ { opacity: 1, y: 0 }}
                viewport={ { once: true }}
                transition={ { duration: 0.5, delay: index * 0.1 }}
                >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    asChild
                    className="bg-primary text-white"
                    >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    className="bg-primary text-white"
                    size="icon"
                    asChild
                    >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>

                {/* Project tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} className="bg-accent text-foreground border border-border">{tag}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>

    </div>
  </section>
);
}