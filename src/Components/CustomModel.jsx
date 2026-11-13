import { useSelector } from 'react-redux';
import './CustomModel.css'


function CustomModel({ id, showPopup, setShowPopup }) {
    const allUsers  = useSelector((state) => state.app.users);
    const singleUser = allUsers.filter((ele) => ele.id === id);

  return (
    <div className="modalBackground">
        <div className='modalContainer'>
        <button className='closeBtn' onClick={() => setShowPopup(false)}>X</button>

        <h1>{singleUser[0]?.name}</h1>
        <p>{singleUser[0]?.email}</p>
        <p>{singleUser[0]?.gender}</p>
        </div>
      
    </div>
  )
}

export default CustomModel
