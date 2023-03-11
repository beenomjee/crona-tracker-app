import { Box } from "../components/Hero/Hero";
import LineChart from 'react-svg-line-chart';
import styles from "./Country.module.css";
import countryCode from '../utils/countryCode'
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../redux";
import axios from "axios";

const Country = () => {
    const data = useSelector(store => store.data.data);
    const [dataForChart, setDataForChart] = useState([0, 0, 0, 0])
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()
    let country = data.countries_stat ? data.countries_stat.find(country => country.country_name.toLowerCase() === searchParams.get('name')) : {};

    const getData = async (country) => {
        try {
            let url = `https://api.covid19api.com/dayone/country/${country}/status/confirmed`;
            let { data } = await axios.get(url);
            let data_2020 = data.filter(record => new Date(record.Date).getFullYear() == '2021').reduce((preval, record) => { return record.Cases + preval }, 0)
            let data_2021 = data.filter(record => new Date(record.Date).getFullYear() == '2021').reduce((preval, record) => { return record.Cases + preval }, 0);
            let data_2022 = data.filter(record => new Date(record.Date).getFullYear() == '2022').reduce((preval, record) => { return record.Cases + preval }, 0);
            let data_2023 = data.filter(record => new Date(record.Date).getFullYear() == '2023').reduce((preval, record) => { return record.Cases + preval }, 0);
            setDataForChart([data_2020, data_2021, data_2022, data_2023])
        } catch (e) {
            setDataForChart([])
        }
    }

    useEffect(() => {
        dispatch(fetchData())
        getData(searchParams.get('name'))
    }, [])

    const topBoxes = [
        {
            heading: "Total Vaccinations",
            imgSrc: "/heroImages/heart.svg",
            value: country.total_recovered ? country.total_recovered : "--",
            date: "6/1/2021, 7:21 AM",
            isWithBackground: true
        },
        {
            heading: "Total Cases",
            imgSrc: "/heroImages/cases.svg",
            value: country.cases ? country.cases : "--",
            date: "6/1/2021, 7:21 AM",
            isWithBackground: true
        },
        {
            heading: "Total Recoveries",
            imgSrc: "/heroImages/heart.svg",
            value: country.total_recovered ? country.total_recovered : "--",
            date: "6/1/2021, 7:21 AM",
            isWithBackground: true
        },
    ]


    const bottomBoxes = [
        {
            heading: "New Cases",
            imgSrc: "/heroImages/mask.svg",
            value: country.new_cases ? country.new_cases : "--",
            date: "6/1/2021, 7:21 AM",
            isWithBackground: false
        },
        {
            heading: "Active Cases",
            imgSrc: "/heroImages/bed.svg",
            value: country.active_cases ? country.active_cases : "--",
            date: "6/1/2021, 7:21 AM",
            isWithBackground: false
        },
        {
            heading: "New Deaths",
            imgSrc: "/heroImages/death.svg",
            value: country.new_deaths ? country.new_deaths : "--",
            date: "6/1/2021, 7:21 AM",
            isWithBackground: false
        },
        {
            heading: "Total Deaths",
            imgSrc: "/heroImages/death.svg",
            value: country.deaths ? country.deaths : "--",
            date: "6/1/2021, 7:21 AM",
            isWithBackground: false
        },
    ]

    let dataChart = [
        { x: 2019, y: 0 },
        { x: 2020, y: dataForChart[0] },
        { x: 2021, y: dataForChart[1] },
        { x: 2022, y: dataForChart[2] },
        { x: 2023, y: dataForChart[3] },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.left}><img src={`https://flagcdn.com/${countryCode[searchParams.get('name')]}.svg`} alt="Flag" /></div>
                <div className={styles.right}>
                    {
                        topBoxes.map((topBox, key) => <Box key={key} heading={topBox.heading} imgSrc={topBox.imgSrc} value={topBox.value} date={topBox.date} isWithBackground={topBox.isWithBackground} />)
                    }
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.top}>
                        <p>Total Cases</p>
                    </div>
                    <div className={styles.bottom}>
                        {
                            dataForChart.length === 0 ? <p>No Record Found!</p> :

                                <LineChart
                                    data={dataChart}
                                    gridVisible={false}
                                    labelsColor="#0199EE"
                                    pathColor="#0199ee"
                                    pointsVisible={false}
                                    axisColor="#0199EE"
                                    pathSmoothing={0}
                                    axisWidth={3}
                                    labelsStepX={1}
                                />
                        }
                    </div>
                </div>
                <div className={styles.right}>
                    {
                        bottomBoxes.map((topBox, key) => <Box key={key} heading={topBox.heading} imgSrc={topBox.imgSrc} value={topBox.value} date={topBox.date} isWithBackground={topBox.isWithBackground} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Country