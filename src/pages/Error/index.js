import './style.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='error-page'>
            <h1>OOOPS!   Pagina não encontrada</h1>
            <Link to={'/'} className='voltar'>Clique para voltar</Link>
            <h2>Erro 404</h2>
        </div>
    )
}

export default Error;