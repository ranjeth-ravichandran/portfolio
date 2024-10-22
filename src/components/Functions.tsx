// Animation variants for each container, without staggering
export const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (customDelay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: customDelay,  // Use custom delay for each container
        },
    }),
};

// Bubble-like animation for modal
export const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 400, damping: 20 } // Adds springy, snappy effect
    },
    exit: {
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 } // Quick exit
    },
};