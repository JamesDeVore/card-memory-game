import React from 'react'
import styled from 'styled-components'

export default function Card(props) {
  //first I need to see if the card has been selected / matched otherwise show the default back
let matched = false;

  let {card:{code, image}, selected, matches} = props
  let imageUrl = ""
  let addedClasses = " " //classes to add for animations and whatnot
  //now to control if it is selected, matched, or incorrect
  let selectedCard = selected.find(codes => codes === code)
  let matchedCard = matches.find(codes => codes === code)

  if(selectedCard){
    //if the code matches one of the selected cards
     imageUrl = image
     addedClasses+= " flip"
  } else if(matchedCard){
    //previously matched
    matched = true; //can be refactored later
    imageUrl = image;

  } 
  else {
    //not selected or matched, just put this as the final card back
     imageUrl = props.cardDesign;
     addedClasses +=" flipped-card"
  }

  //handling a wiggle animation for incorrectly selected cards
  if(selectedCard && !matchedCard && selected.length === 2){
    addedClasses += " incorrect"
  }

  return (
    <CardWrapper className={`card-wrapper ${addedClasses}`}  onClick={() => props.selectCard(code)}>
    <CardBody className="card deal">
      <div className={matched ? "matched" : ""} />
      <CardImage src={imageUrl} alt="" className="card-img" />
    </CardBody>
    </CardWrapper>
  );
}

const CardBody = styled.div`
width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
`

const CardWrapper = styled.div`
  position: relative;
  perspective: 1000px;
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius:3px;
  & hover {
    border: 4px solid yellow;
  }
`;

