import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

const formSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(/[0-9]/, "The number must consist of numbers!")
    .required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(login(values));
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
            <span>Email</span>
            <Field className={style.input} type="email" name="email" />
            <ErrorMessage
              className={style.error}
              name="email"
              component="span"
            />
          </label>
          <label className={style.label}>
            <span>Password</span>
            <Field className={style.input} type="password" name="password" />
            <ErrorMessage
              className={style.error}
              name="password"
              component="span"
            />
          </label>

          <button className={style.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
