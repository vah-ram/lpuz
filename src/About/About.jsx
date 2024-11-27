import './About.css'

export default function AboutFunc() {
    return (
        <>
            <div className="AboutContainer">
                <h1 className='aboutTitle'>
                    About our <span>work</span>
                </h1>
                    <span className="homeImages">
                        <div>
                            <img 
                            src="https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-house-design-bold-expression.png" alt=""/>
                        </div>

                        <div>
                            <img
                            src="https://i.pinimg.com/736x/1a/ae/2b/1aae2b998f7efa59d144ac6713fd00e1.jpg" alt="" />
                        </div>

                        <div>
                            <img 
                            src="https://jdhostetter.com/wp-content/uploads/2023/07/trending-home-exterior-design-ideas-to-incorporate-in-2023-01--747x420.jpg" alt="" />
                        </div>

                    </span>

                <p className='aboutText'>
                    The purpose of our work is that we sell houses to people. We sell houses at very affordable prices. If you need houses at very affordable prices, contact us and we will help you.
                </p>
            </div>
        </>
    ) 
};