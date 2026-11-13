import "./Read.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUSer, showUser } from "../Features/UserdetailSlice";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";

function Read() {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);

  const [id, setId] = useState();

  const [showPopup, setShowPopup] = useState(false);

  const [radioData, setRadioData] = useState("");

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2 className="text-center my-5">Loading...</h2>;
  }

  return (
    <div className="read-page">
      {showPopup && (
        <CustomModel
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2 className="text-center my-5">ALL USERS</h2>
      <div className="read-filters ">
  {/* Keep your existing All, Male and Female inputs and labels here */}

      <input
        class="form-check-input"
        name="gender"
        type="radio"
        checked={radioData === ""}
        onChange={(e) => setRadioData("")}
      />
      <label class="form-check-label" for="flexRadioDefault1">
        All
      </label>
      <input
        class="form-check-input"
        name="gender"
        type="radio"
        value="Male"
        checked={radioData === "Male"}
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label" for="flexRadioDefault1">
        Male
      </label>

      <input
        class="form-check-input"
        name="gender"
        type="radio"
        value="Female"
        checked={radioData === "Female"}
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label" for="flexRadioDefault1">
        Female
      </label>
</div>
      {users &&
        users
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((ele) => {
            if (radioData === "Male") {
              return ele.gender === radioData;
            } else if (radioData === "Female") {
              return ele.gender === radioData;
            } else {
              return ele;
            }
          })
          .map((ele) => (
            <div key={ele.id} className="user-card">
              {" "}
              <div className="card-body">
                <h4 className="card-title">{ele.name}</h4>
                <p className="card-subtitle fg-3">{ele.email}</p>
                <p className="card-text">{ele.gender}</p>
                <button onClick={() => [setShowPopup(true), setId(ele.id)]}>
                  View
                </button>
                <Link to={`/edit/${ele.id}`}>Edit</Link>
                <button onClick={() => dispatch(deleteUSer(ele.id))} className="deltee">Delete</button>
              </div>
            </div>
          ))}
    </div>
  );
}
export default Read;
