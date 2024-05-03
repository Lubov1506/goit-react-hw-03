import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactsApp.module.css";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-ЯїЇіІєЄёЁґҐ\s']+$/,
      "Name can only contain letters"
    )
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Please, type your name"),
  number: Yup.string()
    .matches(/^\d{7}$/, "Number must be exactly 7 digits")
    .required("Please, type a number"),
});

const ContactForm = ({ onAdd }) => {
  const initValue = {
    name: "",
    number: "",
  };
  const handleSubmit = (value, action) => {
    onAdd(value);
    action.resetForm();
  };
  return (
    <Formik
      initialValues={initValue}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label className={s.col}>
          Name
          <Field type="text" name="name" className={s.input} />{" "}
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>

        <label className={s.col}>
          Number
          <Field type="number" name="number" className={s.input} />{" "}
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
