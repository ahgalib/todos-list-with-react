
import './App.css'
import Header from './MyComponents/Header'
import {Todos} from './MyComponents/Todos'
import {Footer} from './MyComponents/Footer'
function App() {
 
  const onDelete = () => {
    console.log('Delete button Clicked');
  }
  let todos = [
    {
      'sno':1,
      'title':'Go to School',
      "desc":'To increase your knowlegde'
    },
    {
      'sno':2,
      'title':'Go to School222',
      "desc":'To increase your knowlegde222'
    },
    {
      'sno':2,
      'title':'Go to School333',
      "desc":'To increase your knowlegde333'
    }
  ]
  
  return (
    <>
    <Header title="This is my Header Title" searchBar="false"/>
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  )
}

export default App;
