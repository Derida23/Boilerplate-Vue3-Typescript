import * as yup from 'yup'

const schema = yup
  .object({
    phone_number: yup
      .string()
      .required()
      // .matches(/^(\+62)?\d+$/, 'The phone number is not valid')
      .label('Phone Number'),
    password: yup.string().required().label('Password'),
    country: yup.string().required().label('Select Country'),
  })
  .required()

export default schema
