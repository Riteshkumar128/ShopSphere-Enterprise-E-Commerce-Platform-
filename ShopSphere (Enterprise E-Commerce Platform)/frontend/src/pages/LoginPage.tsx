import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/client';
import { useAppDispatch } from '../app/hooks';
import { setAuth } from '../app/authSlice';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginInput = z.infer<typeof schema>;

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: LoginInput) => {
    setErrorMessage('');
    try {
      const { data } = await api.post('/auth/login', values);
      dispatch(setAuth(data));
      navigate('/');
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input placeholder="Email" {...register('email')} />
        {errors.email ? <span>{errors.email.message}</span> : null}
        <input placeholder="Password" type="password" {...register('password')} />
        {errors.password ? <span>{errors.password.message}</span> : null}
        {errorMessage ? <span>{errorMessage}</span> : null}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
      <p>
        New user? <Link to="/register">Create account</Link>
      </p>
    </div>
  );
}
