import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import getMovie from '../../APIs/getMovie'

const ImageSlider = ({slides}) => {
    const [currente, setCurrent] = useState(0);
    const length = slides.length;

    const [generosMovie, setGenerosMovie] = useState([]);

    async function getApiGeneros() {
        const genresList = await getMovie();
        const genres = genresList.status ? genresList.movies : ([]);
        setGenerosMovie(genres);
    };
    
    const nextSlide = () => {
        setCurrent(currente === length -1 ? 0 : currente + 1);
        getApiGeneros();
    }

    const prevSlide = () => {
        setCurrent(currente === 0 ? length - 1 : currente);
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    };

    return(
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {slides.map((slide, index) => {
                return (
                    <div className={index === currente ? 'slide active' : 'slide'} key={index}>
                        {index === currente && 
                        (<>
                        <img src={`https://image.tmdb.org/t/p/w500${slide.backdrop_path}`} alt='travel image' className="image"/>
                            <div className="releases-texts"> 
                                <h1>{slide.title}</h1>
                                <span className="movie-synopsis" ><strong>Sinopse:</strong> {slide.overview}</span>
                                <span className="movie-title-original"><strong>Original title: </strong> {slide.original_title} </span>
                                <span className="movie-title-original"><strong>Genres:</strong> {slide.genre_ids}</span>
                                <span className="movie-title-original"><strong>Release:</strong> {slide.release_date}</span>
                                <span className="movie-title-original"><strong>Conteudo adulto:</strong> {slide.adult ? "Não" : "Sim"}</span>
                                <span className="movie-title-original"><strong>Avaliation:</strong></span>
                                <span className="avaliation">
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Typography component="legend"></Typography>
                                        <Rating  value={5} readOnly />
                                    </Box> 
                                </span>
                            </div>
                        </>)}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider;