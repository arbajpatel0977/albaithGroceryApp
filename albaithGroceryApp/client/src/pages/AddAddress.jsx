import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'




// Input fields for address, city, state, zip code, country, and a button to save the address
const InputField = ({ type, placeHolder, name, handleChange, address }) => (
    <input className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition'
        type={type}
        placeholder={placeHolder}
        name={name}
        onChange={handleChange}
        value={address[name]} />
)
const AddAddress = () => {

    const { axios, navigate, user } = useAppContext();

    const [address, setAddress] = useState({
        firstName: "",
        lastName: "",
        email: '',
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phone: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    }


    const onSubmitHander = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.post('/api/address/add', { address, userId: user._id });
            if (data.success) {
                toast.success("Address added successfully");
                navigate('/cart');
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [])

    return (
        <div className='mt-16 pb-16'>
            <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span className='font-semibold text-primary'>Address</span></p>

            <div className='flex flex-col-reverse md:flex-row justify-between  mt-10'>
                <div className='flex-1 max-w-md'>
                    <form onSubmit={onSubmitHander} className='space-y-3 mt-6 text-sm'>

                        <div className='grid grid-cols-2  gap-4'>
                            <InputField handleChange={handleChange} name="firstName" type="text" address={address} placeHolder="First Name" />
                            <InputField handleChange={handleChange} name="lastName" type="text" address={address} placeHolder="Last Name" />
                        </div>

                        <InputField handleChange={handleChange} name="email" type="email" address={address} placeHolder="Email Name" />

                        <InputField handleChange={handleChange} name="street" type="text" address={address} placeHolder="Street" />

                        <div className='grid grid-cols-2 gap-4'>
                            <InputField handleChange={handleChange} name="city" type="text" address={address} placeHolder="city" />
                            <InputField handleChange={handleChange} name="state" type="text" address={address} placeHolder="state" />
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <InputField handleChange={handleChange} name="zipCode" type="number" address={address} placeHolder="Zip Code" />
                            <InputField handleChange={handleChange} name="country" type="text" address={address} placeHolder="country" />
                        </div>
                        <InputField handleChange={handleChange} name="phone" type="text" address={address} placeHolder="Phone" />
                        <button className='w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase'>Save Address</button>


                    </form>
                </div>
                <img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_image} alt="" />
            </div>
        </div>
    )
}

export default AddAddress