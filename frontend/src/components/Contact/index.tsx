import React, { useState } from "react";
import {
    ContactButton,
    ContactForm,
    ContactInput,
    ContactInputMessage,
    ContactInputValidation,
    ContactTitle,
    Container,
    Desc,
    Title,
    Wrapper,
} from "./ContactStyledComponents";
import { Snackbar } from "@mui/material";
import emailjs from "@emailjs/browser";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s]*$/;
    const subjectRegex = /^[A-Za-z0-9\s]*$/;
    const [open, setOpen] = useState({
        state: false,
        msg: "Email sent successfully!",
    });
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        subject: "",
        message: "",
    });
    const [formDataValidation, setFormDataValidation] = useState({
        email: false,
        name: false,
        subject: false,
        message: false,
    });
    const formDataChangeHandler = (e: any) => {
        const { name, value } = e.target;

        let isValidInput = false;
        switch (name) {
            case "name":
                isValidInput = nameRegex.test(value);
                break;
            case "subject":
                isValidInput = subjectRegex.test(value);
                break;
            default:
                isValidInput = true;
        }
        if (isValidInput) {
            setFormDataValidation((prev) => ({ ...prev, [name]: false }));
            setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        } else {
            console.log("Invalid data");
        }
    };
    const validateFormData = () => {
        let isvalid = true;
        if (formData.email === "" || !emailRegex.test(formData.email)) {
            setFormDataValidation((prev) => ({ ...prev, email: true }));
            isvalid = false;
        } else {
            setFormDataValidation((prev) => ({ ...prev, email: false }));
        }
        if (formData.name === "") {
            setFormDataValidation((prev) => ({ ...prev, name: true }));
            isvalid = false;
        } else {
            setFormDataValidation((prev) => ({ ...prev, name: false }));
        }
        if (formData.subject === "") {
            setFormDataValidation((prev) => ({ ...prev, subject: true }));
            isvalid = false;
        } else {
            setFormDataValidation((prev) => ({ ...prev, subject: false }));
        }
        if (formData.message === "") {
            setFormDataValidation((prev) => ({ ...prev, message: true }));
            isvalid = false;
        } else {
            setFormDataValidation((prev) => ({ ...prev, message: false }));
        }
        return isvalid;
    };
    const formSubmitHandler = async (e: any) => {
        e.preventDefault();
        const isFormDataValid = validateFormData();
        if (isFormDataValid) {
            const serviceId = "service_bwkw50k";
            const templateId = "template_2bqctu9";
            const publicKey = "PKPGLn6xb80TTb-xu";
            const payload = {
                sender_name: formData.name,
                sender_email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };
            //We can also use REST API for below request. Follow documentation.
            try {
                const response = await emailjs.send(
                    serviceId,
                    templateId,
                    payload,
                    publicKey
                );
                // TODO: ADD A LOADER
                if (response.status === 200) {
                    setOpen((prev) => ({
                        msg: "Email sent successfully!",
                        state: true,
                    }));
                } else {
                    setOpen({ msg: "Please try again!", state: true });
                }
            } catch (error) {
                setOpen({ msg: "Please try again!", state: true });
            }
        } else {
        }
    };
    return (
        <Container>
            <Wrapper>
                <Title>Contact</Title>
                <Desc>
                    Feel free to reach out to me for any questions or
                    opportunities!
                </Desc>
                <ContactForm onSubmit={formSubmitHandler}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput
                        value={formData.email}
                        placeholder="Your Email"
                        name="email"
                        onChange={formDataChangeHandler}
                    />
                    {formDataValidation.email && (
                        <ContactInputValidation>
                            Invalid Email !
                        </ContactInputValidation>
                    )}
                    <ContactInput
                        value={formData.name}
                        placeholder="Your Name"
                        name="name"
                        onChange={formDataChangeHandler}
                    />
                    {formDataValidation.name && (
                        <ContactInputValidation>
                            Invalid Name !
                        </ContactInputValidation>
                    )}
                    <ContactInput
                        value={formData.subject}
                        placeholder="Subject"
                        name="subject"
                        onChange={formDataChangeHandler}
                    />
                    {formDataValidation.subject && (
                        <ContactInputValidation>
                            Invalid Subject !
                        </ContactInputValidation>
                    )}
                    <ContactInputMessage
                        value={formData.message}
                        placeholder="Message"
                        rows="4"
                        name="message"
                        onChange={formDataChangeHandler}
                    />
                    {formDataValidation.message && (
                        <ContactInputValidation>
                            Invalid Message !
                        </ContactInputValidation>
                    )}
                    <ContactButton type="submit" value="Send" />
                </ContactForm>
                <Snackbar
                    open={open.state}
                    autoHideDuration={3000}
                    onClose={() =>
                        setOpen((prev) => ({ ...prev, state: false }))
                    }
                >
                    <Alert
                        onClose={() =>
                            setOpen((prev) => ({ ...prev, state: false }))
                        }
                        severity={
                            open.msg === "Email sent successfully!"
                                ? "success"
                                : "error"
                        }
                        sx={{ width: "100%" }}
                    >
                        {open.msg}
                    </Alert>
                </Snackbar>
            </Wrapper>
        </Container>
    );
};

export default Contact;
