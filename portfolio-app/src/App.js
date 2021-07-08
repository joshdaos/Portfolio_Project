import logo from './logo.svg';
import './App.css';
// imports
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/skills';



function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
