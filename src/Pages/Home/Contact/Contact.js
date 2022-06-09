import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';


const Contact = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data, e) => {

        emailjs.sendForm('service_t2yjpt7', 'template_m6usr6m', e.target, '05q1Ckj6xqf-KKHgb')
            .then(res => console.log(res))
            .catch(err => console.log(err))
        reset();

    };

    return (

        <div className="hero contact-section min-h-fit pt-20 pb-40" >

            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <div>
                        <div>

                        </div>
                        <div>
                            <h2 class="card-title">Phone</h2>
                            <p>+8801717888789</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="card-body w-96">
                <h2 className="text-3xl text-primary font-bold">Get in Touch</h2>

                <form className='gap-1' onSubmit={handleSubmit(onSubmit)}>

                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="input input-bordered w-full max-w-xs md:mr-7 mb-2"
                        {...register("name")} />

                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="input input-bordered w-full max-w-xs mb-2"
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
                        className="input input-bordered w-full max-w-xs mb-2"
                        {...register("subject")} />

                    <input
                        type="textarea"
                        placeholder="Leave Your message here"
                        className="input input-bordered w-full h-36 max-w-xs lg:max-w-2xl my-3"
                        {...register("message", {
                            required: {
                                value: true,
                                message: 'Please write your messages'
                            }
                        })} />

                    <label class="label label-text-alt">
                        {errors.message?.type === 'required' && <span className='text-red-600'>{errors.message.message}</span>}
                    </label>

                    <button type="submit" className="btn max-w-xs btn-primary  bg-gradient-to-r from-secondary to-primary  text-white">Submit</button>

                </form>

            </div>

        </div>


    );
};

export default Contact;