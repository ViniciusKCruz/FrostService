import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoStar, IoStarOutline } from 'react-icons/io5';
import './AvaliarServicoPage.css';

const tecnicosRecentes = [
    { id: 1, nome: 'Emanuel Fernandes', servico: 'Instalação Split', data: '20/10/2025' },
    { id: 2, nome: 'Caio Almeida', servico: 'Manutenção Preventiva', data: '15/10/2025' },
];

function AvaliarServicoPage() {
    const navigate = useNavigate();
    const [selectedTecnico, setSelectedTecnico] = useState(tecnicosRecentes[0].id);
    const [rating, setRating] = useState(0);
    const [comentario, setComentario] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Obrigado pela sua avaliação!');
        navigate('/servicos-cliente');
    };

    return (
        <div className="avaliacao-container">
            <div className="avaliacao-card">
                <header className="avaliacao-header">
                    <button onClick={() => navigate('/servicos-cliente')} className="back-button">
                        <IoArrowBack size={24} />
                    </button>
                    <h1>Avaliar Serviço</h1>
                </header>

                <form onSubmit={handleSubmit} className="avaliacao-form">
                    <div className="form-group">
                        <label>Selecione o Técnico/Serviço:</label>
                        <select 
                            value={selectedTecnico} 
                            onChange={(e) => setSelectedTecnico(e.target.value)}
                            className="tecnico-select"
                        >
                            {tecnicosRecentes.map(tec => (
                                <option key={tec.id} value={tec.id}>
                                    {tec.nome} - {tec.servico} ({tec.data})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="rating-group">
                        <label>Sua Nota:</label>
                        <div className="stars-container">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    type="button"
                                    key={star}
                                    className="star-button"
                                    onClick={() => setRating(star)}
                                >
                                    {rating >= star ? 
                                        <IoStar size={32} color="#f5a623" /> : 
                                        <IoStarOutline size={32} color="#ccc" />
                                    }
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Comentário (Opcional):</label>
                        <textarea 
                            rows="4" 
                            placeholder="Conte como foi sua experiência..."
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-avaliacao-btn">
                        Enviar Avaliação
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AvaliarServicoPage;