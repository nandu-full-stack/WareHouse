import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";

function Read() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(' http://localhost:3000/warehouses/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    console.log(data.is_live)
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h3>Details of WareHouse</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> <strong>ID:</strong> {data.id}</li>
                    <li class="list-group-item"> <strong>Name: </strong> {data.name}</li>
                    <li class="list-group-item"> <strong>City:</strong> {data.city}</li>
                    <li class="list-group-item"> <strong>Cluster: </strong> {data.cluster}</li>
                    <li class="list-group-item"> <strong>Space Available: </strong> {data.space_available}</li>
                    <li class="list-group-item"> <strong>
                        Registration Status: </strong> {data.is_registered ? 'Yes' : 'No'}
                    </li>
                    <li class="list-group-item"> <strong>Live Status: </strong>{data.is_live ? 'Yes' : 'No'}</li>
                </ul>

                <Link to = {`/update/${id}`} className="btn btn-success">Update</Link>
                <Link to = "/" className="btn btn-primary ms-3">Back</Link>
            </div>
        </div>
    )
}

export default Read