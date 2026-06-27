import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/client';
import { useAppDispatch } from '../app/hooks';
import { setAuth } from '../app/authSlice';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

type RegisterInput = z.infer<typeof schema>;

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: RegisterInput) => {
    setErrorMessage('');
    try {
      const { data } = await api.post('/auth/register', values);
      dispatch(setAuth(data));
      navigate('/');
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input placeholder="Name" {...register('name')} />
        {errors.name ? <span>{errors.name.message}</span> : null}
        <input placeholder="Email" {...register('email')} />
        {errors.email ? <span>{errors.email.message}</span> : null}
        <input placeholder="Password" type="password" {...register('password')} />
        {errors.password ? <span>{errors.password.message}</span> : null}
        {errorMessage ? <span>{errorMessage}</span> : null}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create account'}
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}
