import {ReactElement, useState} from 'react';
import styles from './styles.module.css';

export default function Tooltip({children, tip}): ReactElement {
    const [isVisible, setIsVisible] = useState(false);

    const toggleTooltip = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <span className={styles.wrapper} onClick={toggleTooltip}>
            <span className={styles.text}>{children}</span>
            {isVisible && <span className={styles.tooltip}>{tip}</span>}
        </span>
    );
}
