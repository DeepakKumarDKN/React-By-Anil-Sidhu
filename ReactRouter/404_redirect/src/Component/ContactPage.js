import React from 'react'

function ContactPage() {
  return (
    <>
     <div className="contact-us">
        <div className="visit-us">
            <h1>Visit Us</h1>
            <p>17th floor Tower A, Brigade Signature Towers, Sannatammanahalli, <br/>Bengaluru, Karnataka 562129</p>
            <p>Mobile: 9090909090</p>
            <p>Email:contact@ineuron.ai</p>
        </div>
        <div className="map">
            <iframe title="ineuron-map" width="600" height="250" frameborder="0" scrolling="no" 
            marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=660&amp;height=900&amp;hl=en&amp;q=iNeuron&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
     </div>

     
    </>
   


  )
}

export default ContactPage
