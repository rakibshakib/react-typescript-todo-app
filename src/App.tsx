import { useCallback, useReducer } from 'react';
import './App.css';
import Display from './components/Display/Display';
import TodoContainer from './components/TodoContainer/TodoContainer';
interface TODO {
    id: number;
    text: string;
}
type Actions =
    | {
          type: 'ADD';
          text: string;
      }
    | {
          type: 'DELETE';
          id: number;
      };
const reducer = (state: TODO[], action: Actions) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: state.length,
                    text: action.text,
                },
            ];
        case 'DELETE':
            return state.filter(({ id }) => id !== action.id);
    }
};
const state: TODO[] = [];
function App() {
    const [todos, dispatch] = useReducer(reducer, state);
    const addItem = useCallback((text) => {
        dispatch({
            type: 'ADD',
            text: text,
        });
    }, []);

    const removeItem = (id: number) => {
        console.log(id);
        dispatch({
            type: 'DELETE',
            id: id,
        });
    };
    return (
        <div className="App container mx-auto">
            <TodoContainer addItem={addItem} />
            <Display todo={todos} removeItem={removeItem} />
        </div>
    );
}

export default App;
