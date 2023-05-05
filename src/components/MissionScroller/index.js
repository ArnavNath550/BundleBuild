import React from 'react'
import ScreenText from './ScreenText'

import './missionScroller.css'

const MissionScroller = () => {
    const [currentImg, setCurrentImg] = React.useState(0);
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
    <div className="mission-scroller">
        <div className="scroller-full-screen-wrapper">
            {scrollData.map((screen, i) => {
                return (
                <div className="scroll-full-screen">
                    <ScreenText screen={screen} i={i} setCurrentImg={setCurrentImg} />
                </div>
                );
            })}
        </div>
        <div classNmae="mission-mockup-wrapper non-mission">
            <div className="mobile-mockup">
                <img src={scrollData[currentImg].img} className="mission-screen-img fade-in-bottom"
                key={scrollData[currentImg].img}
                />
            </div>
        </div>
    </div>
  )
}

export default MissionScroller