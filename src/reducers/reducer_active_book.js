//El state que llega de param, no es el state de la app. Es el state que le corresponde al reducer.
export default function(state = null, action){
  switch(action.type){
      case 'BOOK_SELECTED':
        return action.payload;
  }

  return state;
}
