import React, {useState, useEffect} from 'react';
import "../App.css";
import axios from 'axios';

const url = 'https://api.nasa.gov/planetary/apod?'
const api_key = 'api_key=DEMO_KEY'

export default function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url + api_key)
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <h2 className="title">
                {data.title}
            </h2>
            <h3 className="date">
                {data.date}
            </h3>
            <p className="explanation">
                {data.explanation}
            </p>
            <img src={data.url}>
            </img>
        </div>
    )
}
