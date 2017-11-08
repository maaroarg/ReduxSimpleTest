/*
Generamos un componente del tipo container (Componente que sabe que existe un state) cuya funcion es conectar el state con la vista.
Estamos uniendo Redux (State), que es un proyecto separado de React, con React (Vista).
Lo hacemos con una libreria llamada react-redux, utilizando el objecto connect
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book)=>{
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

/*Lo que esta funcion retorne, sera utilizado como props en el componente.
Es el pegamento entre React y Redux
*/
function mapStateToProps(state){
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
