import logo from './logo.svg';
import './App.css';
function showEntry(props) {
  return (
    <div className="App">
      {props.email}
      <ul>
        <li>{props.fullname}</li>
        <li>{props.phonenumber}</li>
      </ul>
    </div>
  )

}
function App() {
  return (
    <>
      <showEntry>
        email = "austinpelto16@gmail.com"
        fullname = "Austin Pelto"
        phonenumber = "+7036385794"
      </showEntry>
    </>
  );
}

export default App;
