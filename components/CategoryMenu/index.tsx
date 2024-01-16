import styles from './index.module.sass';
import { range } from 'lodash';

const a = range(0, 5).map((elem) => '购物');

export default function CategoryMenu() {
  return (
    <nav className={styles.nav}>
      <ul>
        <span className={styles.title}>主题</span>
        <li
          role="menuitem"
          title="测试"
          className={[styles.item, styles.selected].join(' ')}
        >
          <span className={styles.text}>测试</span>
        </li>
        {a.map((a, b) => (
          <li
            role="menuitem"
            title={a}
            key={b}
            className={styles.item}
          >
            <span className={styles.text}>{a}</span>
          </li>
        ))}
        <li role="separator" className={styles.separator} />
        <span className={styles.title}>主题</span>
        {a.map((a, b) => (
          <li
            role="menuitem"
            title={a}
            key={b}
            className={styles.item}
          >
            <span className={styles.text}>{a}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
