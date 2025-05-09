import {
  motion
} from "framer-motion";
import {
  AnimatedSection
} from "./AnimatedSection";
import Marquee from "@/components/ui/marque";
import {
  cn
} from "@/lib/utils";


interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [{
  id: 1,
  name: "Emma Thompson",
  role: "Product Manager",
  company: "Tech Innovations",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop",
  content: "Working with this developer was an absolute pleasure. They delivered our project ahead of schedule with exceptional quality and attention to detail. The 3D elements they added to our site have significantly improved user engagement.",
  rating: 5
},
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupLaunch",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
    content: "The developer transformed our outdated website into a modern, responsive platform that perfectly represents our brand. Their technical expertise and creative vision exceeded our expectations.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Creative Solutions",
    avatar: "https://images.unsplash.com/photo-1554727242-741c14fa561c?q=80&w=1374&auto=format&fit=crop",
    content: "We hired this developer to create an interactive product showcase, and the results were outstanding. The animations and 3D elements they implemented have helped us stand out from competitors and showcase our products in a unique way.",
    rating: 4
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Technical Lead",
    company: "EnterpriseWeb",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    content: "As a fellow developer, I was impressed by the clean, maintainable code and the thoughtful architecture of the project. Working together was seamless, and they brought valuable insights that elevated the final product.",
    rating: 5
  }];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);


export default function Testimonials () {
  return (
    <AnimatedSection className="py-20 w-full" id="testimonials">

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={ { opacity: 0, y: 20 }}
          whileInView={ { opacity: 1, y: 0 }}
          transition={ { duration: 0.8 }}
          viewport={ { once: true }}
          >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Don't just take my word for it - here's what clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <motion.div
          initial={ { opacity: 0, y: 20 }}
          whileInView={ { opacity: 1, y: 0 }}
          transition={ { duration: 0.8 }}
          viewport={ { once: true }}
          className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]" applyMask={false}>
            {firstRow.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </Marquee>
          <Marquee reverse applyMask={false} pauseOnHover className="[--duration:20s]">
            {secondRow.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </motion.div>

      </div>
    </AnimatedSection>
  );
};



  function TestimonialCard({
    testimonial
  }: {
    testimonial: any
  }) {
    return (
      <div
        className={cn(
          "relative h-full w-64 md:w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
        >

        {/* Content */}
        <blockquote className="text-foreground/80 mb-6 text-sm">
          "{testimonial.content}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
            <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            />
        </div>
        <div>
          <p className="font-medium">
            {testimonial.name}
          </p>
          <p className="text-xs text-foreground/60">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}