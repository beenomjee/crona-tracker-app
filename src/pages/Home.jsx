import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Crona from '../components/Crona/Crona';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';
import { fetchData } from '../redux';

const Home = () => {
    const [inputText, setInputText] = useState('');
    const data = useSelector(store => store.data.data);
    const [filteredData, setFilteredData] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const inputHandler = (e) => {
        setInputText(e.target.value)
        setFilteredData(data.countries_stat.filter(country => country.country_name.toLowerCase().startsWith(e.target.value.toLowerCase())));
    }
    const formHandler = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Hero />
            <Nav inputText={inputText} inputHandler={inputHandler} formHandler={formHandler} />
            <Crona data={inputText ? { countries_stat: filteredData, statistic_taken_at: data.statistic_taken_at } : data} />
        </>
    )
}

export default Home