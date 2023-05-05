import React from 'react'
import './pageHero.css'

const PageHero = () => {
  return (
    <>
        <div className="page-hero">
            {/* <img src="assets/img/shine_light.png" className="page-hero-light" /> */}
            <div className="page-hero-container">
                <div className="page-hero-content">
                    <div className="page-hero-heading">
                        Take your Business, Online<br />
                        with <span style={{color: "var(--black)"}}>bundlebuild</span><span style={{color: "var(--orange)"}}>_</span>
                    </div>
                    <div className="page-hero-subheading">
                    Get a pyaari website that boosts conversions! Affordable prices and expert design
                    </div>
                    <div className="btn-primary" onClick={() => window.location = "#aboutUsSection"}>
                        Lets build your stunning website
                    </div>
                </div>
                <div className="page-hero-scrolldown" onClick={() => window.location = "#aboutUsSection"}>
                    <svg width="112" height="77" viewBox="0 0 112 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 3L56.5 43L98.5 3" stroke="#C7C7C7" stroke-width="5" stroke-linecap="round"/>
                        <path d="M3 23L56.3136 73L109 23" stroke="#C7C7C7" stroke-opacity="0.4" stroke-width="5" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </>
  )
}

export default PageHero