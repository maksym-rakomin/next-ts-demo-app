import {RatingProps} from "./Rating.props";
import styles from './Rating.module.css';
import StarIcon from './Star.svg';
import cn from "classnames";
import {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef} from "react";

export const Rating = forwardRef(({isEditable = false, rating, setRating, error, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    key={i}
                    className={
                        cn(
                            styles.star,
                            {
                                [styles.filled]: i < currentRating,
                                [styles.editable]: isEditable,
                            }
                        )
                    }
                >
                    <StarIcon
                        onMouseEnter={() => changeDisplay(i + 1)}
                        onMouseLeave={() => changeDisplay(rating)}
                        onClick={() => onClick(i + 1)}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                        tabIndex={isEditable ? 0 : -1}
                    />
                </span>
            )
        })

        setRatingArray(updatedArray)
    }

    const changeDisplay = (i: number) => {
        if (isEditable) {
            constructRating(i)
        }
    }

    const onClick = (i: number) => {
        if (isEditable && setRating) {
            setRating(i)
        }
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code === 'Space' && setRating) {
            setRating(i)
        }
    }

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    return (
        <div
            className={cn(styles.rating, {
                [styles.error]: error
            })}
            {...props}
            ref={ref}
        >
            {
                ratingArray.map((r, i) => (<span key={i}>{r}</span>))
            }

            { error && <span className={styles.errorMessage}>{error.message}</span> }
        </div>)
})
