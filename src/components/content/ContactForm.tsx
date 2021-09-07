import React, {useState} from "react";
import {useForm} from "react-hook-form";
import styles from "../../styles/contact.module.css";
import sectionStyles from "../../styles/home.sections.module.css";
import axios from "axios";

import {errorToaster, successToaster} from "../global/helpers/Toaster";
import {ProgressLoader} from "../global/ProgressLaoder";

function ContactForm() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm({
        mode: "onBlur" // "onChange"
    });

    const onSubmit = (data) => {
        setLoading(true);
        const message =
            <>
                An error occurred while sending your message. <br/>
                If this problem persists, send us an email directly on <br/>
                <a className={"error-link"} href='mailto:crispicetechnologies@gmail.com'>crispicetechnologies@gmail.com</a>
            </>
        ;

        try {
            axios.post(
                `${process.env.MAIL_LINK}`,
                data
            ).then((response) => {
                if (response.status === 200) {
                    successToaster("Your message has been sent. We will respond as soon as possible.");
                    setLoading(false);
                }
            }).catch((error) => {
                const status = error.response?.data.status ?? 500;
                console.log(status);

                if (status === 400) {
                    errorToaster(message);
                    setLoading(false);
                } else {
                    errorToaster(message, 'error', 'top-right', 5000);
                    setLoading(false);
                }
            });

        } catch (error) {
            console.log("caught unknown error.");
            errorToaster(message,
                'error', 'top-right', 5000
            );
            setLoading(false);
        }
    }

    return (
        <>
            {loading ? <ProgressLoader message={"Sending message..."}/> : <></>}
            <div className={`${sectionStyles.sections} ${styles.form_container}`}>
                <form onSubmit={handleSubmit(onSubmit)}
                      className={
                          `${sectionStyles.service_tile} ${styles.form} 
                      `
                      }
                >
                    <h2 className={sectionStyles.sections_title}>Get in touch</h2>

                    <div className={"form-entity"}>
                        <label className={"form-label"} htmlFor="name">Your Name</label>
                        <div className="col-3">
                            <input
                                className="effect-2" id={"contact-name"} type="text"
                                placeholder="John Doe"
                                {...register("name", {required: true, minLength: 5})}
                            />
                            <span className="focus-border"/>
                        </div>
                        {errors.name && <><p className={"form-error"}>Enter a valid name, minimum 5 characters.</p></>}
                    </div>

                    <div className={"form-entity"}>
                        <label className={"form-label"} htmlFor="email">Email</label>
                        <div className="col-3">
                            <input
                                className="effect-2" type="text"
                                placeholder="john@example.com"
                                {...register("email",
                                    {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                    }
                                )}
                            />
                            <span className="focus-border"/>
                        </div>
                        {errors.email && <><p className={"form-error"}>Enter a valid email e.g. john@example.com</p></>}
                    </div>

                    <div className={"form-entity"}>
                        <label className={"form-label"} htmlFor="message">Your Message</label>
                        <div className="col-3">
                        <textarea
                            className="" rows={6}
                            placeholder="Type your message here..."
                            {...register("message", {required: true, minLength: 2})}
                        />
                            <span className="focus-border"/>
                        </div>
                        {errors.message && <><p className={"form-error"}>Type something</p></>}
                    </div>

                    <div className={"form-entity"}>
                        <input className={"form-submit"} type="submit" value={"Send messsage"}/>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactForm;

