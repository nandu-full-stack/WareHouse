import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


function Update() {

    const [values, setValues] = useState({
        name: '',
        city: '',
        cluster: '',
        space_available: '',
        is_live: ''
    })


    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/warehouses/' + id)
            .then(res => setValues(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();
    
        axios.put('http://localhost:3000/warehouses/' + id, values)
            .then(res => {
                console.log(res);
                navigate(`/read/${id}`)
            })
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h2>Update WareHouse</h2>
                <form onSubmit={handleUpdate}>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name" value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="city">City:</label>
                        <input type="text" name="city" className="form-control" placeholder="Enter City" value={values.city}
                            onChange={e => setValues({ ...values, city: e.target.value })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="cluster">Cluster:</label>
                        <input type="text" name="cluster" className="form-control" placeholder="Enter Cluster" value={values.cluster}
                            onChange={e => setValues({ ...values, cluster: e.target.value })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="space">Space Available:</label>
                        <input type="number" name="space_available" className="form-control" placeholder="Enter Availabilty" value={parseInt(values.space_available)}
                            onChange={e => setValues({ ...values, space_available: parseInt(e.target.value) })}
                        />
                    </div>
                    <div className="mb-2">
                        <label>Live Status:</label>
                        <div className="form-check">
                            <input type="checkbox" name="is_live" className="form-check-input" checked={values.is_live}
                                onChange={e => setValues({ ...values, is_live: e.target.checked })}
                            />
                            <label className="form-check-label" htmlFor="status">Is Live</label>
                        </div>
                    </div>
                    <button className="btn btn-success">Update</button>
                    <Link to = "/" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>

        </div>
    )
}

export default Update