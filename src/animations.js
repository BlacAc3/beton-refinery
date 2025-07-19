export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7, // Made duration uniform for smoother appearance
      ease: "easeOut", // Added ease for smoother animation
      delay: 0.05 * index,
    },
  }),
};

export const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }, // Made duration and ease uniform
};

export const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }, // Made duration and ease uniform
};

export const heroContentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Slightly longer duration for hero for a grander feel
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

export const heroItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
