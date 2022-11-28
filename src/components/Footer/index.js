import './footer.css';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaWhatsappSquare } from 'react-icons/fa';

function Footer() {
    function showContacts() {
        alert('Olá! Fique à vontade para entrar em contato comigo através do email: kgs.manch@gmail.com, ou whatsapp: (11) 99860-9854.')
    }

    return (

        <footer>
            <div className='icons-footer'>
                <a target='blank' rel='external' href="https://github.com/Kgsmanch"><AiFillGithub className='giticon' /></a>
                <button onClick={showContacts}>
                    <FaWhatsappSquare className='emailicon' />
                </button>
                <a target='blank' rel='external' href="https://www.linkedin.com/in/sergio-manchini/"><BsLinkedin className='linkedinicon' /></a>
            </div>
        </footer>
    )
}

export default Footer