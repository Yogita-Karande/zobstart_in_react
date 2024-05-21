import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <section className="card-area section--padding">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-9">                      
                        <div >
                            <h3>Category</h3>
                            <ul className="list-style">
                                <li><NavLink className='nav-link'>Off-Shore-Job</NavLink></li>
                                <li><NavLink className='nav-link'>Shore-Job</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Location</h3>
                            <ul className="list-style">
                                <li><NavLink className='nav-link'>Mumbai</NavLink></li>
                                <li><NavLink className='nav-link'>Delhi</NavLink></li>
                                <li><NavLink className='nav-link'>Nagpur</NavLink></li>
                                <li><NavLink className='nav-link'>Bhopal</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home