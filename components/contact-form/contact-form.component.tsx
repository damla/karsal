import React, { ReactElement } from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'

interface Values {
  firstName: string
  lastName: string
  companyName: string
  email: string
  message: string
}

export default function ContactForm (): ReactElement {
  const ContactFormSchema = yup.object().shape({
    firstName: yup.string().required('Ad boş bırakılamaz'),
    lastName: yup.string().required('Soyad boş bırakılamaz'),
    companyName: yup.string(),
    email: yup.string().email('Lütfen geçerli bir e-mail adresi giriniz'),
    message: yup.string().required('Lütfen mesajınızı giriniz')
  })

  // function sendToApi (form: FormData): void {
  //   const data = new FormData()
  //   const values = Object.values(form)
  //   data.append('firstName', values[0])
  //   data.append('lastName', values[1])
  //   data.append('companyName', values[0])
  //   data.append('email', values[1])
  //   data.append('message', values[0])
  //   console.log(data.values())
  // axios({
  //   method: "POST",
  //   url: "",
  //   data: data,
  // })
  //   .then((res) => {
  //     if (res.data.token) {
  //       window.localStorage.setItem("access_key", res.data.token);
  //       window.location.pathname = "/dashboard";
  //     }
  //     return null;
  //   })
  //   .catch((err) =>
  //     err.response.data.message
  //       ? setMessage("Email or password is invalid")
  //       : null
  //   );
  // }
  const initialValues: Values = {
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    message: ''
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactFormSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2))
            console.log(values)
            setSubmitting(false)
          }, 500)
        }}
      >
        <Form>
          <label htmlFor="firstName">Ad</label>
          <Field id="firstName" name="firstName" placeholder="Adınızı giriniz" />

          <label htmlFor="lastName">Soyad</label>
          <Field id="lastName" name="lastName" placeholder="Soyadınızı giriniz" />

          <label htmlFor="companyName">Şirket Adı</label>
          <Field id="companyName" name="companyName" placeholder="Şirket adı giriniz" />

          <label htmlFor="email">E-Mail</label>
          <Field
            id="email"
            name="email"
            placeholder="ornek@mail.com"
            type="email"
          />

          <label htmlFor="message">Mesajınız</label>
          <Field as="textarea" id="message" name="message" placeholder="Mesajınızı giriniz" />
          <button type="submit">Gönder</button>
        </Form>
      </Formik>
    </div>
  )
}
