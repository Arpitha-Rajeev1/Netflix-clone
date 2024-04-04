import React, { useEffect, useState } from 'react'
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './PlanScreen.css';

function PlanScreen() {

    const [products, setProducts] = useState([]);

    // function razorPay(e) {
    //     var options = {
    //         // Qp1FvGvCLZq0gVUbifVapN1l
    //         "key": "rzp_test_dgoeVoKGNxBHiQ",
    //         "amount": "5000000",
    //         "currency": "INR",
    //         "name": "Movie App",
    //         "description": "Test Transaction",
    //         "image": "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
    //         "order_id": "order_KWhoj653hey3BA",
    //         "handler": function (response) {
    //             alert('Your razorpay order ID: '+ response.razorpay_payment_id)
    //             alert('Your razorpay order ID: '+ response.razorpay_order_id)
    //             alert('Your razorpay signature: '+ response.razorpay_signature)
    //         },
    //         "prefill": {
    //             "name": "John Doe",
    //             "email": "john.doe@example.com",
    //             "contact": "9999999999"
    //         },
    //         "notes": {
    //             "address": "Movie App Corporation Limited"
    //         },
    //         "theme": {
    //             "color": "#3399cc"
    //         }
    //     };
    //     var rzp1 = new window.Razorpay(options);
    //     rzp1.open();
    //     e.preventDefault();
    // }

    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(collection(db, 'products'));
            let product = []
            querySnapshot.forEach((doc) => {
                product = [...product, doc.data()]
            })
            setProducts(product)
        }
        fetchData()
    }, [])

    return (
        <div className='planScreen'>
            {products.map((doc) =>
                <div key={doc.id}>
                    {doc.active && <h3>Plans (Current Plan: {doc.name})</h3>}
                    {doc.active && <p>Renewal date: 01/{new Date().getMonth() + 2}/{new Date().getFullYear()}</p>}
                    <div className='planScreen__plan'>
                        <div className='planScreen__info'>
                            <h4>Netflix {doc.name} <br /> <span className='span'> {doc.description}</span></h4>
                        </div>
                        <div>
                            <button className='btn' disabled={doc.active} style={{ backgroundColor: doc.active ? 'gray' : 'red' }}>{doc.active ? 'Current Package' : 'Subscribe'}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PlanScreen