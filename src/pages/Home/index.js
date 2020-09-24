import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmes: [],
    };

    this.loadFilmes = this.loadFilmes.bind(this);
  }

  componentDidMount() {
    this.loadFilmes();
  }

  loadFilmes() {
    const url = "https://sujeitoprogramador.com/r-api/?api=filmes";

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ filmes: json });
        console.log(json);
      })
      .catch((error) => console.log("Deu ruim", error));
  }

  render() {
    const { filmes } = this.state;

    return (
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme) => {
            return (
              <article key={filme.id}>
                <strong>{filme.nome}</strong>
                <img src={filme.foto} alt="Pôster do filme" />
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
