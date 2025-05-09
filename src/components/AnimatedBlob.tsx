import {
  motion
} from "framer-motion";
import {
  cn
} from "@/lib/utils";

interface AnimatedBlobProps {
  imageUrl: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function AnimatedBlob({
  imageUrl,
  className,
  size = "md"
}: AnimatedBlobProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-56 h-56 sm:w-72 sm:h-72",
    lg: "w-80 h-80 sm:w-96 sm:h-96"
  };

  return (
    <div className="relative">
      <motion.div
        className={cn(
          "relative animate-blob bg-gradient-to-br from-purple-500 via-blue-400 to-indigo-600 rounded-blob flex items-center justify-center p-1",
          sizeClasses[size],
          className
        )}
        animate={ {
          borderRadius: [
            "60% 40% 30% 70%/60% 30% 70% 40%",
            "30% 60% 70% 40%/50% 60% 30% 60%",
            "60% 40% 30% 70%/60% 30% 70% 40%"
          ]
        }}
        transition={ {
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        >
        <motion.div
          className="absolute inset-1 rounded-blob bg-background overflow-hidden"
          animate={ {
            borderRadius: [
              "60% 40% 30% 70%/60% 30% 70% 40%",
              "30% 60% 70% 40%/50% 60% 30% 60%",
              "60% 40% 30% 70%/60% 30% 70% 40%"
            ]
          }}
          transition={ {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.1
          }}
          >
          <img
          src={imageUrl}
          alt="Profile"
          className="w-full h-full object-cover"
          loading="lazy"
          />
      </motion.div>
    </motion.div>
  </div>
);
}