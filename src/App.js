import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav />
        <Welcome />
      </header>
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
