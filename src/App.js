import './App.css';
import styled from 'styled-components';
import YoureSquare from './Audio/youresquare.wav';
import SnappedSpleen from './Audio/snappedspleen.wav';
import Hamstrings from './Audio/hamstrings.wav';
import Twist from './Audio/twist.wav';
import ParmaHam from './Audio/parmaham.wav';
import Elbow from './Audio/elbow.wav';
import Dinner from './Audio/dinner.wav';

import Kev from './Images/kev.png';

const Button = styled.button`
  padding: 10px;
  background: yellow;
  cursor: pointer;
  border: none;
  background-color: #EC5637;
  color: #fff;
  text-shadow: 0 1px 1px #b25900;
  border: none;
  padding: 0.84em 1.47em;
  font-size: 13px;
  line-height: 18px;
  box-shadow: 0 5px 0 #C43012,0px 7px 3px rgba(0,0,0,0.25);
  border-radius: 6px;
  width: 45%;
  margin: 10px 0;

  &:hover {
    background-color: #EF684E;
  }

  &:active {
    margin-top: 14px;
    margin-bottom: 6px;
    -webkit-box-shadow: 0 1px 0 #F17C65,0 1px 2px rgba(0,0,0,0.25);
    -moz-box-shadow: 0 1px 0 #F17C65,0 1px 2px rgba(0,0,0,0.25);
    box-shadow: 0 1px 0 #F17C65,0 1px 2px rgba(0,0,0,0.25);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function App() {

  function handleAudio(audioComponent) {
    const audio = new Audio(audioComponent)
    audio.play();
  }

  return (
    <>
      <div className="App">
        <h1>Kev went to the wrestling.</h1>
        <ButtonContainer>
          <Button onClick={() => handleAudio(YoureSquare)}>You're square</Button>
          <Button onClick={() => handleAudio(SnappedSpleen)}>Snapped spleen</Button>
          <Button onClick={() => handleAudio(Hamstrings)}>Hamstrings</Button>
          <Button onClick={() => handleAudio(Twist)}>Twist</Button>
          <Button onClick={() => handleAudio(ParmaHam)}>Parma Ham</Button>
          <Button onClick={() => handleAudio(Elbow)}>Elbow</Button>
          <Button onClick={() => handleAudio(Dinner)}>Dinner</Button>
        </ButtonContainer>
        <img src={Kev} alt="Kevin went wrestling" style={{width: '100%'}}/>
      </div>
    </>
  );
}

export default App;
