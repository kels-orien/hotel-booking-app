import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Nav from "../components/Nav"
import Layout from "../components/layout";
import PageBody from "../components/pagebody";
import Footer from "../components/footer";
import { useCart } from "../providers/CartProvider";
import { clearStore } from "../actions";
import checkMark from "../assets/jpg/checkmark.jpg";




function Success() {

    const {
        state: { email: emailAddress },
      } = useCart();

    
    return (
        <Layout>
            <Nav/>
            <PageBody>
           <div className="container block-center">
              
               <div className="center-block col-md-4 text-center">
               <h1 className="font-edit">Success!</h1>
                <img src ={checkMark}/>
               <p>Your booking is successful. We have sent an email to your email address <span className="theme-color">{emailAddress}</span>. Please see for further details.</p>
               <Link href="/"><button type="button" className="new-btn-primary space-top">Go to Homepage</button></Link>
               </div>
           </div>
            </PageBody>
            <Footer/>
        </Layout>
    )
}



export default Success