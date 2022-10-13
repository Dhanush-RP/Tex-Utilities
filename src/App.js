import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <NavBar />
      <div className="container my-3">
      <About />
      <TextForm heading = "Enter the text to analyse" />
      </div>
    </>
  );
}

export default App;
