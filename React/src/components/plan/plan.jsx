import React from 'react'
import './plan.css'
const Plan = () => {
  return (
    <>
          <div class="title" id="pricing">
      <div>choose a plane</div>
      <h3>Find A Perfect Plan</h3>
    </div>
    <div class="plane-content">
      <div class="container">
        <div class="box one">
          <h4>Standard Plan</h4>
          <div>$<span>50</span>/Mo</div>
          <button>Select Plan</button>
          <p>Access to gym facilities</p>
          <p>Unlimited fitness classes</p>
          <p>Monthly personal training session</p>
          <p>Nutritional consultation</p>
          <p>24/7 gym access</p>
        </div>
        <div class="box two">
          <h4>Premium Plan</h4>
          <div>$<span>80</span>/Mo</div>
          <button>Select Plan</button>
          <p>All features of Standard Plan</p>
          <p>Additional 2 personal training</p>
          <p>Access to exclusive fitness events</p>
          <p>Discounts on supplements</p>
          <p>Premium gym equipment access</p>
        </div>
        <div class="box three">
          <h4>Platinum Plan</h4>
          <div>$<span>120</span>/Mo</div>
          <button>Select Plan</button>
          <p>All features of Premium Plan</p>
          <p>Unlimited personal training</p>
          <p>Customized meal plans</p>
          <p>Priority booking for classes</p>
          <p>Complimentary gym merchandise</p>
        </div>
        <div class="box three">
          <h4>Corporate Plan</h4>
          <div>Contact us for Pricing</div>
          <button>Contact Us</button>
          <p>Customized corporate fitness</p>
          <p>Team-building fitness activities</p>
          <p>Health and wellness workshops</p>
          <p>Dedicated account manager</p>
          <p>Flexible billing options</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Plan