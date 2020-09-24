import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

class Page404 extends Component {
  render() {
    return (
      <div className="container">
        <h1>Página não encontrada !!! :( </h1>
        <iframe
          title="Gif star wars"
          src="https://giphy.com/gifs/VwoJkTfZAUBSU/html5"
          frameBorder="0"
          class="giphy-embed"
          className="gif"
          allowFullScreen
        ></iframe>

        <h3>
          Parece que algo deu errado. Volte para <Link to="/">Home</Link> e
          tente novamente
        </h3>
      </div>
    );
  }
}

export default Page404;
