import React from 'react';

// import { Container } from './styles';

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Cronograma UHSP: {props.logo}</a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

        </ul>
        <form className="form-inline  my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search"
            aria-label="Search" />
          <button className="btn btn-outline-success  my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Sair</button>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
