import React, { Component } from 'react';

import { auth } from './client/firebase';
import Todos from './components/Todos';
import Landing from './screens/Landing';

class App extends Component {
  state = {
    ready: false,
    signup: false,
  }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
        this.setState({ ready: !!user})
    });
  }

  handleLogout = () => {
    auth.signOut().then((logout) => {
      console.log({ logout });
      this.forceUpdate();
    }).catch((error) => {
      console.log({ error });
    });
  };

  render() {
    if (!this.state.ready) {
      return <Landing />;
    }

    return (
      <div>
        <button onClick={this.handleLogout}>LOGOUT</button>
        <Todos />
      </div>
    );
  }
}

export default App;
