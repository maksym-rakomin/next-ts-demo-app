import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from "classnames";
import {format} from 'date-fns'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<div className={styles.item}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<a href="#" className={styles.item}>Пользовательское соглашение</a>
			<a href="#" className={styles.item}>Политика конфиденциальности</a>
		</footer>
	);
};
