
const initialstate = {
   todos: ['breakfast', 'Lunch', 'dinner']
}
export const TodoReducer = (state = initialstate, action) => {
   console.log(action);
   switch (action.type) {
      case "ADD_TODO" :
      let array  =[...state.todos, action.payload]
      return{
         ...state,
         todos:array

      }

      case "DELETE_TODO" :
         let filteredArray = state.todos.filter(todo => todo !==  action.payload)
      
         console.log(filteredArray);
          
      return{
         ...state,
         todos :[...filteredArray]
      }


      default:
         return state;   
   }
}