import './lacamentos.css'
import React, {useState, useEffect} from 'react';
import ImageSlider from './ImageSlider'
import getGenre from '../../APIs/getGenre';


function Lancamentos() {
    const [generos, setGeneros] = useState([]);

    async function getGenres() {
        const genres = await getGenre(35);
        setGeneros(genres.data);
    }

    useEffect(() => {
        getGenres();
    }, [])

    return (
        <section className="secao-lacamentos">
            <h1 className="title">Releases</h1>
            <ImageSlider slides={generos}/>
        </section>
    )
}

export default Lancamentos;