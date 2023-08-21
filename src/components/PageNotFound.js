import React, { Component } from 'react'
import './PageNotFound.css'




export default function NavBar() {
    return (
        <div className="page-not-found">
            <div>
                <h1 className="page-not-found-heading">Sorry,</h1>
                <img src="./Images/NotFound.png" alt="" className="page-not-found-img"/>
            </div>
            <p className="page-not-found-paragraph">404 - Page Not Found</p>

        </div>


    )
}



