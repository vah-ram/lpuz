import './FooterStyle.css'
import CountUp from 'react-countup';

export let Footer = () => {
    return (
        <>
            <footer className="main_footer">
                
                <div className="footerDiv">
                    <h1 className="titleText">
                        Discover <br />
                        Most Suitable <br />
                        <span>Property</span>
                    </h1>
 
                    <p className="secondaryText">
                        Find a variety of properties thatsuit you very easilty<br />
                        Forget all difficulties in finding a residence for you
                    </p>

                    <div className="searchDiv">
                        <img src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png" alt="" className="placeIcon"/>

                        <input type="text" className='SearchInput'
                        placeholder='Type...'/>
                            <div className="searchBtn">
                                <p>Search</p>
                            </div>
                    </div>

                    <div className="beginners">
                        <span className='numBeginner'> 
                            <span>
                                <CountUp start={0} end={3710} duration={5}/>
                                <p>+</p>
                            </span>

                            <h4>Premium Products</h4>
                        </span>

                        <span className='numBeginner'>
                            <span>
                                <CountUp start={7340} end={5140} duration={5}/>
                                <p>-</p>
                            </span>

                            <h4>Happy Customers</h4>
                        </span>

                        <span className='numBeginner'>
                            <span>
                                <CountUp start={20} end={4280} duration={5}/>
                                <p>+</p>
                            </span>

                            <h4>Award Winning</h4>
                        </span>
                    </div>
                </div>

                <div className="parentImgDiv">
                    <div className="imgDiv">
                        
                    </div>
                </div>

                
            </footer>

        </>
    )
};