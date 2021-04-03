import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'



const App = () => {

	const [employee, setEmployee] = useState([])
	const [show, setShow] = useState(false)
	const [person, setPerson] = useState('')
	
    useEffect(() => {
		axios
		.get(`http://localhost:3001/employee`)
		.then(response => {
			console.log(response)
			setEmployee(response.data)
		})
	}, [])

    const showData = (id) => {
    	console.log(id)
    	const customer = employee.find(e => e.id === id)
    	setShow(true)
    	setPerson(customer)
    }
  	return (

	  	<>
		    <div className="App">
		      <header className="App-header">
		        <img src={logo} className="App-logo" alt="logo" />
		        <p>
		          Simple React App
		        </p>
		      </header>
		    </div>

		    <div className = "list-container">
		    	{employee.map((e, i) => {
		    		return <ul key = {i} className = "item">
		    		<li className = "bg-color"> {e.firstName + " " + e.lastName} </li>
		    		
		    		<li> {e.email} </li>
		    		<li> {e.phonenumber} </li>
		    		<button onClick = {() => showData(e.id)} className = "sub btn"> View Details </button>
		    		</ul>
		    	})}
		    </div>

		    {
		    	show === true ? 
		    	<div className = "person">
		    		<p className = "name"> {person.firstName}</p>
		    		<p> Name : {person.firstName + " " + person.lastName}</p>
		    		<p> Email : {person.email} </p>
		    		<p> Phone Number : {person.phonenumber} </p>
		    		<p> Job Profile : {person.JobProfile} </p>
		    		<p> City : {person.city} </p>
		    		<p> Date of join : {person.date} </p>
		    		<p> Country : {person.country} </p>
		    	</div>	 
		    	:
		    	<div></div>
		    }
	    </>
  	);
}

export default App;
