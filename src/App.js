import react, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const writeSomething = (event) => {
   setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          To<code>do</code> List
        </h1>

          <div className="">
               <input type="text" placeholder="Add Items" style={{padding: "15px", fontSize:"20px", backgroundColor:"lightYellow", border:"none"}} onChange={writeSomething} value={inputList} />
               <button onClick={listOfItems} style={{padding: "15px", fontSize:"20px", backgroundColor:"skyblue", border:"none"}}> + </button>
               
                {Items.map((itemval) => {
                  return <p> {itemval} </p>
                })}
               
          </div>

        {/* <a
          className="App-link"
          href="">
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;