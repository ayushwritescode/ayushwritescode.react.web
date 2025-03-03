import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginUser } from '../../store/auth/authThunks';
import { AuthLayout, AuthHeader, AuthBody, AuthFooter } from '../../layouts/AuthLayout';
import { EGInput } from '../../components/shared/EGInput';
import { EGButton } from '../../components/shared/EGButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validation/authValidation';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data: any) => {
    const resultAction = await dispatch(loginUser(data));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate('/dashboard');
    }
  };

  return (
    <AuthLayout>
      <AuthHeader title="Welcome Back!" subtitle="Access your courses and track progress" />
      <AuthBody>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            {loading ? 'Logging In...' : 'Log in'}
          </EGButton>
        </form>
      </AuthBody>
      <AuthFooter>
        <p>
          Don’t have an account?{' '}
          <Link to="/signup" className="auth-link">
            Sign up now →
          </Link>
        </p>
      </AuthFooter>
    </AuthLayout>
  );
};
