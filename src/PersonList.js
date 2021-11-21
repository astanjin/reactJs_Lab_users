import React,{useState} from 'react'
import Person from './Person'

const PersonList = ({persons})=> {

    return (
        <div>
               {persons.map((person,index) =>{
              return <Person key={index} {...person}/>
            }   
          ) }
        </div>
        
           
        
    )
}

export default PersonList
 




// import React, { Component } from 'react'
// import axios from 'axios'

// export default class PersonList extends Component {
//  constructor(props) {
//      super(props)
 
//      this.state = {
//         persons: [] 
//      }
//  }
//  componentDidMount=()=> {
//      this.getPersonData()
//  }
 
   
//     getPersonData=()=>{
      
//             axios.get(`https://randomuser.me/api/?results=10`)
//             .then(res => {
//                 //console.log(res.data);
//                 const persons = res.data.results;
//                 this.setState({ persons });
//             })
       
//     }

//     render() {
//         return (
//             <div>
// {/* <button onClick={this.getPersonData}>data</button> */}
// {
//     this.state.persons.map((person,index) =>(
//         <div key={index}>
//         <h1 >name:{person.name.first} {person.name.last}</h1>
//         <p>{person.picture.large}</p>
//         </div>
//     )
//     )
// }

//             </div>
//         )
//     }
// }

