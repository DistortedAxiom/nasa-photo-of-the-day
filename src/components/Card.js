import React, {useState, useEffect} from 'react';
import "../App.css";
import axios from 'axios';
import { Jumbotron,  Collapse, Button } from 'reactstrap';

const url = 'https://api.nasa.gov/planetary/apod?'
const api_key = 'api_key=DEMO_KEY'

export default function Card() {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
        <div className="card-container">
            <Jumbotron>
            <h2 className="title">
                {data.title}
            </h2>
            <h3 className="date">
                {data.date}
            </h3>
            <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem', marginTop: '1rem' }}>Toggle Explanation</Button>
            <Collapse isOpen={isOpen}>
            <p className="explanation">
                {data.explanation}
            </p>
            </Collapse>
            </div>
            <img src={data.url}>
            </img>
            </Jumbotron>
        </div>
    )
}
