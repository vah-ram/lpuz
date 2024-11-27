import { useState } from 'react'
import { Menu } from '../Menu/Menu.jsx'
import './HeaderStyle.css'

export let Header = () => {

    let [arr,setArr] = useState(false)
 
    return (
        <>
            <header className="mainHeader">
               <div className="logoDiv">
                    <p>Homyz</p>
                </div> 

                <ul className="main_ul">
                    <li className='itemLi'><a href="/">Home</a></li>
                    <li className='itemLi'><a href="/residencies">Residencies</a></li>
                    <li className='itemLi'><a href="/about">About Us</a></li>
                    <li className='itemLi'><a href="/">Get Started</a></li>
                    <li className='itemLi'><a href="#">
                        <div className="btn"><p>Contact</p></div>
                    </a></li>

                    <li>
                        {arr ? '' : <nav 
                        className='menuBar'
                        onClick={() => {
                            setArr(!arr)
                        }}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </nav>}
                    </li>
                </ul>
    
                <span className="filteredSpan"></span>
                {arr ? <Menu onExitCompleted={() => {
                    setArr(false)
                }}/> : ''}
            </header>

            
        </>
    )
}