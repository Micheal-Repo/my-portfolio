import {
  motion
} from "framer-motion";
import {
  Star
} from "lucide-react";
import {
  AnimatedSection
} from "./AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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


export default function Testimonials () {
  return (
    <AnimatedSection className="py-20 w-full" id="testimonials">
      <div className="section-container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="text-foreground/80 mb-10 max-w-2xl">
          Don't just take my word for it - here's what clients and colleagues have to say about working with me.
        </p>

        <Carousel
          opts={ {
            align: "start",
            loop: true,
          }}
          className="w-full"
          >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="h-full p-6 glass-card"
                  initial={ { opacity: 0, y: 20 }}
                  whileInView={ { opacity: 1, y: 0 }}
                  viewport={ { once: true }}
                  transition={ { duration: 0.5 }}
                  >
                  {/* Rating */}
                  <div className="flex mb-4">
                    {Array(5).fill(0).map((_, index) => (
                      <Star
                        key={index}
                        className={`w-4 h-4 ${
                        index < testimonial.rating ? "text-yellow-400 fill-yellow-400": "text-gray-300"
                        }`}
                        />
                    ))}
                  </div>

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
              </motion.div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
      </Carousel>
    </div>
  </AnimatedSection>
);
};








// import {
// useState,
// useEffect
// } from "react";
// import {
// motion,
// AnimatePresence
// } from "framer-motion";
// import {
// ChevronLeft,
// ChevronRight,
// Quote
// } from "lucide-react";

// interface Testimonial {
// id: number;
// name: string;
// role: string;
// company: string;
// quote: string;
// image: string;
// }

// const testimonials: Testimonial[] = [{
// id: 1,
// name: "Alex Johnson",
// role: "Product Manager",
// company: "TechCorp",
// quote: "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations in terms of quality and attention to detail.",
// image: "/placeholder.svg",
// },
// {
// id: 2,
// name: "Sarah Williams",
// role: "CEO",
// company: "Design Studio",
// quote: "The website they built for us has significantly improved our conversion rates and user engagement. Their technical skills and design sense are top-notch.",
// image: "/placeholder.svg",
// },
// {
// id: 3,
// name: "Michael Chen",
// role: "Marketing Director",
// company: "Growth Labs",
// quote: "Responsive, professional, and incredibly skilled. They took our vague idea and turned it into a beautiful, functional website that perfectly represents our brand.",
// image: "/placeholder.svg",
// },
// ];

// export default function Testimonials() {
// const [currentIndex,
// setCurrentIndex] = useState(0);
// const [direction,
// setDirection] = useState(0);
// const [isAutoPlaying,
// setIsAutoPlaying] = useState(true);

// const nextTestimonial = () => {
// setDirection(1);
// setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
// };

// const prevTestimonial = () => {
// setDirection(-1);
// setCurrentIndex((prevIndex) => (
// prevIndex - 1 < 0 ? testimonials.length - 1: prevIndex - 1
// ));
// };

// // Auto-play functionality
// useEffect(() => {
// if (!isAutoPlaying) return;

// const interval = setInterval(nextTestimonial, 5000);
// return () => clearInterval(interval);
// },
// [isAutoPlaying]);

// // Pause auto-play when user interacts
// const handleInteraction = () => {
// setIsAutoPlaying(false);

// // Resume after 10 seconds of inactivity
// const timeout = setTimeout(() => setIsAutoPlaying(true),
// 10000);
// return () => clearTimeout(timeout);
// };

// const variants = {
// enter: (direction: number) => ({
// x: direction > 0 ? 300: -300,
// opacity: 0,
// }),
// center: {
// x: 0,
// opacity: 1,
// },
// exit: (direction: number) => ({
// x: direction > 0 ? -300: 300,
// opacity: 0,
// }),
// };

// return (
// <section id="testimonials" className="py-20 w-full">
// <div className="section-container">
// <motion.div
// className="text-center mb-16"
// initial={ { opacity: 0,
// y: 20 }}
// whileInView={ { opacity: 1,
// y: 0 }}
// transition={ { duration: 0.8 }}
// viewport={ { once: true }}
// >
// <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
// <div className="w-20 h-1 bg-primary mx-auto mb-6" />
// <p className="max-w-2xl mx-auto text-muted-foreground">
// Here's what people are saying about my work and collaboration.
// </p>
// </motion.div>

// <div className="max-w-4xl mx-auto">
// <div
// className="relative h-[400px] md:h-[300px]"
// onClick={handleInteraction}
// onMouseEnter={handleInteraction}
// >
// <AnimatePresence initial={false} custom={direction} mode="wait">
// <motion.div
// key={testimonials[currentIndex].id}
// custom={direction}
// variants={variants}
// initial="enter"
// animate="center"
// exit="exit"
// transition={ {
// type: "spring",
// stiffness: 300,
// damping: 30,
// }}
// className="absolute w-full h-full"
// >
// <div className="h-full p-8 rounded-2xl bg-accent flex flex-col">
// <Quote className="h-10 w-10 text-primary opacity-40 mb-4" />

// <div className="flex-grow overflow-y-auto">
// <p className="text-lg italic mb-6">
// "{testimonials[currentIndex].quote}"
// </p>
// </div>

// <div className="mt-auto flex items-center">
// <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
// <img
// src={testimonials[currentIndex].image}
// alt={testimonials[currentIndex].name}
// className="w-full h-full object-cover"
// />
// </div>
// <div>
// <h4 className="font-medium">{testimonials[currentIndex].name}</h4>
// <p className="text-sm text-muted-foreground">
// {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
// </p>
// </div>
// </div>
// </div>
// </motion.div>
// </AnimatePresence>
// </div>

// <div className="flex justify-center mt-8 gap-2">
// {testimonials.map((_, index) => (
// <button
// key={index}
// onClick={() => {
// setDirection(index > currentIndex ? 1: -1);
// setCurrentIndex(index);
// handleInteraction();
// }}
// className={`w-3 h-3 rounded-full transition-colors ${
// index === currentIndex ? "bg-primary": "bg-muted"
// }`}
// aria-label={`Go to testimonial ${index + 1}`}
// />
// ))}
// </div>

// <div className="flex justify-center mt-6 gap-4">
// <motion.button
// onClick={() => {
// prevTestimonial();
// handleInteraction();
// }}
// className="p-2 border border-border rounded-full hover:bg-accent transition-colors"
// whileHover={ { scale: 1.1 }}
// whileTap={ { scale: 0.9 }}
// aria-label="Previous testimonial"
// >
// <ChevronLeft className="h-5 w-5" />
// </motion.button>
// <motion.button
// onClick={() => {
// nextTestimonial();
// handleInteraction();
// }}
// className="p-2 border border-border rounded-full hover:bg-accent transition-colors"
// whileHover={ { scale: 1.1 }}
// whileTap={ { scale: 0.9 }}
// aria-label="Next testimonial"
// >
// <ChevronRight className="h-5 w-5" />
// </motion.button>
// </div>
// </div>
// </div>
// </section>
// );
// }