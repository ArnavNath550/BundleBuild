import React from 'react'
import './header.css'

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const navigatePage = (type) => {
        if(type == "ABOUT_US") {
            toggleSidebar();
            window.location = "#aboutUsSection";
        }
    }

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

  return (
    <>
    <header className="page-header">
        <div className="page-header-logo">
            <img src="assets/img/logos/bundlebuild_main.svg"/>
        </div>
        <div className="page-header-nav-container">
            <nav className="page-header-nav desktop-only">
                <ul>
                    <li onClick={() => window.location = "#aboutUsSection"}>About Us</li>
                    <li onClick={() => window.location = "#ourGuaranteesSection"}>Our Guarantees</li>
                    <li onClick={() => window.location = "#sampleWorksSection"}>Sample Works</li>
                </ul>
            </nav>
        </div>
        <div className="page-header-nav-cta">
            <button className="btn-get-quote" onClick={() => window.location = "#quoteForm"}>
                Get Quote
            </button>
        </div>
        <div className="page-header-mobile mobile-only">
        <button class="hamburger hamburger--collapse" type="button" onClick={() => toggleSidebar()}>
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
            </button>
        </div>
    </header>
    {sidebarOpen == true ? (
        <div>
        <div className="mobile-overlay"></div>
        <div className="mobile-sidebar">
            <div className="mobile-sidebar-header">
                <button class="hamburger hamburger--collapse is-active" type="button" onClick={() => toggleSidebar()}>
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
                </button>
            </div>
            <nav className="mobile-sidebar-nav">
                <ul className="mobile-sidebar-list">
                    <li onClick={() => navigatePage("ABOUT_US")}>About Us</li>
                    <li onClick={() => navigatePage("OUR_GUARANTEES")}>Our Guarantees</li>
                    <li onClick={() => navigatePage("SAMPLE_WORKS")}>Sample Works</li>
                </ul>
            </nav>
        </div>
    </div>
    ) : (
        <></>
    )}
    </>
  )
}

export default Header