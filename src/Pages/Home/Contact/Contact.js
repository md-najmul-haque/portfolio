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
            <h2 className="text-5xl text-center font-bold">Get in Touch</h2>

            <div className="flex items-center min-h-fit" >
                <div class="flex-1 card w-96 text-primary-content">
                    <div class="card-body">
                        <div className='flex items-center bg-primary p-5 rounded-xl '>
                            <div className='text-5xl mr-3'>
                                <FontAwesomeIcon icon={faSquarePhone} />
                            </div>
                            <div>
                                <h2 class="card-title text-2xl">Phone</h2>
                                <p class="font-semibold text-xl" >+8801717888789</p>
                            </div>
                        </div>

                        <div className='flex items-center bg-info p-5 rounded-xl '>
                            <div className='text-5xl mr-3'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <h2 class="card-title text-2xl">Email</h2>
                                <p class="font-semibold text-xl" >najmulhaque008@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-center bg-accent p-5 rounded-xl'>
                            <div className='text-5xl mr-3'>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div>
                                <h2 class="card-title text-2xl">Location</h2>
                                <p class="font-semibold text-xl" >Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex-1 card-body w-96">
                    <form className='gap-1' onSubmit={handleSubmit(onSubmit)}>

                        <div className='flex flex-col lg:flex-row'>

                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name")} />


                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full lg:ml-7 mb-3 max-w-xs"
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
                            className="input input-bordered w-full max-w-xs lg:max-w-2xl  mb-2"
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


                        <button type="submit" className="btn max-w-xs btn-primary">Submit</button>

                    </form>

                </div>

            </div>
        </div>


    );
};

export default Contact;