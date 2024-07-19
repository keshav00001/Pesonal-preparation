1. What is redux ? How to use please explain.

Ans->> Redux is a predictable state container for JavaScript apps, most commonly used with libraries like React or Angular for managing the application state. It provides a centralized store that holds the entire state of your application, making it easier to manage and update.

Key Concepts of Redux:
1.Store: The single source of truth. It holds the state of your application.

2.Actions: Plain JavaScript objects that represent an intention to change the state. They are the only way to get data into the store.

3.Reducers: Functions that specify how the application's state changes in response to actions sent to the store. They are pure functions without side effects.

4.Dispatch: The method used to send actions to the store.

5.Subscribe: A method that registers callbacks to be called any time an action has been dispatched, so that you can update the UI in response to the current state of the application.

How to Use Redux:
Here’s a step-by-step explanation of how to use Redux with React:

Step 1: Install Redux and React-Redux
First, you need to install Redux and React-Redux (which provides React bindings for Redux):

npm install redux react-redux


Step 2: Define Actions
Actions are plain JavaScript objects that describe what happened. For example:


// actions.js
export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});


Step 3: Create Reducers
Reducers specify how the application's state changes in response to actions:


// reducers.js
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;



Step 4: Create a Redux Store


// store.js
import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default store;


// store.js
import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default store;


Step 5: Provide the Redux Store to Your React Components
Wrap your root component with Provider from react-redux to make the Redux store available to all your components:



// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



Step 6: Connect Redux State to React Components
Use connect from react-redux to connect your React components to the Redux store:


// App.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

const App = ({ count, increment, decrement }) => (
  <div>
    <h2>Count: {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps, { increment, decrement })(App);









