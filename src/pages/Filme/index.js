import React, { Component } from "react";
import "./styles.css";

class Filme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filme: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ filme: json });
      })
      .catch((error) => console.log("Deu ruim", error));
  }

  render() {
    return (
      <div className="filme-info">
        <h1>{this.state.filme.nome}</h1>
        <img src={this.state.filme.foto} alt="Pôster do filme" />

        {this.state.filme.length !== 0 && <h3>Sinopse</h3>}
        <p>{this.state.filme.sinopse}</p>

        {this.state.filme.length !== 0 && (
          <div className="button_container">
            <a
              href="https://www.imdb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Procurar no IMDB
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Filme;
