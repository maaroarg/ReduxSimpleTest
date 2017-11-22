import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render(){
    //Cuando la pagina se carga, la primera vez no existe this.props.book
    if(!this.props.book){
      return <div>Elija un libro para comenzar...</div>;
    }

    return (
      <div>
        <h3>Detalle para:</h3>
        <div>{this.props.book.title}</div>
        <div>Paginas:{this.props.book.pages}</div>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
