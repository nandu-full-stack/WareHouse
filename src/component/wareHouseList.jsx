import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function WareHouseList(){

    const[data,setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('id');

    useEffect(()=>{
         axios.get(' http://localhost:3000/warehouses')
         .then(res => setData(res.data))
         .catch(err => console.log(err));
    },[]);

    const filteredData = data.filter((warehouse) => {
        return warehouse.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'space_available') {
            return a.space_available - b.space_available;
        } else {
            return a.id - b.id;
        }
    });


    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 'style={{ marginTop: '40px' }}>
            <h1>List of WareHouses</h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
            <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by WareHouse Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                     <table className="table table-striped">
                        <thead>
                            <tr>
                                <th> Id <button className="btn btn-sm btn-primary me-2" onClick={() => setSortBy('id')}>Sort</button> </th>
                                <th>WareHouse Name <button className="btn btn-sm btn-primary me-2" onClick={() => setSortBy('name')}>Sort</button> </th>
                                <th>Space Avaliable <button className="btn btn-sm btn-primary me-2" onClick={() => setSortBy('space_available')}>Sort</button></th>
                                <th>Cluster</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sortedData.map((d,i)=>(
                                    <tr key={i}>
                                        <td>{d.id}</td>
                                        <td>{d.name}</td>
                                        <td>{d.space_available}</td>
                                        <td>{d.cluster}</td>
                                        <td>{d.city}</td>
                                        <td>
                                            <Link to = {`/read/${d.id}`} className="btn btn-sm btn-primary me-2">Read</Link>
                                            <Link to ={`/update/${d.id}`} className="btn btn-sm btn-danger">Update</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                     </table>
            </div>
        </div>
    )
}

export default WareHouseList