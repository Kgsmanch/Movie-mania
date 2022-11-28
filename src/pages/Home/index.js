import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css'

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/popular", {
                params: {
                    api_key: process.env.REACT_APP_APIKEY,
                    language: "pt-BR",
                    page: 1,
                }
            })
            console.log(response.data.results)
            setFilmes(response.data.results.slice(0, 10))
        }
        loadFilmes();
    }, [])

    return (
        <div className='flex'>
            {filmes.map((filme) => {
                return (
                    <article key={filme.id} className="container">
                        <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt={filme.title} /><br />
                        <span>{filme.title}</span><br />
                        <Link to={`/filme/${filme.id}`} className="saiba-mais">Mais detalhes</Link>
                    </article>
                )
            })}
        </div >
    )
}

export default Home;