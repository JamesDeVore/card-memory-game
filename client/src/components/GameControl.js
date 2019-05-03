import React, { Component } from "react";
import styled, { css } from "styled-components";

//This will be the main component, will track the state of the game, handle new games, etc.
//State will include deck id, number of matches, if a card if flipped
export default function GameControl(props) {
  console.log(props);
  return (
    <InfoPanel className="mb-6 justify-center">
      <div className="info m-2">
        <h1 className="text-black font-bold tracking-wide">Memory Game</h1>
        <h2 className="font-hairline">Let's test your memory!</h2>
        <hr />
        <p className="italic font-light ">
          Try and match all the numbers in the fewest moves possible
        </p>
        <p className="italic font-light ">
          Only two cards can be face up at a time, matched cards remain visible
        </p>
      </div>
      <div className="controls flex flex-row align-baseline">
        <button
          onClick={() => props.getNew()}
          className=" shadow bg-orange hover:bg-orange-dark text-black font-bold px-4 py-4 rounded mr-2"
        >
          New Game
        </button>
        <div className="ml-6 ">
          <h3 className="font-bold align-center">
            Current Matches: {props.matches.length / 2}
          </h3>
          <h3 className="font-bold align-center mt-2">
            Match Attempts: {props.attempts}
          </h3>
        </div>
        <div className="card-design ml-8">
          <h3 className="text-white">Choose card back:</h3>
          <ThumbGrid className="grid">
            {props.images.map(design => (
              <Thumbnail 
              src={design} 
              alt="Cardback"
              onClick={() => props.chooseImage(design)}
              />
            ))}
          </ThumbGrid>
        </div>
      </div>
    </InfoPanel>
  );
}

const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ThumbGrid = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

const Thumbnail = styled.img`
  width: 40px;
  height: 60px;
  margin: 2px;
  &:hover{
    border:2px solid red;
    border-radius:3px;
  }
`;
