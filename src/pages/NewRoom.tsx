import { Link } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function NewRoom() {

    // Sem hook
    const { user } = useContext(AuthContext);
    
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                        type="text"
                        placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente
                        <Link to="/"> click aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}