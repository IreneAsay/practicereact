import React, { Component } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <FriendCard
          this.state.
        />
        <FriendCard
          name={friends[1].name}
          image={friends[1].image}
          occupation={friends[1].occupation}
          location={friends[1].location}
        />
        <FriendCard
          name={friends[2].name}
          image={friends[2].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
      </Wrapper>
    );
  }
}

export default App;

