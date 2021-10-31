import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Not a valid email address'),
    subject: Yup.string().required('Required'),
    message: Yup.string().required('Required')
});
