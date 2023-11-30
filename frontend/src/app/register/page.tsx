'use client';

import axios from 'axios';
import Link from 'next/link';
import { useForm, FieldError } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

type NewUserData = {
  username: string;
  password: string;
  email: string;
};
type Props = {
  fieldError: FieldError | undefined;
};

export function ValidationError({ fieldError }: Props) {
  if (!fieldError) {
    return null;
  }
  return (
    <div role="alert" className="text-red-500 text-xs mt-1">
      {fieldError.message}
    </div>
  );
}

const SignUp = () => {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewUserData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (userData: NewUserData) => {
    try {
      // const response = await axios.post('http://127.0.0.1/3000/register', userData);
      console.log(userData);
      reset();
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'border-red-500' : '';
  }

  return (
    <div className="flex flex-col mx-auto mt-40 px-6 py-16 lg:px-8 w-4/12 shadow-md shadow-slate-800">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="p-3 text-center text-4xl text-transparent font-bold leading-9 tracking-tight bg-gradient-to-r from-blue-500 to-cyan-700 bg-clip-text">
          Sign up
        </h2>
      </div>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          noValidate
          action="submit"
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label
              id="username"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                type="text"
                className={`w-full rounded ${getEditorStyle(errors.username)}`}
                {...register('username', { required: 'Please enter a username' })}
              />
              <ValidationError fieldError={errors.username} />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              id="password"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                className={`w-full rounded ${getEditorStyle(errors.password)}`}
                {...register('password', { required: 'Please enter a password' })}
              />
              <ValidationError fieldError={errors.password} />
            </div>
          </div>
          <div className="flex flex-col pb-5">
            <label
              id="email"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                className={`w-full rounded ${getEditorStyle(errors.email)}`}
                {...register('email', {
                  required: 'Please enter a email',
                  pattern: {
                    value: /\S+@\S+.\S+/,
                    message: 'Entered value does not match email format.',
                  },
                })}
              />
              <ValidationError fieldError={errors.email} />
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Account
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <Link
            href="/login"
            className="font-semibold leading-6 text-cyan-600 hover:text-cyan-00"
          >
            {' '}
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
