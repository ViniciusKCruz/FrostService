import { useState } from "react";
import axios from "axios";
import useMensagem from "../../hooks/useMensagem";
import "./styles.css";
import MensagemFeedback from "../MensagemFeedback";
import {useNavigate} from "react-router-dom";

function FormularioCadastroCliente() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const {exibirMensagem, mensagem, tiopoMensagem, visivel, fecharMensagem} = 
    useMensagem();

    const cadastrarCliente = async (e) => {
        try{
            const response = await axios.post("http://localhost:8080/", {
        nome,
        email,
        telefone,
        endereco,
        senha
    });
    exibirMensagem( 
        response.data.mensagem || "Cliente cadastrado com sucesso!", "sucesso"

    )
    setNome("");
    setEmail("");
    setTelefone("");
    setEndereco("");
    setSenha("");
    navigate("/login");
        } catch (error) {
            let msgErro = "Erro ao conectar com o Servidor.";
            if (erro.response && erro.response.data){
                msgErro = erro.response.data.mensagem;
            }if(erro.response.data.errors){
                msgErro += '' + Object.values(error.response.data.errors).join(",");
            }
            exibirMensagem(msgErro, "erro");
        }
    };
    return (
        <div>
            <h2>Cadastro de Cliente</h2>
            <form onSubmit={cadastrarCliente}>
                input 
                type="text"
                placeholder="Nome"
                value={nome}
                </form>
        </div>
    );


}

export default FormularioCadastroCliente;
    