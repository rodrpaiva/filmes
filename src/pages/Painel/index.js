import React, { Component } from 'react';
import './painel.css';
import { Link } from 'react-router-dom';
import Login from '../Login';
import {criarBotaoLogOut} from 'D:/Google Drive/Intcode/filmes/src/components/Header';


class Painel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filmes: []
        };
        this.loadFilmes = this.loadFilmes.bind(this);
    }

    componentDidMount() {
        this.loadFilmes();
        //criarBotaoLogOut();
    }

    loadFilmes() {
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                this.setState({ filmes: json });
                console.log(json);
            });
    }

    render() {

        return (



            <div className='container'>
               
                <div className='lista-filme'>
                    {this.state.filmes.map((filme) => {
                        return (
                            <article key={filme.id} className='filme'>
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt='capa' />
                                <Link to={`/filme/${filme.id}`}>Acessar
                </Link>
                            </article>
                        )
                    })}
                </div>
            </div>

        );
    }
}

export default Painel;