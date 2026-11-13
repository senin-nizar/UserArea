import React from "react";
import './Create.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../Features/UserdetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const[users, setUsers] = useState({})
    const navigate = useNavigate();

    const dispatch = useDispatch();



  const getUserData = (e) => {
    setUsers({...users,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    navigate('/read');

  }

  return (
    <div>
      <h2 className="text-center my-5">FILL USER DETAILS</h2>
      <form className="w-50 mx-auto mt-5 my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
          name="name"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
          name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={getUserData}

          />
      
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            name="age"
            type="text"
            className="form-control"
            onChange={getUserData}

          />
        </div>


        <div className="form-field">
          <input className="radio" name='gender' value='Male' type="radio"  onChange={getUserData} />
          <label>Male</label>
        </div>
        <div className="form-field">
          <input className="radio" name="gender" value='Female' type="radio"   onChange={getUserData} />
          <label>Female</label>
        </div>
        <br></br>

        <button type="submit" className="btn-solid theme-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
