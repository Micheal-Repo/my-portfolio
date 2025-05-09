import {
  useState
} from "react";
import {
  motion
} from "framer-motion";
import emailjs from "emailjs-com";
import {
  useToast
} from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Input
} from "@/components/ui/input";
import {
  Textarea
} from "@/components/ui/textarea";
import {
  Button
} from "@/components/ui/button";
import {
  Loader2
} from "lucide-react";
import {
  z
} from "zod";
import {
  useForm
} from "react-hook-form";
import {
  zodResolver
} from "@hookform/resolvers/zod";

// Define form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters"
  }),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters"
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters"
  }),
});

type ContactFormValues = z.infer < typeof contactFormSchema >;

// EmailJS configuration
const SERVICE_ID = "default_service"; // You'll need to create this in EmailJS
const TEMPLATE_ID = "template_contact"; // You'll need to create this in EmailJS
const PUBLIC_KEY = "your_emailjs_public_key"; // You'll get this from EmailJS

export default function ContactForm() {
  const [isSubmitting,
    setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();

  // Initialize form
  const form = useForm < ContactFormValues > ({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "chinemeremaloysius@gmail.com",
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);

      // Show success toast
      toast( {
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);

      // Show error toast
      toast( {
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-accent border border-border focus:border-primary rounded-lg focus:outline-none transition-colors";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block mb-2 text-sm font-medium">
                  Your Name
                </FormLabel>
                <FormControl>
                  <motion.div
                    whileFocus={ { scale: 1.01 }}
                    transition={ { type: "spring", stiffness: 400, damping: 10 }}
                    >
                    <Input
                      placeholder="John Doe"
                      className={inputClasses}
                      {...field}
                      />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block mb-2 text-sm font-medium">
                  Email Address
                </FormLabel>
                <FormControl>
                  <motion.div
                    whileFocus={ { scale: 1.01 }}
                    transition={ { type: "spring", stiffness: 400, damping: 10 }}
                    >
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className={inputClasses}
                      {...field}
                      />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block mb-2 text-sm font-medium">
                Subject
              </FormLabel>
              <FormControl>
                <motion.div
                  whileFocus={ { scale: 1.01 }}
                  transition={ { type: "spring", stiffness: 400, damping: 10 }}
                  >
                  <Input
                    placeholder="Project Inquiry"
                    className={inputClasses}
                    {...field}
                    />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block mb-2 text-sm font-medium">
                Message
              </FormLabel>
              <FormControl>
                <motion.div
                  whileFocus={ { scale: 1.01 }}
                  transition={ { type: "spring", stiffness: 400, damping: 10 }}
                  >
                  <Textarea
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    className={inputClasses}
                    {...field}
                    />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

        <motion.div
          whileHover={ { scale: 1.02 }}
          whileTap={ { scale: 0.98 }}
          >
          <Button
            type="submit"
            className="w-full py-3 g3 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
            disabled={isSubmitting}
            >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ): (
              "Send Message"
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  );
}