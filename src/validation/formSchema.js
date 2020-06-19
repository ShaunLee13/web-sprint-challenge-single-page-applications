import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    name:Yup
        .string()
        .min(2, 'Name must have a minimum of 2 characters.')
        .required('Must include a name.'),
    size:Yup
        .string()
        .oneOf(['Small', 'Medium', 'Large'], 'Please pick a pizza size.'),
})

export default formSchema