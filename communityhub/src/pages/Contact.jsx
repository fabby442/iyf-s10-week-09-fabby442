import useForm from '../hooks/useForm';

function Contact() {

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Name is required";
        }

        if (!values.email.includes("@")) {
            errors.email = "Email must be valid";
        }

        return errors;
    };

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        reset
    } = useForm(
        { name: "", email: "" },
        validate
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        reset();
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>

            <h2>Contact Form</h2>

            <input
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.name && errors.name && (
                <p style={{ color: "red" }}>{errors.name}</p>
            )}

            <br /><br />

            <input
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.email && errors.email && (
                <p style={{ color: "red" }}>{errors.email}</p>
            )}

            <br /><br />

            <button type="submit">Submit</button>
            <button type="button" onClick={reset}>Reset</button>

        </form>
    );
}

export default Contact;