import { IWrapperAnimation } from "./types"
import {AnimatePresence, motion} from 'framer-motion'

const AnimationWrapper:React.FC<IWrapperAnimation> = ({animate,children,clasname,initial,keyValue}) => {
    return (
        <AnimatePresence >
            <motion.div
                key={keyValue}
                initial={initial}
                animate={animate}
                className={clasname}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

AnimationWrapper.defaultProps = {
    animate: {opacity:1},
    initial: {opacity:0},
    transition: {duration:1}
}

export { AnimationWrapper }