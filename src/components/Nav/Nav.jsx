import { useState } from 'react';
import styles from './Nav.module.css';

const Nav = ({ inputText, inputHandler, formHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = (e) => {
    if (!isOpen) {
      document.querySelector(`.${styles.nav} .${styles.left}`).classList.add(styles.open);
      setIsOpen(true);
    } else {
      document.querySelector(`.${styles.nav} .${styles.left}`).classList.remove(styles.open);
      setIsOpen(false);
    }
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.leftMobile}><button onClick={openHandler}><svg className="hb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round" style={{ cursor: "pointer" }}>
        <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
          <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
          <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
        </path>
        <rect width="10" height="10" stroke="none">
          <animate dur="2s" id="reverse" attributeName="width" begin="click" />
        </rect>
        <rect width="10" height="10" stroke="none">
          <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
          <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
        </rect>
      </svg></button></div>
      <div className={styles.left}>
        <button className={styles.selected}>All</button>
        <button>Europe</button>
        <button>N. America</button>
        <button>Asia</button>
        <button>S. America</button>
        <button>Oceania</button>
      </div>
      <div className={styles.right}>
        <form onSubmit={formHandler}>
          <input type="text" value={inputText} onChange={inputHandler} />
          <button><img src="/search.svg" alt="search" /></button>
        </form>
      </div>
    </nav>
  )
}

export default Nav