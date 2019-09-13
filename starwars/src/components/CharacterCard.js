import React from 'react';
import styled from 'styled-components';


const CharName = styled.div`
font-size: 1.2rem;
font-weight: bold;
`;

const CharGen = styled.div`
font-size: 1.rem;
font-weight: bold;
color: blue;
`;
const CharHC = styled.div`
font-size: 1.3rem;
font-weight: bold;
color: red;
`;
function CharacterCard(props) {

    //console.log('props', props)

    return (
        <div>
            <CharName className='name'>{props.character.name}</CharName>
            <CharGen className='character'>{props.character.gender}</CharGen>
            <CharHC className='haircolor'>{props.character.hair_color}</CharHC>
        </div>
    )
}




export default CharacterCard



