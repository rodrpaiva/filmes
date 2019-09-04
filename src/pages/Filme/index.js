import React, { Component } from 'react';
import './filme-info.css';

class Filme extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filmeSelecionado: []
        };


        this.loadFilmeSelecionado = this.loadFilmeSelecionado.bind(this);
    }


    componentDidMount() {
        this.loadFilmeSelecionado();
    }

    loadFilmeSelecionado() {
        //pega a id do link
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        //console.log(url);
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                this.setState({ filmeSelecionado: json });
                console.log(json);
            });
    }

    render() {
        return (
            <div className="filme-info">
                <h1>{this.state.filmeSelecionado.nome}</h1>
                <img src={this.state.filmeSelecionado.foto} alt='capa' />
                {this.state.filmeSelecionado.length !== 0 &&

                    <h3>Sinópse</h3>
                }
                {this.state.filmeSelecionado.sinopse}
            </div>
        );
    }

}

export default Filme;