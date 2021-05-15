import {createGlobalStyle} from 'styled-components';
import Game from './components/game/game';


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body{
    background-color: #6bb07e;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Game></Game>
    </>
  );
}

export default App;
