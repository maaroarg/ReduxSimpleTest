export function selectBook(book){
  //selectBook debe devolver un action... un objeto con una propiedad type
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
