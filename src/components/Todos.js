import React, { Component } from 'react';

import { collectionData } from 'rxfire/firestore';
import { store } from '../client/firebase';
import TodoInput from './TodoInput';

class Todos extends Component {
    state = {
        todos: [],
    }

    componentWillMount() {
        const todosRef = store.collection('todos');

        collectionData(todosRef, 'id').subscribe(todos => { 
          this.setState({ todos });
        });
    }

    render() {
        const { todos } = this.state;

        return (
            <div>
                <ul>
                    {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
                </ul>
                <TodoInput />
            </div>
        );
    }
}

export default Todos;
