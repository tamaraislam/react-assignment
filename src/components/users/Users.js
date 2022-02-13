import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Users = (props) => {
    const { name, phone, email, id } = props.user;
    const navigate = useNavigate();
    return (
        <div className="col-md-4 col-sm my-3">
            <Card>
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <div className=' rounded-circle p-3 mb-2 bg-success text-white h-50 w-50'>{name.charAt(0)}</div>
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={{ maxHeight: "150px", overflow: "hidden" }}>{email}</Card.Text>
                    <p>{phone}</p>
                    <button onClick={() => navigate(`/users/${id}`)} type="button" class="btn btn-primary btn-lg btn-block">See Here Details</button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Users;