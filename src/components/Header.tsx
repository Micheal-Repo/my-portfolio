import {
  useState,
  useEffect
} from "react";
import {
  motion,
} from "framer-motion";
import {
  ThemeToggle
} from "./ThemeToggle";
import {
  ScrollProgress
} from "@/components/scrollProgress"
import {
  cn
} from "@/lib/utils";
import {
  Home,
  User,
  Briefcase,
  MessageSquare,
  Mail
} from "lucide-react";
import {
  useIsMobile
} from "@/hooks/use-mobile";

const navItems = [{
  name: "Home",
  href: "#home",
  icon: Home
},
  {
    name: "About",
    href: "#about",
    icon: User
  },
  {
    name: "Projects",
    href: "#projects",
    icon: Briefcase
  },
  {
    name: "Testimonials",
    href: "#testimonials",
    icon: MessageSquare
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail
  },
];

export default function Header() {
  const [scrolled,
    setScrolled] = useState(false);
  const [activeSection,
    setActiveSection] = useState("home");
  const [showNav,
    setShowNav] = useState(true);
  const [lastScrollY,
    setLastScrollY] = useState(0);
  const isMobile = useIsMobile();



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      // Hide/show nav based on scroll direction for mobile
      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          // Scrolling down & past header height
          setShowNav(false);
        } else {
          // Scrolling up or at top
          setShowNav(true);
        }
      }

      setLastScrollY(currentScrollY);

      // Detect current section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentPos = window.scrollY + 100; // Add offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (currentPos >= top && currentPos <= top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },
    [lastScrollY,
      isMobile]);



  return (
    <>
      <motion.header
        initial={ { y: -100 }}
        animate={ { y: 0 }}
        transition={ { type: "spring",
          stiffness: 50,
          damping: 20 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
          scrolled
          ? "bg-background/80 backdrop-blur-md border-b": "bg-transparent"
        )}
        >
        <ScrollProgress />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <motion.div
            initial={ { opacity: 0,
              x: -20 }}
            animate={ { opacity: 1,
              x: 0 }}
            transition={ { duration: 0.5 }}
            className="text-2xl font-bold"
            >
            <span className="text-gradient">Aloysius</span>
          </motion.div>

          {/* Desktop Navigation*/}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={ { opacity: 0, y: -20 }}
                  animate={ { opacity: 1, y: 0 }}
                  transition={ { duration: 0.3, delay: i * 0.1 }}
                  className={cn(
                    "text-sm font-medium relative group",
                  )}
                  >
                  {item.name}
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-0.5 bg-primary origin-left transform transition-transform duration-300",
                      isActive ? "scale-x-100": "scale-x-0 group-hover:scale-x-100"
                    )}
                    ></span>
                </motion.a>
              );
            })}
            <motion.div
              initial={ { opacity: 0,
                scale: 0.8 }}
              animate={ { opacity: 1,
                scale: 1 }}
              transition={ { duration: 0.3,
                delay: 0.5 }}
              >
              <ThemeToggle />
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            {/* <motion.button
              whileTap={ { scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-50"
              aria-label="Toggle menu"
              >
              {!mobileMenuOpen ? (
                <Menu className="h-6 w-6" />
              ): (
                <X className="h-6 w-6" />
              )}
            </motion.button>*/}
          </div>

          {/* Android Style Mobile Navigation Menu
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={ { opacity: 0, y: -20 }}
                animate={ { opacity: 1, y: 0 }}
                exit={ { opacity: 0, y: -20 }}
                transition={ { duration: 0.3 }}
                className="fixed inset-0 top-0 z-40 bg-background pt-24 px-8"
                >
                <div className="flex flex-col space-y-4 items-center">
                  {navItems.map((item, i) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={ { opacity: 0, y: 20 }}
                        animate={ { opacity: 1, y: 0 }}
                        transition={ { duration: 0.3, delay: i * 0.1 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-center w-full p-4 rounded-lg transition-all duration-300",
                          isActive ? "bg-primary/10 text-primary": "hover:bg-accent"
                        )}
                        >
                        <div className="flex flex-col items-center gap-2">
                          <div className="relative">
                            <item.icon className="h-6 w-6" />
                            {isActive && (
                              <motion.div
                                className="absolute -bottom-2 left-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                                layoutId="activeIndicator"
                                initial={ { opacity: 0 }}
                                animate={ { opacity: 1 }}
                                transition={ { type: "spring", stiffness: 300, damping: 30 }}
                                style={ { x: "-50%" }}
                                />
                            )}
                          </div>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
*/}

        </div>
      </motion.header>


      {/* Fixed Bottom Navigation for Mobile (Android Style) - Only visible on small screens */}

      {isMobile && (
        <motion.div
          initial={ { y: 100 }}
          animate={ { y: showNav ? 0: 100 }}
          transition={ { type: "spring", stiffness: 50, damping: 20 }}
          className="fixed md:hidden bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t z-50"
          >
          <div className="flex justify-around items-center px-2 py-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center relative"
                  whileTap={ { scale: 0.9 }}
                  >
                  <div className="relative">
                    <item.icon className={cn(
                      "h-6 w-6 transition-colors duration-300",
                      isActive ? "text-primary": "text-muted-foreground"
                    )} />
                    {isActive && (
                      <motion.div
                        layoutId="bottomNavIndicator"
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary rounded-full"
                        initial={ { scale: 0 }}
                        animate={ { scale: 1 }}
                        style={ { x: "-50%" }}
                        transition={ { type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                  </div>
                  <span className={cn(
                    "text-xs mt-1 transition-colors duration-300",
                    isActive ? "text-primary font-medium": "text-muted-foreground"
                  )}>
                    {item.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      )}

    </>
  );
}