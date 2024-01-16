import CategoryMenu from '@/components/CategoryMenu';
import styles from './layout.module.sass';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <section className={styles.content}>
      <section className={styles.menu}>
        <CategoryMenu />
      </section>
      <main className={styles.main}>{children}</main>
    </section>
  );
}
