import { useSelector } from 'react-redux'
import styles from './Hero.module.css'
const Box = ({ heading, imgSrc, value, date, isWithBackground }) => {
    date = new Date('2022-04-24 11:18:01');
    return (
        <div className={`${styles.box} ${isWithBackground ? styles.withBackground : styles.withoutBackground}`}>
            <div className={styles.top}>
                <div className={styles.left}><h6>{heading}</h6></div>
                <div className={styles.right}><img src={imgSrc} alt={heading} /></div>
            </div>
            <div className={styles.middle}><p>{value}</p></div>
            <div className={styles.bottom}><p><span>last updated: </span><span>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours() % 12}:${date.getMinutes()} ${date.getHours() >= 12 ? "PM" : "AM"}`}</span></p></div>
        </div>
    )
}

const Hero = () => {
    const data = useSelector(store => store.data.data);
    const boxes = [
        {
            heading: "Total Cases",
            imgSrc: "/heroImages/cases.svg",
            value: data?.world_total ? data.world_total.total_cases : "--",
            date: "6/1/2021, 7:21 AM",
            isWithBackground: true
        },
        {
            heading: "Total Vaccinations",
            imgSrc: "/heroImages/heart.svg",
            value: data?.world_total ? data.world_total.total_recovered : "--",
            date: "6/1/2021, 7:21 AM",
            isWithBackground: true
        },
        {
            heading: "New Cases",
            imgSrc: "/heroImages/mask.svg",
            value: data?.world_total ? data.world_total.new_cases : "--",
            date: "6/1/2021, 7:21 AM",
            isWithBackground: false
        },
        {
            heading: "Active Cases",
            imgSrc: "/heroImages/bed.svg",
            value: data?.world_total ? data.world_total.active_cases : "--",
            date: "6/1/2021, 7:21 AM",
            isWithBackground: false
        },
    ]

    return (
        <div className={styles.container}>
            {
                boxes.map((box, key) => <Box key={key} heading={box.heading} imgSrc={box.imgSrc} value={box.value} date={box.date} isWithBackground={box.isWithBackground} />)
            }
        </div>
    )
}

export { Box }
export default Hero