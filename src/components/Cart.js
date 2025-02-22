import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";
import { useEffect, useState } from "react";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items);
    const [orderDetails, setOrderDetails] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);

    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => total + (item.price || 0), 0);

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        const res = await loadRazorpay();

        if (!res) {
            alert('Razorpay SDK failed to load');
            return;
        }

        // Make API call to your backend to create order
        try {
            const response = await fetch('YOUR_BACKEND_API/create-order', {
                method: 'POST',
                body: JSON.stringify({
                    amount: totalAmount * 100, // Razorpay expects amount in paise
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const orderData = await response.json();
            setOrderDetails(orderData);

            const options = {
                key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your key
                amount: totalAmount * 100,
                currency: "INR",
                name: "Your Store Name",
                description: "Payment for your order",
                order_id: orderData.id,
                handler: function (response) {
                    // Handle successful payment
                    alert('Payment Successful');
                    dispatch(clearCart());
                },
                prefill: {
                    name: "Customer Name",
                    email: "customer@example.com",
                    contact: "9999999999"
                },
                notes: {
                    address: "Customer Address"
                },
                theme: {
                    color: "#3399cc"
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        }
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold mb-6">Cart</h1>
            
            {cartItems.length > 0 ? (
                <div className="max-w-4xl mx-auto">
                    {/* Order Details Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                        <ItemList items={cartItems} setTotalAmount={setTotalAmount}/>
                        <div className="flex justify-between items-center mt-4 pt-4 border-t">
                            <button 
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                onClick={handleClearCart}
                            >
                                Clear Cart
                            </button>
                            <div className="text-xl font-bold">
                                Total: ₹{totalAmount.toFixed(2)}
                            </div>
                        </div>
                    </div>

                    {/* Payment Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>₹{totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between border-t pt-4">
                                <span className="font-bold">Total Amount:</span>
                                <span className="font-bold">₹{totalAmount.toFixed(2)}</span>
                            </div>
                            <button 
                                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                onClick={handlePayment}
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
};

export default Cart;
