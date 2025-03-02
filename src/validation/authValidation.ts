import * as yup from 'yup';
export const signupSchema = yup.object().shape({
    name: yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters'),
    email: yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Za-z]/, 'Password must contain at least one letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
  });
  
  export const loginSchema = yup.object().shape({
    email: yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Za-z]/, 'Password must contain at least one letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
  });