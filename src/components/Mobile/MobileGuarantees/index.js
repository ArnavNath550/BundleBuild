import React from 'react'
import './mobileGuarantees.css';

const MobileGuarantees = () => {
    const scrollData = [
        {
            'heading': "First draft - is free",
            'subheading': "The first draft of your website will always be free. Your website is more important to us.",
            'ctaTitle': "Get your free first-draft",
            'img': 'assets/img/pane_images/guarantees/first_draft_pane_image.svg'
        },
        {
            'heading': "Beautiful. Fullstop",
            'subheading': "Nothing less than beautiful, we want to give you something that will shine.",
            'ctaTitle': "Get your beautiful website",
            'img': 'assets/img/pane_images/guarantees/beautiful_pane_image.svg'
        },
        {
            'heading': "Revisions, Revisions",
            'subheading': "We want to work with you, and revise your website, to your liking.",
            'ctaTitle': "Revise, your best website.",
            'img': 'assets/img/pane_images/guarantees/revisions_pane_image.svg'
        },
      ]
  return (
    <div className="mobile-guarantees-container" id="mobileOurGuaranteesSection">
        <div className="section-step-icon">            
                <svg width="122" height="247" viewBox="0 0 122 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="124.5" width="122" height="122" rx="61" fill="var(--secondary)"/>
                <path d="M42.7681 180.34C42.7148 179.967 42.6881 179.62 42.6881 179.3C42.6881 178.927 42.6881 178.58 42.6881 178.26C42.6881 176.02 43.0881 173.887 43.8881 171.86C44.6881 169.833 45.8348 168.047 47.3281 166.5C48.8748 164.953 50.7681 163.727 53.0081 162.82C55.2481 161.913 57.7815 161.46 60.6081 161.46C63.3815 161.46 65.8615 161.887 68.0481 162.74C70.2348 163.593 72.0748 164.74 73.5681 166.18C75.0615 167.62 76.1815 169.327 76.9281 171.3C77.7281 173.22 78.1281 175.247 78.1281 177.38C78.1281 180.793 77.2481 183.86 75.4881 186.58C73.7281 189.247 71.3548 191.513 68.3681 193.38L58.1281 199.94C56.6348 200.9 55.3015 201.967 54.1281 203.14C52.9548 204.26 52.1815 205.62 51.8081 207.22H78.4481V214.5H42.1281C42.1815 212.367 42.4215 210.367 42.8481 208.5C43.3281 206.633 44.0481 204.847 45.0081 203.14C46.0215 201.433 47.3015 199.833 48.8481 198.34C50.3948 196.793 52.2615 195.3 54.4481 193.86L63.0881 188.26C65.5415 186.713 67.3281 185.033 68.4481 183.22C69.6215 181.407 70.2081 179.487 70.2081 177.46C70.2081 176.287 69.9948 175.167 69.5681 174.1C69.1948 172.98 68.6081 171.993 67.8081 171.14C67.0081 170.287 65.9948 169.62 64.7681 169.14C63.5415 168.607 62.1015 168.34 60.4481 168.34C58.7415 168.34 57.2481 168.633 55.9681 169.22C54.7415 169.753 53.7015 170.5 52.8481 171.46C52.0481 172.42 51.4348 173.54 51.0081 174.82C50.6348 176.1 50.4481 177.487 50.4481 178.98C50.4481 179.353 50.4481 179.727 50.4481 180.1C50.5015 180.473 50.5548 180.873 50.6081 181.3L42.7681 180.34Z" fill="white"/>
                <path d="M60.5 126.5V0" stroke="var(--secondary)" stroke-width="5"/>
                <defs>
                <linearGradient id="paint0_linear_3_187" x1="50" y1="195.5" x2="61" y2="246.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1B59F9"/>
                <stop offset="1" stop-color="#1B59F9" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_3_187" x1="61" y1="0" x2="61" y2="126.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1B59F9" stop-opacity="0"/>
                <stop offset="0.994792" stop-color="#1B59F9"/>
                </linearGradient>
                </defs>
                </svg>

            <div className="section-step-name our-guarantees-title">
                OUR GUARUNTEES  
            </div>
        </div>
        {scrollData.map((y) => {
            return (
                <div className="mobile-mission-item">
                    <div className="mobile-mission-item-img">
                        <img src={y.img} />
                    </div>
                    <div className="mobile-mission-item-details">
                        <div className="mobile-mission-item-heading">
                            {y.heading}
                        </div>
                        <div className="mobile-mission-item-subheading">
                            {y.subheading}
                        </div>
                        <div className="mobile-mission-item-cta">
                            <button className="btn-primary" style={{width: "100%"}}>
                                {y.ctaTitle}
                            </button>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default MobileGuarantees