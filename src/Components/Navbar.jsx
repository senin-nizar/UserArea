import "./Navbar.css";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../Features/UserdetailSlice'

function Navbar() {
  const allUsers = useSelector((state) => state.app.users) 
  const dispatch = useDispatch() 
  const [searchData, setSearchData] = useState("")


  useEffect(() => {
    dispatch(searchUser(searchData))
  },[searchData])


  return (
    <div>
      <nav className="navbar md:navbar-expand bg-1">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">UserArea</Link>
          <button
            className="btn-icon navbar-toggler"
            type="button"
            data-bs-toggle="drawer"
            data-bs-target="#navbarDrawer"
            aria-controls="navbarDrawer"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>

          <dialog
            className="drawer drawer-end"
            tabIndex="-1"
            id="navbarDrawer"
            aria-labelledby="navbarDrawerLabel"
          >
        
            <div className="drawer-body mb-2 md:mb-0">
              <ul className="nav navbar-nav me-auto">
                
                <li className="nav-item">
                  <Link className="nav-link" to="/">Create User</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/read">All Users ({allUsers.length})</Link>
                </li>
                <li className="nav-item dropdown">
                 
                </li>
            
              </ul>

              <form className="hstack gap-2 " role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setSearchData(e.target.value)}
                />
                <button className="btn-solid btn-icon theme-secondary" type="submit">
                  <svg className="bi" width="16" height="16">
                    <use href="#search" />
                  </svg>
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </nav>
    </div>
  )
}

export default Navbar