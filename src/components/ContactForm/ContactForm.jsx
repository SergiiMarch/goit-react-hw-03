import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be 50 characters or less")
    .required("Required"),
  number: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be 50 characters or less")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    onSubmit({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label>Name</label>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label>Number</label>
          <Field type="tel" name="number" className={css.input} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
