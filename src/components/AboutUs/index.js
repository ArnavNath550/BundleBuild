import React from 'react'
import './aboutUs.css'

const AboutUs = () => {
  return (
    <section className="about-us-section" id="aboutUsSection">
        <div className="section-step-icon">
            <svg width="122" height="247" viewBox="0 0 122 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="125" width="122" height="122" rx="61" fill="url(#paint0_linear_21_2)"/>
                <path d="M60.9584 215V178.44H48.3984V172.92C52.0251 172.813 55.0118 171.88 57.3584 170.12C59.7051 168.307 61.1718 165.987 61.7584 163.16H68.6384V215H60.9584Z" fill="white"/>
                <path d="M60.5 127V0.5" stroke="url(#paint1_linear_21_2)" stroke-width="5"/>
                <defs>
                <linearGradient id="paint0_linear_21_2" x1="26" y1="145.5" x2="79.5" y2="209" gradientUnits="userSpaceOnUse">
                <stop stop-color="#694BEA"/>
                <stop offset="1" stop-color="#694BEA" stop-opacity="0.62"/>
                </linearGradient>
                <linearGradient id="paint1_linear_21_2" x1="61" y1="0.5" x2="61" y2="127" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8D76EF" stop-opacity="0"/>
                <stop offset="1" stop-color="#8D76EF"/>
                </linearGradient>
                </defs>
            </svg>
            <div className="section-step-name about-us-title">
                ABOUT US
            </div>
        </div>
        <div className="mission-container">
            <div className="mission-container-heading">
                Our Mission
            </div>
            <div className="mission-container-description">
                Empowering small businesses with stunning websites is our passion. Let us help you achieve online success and take your brand to new heights.
            </div>
        </div>
    </section>
  )
}

export default AboutUs