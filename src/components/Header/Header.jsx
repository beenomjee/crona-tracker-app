import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <a href="#"><img src="/imgs/logo.svg" alt="Crona Tracker" /></a>
        </div>
        <div className={styles.right}>
            <a href="#">About</a>
            <a href="#"><img src="/imgs/github.svg" alt="Github" /></a>
        </div>
    </div>
  )
}

export default Header