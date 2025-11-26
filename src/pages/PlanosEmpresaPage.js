import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoCheckmarkCircle } from 'react-icons/io5';
import './PlanosEmpresaPage.css';

function PlanosEmpresaPage() {
    const navigate = useNavigate();

    const handleAssinar = (plano) => {
        alert(`Você escolheu o plano: ${plano}. Redirecionando para pagamento...`);
    };

    return (
        <div className="planos-container">
            <header className="planos-header">
                <button onClick={() => navigate('/empresa/dashboard')} className="back-button">
                    <IoArrowBack size={24} />
                </button>
                <h1>Planos para Empresas</h1>
            </header>

            <main className="planos-grid">
                {/* Plano Básico */}
                <div className="plano-card">
                    <div className="plano-header">
                        <h3>Básico</h3>
                        <span className="preco">R$ 49<small>/mês</small></span>
                    </div>
                    <ul className="plano-features">
                        <li><IoCheckmarkCircle className="icon check" /> Acesso ao Painel</li>
                        <li><IoCheckmarkCircle className="icon check" /> Cadastro de até <strong>3 técnicos</strong></li>
                        <li><IoCheckmarkCircle className="icon check" /> Manuais Básicos</li>
                    </ul>
                    <button className="plano-btn" onClick={() => handleAssinar('Básico')}>Assinar Agora</button>
                </div>

                {/* Plano Recomendado (O que você pediu) */}
                <div className="plano-card destaque">
                    <div className="badge-popular">MAIS POPULAR</div>
                    <div className="plano-header">
                        <h3>Profissional</h3>
                        <span className="preco">R$ 70<small>/mês</small></span>
                    </div>
                    <ul className="plano-features">
                        <li><IoCheckmarkCircle className="icon check" /> Acesso Completo ao Painel</li>
                        <li><IoCheckmarkCircle className="icon check" /> Cadastro de até <strong>10 técnicos</strong></li>
                        <li><IoCheckmarkCircle className="icon check" /> Acesso a Tutoriais em Vídeo</li>
                        <li><IoCheckmarkCircle className="icon check" /> Suporte Prioritário</li>
                    </ul>
                    <button className="plano-btn destaque-btn" onClick={() => handleAssinar('Profissional')}>Assinar Agora</button>
                </div>

                {/* Plano Enterprise */}
                <div className="plano-card">
                    <div className="plano-header">
                        <h3>Industrial</h3>
                        <span className="preco">R$ 150<small>/mês</small></span>
                    </div>
                    <ul className="plano-features">
                        <li><IoCheckmarkCircle className="icon check" /> Acesso Ilimitado</li>
                        <li><IoCheckmarkCircle className="icon check" /> Técnicos <strong>Ilimitados</strong></li>
                        <li><IoCheckmarkCircle className="icon check" /> Gestão de Frota</li>
                        <li><IoCheckmarkCircle className="icon check" /> API de Integração</li>
                    </ul>
                    <button className="plano-btn" onClick={() => handleAssinar('Industrial')}>Assinar Agora</button>
                </div>
            </main>
        </div>
    );
}

export default PlanosEmpresaPage;