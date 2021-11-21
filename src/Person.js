import React,{useState} from 'react'
import PersonList from './PersonList'
import { Row,Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@restart/ui/esm/Button';




 const Person = ({gender,name,email,picture,location,phone,cell})=>{
    return(
        <Container >
             <Row  md="auto">
            <Col xs lg="2">
      <img src={picture.large}/> 
      </Col>
      <Col md="auto">
         <Row >UserName:{name.title} {name.first} {name.last}</Row>
          <Row >Gender: {gender}</Row>
          <Row >Address:{location.street.number},{location.city},{location.city}</Row>
          <Row >Email: {email}</Row>
          <Row >Phone: {phone}</Row>
          <Row >Cell: {cell}</Row>
         
         
      </Col>
      <Col xs lg="2">
      </Col>
    </Row>
  <p></p>
   </Container>
    )


    
}

export default Person
 