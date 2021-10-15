import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Gallery />
      <div className="input-container">
        <input type="file"/>
      </div>
    </div>
  );
}

export default App;
