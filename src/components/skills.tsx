import {
  motion,
  useAnimation
} from "framer-motion";
import {
  useEffect,
  useRef
} from "react";

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  },
    [controls]);

  const skills = {
    frontend: [{
      name: "HTML5", level: 95
    },
      {
        name: "CSS3/Tailwind", level: 90
      },
      {
        name: "JavaScript", level: 92
      },
      {
        name: "TypeScript", level: 85
      },
      {
        name: "React", level: 90
      },
      {
        name: "Next.js", level: 80
      },
      {
        name: "Vue.js", level: 75
      },
      {
        name: "Svelte", level: 70
      },
      {
        name: "Redux", level: 85
      },
      {
        name: "Framer Motion", level: 80
      },
      {
        name: "GSAP", level: 75
      },
      {
        name: "Responsive Design", level: 90
      },
    ],
    backend: [{
      name: "Node.js", level: 88
    },
      {
        name: "Express", level: 85
      },
      {
        name: "Python", level: 80
      },
      {
        name: "Django", level: 75
      },
      {
        name: "Ruby on Rails", level: 70
      },
      {
        name: "PHP", level: 75
      },
      {
        name: "Laravel", level: 70
      },
      {
        name: "MySQL", level: 85
      },
      {
        name: "PostgreSQL", level: 80
      },
      {
        name: "MongoDB", level: 78
      },
      {
        name: "Firebase", level: 82
      },
      {
        name: "GraphQL", level: 75
      },
      {
        name: "REST APIs", level: 90
      },
      {
        name: "Docker", level: 70
      },
      {
        name: "AWS", level: 65
      },
    ],
  };

  const CircularProgress = ({
    percentage,
    skill
  }: {
    percentage: any,
    skill: any
  }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    return (
      <div className="relative w-28 h-28 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            />
          <motion.circle
            style={ { color: "hsl(194.1,100%,40%)" }}
            className="text-indigo-600"
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            variants={ {
              hidden: { strokeDashoffset: circumference },
              visible: {
                strokeDashoffset: circumference - (percentage / 100) * circumference,
              }
            }}
            initial="hidden"
            animate={controls}
            transition={ { duration: 1.5,
              ease: "easeInOut" }}
            strokeDasharray={circumference}
            />
        </svg>
        <motion.div
          className="absolute flex flex-col items-center justify-center"
          variants={ {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial="hidden"
          animate={controls}
          transition={ { duration: 0.5,
            delay: 1 }}
          >
          <span className="text-xl font-bold text-foreground">
            {percentage}%
          </span>
          <span className="text-xs text-muted-foreground flex-wrap text-center mt-1">
            {skill}
          </span>
        </motion.div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className=""
      >
      <div className="">
        <motion.div
          initial={ { opacity: 0,
            y: 20 }}
          animate={ { opacity: 1,
            y: 0 }}
          transition={ { duration: 0.5 }}
          className="mb-12"
          >
          <h2 className="text-2xl font-semibold text-foreground text-left">
            My Technical Skills
          </h2>
          <p className="mt-4 text-left max-w-2xl  text-muted-foreground">
            I've honed a diverse set of skills across the full stack development
            spectrum. From crafting pixel-perfect UIs to building robust backend
            systems, I combine technical expertise with creative problem-solving
            to deliver exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={ { opacity: 0,
              x: -20 }}
            animate={ { opacity: 1,
              x: 0 }}
            transition={ { duration: 0.5,
              delay: 0.2 }}
            className="bg-accent border border-border p-6 rounded-xl shadow-sm"
            >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Frontend Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={ { opacity: 0, scale: 0.8 }}
                  variants={ {
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  animate={controls}
                  transition={ { duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col items-center"
                  >
                  <CircularProgress
                    percentage={skill.level}
                    skill={skill.name}
                    />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={ { opacity: 0,
              x: 20 }}
            animate={ { opacity: 1,
              x: 0 }}
            transition={ { duration: 0.5,
              delay: 0.2 }}
            className="bg-accent border border-border p-6 rounded-xl shadow-sm"
            >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Backend Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  variants={ {
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  animate={controls}
                  transition={ { duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col items-center"
                  >
                  <CircularProgress
                    percentage={skill.level}
                    skill={skill.name}
                    />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;