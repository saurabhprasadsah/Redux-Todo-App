## Redux-Todo-App

# Redux-app

## https://github.com/reduxjs/redux-toolkit

## Saga Function

# $ npm install redux-saga

class UserComponent extends React.Component {
  ...
  onSomeButtonClicked() {
    const { userId, dispatch } = this.props
    dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
  }
  ...
}