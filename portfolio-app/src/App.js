import logo from './logo.svg';
import './App.css';
// imports
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Project from './components/Project/project';




function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Project />
    </div>
  );
}

export default App;
