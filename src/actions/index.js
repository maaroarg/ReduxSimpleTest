export function selectBook(book){
  //selectBook debe devolver un action... un objeto con una propiedad type
  //console.log('Book',book);//Hago el console.log para verificar que el evento dispara el actionCreator
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
