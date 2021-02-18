import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import ReactDOM from "react-dom";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useCart, useDispatchCart  } from "../../providers/CartProvider";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {addEmail } from "../../actions";

const CreditCard = () => {
  const { register, handleSubmit, watch, errors } = useForm();


  const [mode, setMode] =  useState(true);
  const [cardMode, setCardMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const {
    state: { data: cart, items_cost: cost, slug: slugId, hotel_name:name_of_hotel },
  } = useCart();

  const { dispatch } = useDispatchCart();

  const handleForm = async (event) => {
    event.preventDefault();


    handleSpinner();
    const cardElement = elements.getElement("card");


    try {
      const { data: clientSecret } = await axios.post(`/api/pay`, {
        amount: cost,
        cartItems: cart,
        slugNumber: slugId,
        fname: firstName,
        lname: lastName,
        email: email
      });
      //debugger;
      //console.log("client secret: ", clientSecret);

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });
      if (paymentMethodReq.error) {
        console.log(paymentMethodReq.error.message);
        handleSpinner();
        return;
      }
      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (error) {
        console.log(error.message);
        return;
      }
      let msg = await axios.post(`/api/email`, {
        firstname: firstName,
        lastname: lastName,
        email,
        hotel_name:name_of_hotel,
        booking: cart,
        amount:cost
      });
      console.log("Payment Successful");
      console.log("msg: ", msg.data)
      addEmail({dispatch, email})
      router.push(`/success`);
    } catch (err) {
      console.log("error: ", err.message);
      handleSpinner();
    }







    
  }
  const handleSpinner = () => {
    let overlay = document.getElementById("spinner-overlay");
    let imageSpinner = document.getElementById("img-spinner");

    if (
      overlay.style.display === "block" &&
      imageSpinner.style.display === "block"
    ) {
      overlay.style.display = "none";
      imageSpinner.style.display = "none";
    } else {
      overlay.style.display = "block";
      imageSpinner.style.display = "block";
    }
  };
  
  const onSubmit = values  => {
    
    const { firstname, lastname, email} = values;
    setFirstName(firstname);
    setLastName(lastname);
    setEmail(email);

    console.log(values)
    setMode(false);
    setCardMode(true);
    
   
  };

  return (
    <div className="guest-information-header">
      
      {mode ? (<div>
<form  onSubmit={handleSubmit(onSubmit)}>
        <div
        className="guest-last-name booking-form-control-blocks"
        id="last_name_margin"
      >
        <div className="guest-information-header">
        <h2>Your Details</h2>
        </div>
        <input
          name="firstname"
          className="booking-form-control"
          placeholder ="First Name"
          ref={register({ required: "Required", pattern: {
              value:/^(.{1,31}$)[a-zA-Z]*$/g,
              message:"First name must not exceed 20 letters" ,
          } })}
        />
        <span className="data-error">{errors.firstname && errors.firstname.message}</span>
      </div>

      <div
        className="guest-last-name booking-form-control-blocks"
        id="last_name_margin"
      >
        
        <input
          name="lastname"
          className="booking-form-control"
          placeholder="  Last Name"
          ref={register({ required: "Required", pattern: {
            value:/^(.{1,31}$)[a-zA-Z]*$/g,
            message:"Last name should not exceed 20 letters" 
        }, maxLength: 20 })}
        />
        <span className = "data-error">{errors.lastname && errors.lastname.message}</span>
      </div>
      <div
        className="guest-last-name booking-form-control-blocks"
        id="last_name_margin"
      >
        

        <input
          name="email"
          className="booking-form-control"
          placeholder="Email"
          ref={register({
            required: "Required",
            pattern: {
                value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message:"Incorrect email format" 
            }
          })}
        />
        <span className = "data-error">{errors.email && errors.email.message}</span>

      </div>
      
      <button
        className="new-btn-primary width-enlarge"
        type="submit"
      >
        Submit
      </button>
      </form>
      </div>):""}
    
      {cardMode ? ( <div className="form-overlay">
    <form onSubmit={handleForm}>
    <div className="guest-information-header">
        <h2>Your Card Details</h2>
        </div>
      <CardElement />
      <button
        className="new-btn-primary width-enlarge"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form> </div>):""}
     
     
   
    </div>
  );
};

const stripePromise = loadStripe(
  "pk_test_51HDSq6Aqtgg5jMkr13NRMUDA0ssNB57ULnHDc99IIItKnUR5Zf0yhTBygZXBNpRa6gxF4QAAM1mwHimZEqPlgEQu00i36L7CvA"
);

export const CreditCardForm = () => (
  <Elements stripe={stripePromise}>
    <CreditCard />
  </Elements>
);

export default CreditCardForm;
