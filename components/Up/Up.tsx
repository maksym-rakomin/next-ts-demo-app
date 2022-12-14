import styles from './Up.module.css';
import ArrowUpIcon from './ArrowUp.svg';
import {useScrollY} from "../../hooks/useScrollY";
import {useAnimation, motion} from "framer-motion";
import {useEffect} from "react";

export const Up = (): JSX.Element => {
    const controls = useAnimation()
    const y = useScrollY()

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight })
    }, [y, controls])

    const scroolToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <motion.button
            className={styles.up}
            onClick={scroolToTop}
            animate={controls}
            initial={{opacity: 0}}
        >
            <ArrowUpIcon />
        </motion.button>
    )
}
