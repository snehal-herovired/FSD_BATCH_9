import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
function App() {
  let a =50
  let b=10;
  let c=20;
  console.log("parent rendering")
  return (
    // JSX : js + xml(html)
    // Babel :
    // react fragement
    <>

      <p>hello React :{b+a}</p>
      <div>hi</div>
      <Header a={a}/>
    </>
  
  
  );
}

export default App;
