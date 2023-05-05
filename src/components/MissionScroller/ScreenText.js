import React from 'react'

const ScreenText = ({screen, setCurrentImg, i}) => {
    const [showAnimation, setShowAnimation] = React.useState(false);
    const ref = React.useRef(null);
    const toggleAnimation = (e) => {
        if(e[0]?.isIntersecting) {
            setShowAnimation(true);
            setCurrentImg(i);
        }
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    React.useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation, options);
        if(!showAnimation) {
            if(ref.current) 
            observer.observe(ref.current);
        }
    })
  return (
    <div className={`screen-text ${showAnimation == true ? 'text-visible': ''}`} ref={ref}>
        <div className="screen-heading">
            {screen.heading}
        </div>
        <div className="screen-subheading">
            {screen.subheading}
        </div>
        <div className="screen-cta">
            <button className="btn-get-quote" onClick={() => window.location = "#quoteForm"}>
                {screen.ctaTitle}
            </button>
        </div>
    </div>
  )
}

export default ScreenText