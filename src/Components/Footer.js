import React from 'react'
import "./Footer.css"
import logo1 from '../Images/logo1.jpg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerPanel">
                <div className="footerPanelLeft">
                    <div>
                        <h3>Mahesh Wagh</h3>
                        <h6>(XYZ)</h6>
                        <p>+91 982822343232</p>
                    </div>
                    <div>
                        <h3>Suresh Tambe</h3>
                        <h6>(XYZ)</h6>
                        <p>+91 982822343232</p>
                    </div>
                    <div>
                        <h3>Santosh M</h3>
                        <h6>(Cashier)</h6>
                        <p>+91 982822343232</p>
                    </div>
                </div>
                <div className="footerPanelRight">
                    <div className="footerLogo">
                        <img src={logo1} alt="" />
                        <h2>Navyug Gym</h2>
                    </div>
                    <h6><i className="ri-mail-fill"></i>navyuggym@gmail.com</h6>
                    <p><i className="ri-map-pin-2-fill"></i>J J Hospital Compound, Byculla, <span>Mumbai-400008</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
