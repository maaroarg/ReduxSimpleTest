/*
Generamos un componente del tipo container (Componente que sabe que existe un state) cuya funcion es conectar el state con la vista.
Estamos uniendo Redux (State), que es un proyecto separado de React, con React (Vista).
Lo hacemos con una libreria llamada react-redux, utilizando el objecto connect
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book)=>{
      return (
        <li
          onClick={()=> this.props.selectBook(book)}
          key={book.title}
          className="list-group-item"
        >
            {book.title}
        </li>
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
/* Cada vez que se llama al callback selectBook, el resultado tiene que llegar a todos los reducers.
Para hacer esto debemos utilizar dispatch. Cualquier cosa que responda esta funcion terminara como
props en BookList.
*/
function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
