import React, { useContext, createContext, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

const initialState = { count: 0 };
export function: FC<int>reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
const [state, dispatch] = useReducer(reducer, initialState);
export const MyContext = createContext(state);

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MyContext.Provider value={state}>
          <Router />
        </MyContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
