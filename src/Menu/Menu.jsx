import { useState } from 'react'
import './MenuStyle.css'

export let Menu = ({onExitCompleted}) => {
    return (
        <div className="NavMenuBar">
            <span className='exit' onClick={onExitCompleted}>X</span>
        
            <nav className='MenuNav'>
                <ul >
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/residencies">Residencies</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/">Get Started</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
} 