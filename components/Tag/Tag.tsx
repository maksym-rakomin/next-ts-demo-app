import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';
import cn from "classnames";

export const Tag = ({ size = 'm', children, color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
    const getSizeClass = size => {
        switch (size) {
            case 's':
                return styles.s
            case 'm':
                return styles.m
            default:
                return styles.p
        }
    }

    const getColorClass = color => {
        switch (color) {
            case 'ghost':
                return styles.ghost
            case 'red':
                return styles.red
            case 'gray':
                return styles.gray
            case 'green':
                return styles.green
            case 'primary':
                return styles.primary
            default:
                return styles.ghost
        }
    }

    return (
        <div
            className={cn(styles.tag, getSizeClass(size), getColorClass(color), className)}
            {...props}
        >
            {
                href
                ? <a href={href}>{ children }</a>
                : <>{ children }</>
            }
        </div>
    )
}
