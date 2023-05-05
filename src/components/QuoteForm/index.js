import React from 'react'
import './quoteForm.css'

const QuoteForm = () => {
  return (
    <div className="quote-form-container" id="quoteForm">
        <div className="quote-form-heading-container">
            <div className="quote-form-heading">
                <span>Get a Quote, and go Online!</span>
            </div>
            <div className="quote-form-subheading">
                Fill this form, and we will get back to you, within 24-hours.
            </div>
        </div>
        <div className="quote-form-wrapper">
        <form className="quote-form">
            <div className="quote-form-split">
                <div className="quote-form-item">
                    <div className="quote-form-label">
                        Business Name
                    </div>
                    <div className="quote-form-input">
                        <input type="text" className="quote-form-input-field"/>
                    </div>
                </div>
                <div className="quote-form-item">
                    <div className="quote-form-label">
                        Email
                    </div>
                    <div className="quote-form-input">
                        <input type="text" className="quote-form-input-field"/>
                    </div>
                </div>
            </div>
            <div className="quote-form-item">
                <div className="quote-form-label">
                    Project Title
                </div>
                <div className="quote-form-input">
                    <input type="text" className="quote-form-input-field" placeholder="eg. A Website for my Bangalore-Based Cafe"/>
                </div>
            </div>
            <div className="quote-form-item">
                <div className="quote-form-label">
                    Project Description
                </div>
                <div className="quote-form-input">
                    <textarea className="project-description-txtarea quote-form-input-field" placeholder="describe, your requirements, preferences or deadlines." resize="none"></textarea>
                </div>
            </div>
            <div className="quote-form-footer">
                <button className="quote-submit-button">
                    Submit
                </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default QuoteForm