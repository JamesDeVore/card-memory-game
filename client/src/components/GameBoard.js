import React from 'react'
import styled from 'styled-components'
import Card from './Card'

export default function GameBoard(props) {
  console.log(props)
  return (
    <Board>
      {props.cards.map(cardObj => (
        <CardItem>
          <Card 
          card={cardObj} 
          key={cardObj.code} 
          selected={props.selected} 
          selectCard={props.selectCard} 
          matches={props.matches}
          cardDesign={props.cardImage}
          />
        </CardItem>
      ))}
    </Board>
  );
}

const Board = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content:center;
  margin:4px;
`;
const CardItem = styled.div`
  width: 7%;
  margin: 3px;
  & hover {
    border: 4px solid yellow;
  }
  @media (max-width: 700px) {
    width:20%;
    margin:4px;
  }
`;

