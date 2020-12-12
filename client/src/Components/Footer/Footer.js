import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
        <div className="footer roboto">
            <div className="container">
                <div className="row container-fluid">
                    <div className="col-md-3">
                        <div>Get in touch!</div>
                    </div>
                    <div className="col-md-3">
                        <div>Location</div>
                        <div>Bengaluru Karnataka, India</div>
                    </div>
                    <div className="col-md-3">
                        <div>Contact</div>
                        <div>support@pretva.com</div>
                    </div>
                    <div className="col-md-3">
                        <div>Follow</div>
                        <div className="d-flex">
                            <div><i className="mr-4 facebook fab fa-facebook-f"></i></div>
                            <div><i className="mr-4 fab fa-instagram"></i></div>
                            <div><i className="fab fa-linkedin-in"></i></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        <div className="container roboto pt-1 pb-1">©2020 by PretVA</div>
        </>
    )
}

export default Footer
