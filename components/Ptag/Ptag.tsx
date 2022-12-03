import {PtagProps} from "./Ptag.props";
import styles from './Ptag.module.css';
import cn from "classnames";

export const Ptag = ({ size = 'm', children, className, ...props }: PtagProps): JSX.Element => {
    const getPClass = size => {
        switch (size) {
            case 's':
                return styles.small
            case 'm':
                return styles.p
            case 'l':
                return styles.large
            default:
                return styles.p
        }
    }
    return (<p
        className={cn(styles.p, getPClass(size), className)}
        { ...props }
    >
        { children }
    </p>)
}
