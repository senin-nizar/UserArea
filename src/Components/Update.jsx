import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Features/UserdetailSlice";

const Update = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [updateData, setUpdateData] = useState();
  const { users, loading } = useSelector((state) => state.app);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const singleUser = users.find((ele) => ele.id === id);
      setUpdateData(singleUser);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <h2 className="text-center my-5">EDIT USER DETAILS</h2>
      <form className="w-50 mx-auto mt-5 my-5" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={newData}
            value={updateData && updateData.name}
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
            onChange={newData}
            value={updateData && updateData.email}
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
            onChange={newData}
            value={updateData && updateData.age}
          />
        </div>

        <div className="form-field">
          <input
            className="radio"
            name="gender"
            value="Male"
            type="radio"
            checked={updateData && updateData.gender === "Male"}
            onChange={newData}
          />
          <label>Male</label>
        </div>
        <div className="form-field">
          <input
            className="radio"
            name="gender"
            value="Female"
            type="radio"
            checked={updateData && updateData.gender === "Female"}
            onChange={newData}
          />
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

export default Update;
