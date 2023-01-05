import {motion} from "framer-motion";

export function ScrollAnimationWrapper({children, className, ...props}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function getScrollAnimation() {
	return ({
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({duration = 2} = {}) =>  ({
      y: 0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  })
}