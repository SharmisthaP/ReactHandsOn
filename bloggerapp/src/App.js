import logo from './logo.svg';
import './App.css';
import  Books from './Components/books';
import Courses from './Components/courses';
import Posts from './Components/posts';

function App() {
  return (

    <div className="App">
      <Books/>
      <div class="vl"></div>
      <Courses/>
      <div class="vl"></div>
      <Posts/>
    </div>
    
  );
}

export default App;
