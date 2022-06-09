import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const Contact = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const email = {
            customerName: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            message: data.message
        }
        fetch(`https://serene-wave-89546.herokuapp.com/contact`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(result => {

                console.log(result)
            });
        toast(`Thanks for your email`)
        reset();

    };

    return (

        <div className="hero contact-section min-h-fit pt-20 pb-40" >


            <div className="card-body w-96">
                <h2 className="text-3xl text-primary font-bold">Request A Quote</h2>
                <p>We ensure our customers receive the best quality prices and service. Feel free to mail us </p>

                <form className='gap-1' onSubmit={handleSubmit(onSubmit)}>

                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="input bg-base-200  border-2 focus:border-lime-600 rounded-3xl w-full max-w-xs md:mr-7 mb-2"
                        {...register("name")} />

                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="input bg-base-200 rounded-3xl border-2 focus:border-lime-600  w-full max-w-xs mb-2"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Please provide valid email address'
                            }
                        })} />

                    <label class="label label-text-alt">
                        {errors.email?.type === 'required' && <span className='text-red-600'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-red-600'>{errors.email.message}</span>}
                    </label>

                    <input
                        type="text"
                        placeholder="Please white subject here"
                        className="input bg-base-200 outline-0  border-2 focus:border-lime-600 rounded-3xl w-full max-w-xs mb-2"
                        {...register("subject")} />

                    <input
                        type="textarea"
                        placeholder="Leave Your message here"
                        className="input bg-base-200 border-2 focus:border-lime-600  rounded-xl w-full h-36 max-w-xs lg:max-w-2xl my-3"
                        {...register("message", {
                            required: {
                                value: true,
                                message: 'Please write your messages'
                            }
                        })} />

                    <label class="label label-text-alt">
                        {errors.message?.type === 'required' && <span className='text-red-600'>{errors.message.message}</span>}
                    </label>

                    <button type="submit" className="btn max-w-xs btn-primary  bg-gradient-to-r from-secondary to-primary  text-white">Submit Request <span className='ml-2'></span></button>

                </form>

            </div>

        </div>


    );
};

export default Contact;