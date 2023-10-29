
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

      default:
         return state;   
   }

}