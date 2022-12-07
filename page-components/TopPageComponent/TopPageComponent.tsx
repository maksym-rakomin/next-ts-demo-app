import {TopPageComponentProps} from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import {Advantages, HhData, Htag, Ptag, Tag} from "../../components";
import {TopLevelCategory} from "../../interfaces/page.interface";

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{ page.title }</Htag>
                { products && <Tag color="gray" size="m">{ products.length }</Tag> }
                <span>Sort</span>
            </div>

            <div className="">
                { products && products.map(p => (
                    <div key={p._id}>{ p.title }</div>
                ))}
            </div>

            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - { page.category }</Htag>
                <Tag color="red" size="m">rabota.ua</Tag>
            </div>

            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}

            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag='h2'>Преимущества</Htag>
                <Advantages advantages={page.advantages} />
            </>
            }

            {page.seoText && <Ptag>{page.seoText}</Ptag>}

            <Htag tag='h2'>Получаемые навыки</Htag>

            {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
        </div>
    )
}
