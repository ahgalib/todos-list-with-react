
import './App.css';
import Header from "./MyComponents/Header"

import {Todos} from "./MyComponents/Todos"
import {Footer} from "./MyComponents/Footer"

function App() {
  const onDelete = () => {
    console.log('onDelete is worked');
  }
  let todos = [
    {
      sno: 1,
      title: "Go to School",
      description : "Go to school to get some knowledge",
    },
    {
      sno: 2,
      title: "Go to Playground",
      description : "Go to playground to play some game",
    },
    {
      sno: 3,
      title: "Go to Market",
      description : "Go to market to get some product",
    },
  ]
  return (
    <>
      <Header title="Todo List Title" searchBar = {true}/>
      <Todos todos= {todos} onDelete={onDelete}/>
      
     
      <Footer/>
    </>
  );
}

export default App;
