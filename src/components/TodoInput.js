import React, { Component } from 'react';
import { store } from '../client/firebase';

class TodoInput extends Component {
    state = {
        todo: ''
    }

    handleTodoChange = e => {
        this.setState({
          todo: e.target.value,
        });
    }

    handleTodoSubmit = () => {
        store.collection('todos').add({
            text: this.state.todo,
        });

        this.setState({ todo: '' });
    }

    render() {
        const { todo } = this.state;

        return (
            <div>
                <input type="text" value={todo} onChange={this.handleTodoChange} />
                <button onClick={this.handleTodoSubmit}>Envoyer</button>
            </div>
        );
    }
}

export default TodoInput;
