import React from 'react'
import './quoteForm.css'
import { useForm, ValidationError } from '@formspree/react';
import SuccessSubmitQuote from '../SuccessSubmitQuote';

const QuoteForm = () => {
    const [state, handleSubmit] = useForm('xnqywrrp');
    if (state.succeeded) {
      return <SuccessSubmitQuote />;
    }
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
        <form className="quote-form" onSubmit={handleSubmit}>
            <div className="quote-form-split">
                <div className="quote-form-item">
                    <div className="quote-form-label">
                        Business Name
                    </div>
                    <div className="quote-form-input">
                        <input type="text" name="business_name" className="quote-form-input-field"/>
                    </div>
                    <ValidationError 
                        prefix="Business Name" 
                        field="business_name"
                        errors={state.errors}
                    />
                </div>
    
                <div className="quote-form-item">
                    <div className="quote-form-label">
                        Email
                    </div>
                    <div className="quote-form-input">
                        <input type="text" name="email" className="quote-form-input-field"/>
                    </div>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className="quote-form-item">
                <div className="quote-form-label">
                    Project Title
                </div>
                <div className="quote-form-input">
                    <input type="text" name="project_name" className="quote-form-input-field" placeholder="eg. A Website for my Bangalore-Based Cafe"/>
                    <ValidationError 
                        prefix="Project Name" 
                        field="project_name"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className="quote-form-item">
                <div className="quote-form-label">
                    Project Description
                </div>
                <div className="quote-form-input">
                    <textarea className="project-description-txtarea quote-form-input-field" placeholder="describe, your requirements, preferences or deadlines." resize="none" name="project_description"></textarea>
                </div>
                <ValidationError 
                        prefix="Project Description" 
                        field="project_description"
                        errors={state.errors}
                    />
            </div>
            <div className="quote-form-footer">
                <button className="quote-submit-button" type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default QuoteForm
