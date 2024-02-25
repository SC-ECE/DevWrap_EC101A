import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <span>.yumYard</span>
            </div>
            <div className="menu">
                <ul>
                    <li>About Us</li>
                    <li style={{ color: '#D62828' }}>+91-8955XXXXXX</li>
                </ul>
            </div>
            <div className="accounts">
                <ul>
                    <li>Account
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </nav>
    )
}
