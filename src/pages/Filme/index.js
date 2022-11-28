import './style.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api';


function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: "e6e24e27c125f7253356130214f0133f",
                    language: "pt-BR",
                    page: 1,
                }
            })
                .then((response) => {
                    setFilme(response.data)
                    setLoading(false)
                })
                .catch(() => {
                    console.log('filme nao encontrado')
                    navigate("/", { replace: true })
                })
        }
        loadFilme()

        return () => {
            console.log("componente foi desmontado")
        }
    }, [navigate, id])

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@meusfilmes");

        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilm = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)
        if (hasFilm) {
            toast.warn('Filme ja consta em favoritos')
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem("@meusfilmes", JSON.stringify(filmesSalvos));
        toast.success('filme salvo com sucesso');
    }

    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando detalhes</h1>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`} alt={filme.title}></img>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>
                    Salvar como favoritos
                </button>
                <button>
                    <a target='blank' rel='external' href={`http://youtube.com/results?search_query=${filme.title}`}> Trailer </a>
                </button>
                <button>
                    <Link to='/'>Voltar para Home</Link>
                </button>
            </div>

        </div>
    )
}

export default Filme;