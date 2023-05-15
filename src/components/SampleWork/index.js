import React from 'react'
import './sampleWorks.css'
import TakeALookButton from '../TakeALookButton'

const SampleWork = () => {
  return (
    <div className="sample-work-container" id="sampleWorksSection">
        <div>
            <div className="section-step-icon">                
                <svg width="122" height="247" viewBox="0 0 122 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="124.5" width="122" height="122" rx="61" fill="url(#paint0_linear_3_196)"/>
                <path d="M52.5506 183.94L67.8306 169.86H43.0306V162.66H78.2306V169.7L63.4306 183.38C65.3506 183.38 67.244 183.7 69.1106 184.34C71.0306 184.98 72.7373 185.967 74.2306 187.3C75.7773 188.58 77.0306 190.207 77.9906 192.18C78.9506 194.153 79.4306 196.473 79.4306 199.14C79.4306 201.327 79.004 203.433 78.1506 205.46C77.3506 207.433 76.1506 209.193 74.5506 210.74C72.9506 212.287 70.9773 213.513 68.6306 214.42C66.3373 215.327 63.6706 215.78 60.6306 215.78C57.644 215.78 54.9773 215.327 52.6306 214.42C50.284 213.513 48.284 212.313 46.6306 210.82C45.0306 209.273 43.7773 207.54 42.8706 205.62C41.964 203.647 41.4573 201.593 41.3506 199.46L49.0306 197.7C49.084 199.407 49.4306 200.953 50.0706 202.34C50.7106 203.727 51.5373 204.9 52.5506 205.86C53.6173 206.82 54.8173 207.567 56.1506 208.1C57.5373 208.633 59.004 208.9 60.5506 208.9C62.3106 208.9 63.884 208.66 65.2706 208.18C66.6573 207.647 67.804 206.953 68.7106 206.1C69.6173 205.193 70.3106 204.153 70.7906 202.98C71.2706 201.807 71.5106 200.58 71.5106 199.3C71.5106 197.593 71.1906 196.127 70.5506 194.9C69.964 193.673 69.164 192.687 68.1506 191.94C67.1373 191.14 65.9906 190.553 64.7106 190.18C63.484 189.807 62.2306 189.62 60.9506 189.62C59.404 189.62 57.884 189.887 56.3906 190.42L52.5506 183.94Z" fill="white"/>
                <path d="M60.5 126.5V0" stroke="url(#paint1_linear_3_196)" stroke-width="5"/>
                <defs>
                <linearGradient id="paint0_linear_3_196" x1="50" y1="195.5" x2="61" y2="246.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FC801A"/>
                <stop offset="0.9999" stop-color="white"/>
                </linearGradient>
                <linearGradient id="paint1_linear_3_196" x1="61" y1="0" x2="61" y2="126.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FC801A"/>
                <stop offset="0.994792" stop-color="#FC801A"/>
                </linearGradient>
                </defs>
                </svg>
                <div className="section-step-name sample-works-title">
                    SAMPLE WORKS
                </div>
            </div>
            <div className="mission-container">
            <div className="mission-container-heading">
                Look, then fall in love.
            </div>
            <div className="mission-container-description">
                Take a look with our Sample Works, and fall in love with us
            </div>
        </div>
            <div className="sample-works-content">
                <div className="sample-work-card">
                    <div className="sample-work-card-image">
                        <img src="/public/assets/img/munascafe.png" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                    </div>
                    <div className="sample-work-card-details">
                        <div className="sample-work-card-type">
                            CAFE
                        </div>
                        <div className="sample-work-card-heading">
                            Muna's Cafe
                        </div>
                        <a href="https://bundlebuild.github.com/YourCafe" className="unstyled-link"><TakeALookButton /></a>
                    </div>
                </div>
                {/* <div className="sample-work-card">
                    <div className="sample-work-card-image">
                        
                    </div>
                    <div className="sample-work-card-details">
                        <div className="sample-work-card-type">
                            "SAMPLE_TYPE"
                        </div>
                        <div className="sample-work-card-heading">
                            "SAMPLE_HEADING"
                        </div>
                        <TakeALookButton />
                    </div>
                </div>
                <div className="sample-work-card">
                    <div className="sample-work-card-image">
                        
                    </div>
                    <div className="sample-work-card-details">
                        <div className="sample-work-card-type">
                            "SAMPLE_TYPE"
                        </div>
                        <div className="sample-work-card-heading">
                            "SAMPLE_HEADING"
                        </div>
                        <TakeALookButton />
                    </div>
                </div> */}

            </div>
        </div>
    </div>
  )
}

export default SampleWork
