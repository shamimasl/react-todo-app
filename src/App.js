
import './App.css';
import Home from './components/Home';

const dummyTodos=[
  {
    id:1,
    title:"title 1",
    desc:"desc 1"
  },
  {
    id:2,
    title:"title 2",
    desc:"desc 2"
  }
]

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
