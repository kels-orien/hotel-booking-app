import React, {useEffect, useState } from "react";
import { useCart } from "./../../providers/CartProvider";
import {CreditCardForm} from "../CreditCardForm";
import clockIcon from "../../assets/svg/clock.svg";


const PaymentForm = () => {

  


  const {
    state: { data: cart, items_cost: cost, items_quantity:quantity },
  } = useCart();
  
  
  return (
    <div className="booking-bg">
      <div className="booking-bg--padded">
        <div className="payment-page-container">
          <div className = "booking main-contents booking-payment-container">
          
          
          </div>
          <div className ="booking-main-contents">
            <div className = "guest-information">
              
              <div className="guest-information-content guest-information-content--custom">
                  {cart ? <CreditCardForm/>:""}
              </div>
            </div>

          </div>
          <div className = "booking-sidebar booking-sidebar--customs">
            <div className ="jagged-border white-bg">

              <div className = "sidebar-book--custom">
                <div className = "sidebar-book sidebar-book--custom">
                    <div className ="book-hotel-details">
                      <div className="image">

                      </div>

                      <div className = "about-booking">
                        <h4>Hotel name</h4>
                        <p className="address">address</p>
                      </div>
                    </div>
                    <hr className="sidebar-book--custom-hr"></hr>

                    <div className ="checkin-checkout booking-checkin-checkout">
                        <div className="checkin">
									<span className="form-caption--custom">Check in</span>
									<div className="checkin-details">
										<p>
											
											<span>Fri, 6 Nov 2020</span>
										</p>
										<p>
											<img className="img-clock-checkin" src={clockIcon}/>&nbsp;
											<span>
												12:00 PM</span>
										</p>
									</div>
								</div>

                <div className="booking-duration">
									<span>----</span>1 Night
									<span>----</span>
								</div>

                <div className="checkout">
									<span className="form-caption--custom">Check out</span>
									<div className="checkout-details">
										<p>
  
											<span>Sat, 7 Nov 2020</span>
										</p>
										<p>
											<img className="image-clock-book" src={clockIcon}/>&nbsp;
											<span>
												12:00 PM</span>
										</p>
									</div>
								</div>

                    </div>
                    <hr className="sidebar-book--custom-hr"></hr>

                    <div className="head-count-block">
								<div className="head-count">
									<ul>
										<li>{quantity} Rooms</li>
										<li>1 Guest</li>
										<li>1 Night</li>
									</ul>
								</div>
								<div className="change-head-count">
									<div className="change-button">
										<form id="changeRoomsForm" action="https://hotels.ng/hotel/89172-transcorp-metropolitan-hotel-conferencing-cross-river/book" method="POST">
											<a data-ga-label="change" data-ga-action="check-out-button-click" data-ga-category="Book-Page-Interaction" id="changeRoomsButton" href="#">Change</a>
										</form>
									</div>
								</div>
							</div>
              <hr className="sidebar-book--custom-hr"></hr>
              <div className="room-list ">
								
                
								<ul className="booking-room-list">
									<li>
										<span className="room-type">1 Poolside Chalet</span>
										<span className="room-pricing">₦{cost}.00</span>
									</li>
							
								
								</ul>
							</div>

                    <div className = "head-count-block"></div>

                </div>
                
                <div className="room-list"></div>
              </div>
            <div className = "summary">
            <div className="row booking-total-part">
								<span className="col-xs-5 sub-total">Total Payable Amount</span>
								<span className="col-xs-7 booking-money">₦
									<span className="booking-total-display">{cost}.00</span>
								</span>
							</div>
            </div>
            </div>
          </div>


        </div>
     
     
     
      </div>
    </div>
  );
};

export default PaymentForm;
