// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';

// const CheckoutForm = ({payItems}) => {
//     const [cardError, setCardError] = useState('')
//     const [clientSecret, setClientSecret] = useState("");
//     const {productPrice} = payItems;
//     useEffect(() => {
//       // Create PaymentIntent as soon as the page loads
//       fetch("http://localhost:5000/create-payment-intent", {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json" ,
//           authorization:`bearer ${localStorage.getItem('sendToken')}`
//       },
//         body: JSON.stringify({productPrice}),
//       })
//         .then((res) => res.json())
//         .then((data) => setClientSecret(data.clientSecret));
//     }, [productPrice]);
  
//     const stripe = useStripe();
//   const elements = useElements();
//     const handleSubmit= async(e)=>{
//         e.preventDefault();
//         if(!stripe || !elements){
//             return;
//         }

//         const card = elements.getElement(CardElement);

//         if (card == null) {
//           return;
//         }

//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         });
//         if(error){
//             setCardError(error.message);

//         }else{
//             setCardError('')
//         }
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <button className='bg-primary px-3 text-white border-none mt-3' type="submit" disabled={!stripe || !clientSecret}>
//         Pay
//       </button>
//       <p className='text-danger'>{cardError}</p>
//     </form>
//     );
// };

// export default CheckoutForm;