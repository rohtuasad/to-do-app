import React, { Component } from "react";
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://rohtuasad.ru" className="navbar-brand">Rohtuasad</a></div>

                    <ul class="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/username">Home</Link></li>
                        <li><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul class="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent