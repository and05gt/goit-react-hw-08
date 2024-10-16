import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import style from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
};

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(/[0-9]/, "The number must consist of numbers!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(addContact(values));
    options.resetForm();
  };

  return (
    <div className={style.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form className={style.form}>
          <label className={style.label}>
            <span>Name</span>
            <Field className={style.input} type="text" name="name" />
            <ErrorMessage
              className={style.error}
              name="name"
              component="span"
            />
          </label>
          <label className={style.label}>
            <span>Number</span>
            <Field className={style.input} type="text" name="number" />
            <ErrorMessage
              className={style.error}
              name="number"
              component="span"
            />
          </label>

          <button className={style.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
