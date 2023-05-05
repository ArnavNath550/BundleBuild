import React from 'react'
import './mobileMission.css';

const MobileMission = () => {
    const scrollData = [
        {
            'heading': "We'll Build Mobile Friendly...",
            'subheading': "The world is going mobile, your business should too.",
            'ctaTitle': "Get a Mobile-Friendly Website",
            'img': 'assets/img/pane_images/mobile_friendly_pane_image.svg'
        },
        {
            'heading': "Drive Conversions and Boost Sales",
            'subheading': "Maximise Customer Engagement with Expertly Placed CTAs on Your Website.",
            'ctaTitle': "Get a Customer Friendly Website",
            'img': 'assets/img/pane_images/cta_pane_image.svg'
        },
        {
            'heading': "SEO Optimised - Websites",
            'subheading': "Google will love your website after we're done with it, Get an SEO friendly website.",
            'ctaTitle': "Get a Mobile-Friendly Website",
            'img': 'assets/img/pane_images/seo_optimised_pane_image.svg'
        },
      ]
  return (
    <div className="mobile-mission-container">
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

export default MobileMission