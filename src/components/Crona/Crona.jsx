import { Link } from 'react-router-dom';
import styles from './Crona.module.css';
import countryCode from '../../utils/countryCode';

const Box = ({ date, country }) => {
    date = new Date(date)
    return (
        <Link to={`/country?name=${country.country_name.toLowerCase()}`} style={{ textDecoration: "none" }}>
            <div className={styles.box}>
                <div className={styles.top}>
                    <div className={styles.left}><img src={`https://flagcdn.com/${countryCode[country.country_name.toLowerCase()]}.svg`} alt="Flag" /></div>
                    <div className={styles.right}>
                        <span>{country.country_name}</span>
                        <h6>Total Cases</h6>
                        <p><img src="/heroImages/virus.svg" alt="Virus" /><span>{country.cases}</span></p>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.left}>
                        <div className={styles.box2}>
                            <div className={styles.left}><img src="/heroImages/heartCheck.svg" alt="Heart" /></div>
                            <div className={styles.right}>
                                <h6>Total Recoveries</h6>
                                <span>{country.total_recovered}</span>
                            </div>
                        </div>
                        <div className={styles.box2}>
                            <div className={styles.left}><img src="/heroImages/mask.svg" alt="Mask" /></div>
                            <div className={styles.right}>
                                <h6>New Cases</h6>
                                <span>{country.new_cases}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.box2}>
                            <div className={styles.left}><img src="/heroImages/bed.svg" alt="Bed" /></div>
                            <div className={styles.right}>
                                <h6>Active Cases</h6>
                                <span>{country.active_cases}</span>
                            </div>
                        </div>
                        <div className={styles.box2}>
                            <div className={styles.left}><img src="/heroImages/death.svg" alt="Death" /></div>
                            <div className={styles.right}>
                                <h6>Total Deaths</h6>
                                <span>{country.deaths}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}><p><span>last updated: </span><span>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours() % 12}:${date.getMinutes()} ${date.getHours() >= 12 ? "PM" : "AM"}`}</span></p></div>
            </div>
        </Link>

    )
}

const Crona = ({ data }) => {
    return (
        <div className={styles.container}>
            {
                data.countries_stat && data.countries_stat.slice(0, 20).map((country, key) => <Box key={key} country={country} date={data.statistic_taken_at} />)
            }
        </div>
    )
}

export default Crona