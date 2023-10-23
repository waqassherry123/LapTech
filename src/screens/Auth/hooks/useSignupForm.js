import {useFormik} from 'formik';
import {Alert} from 'react-native';
import * as Yup from 'yup';
import {emailRegex, passwordRegex} from '../../../constants/constants';

const useSignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      //   firstName: Yup.string().required('Please enter Your First Name')
      //     .max(40, 'First Name must be at most 40 characters')
      //     .matches(/^[a-zA-Z\s-]+$/, 'First Name can only contain letters, spaces, and hyphens'),
      //   lastName: Yup.string().required('Please enter Your Last Name')
      //     .max(40, 'Last Name must be at most 40 characters')
      //     .matches(/^[a-zA-Z\s-]+$/, 'Last Name can only contain letters, spaces, and hyphens'),
      email: Yup.string()
        .matches(emailRegex)
        .required('Please enter Your First Name'),
      //   username: Yup.string().required('Please enter your username')
      //   .matches(/^[a-zA-Z0-9]+$/, 'Username must only contain letters and numbers')
      //   .test('no-spaces', 'Username must not contain spaces', value => !/\s/.test(value))
      //   ,
      password: Yup.string()
        .matches(passwordRegex)
        .required('Please enter your password'),
      confirmPassword: Yup.string().required('Please confirm your password'),
    }),

    onSubmit: values => {
      if (values.password !== values.confirmPassword) {
        Alert.alert('Password and confirm password are not same');
      }
      console.log('sign up values', values);
      //   dispatch(Slice.actions.signup(values));
    },
  });
  return formik;
};

export default useSignupForm;
