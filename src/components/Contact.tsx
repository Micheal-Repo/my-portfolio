import {
  useState
} from "react";
import {
  motion
} from "framer-motion";
import {
  Mail,
  MessageSquare,
  Phone,
  Send
} from "lucide-react";
import {
  Button
} from "@/components/Button"

export default function Contact() {
  const [formStatus,
    setFormStatus] = useState < {
    message: string;
    type: "success" | "error" | null;
  } > ({
      message: "",
      type: null,
    });

  const [formData,
    setFormData] = useState( {
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  const handleChange = (
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent < HTMLFormElement >) => {
    e.preventDefault();
    // For demo purposes, let's just simulate a submission
    console.log("Form data:", formData);

    setTimeout(() => {
      setFormStatus({
        message: "Message sent successfully!",
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  const inputClasses = "w-full px-4 py-3 bg-accent border border-border focus:border-primary rounded-lg focus:outline-none transition-colors";

  const contactInfo = [{
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "contact@yourdomain.com",
    link: "mailto:contact@yourdomain.com",
  },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Chat",
      value: "Open live chat",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-accent/30 relative overflow-hidden w-full">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={ { opacity: 0, y: 20 }}
          whileInView={ { opacity: 1, y: 0 }}
          transition={ { duration: 0.8 }}
          viewport={ { once: true }}
          >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out
            through the form below or directly via email or phone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={ { opacity: 0, x: -50 }}
            whileInView={ { opacity: 1, x: 0 }}
            transition={ { duration: 0.8 }}
            viewport={ { once: true }}
            >
            <h3 className="text-2xl font-medium mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={ { scale: 1.01 }}
                    transition={ { type: "spring", stiffness: 400, damping: 10 }}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={ { scale: 1.01 }}
                    transition={ { type: "spring", stiffness: 400, damping: 10 }}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <motion.input
                  whileFocus={ { scale: 1.01 }}
                  transition={ { type: "spring", stiffness: 400, damping: 10 }}
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <motion.textarea
                  whileFocus={ { scale: 1.01 }}
                  transition={ { type: "spring", stiffness: 400, damping: 10 }}
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  />
              </div>

              <Button
                type="submit"
                Icon={send}
                className="w-full"
                >
                Send Message
              </Button>

              {formStatus.message && (
                <motion.div
                  initial={ { opacity: 0, y: 10 }}
                  animate={ { opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-lg ${
                  formStatus.type === "success"
                  ? "bg-green-500/10 text-green-500": "bg-red-500/10 text-red-500"
                  }`}
                  >
                  {formStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={ { opacity: 0, x: 50 }}
            whileInView={ { opacity: 1, x: 0 }}
            transition={ { duration: 0.8 }}
            viewport={ { once: true }}
            className="flex flex-col h-full"
            >
            <h3 className="text-2xl font-medium mb-6">Contact Information</h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent hover:bg-accent/70 transition-colors"
                  whileHover={ { x: 5 }}
                  initial={ { opacity: 0, y: 20 }}
                  whileInView={ { opacity: 1, y: 0 }}
                  transition={ { duration: 0.5, delay: index * 0.1 }}
                  viewport={ { once: true }}
                  >
                  <div className="p-3 bg-primary/10 text-primary rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.title}
                    </p>
                    <p className="font-medium">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-medium mb-2">Office Hours</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  I'm available for meetings and calls during these hours:
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}