
const initialstate = {
   todos: ['breakfast', 'Lunch', 'dinner'],

   editData: {
      index : '',
      data:''
      }


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
      case "EDIT_TODO":
         // console.log(action.payload);
          return {
            ...state,
            editData: {
                  index:  action.payload.index,
                  data: action.payload.data
            }
          }

      case "UPDATE_TODO":
         state.todos.splice(action.payload.index,1, action.payload.data)

         return {
            ...state,
            todos: [...state.todos],
            editData: {
               index:'',
               data: ''
            }
         }
    

      default:
         return state;   
   }
}