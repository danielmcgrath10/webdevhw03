import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

function App() {
  const [targetNum, setTargetNum] = useState(undefined);
  const [numGuesses, setNumGuesses] = useState(0);

  useEffect(() => {
    if(!targetNum) {setNewNum()}
  })

  const setNewNum = () => {
    setTargetNum(Math.floor(1000 + Math.random() * 9000));
  }

  const resetGame = () => {
    setNewNum();
    setNumGuesses(0);
  }

  const checkWin = (e) => {
    let guess = e.target.value;
    console.log(e.target);

  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      checkWin(e);
    }
  }

  return (
    <div className="App">
      <Container id={"game-container"} fluid>
        <Row>

        </Row>
        <Row>

        </Row>
        <Row>
          <InputGroup className={"mb-3"}>
            <FormControl
              type={"number"}
              onKeyPress={handleKeyPress}
            />
            <InputGroup.Append>
              <Button onClick={checkWin} variant={"outline-secondary"}>Enter</Button>
              <Button onClick={resetGame} variant={"outline-secondary"}>Reset</Button>
            </InputGroup.Append>
          </InputGroup>
        </Row>
      </Container>
    </div>
  );
}

export default App;
