import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const divStyle = {color : 'red', height: 30 };
      const MyComponent = () => (
      <div style={divStyle}>Hello</div>
    );
  return (
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          출입
        </a>
      </header>
    </div>*/


    <div>
    <MyComponent />
  </div>


    //리엑트 JSX 내부에 스타일 선언
    /*<div style ={{height: 20, width: 200}}>
    </div>*/




    //컴포넌트가 여러 요소 반환시 상위 요소(div등)에 삽입해야함
    //단축버전(React.Fragment)
    /*<> 
      <h1>Hello, World</h1>
      <p>First React based-webPage</p>
    </>*/

    /*<div> 
      <h1>Hello, World</h1>
      <p>First React based-webPage</p>
    </div>*/
  );
}

export default App;
