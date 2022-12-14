 import {ProductProps} from "./Product.props";
import styles from './Product.module.css';
import cn from "classnames";
 import {Card} from "../Card/Card";
 import {Rating} from "../Rating/Rating";
 import {Tag} from "../Tag/Tag";
 import {Button} from "../Button/Button";
 import {convertPrice, declOfNum} from "../../helpers/helpers";
 import {Divider} from "../Divider/Divider";
 import Image from "next/image";
 import {ForwardedRef, forwardRef, useRef, useState} from "react";
 import {Review} from "../Review/Review";
 import {ReviewForm} from "../ReviewForm/ReviewForm";
 import { motion } from "framer-motion";

 // eslint-disable-next-line react/display-name
const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false)
    const reviewRef = useRef<HTMLDivElement>(null)
    const scrollToReview = (e) => {
        e.preventDefault()
        setIsReviewOpened(true)
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
    const variants = {
        visible: { opacity: 1, height: 'auto', },
        hidden: { opacity: 0, height: 0,},
    }

    return (
        <div className={className} ref={ref} {...props} >
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {convertPrice(product.price)}
                    {product.oldPrice && <Tag className={styles.oldPrice} color="green">{convertPrice(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>
                    {convertPrice(product.credit)}
                    /<span className={styles.month}>??????</span>
                </div>
                <div className={styles.rate}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
                <div className={styles.tags}>
                    { product.categories
                        && product.categories.length > 0
                        && product.categories.map(c => <Tag className={styles.category} key={c} color="ghost">{c}</Tag>)}
                </div>
                <div className={styles.priceTitle}>????????</div>
                <div className={styles.creditTitle}>????????????</div>
                <div className={styles.rateTitle}>
                    <a href="#ref" onClick={scrollToReview}>
                        {product.reviewCount} {declOfNum(product.reviewCount, ['??????????', '????????????', '??????????????'])}
                    </a>
                </div>

                <Divider className={styles.hr} />

                <div className={styles.description}>{product.description}</div>
                <div className={styles.features}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristics} key={c.name}>
                            <span className={styles.characteristicsName}>{c.name}</span>
                            <span className={styles.characteristicsDots}></span>
                            <span className={styles.characteristicsValue}>{c.value}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                        <div className={styles.advTitle}>????????????????????????</div>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>????????????????????</div>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>

                <Divider className={cn(styles.hr, styles.hr2)} />

                <div className={styles.actions}>
                    <Button appearance='primary'>???????????? ??????????????????</Button>
                    <Button
                        appearance='ghost'
                        arrow={isReviewOpened ? 'down' : 'right'}
                        className={styles.reviewButton}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                    >{isReviewOpened ? '???????????? ????????????' : '???????????? ????????????'}</Button>
                </div>
            </Card>

            <motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial="hidden">
                <Card
                    ref={reviewRef}
                    color="blue"
                    className={styles.reviews}
                >
                    {product.reviews
                    && product.reviews.length > 0
                        ? product.reviews.map(review => (
                            <div key={review._id}>
                                <Review review={review}/>
                                <Divider/>
                            </div>
                        ))
                        : (<>
                            <div>?????????????? ???????? ??????, ?????????????? ????????????!</div>
                            <Divider/>
                        </>)
                    }

                    <ReviewForm productId={product._id}/>
                </Card>
            </motion.div>
        </div>
    )
}))

Product.displayName = "Product";

export { Product }
