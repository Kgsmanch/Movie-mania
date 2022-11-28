import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoTrashOutline } from 'react-icons/io5';
import { AiFillInfoCircle } from 'react-icons/ai';

import './style.css';
function Favoritos() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem('@meusfilmes')
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes)
        localStorage.setItem('@meusfilmes', JSON.stringify(filtroFilmes))
        toast.success("Filme removido da lista")
    }

    return (
        <div className='meus-filmes'>
            <h1>Minha Lista</h1>

            {filmes.length === 0 && <span>Você ainda não possui nenhum filme</span>}

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>
                                    <AiFillInfoCircle>

                                    </AiFillInfoCircle>
                                </Link>
                                {/* <button onClick={() => excluirFilme(item.id)}>Remover</button> */}
                                <IoTrashOutline onClick={() => excluirFilme(item.id)}></IoTrashOutline>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;