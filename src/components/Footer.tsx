import {
  motion
} from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter
} from "lucide-react";
import Logo from "@/components/logo"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [{
    icon: <Github className="h-5 w-5" />,
    href: "#",
    label: "GitHub"
  },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "#",
      label: "Twitter"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "#",
      label: "Instagram"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:contact@example.com",
      label: "Email"
    },
  ];

  const footerLinks = [{
    name: "Home",
    href: "#home"
  },
    {
      name: "About",
      href: "#about"
    },
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Contact",
      href: "#contact"
    },
  ];

  return (
    <footer className="bg-accent/30 pt-16 pb-8 relative w-full">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-border">
          <div className="col-span-1 lg:col-span-2">
            <motion.div
              initial={ { opacity: 0, y: 20 }}
              whileInView={ { opacity: 1, y: 0 }}
              transition={ { duration: 0.5 }}
              viewport={ { once: true }}
              >
              <Logo />
              <p className="text-muted-foreground mb-6 max-w-md">
                Creating exceptional digital experiences with modern web technologies.
                Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="p-2 bg-accent rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={ { scale: 1.1 }}
                    whileTap={ { scale: 0.9 }}
                    initial={ { opacity: 0, y: 20 }}
                    animate={ { opacity: 1, y: 0 }}
                    transition={ { delay: index * 0.1 }}
                    >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={ { opacity: 0, y: 20 }}
            whileInView={ { opacity: 1, y: 0 }}
            transition={ { duration: 0.5, delay: 0.1 }}
            viewport={ { once: true }}
            >
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}