import {HtagProps} from "./Htag.props";
import { createElement } from 'react';
import styles from './Htag.module.css';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
    return createElement(tag, { className: styles[tag] }, children )
}
