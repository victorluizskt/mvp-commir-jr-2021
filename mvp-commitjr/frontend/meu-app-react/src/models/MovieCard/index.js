import './moviecard.css';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function MovieCard(props) {
    return(
    <div className="container-movie">

            <div className="trailer">
            <iframe width="560" height="325" src="https://www.youtube.com/embed/kFwGmQIe-rU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="movie-info">
                <div className="movie-title">
                    <h1>{props.title}</h1>
                </div>

                <div className="movie-synopsis">
                    <span><strong>Sinopse: </strong>Projeto X é uma comédia fora de controle que segue um grupo de amigos que decidem organizar a festa de aniversário mais épica da história, filmada pela perspectiva das câmeras digitais de cada um. O objetivo dos jovens organizadores da festa era serem reconhecidos e conquistar muito sucesso e fama na escola onde estudam, assim, festejam o aniversário do adolescente na casa de seus pais, que no final sai fora do controle.</span>
                </div>

                <div className="movie-title-original">
                    <span><strong>Titulo original: </strong>Projeto X, uma festa fora de controle.</span>
                </div>

                <div className="movie-genre">
                    <span><strong>Generos: </strong>Comédia</span>
                </div>

                <div className="movie-debut">
                    <span><strong>Estreia: </strong>16 de março de 2012</span>
                </div>

                <div className="movie-content-adult">
                    <span><strong>Conteudo adulto: </strong>Sim</span>
                </div>

                <div className="movie-duration">
                    <span><strong>Duracao: </strong>1h 34m</span>
                </div>

                <div className="movie-avaliation">
                    <span><strong>Avaliação: </strong></span>
                </div>

                <div className="avaliation">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend"></Typography>
                    <Rating  value={5} readOnly />
                    </Box>
                </div>

                
            </div>
    </div>
    
    );
};

export {MovieCard};