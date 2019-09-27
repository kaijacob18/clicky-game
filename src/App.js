import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topscore: 0,
    score:0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const newfriends = this.state.friends.map(friend => {
      if(friend.id === id)
      {
      
        if(!friend.clicked)
        {
         
          if(this.state.score>= this.state.topscore)
          {
            this.setState({
              topscore: this.state.score +1
             })

             friend.clicked=true;
          }

           this.setState({
             score: this.state.score + 1
            })
           
        }



        if(friend.clicked)
        {
          this.setState({
            score: 0 
           })
           friend.clicked=false;
        }

       
       
       // alert("Match"+friend.id+ ""+id)
  
      }
      return friend
      });
    // Set this.state.friends equal to the new friends array
    this.setState({ friends:  newfriends });

    const newArray = this.state.friends.sort(()=> Math.random()-.5)
    this.setState({ friends:newArray });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <h1 className = "title">Friends List</h1>
        <Title >Score: {this.state.score} {' '} High Score:{this.state.topscore} </Title>
    
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
