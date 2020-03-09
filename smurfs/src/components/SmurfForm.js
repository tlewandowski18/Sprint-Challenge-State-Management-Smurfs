import React, { useState } from "react" 
import axios from 'axios'

const SmurfForm = () => {

    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChange = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                id="name"
                name="name"
                value={newSmurf.name}
                onChange={handleChange}
            /><br />
            <label htmlFor="name">Name</label><br /><br />
            <input 
                id="age"
                name="age"
                value={newSmurf.age}
                onChange={handleChange}
            /><br />
            <label htmlFor="age">Age</label><br /><br />
            <input 
                id="height"
                name="height"
                value={newSmurf.height}
                onChange={handleChange}
            /><br />
            <label htmlFor="height">Height</label><br /><br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SmurfForm;