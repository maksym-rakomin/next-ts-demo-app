 import {ProductProps} from "./Product.props";
import styles from './Product.module.css';
import cn from "classnames";
 import {Card} from "../Card/Card";
 import {Rating} from "../Rating/Rating";
 import {Tag} from "../Tag/Tag";
 import {Button} from "../Button/Button";

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {

    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{product.price}</div>
            <div className={styles.credit}>{product.credit}</div>
            <div className={styles.rate}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
            <div className={styles.tags}>
                { product.categories && product.categories.length > 0 && product.categories.map(c => <Tag key={c} color="ghost">{c}</Tag>)}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>

            <div className={styles.hr}><hr/></div>

            <div className={styles.description}>{product.description}</div>
            <div className={styles.features}>features</div>

            <div className={styles.advBlock}>
                {product.advantages && <div className={styles.advantages}>
                    <div className={styles.advTitle}>Преимущества</div>
                    <div>{product.advantages}</div>
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div className={styles.advTitle}>Недостатки</div>
                    <div>{product.disadvantages}</div>
                </div>}
            </div>

            <div className={styles.hr}><hr/></div>

            <div className={styles.actions}>
                <Button appearance='primary'>Узнать подробнее</Button>
                <Button appearance='ghost' arrow={'right'} className={styles.reviewButton}>Читать отзывы</Button>
            </div>

        </Card>
    )
}
