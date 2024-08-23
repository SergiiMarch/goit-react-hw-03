import { Formik, Form, Field } from "formik";

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  return (
    <Formik initialValues={{ initialValues }} onSubmit={() => {}}>
      <Form>
        <Field type="text" name="name" />
        <Field type="tel" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
