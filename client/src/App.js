import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

//components
import GameControl from "./components/GameControl";
import GameBoard from "./components/GameBoard";
import CardBackground from "./assets/tablebackground.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck_id: null,
      matches: [],
      selectedCards: [],
      cards: [],
      attempts: 0
    };
  }
  getNewDeck = async () => {
    //first thing to do: get a new SHUFFLED deck from the api, can do that in one call, and draw all cards
    try {
      let deckObject = await fetch("api/cards/new").then(res => res.json());
      let { deck_id, cards } = deckObject;
      this.setState({ deck_id, cards, matches: [], selectedCards: [] });
    } catch (e) {
      console.log(e);
    }
  };

  selectCard = id => {
    let { matches, selectedCards } = this.state;
    //Could make the matches a hash table, so it'll be faster. for right now I'll leave it as an array
    //First, if they select a  previously matched / selected card, ignore the click
    if (
      matches.find(cardID => cardID === id) ||
      selectedCards.find(cardID => cardID === id)
    ) {
      return;
    }
    //this causes an interesting predicament, I want to check the match AFTER set state is called but before the next click

    this.setState({ selectedCards: selectedCards.concat(id) }, () => {
      //first, only check if there are two cards selected
      if (this.state.selectedCards.length === 2) {
        //increase match attemps
        this.setState({ attempts: this.state.attempts+=1 });

        if (this.handleMatches(this.state.selectedCards)) {
          this.setState({
            matches: matches.concat(this.state.selectedCards),
            selectedCards: []
          });
        } else {
          //not a match, remove the cards after a  bit
          setTimeout(() => this.setState({ selectedCards: [] }), 1000);
        }
      }
    });
  };
  handleMatches = cardArray => {
    //first make sure it has two elements
    if (cardArray.length < 2) {
      return cardArray;
    }
    //I know the codes are all  #S (number Suit, and I only need the number)
    let [card1, card2] = cardArray;
    if (card1[0] === card2[0]) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <Game className="">
        <GameControl
          getNew={this.getNewDeck}
          matches={this.state.matches}
          reset={this.resetGame}
          attempts={this.state.attempts}
        />
        <GameBoard
          cards={this.state.cards}
          selected={this.state.selectedCards}
          selectCard={this.selectCard}
          matches={this.state.matches}
          className=""
        />
      </Game>
    );
  }
}

const Game = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
  align-items: center;
`;

export default App;
