/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY; // You can set this dynamically based on user preference or location
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchchQuery, setSearchQuery] = useState("");

    // fetch seller status
    const fetchSeller = async () => {
        try {
            const { data } = await axios.get('/api/seller/is-auth');
            if (data.success) {
                setIsSeller(true);
            } else {
                setIsSeller(false);
            }
        } catch (error) {
            setIsSeller(false);
            console.log("Error fetching seller status:", error);
        }
    }

    // fetch user auth status      // user data &  cart data

    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/user/is-auth');
            if (data.success) {
                setUser(data.user);
                console.log("Fetched user data:", data.user);
                setCartItems(data.user.cartItems);
            } else {
                setUser(null);
                console.log("User not authenticated:", data.message);
            }
        } catch (error) {
            setUser(null);
            console.log("Error fetching user:", error.message);
        }
    }



    // Fetch products from an API or use dummy data
    const fetchProduct = async () => {
        try {
            const { data } = await axios.get('/api/product/list');
            if (data.success) {
                setProducts(data.products);

            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Error fetching products", error.message);
        }
    }

    // Fetch product in Cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartItems[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Item added to cart");
    }

    //updated product in cart
    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart updated");
    }

    //remove product from cart 
    const removeFromCart = (itemId) => {

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId];
            }
        }
        toast.success("Item removed from cart");
        setCartItems(cartData);
    }


    // get cart item count 
    const getCartItemCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    }

    //get cart total Amount 
    const getCartTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            let itenInfo = products.find((prod) => prod._id === item);
            if (cartItems[item] > 0) {
                totalAmount += itenInfo.offerPrice * cartItems[item];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }




    useEffect(() => {
        fetchUser();
        fetchSeller();
        fetchProduct();

    }, []);


    // update data in cart items
    useEffect(() => {
        const updateCart = async () => {
            try {
                const { data } = await axios.post('/api/cart/update', { cartItems })
                if (data.success) {
                    console.log(cartItems);
                }
                if (!data.success) {
                    toast.error(data.message);
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
        if (user) {
            console.log("Updating cart for user:", user._id);
            updateCart();
        }

    }, [cartItems])


    const value = {
        navigate, user, setUser, isSeller, setIsSeller, showUserLogin,
        setShowUserLogin, products, currency, addToCart, updateCartItem, removeFromCart, cartItems, getCartTotalAmount, getCartItemCount,
        searchchQuery, setSearchQuery, axios, fetchProduct, fetchUser, setCartItems
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}