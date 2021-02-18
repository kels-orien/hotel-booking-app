
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";


const Form = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
      };
    
    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div
        className="guest-last-name booking-form-control-blocks"
        id="last_name_margin"
      >
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
        Pay
      </button>
      </form>
    )
}

export default Form
