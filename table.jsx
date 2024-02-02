import React, { useEffect, useState } from "react";
import axios from 'axios';
import './table.css'

export function Table() {
    const [data, setData] = useState([])
    const [fruit, setFruit] = useState('')
    const [price, setPrice ] = useState('')
    const [ufruit, setuFruit] = useState('')
    const [uprice, setuPrice ] = useState('')
    const [editID, setEditID ] = useState(-1)
    useEffect(() => { 
        axios.get('http://localhost:3000/fruits')
        .then(res => setData(res.data))
        .catch(er=> console.log(er));
    }, [])
    const handleSubmit = (event) =>{
        // event.preventDefault();
        const id = (data.length+ 1).toString();
        axios.post('http://localhost:3000/fruits/', {id : id, fruit: fruit, price: price})
        .catch(er=> console.log(er));

    }
    const handleEdit = (id) =>{
        axios.get('http://localhost:3000/fruits/' + id)
        .then(res => {
            console.log(res.data)
            setuFruit(res.data.fruit)
            setuPrice(res.data.price)
        } 
            )
        .catch(er=> console.log(er));
        setEditID(id)
    }
    const handleUpdate = () => {
        axios.put('http://localhost:3000/fruits/' + editID , {id : editID ,fruit : ufruit ,price : uprice})
        .then (res => {
            setEditID(-1);
        }).catch(err => console.log(err));
    }
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/fruits/' + id)
            // Perform any necessary state updates or UI changes here
        .catch(err => console.log(err));
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder="Enter fruit" onChange={e => setFruit(e.target.value)}/>
                <input type="text"  placeholder="Enter price" onChange={e => setPrice(e.target.value)} pattern="\d+(\.\d{1,2})?" />
                <button>addFruits</button>

            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fruit</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((fruits, index) =>(
                            fruits.id === editID?
                            <tr>
                                <td>{fruits.id}</td>
                                <td><input type='text' value={ufruit} onChange={e => setuFruit(e.target.value)} /></td>
                                <td><input type='text' value={uprice} onChange={e => setuPrice(e.target.value)} /> </td>
                                <td><button className="update-btn" onClick={handleUpdate}>Update</button></td>
                            </tr>
                            :   
// pattern="\d+(\.\d{1,2})?"
                            <tr key={index}>
                                <td>{fruits.id}</td>
                                <td>{fruits.fruit}</td>
                                <td>{fruits.price}</td>
                                <td>
                                    <button onClick={() => handleEdit(fruits.id)}>edit</button>
                                    <button onClick={() => handleDelete(fruits.id)}>delete</button>
                                </td> 
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}