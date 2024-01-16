import styles from './layout.module.sass';

interface IProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: IProps) {
  return <main className={styles.main}>{children}</main>;
}
