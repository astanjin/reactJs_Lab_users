
import './App.css';
import React,{useState,useEffect} from 'react';
import PersonList from './PersonList'
import Loading from './Loading';
import {Container,Row,Col,Button} from'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const url='https://randomuser.me/api/?results=10'


function App(){
  const[loading,setLoading] =useState(true)
  const[persons,setPersons] =useState([])
  const fetchPerson =async ()=>{
    setLoading (true)
    try {
        const response = await fetch(url)
        const people = await response.json()
        const persons =people.results
        console.log(persons)
         setLoading(false)
         setPersons(persons)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  
  }
  useEffect(()=>{
   fetchPerson()
  },[])
  if(loading){
    return(
      <div>
        <Loading/>
      </div>
    )
  }
  return(
    <div style={{backgroundColor: "#e2ece9"}}>
    <h4 style={{backgroundColor: "#bee1e6",textAlign:'center',height:100,paddingTop:30}}>List of users</h4>
      <PersonList persons={persons}/>
    </div>
  )


}


// function App() {
//   const[people,setPeople]=useState('https://randomuser.me/api/?results=10')
//   return (
//     <div className="App">
//       <h1> {people.length}</h1>
//       <PersonList people={people}/>
      
//     </div>
//   );
// }

 export default App;
