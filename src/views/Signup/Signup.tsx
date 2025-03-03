import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { signupUser } from '../../store/auth/authThunks';
import { AuthLayout, AuthHeader, AuthBody, AuthFooter } from '../../layouts/AuthLayout';
import { EGInput } from '../../components/shared/EGInput';
import { EGButton } from '../../components/shared/EGButton';
import { signupSchema } from '../../validation/authValidation';

export const Signup: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading} = useAppSelector((state) => state.auth);



  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: any) => {
    const resultAction = await dispatch(signupUser(data));
    if (signupUser.fulfilled.match(resultAction)) {
      navigate('/dashboard');
    }
  };

  return (
    <AuthLayout>
      <AuthHeader title="Create an Account" subtitle="Join us and start learning today" />
      <AuthBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <EGInput
            type="text"
            id="name"
            label="Name"
            placeholder="Your name"
            {...register('name')}
            error={errors?.name?.message}
          />

          <EGInput
            type="email"
            id="email"
            label="Email"
            placeholder="Valid business email"
            {...register('email')}
            error={errors?.email?.message}
          />

          <EGInput
            type="password"
            id="password"
            label="Password"
            placeholder="Your password"
            {...register('password')}
            error={errors?.password?.message}
          />

          <EGButton type="submit" disabled={!isDirty || !isValid || loading}>
            {loading ? 'Signing Up...' : 'Sign up now'}
          </EGButton>
        </form>
      </AuthBody>
      <AuthFooter>
        <p>
          Already have an account?{' '}
          <Link to="/login" className="auth-link">
            Log in →
          </Link>
        </p>
      </AuthFooter>
    </AuthLayout>
  );
};
