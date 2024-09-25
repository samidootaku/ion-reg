export const fadeInScroll = (delay, duration) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: delay,
      duration: duration,
      ease: [0.42, 0, 0.58, 1],
    },
  },
});
