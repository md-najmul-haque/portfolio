import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';


const Contact = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data, e) => {

        emailjs.sendForm('service_t2yjpt7', 'template_m6usr6m', e.target, '05q1Ckj6xqf-KKHgb')
            .then(res => {
                if (res.status === 200) {
                    toast.success('Thanks for your message. Will connect you soon.')
                } else {
                    toast.error('Sorry! Your message is not sent successfully. Please try again.')
                }
            })
            .catch(err => console.log(err))
        reset();

    };

    return (

        <div id='contact'>
            <h2 className="text-4xl lg:text-5xl text-center font-bold mb-7"><span className='text-white'>Get in</span> <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>Touch</span></h2>

            <div className="flex flex-col lg:flex-row jus items-center min-h-fit text-white" >
                <div data-aos="zoom-in-right" data-aos-duration="1500" className="flex-1 card w-96 text-primary-content">
                    <div className="card-body  pt-0">
                        <div className='flex items-center bg-white  p-5 rounded-xl '>
                            <div className='text-5xl text-primary mr-3'>
                                <FontAwesomeIcon icon={faSquarePhone} />
                            </div>
                            <div className='text-secondary'>
                                <h2 className="card-title text-2xl">Phone</h2>
                                <p className="font-bold" >+8801717888789</p>
                            </div>
                        </div>

                        <div className='flex items-center bg-white p-5 my-2 rounded-xl '>
                            <div className='text-5xl text-primary mr-3'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className='text-secondary'>
                                <h2 className="card-title text-2xl">Email</h2>
                                <p className="font-bold" >najmulhaque008@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-center bg-white p-5 rounded-xl'>
                            <div className='text-5xl text-primary mr-3'>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div className='text-secondary'>
                                <h2 className="card-title text-2xl">Location</h2>
                                <p className="font-bold" >Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div data-aos="zoom-in-left" data-aos-duration="1500" className="flex-1 card-body w-96">
                    <form className='gap-1' onSubmit={handleSubmit(onSubmit)}>

                        <div className='flex flex-col lg:flex-row'>

                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="input caret-black input-bordered w-full max-w-xs mb-3"
                                {...register("name")} />


                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                className="input caret-black input-bordered w-full lg:ml-7 mb-3 max-w-xs"
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


                        </div>

                        <input
                            type="text"
                            placeholder="Please white subject here"
                            className="input input-bordered caret-black w-full max-w-xs lg:max-w-2xl  mb-2"
                            {...register("subject")} />


                        <input
                            type="textarea"
                            placeholder="Leave Your message here"
                            className="input caret-black input-bordered w-full h-36 max-w-xs lg:max-w-2xl my-3"
                            {...register("message", {
                                required: {
                                    value: true,
                                    message: 'Please write your messages'
                                }
                            })} />

                        <label className="label label-text-alt">
                            {errors.message?.type === 'required' && <span className='text-red-600'>{errors.message.message}</span>}
                        </label>


                        <div className='flex justify-center'>
                            <button type="submit" className="btn max-w-xs btn-outline btn-primary">Send Message</button>
                        </div>


                    </form>

                </div>

            </div>
        </div>


    );
};

export default Contact;