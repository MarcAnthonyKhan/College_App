'use client';
import Link from 'next/link';
import { LoginUser } from './loginUser';
import { useForm, FieldError } from 'react-hook-form';

type User = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({ mode: 'onBlur', reValidateMode: 'onBlur' });

  const tryLogin = async ({ username, password }: User) => {
    const response = await LoginUser({ username, password });
    reset();
  };

  return (
    <div className="flex flex-col mx-auto mt-40 px-6 py-20 lg:px-8 w-4/12 shadow-md rounded-md shadow-slate-800">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-4xl text-transparent font-bold leading-9 tracking-tight bg-gradient-to-r from-blue-500 to-cyan-700 bg-clip-text">
          Welcome Back!
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form noValidate onSubmit={handleSubmit(tryLogin)} className="space-y-6">
          <div>
            <label
              id="username"
              className="block text-sm font-medium leading-6 text-gray-200"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                type="username"
                className=" p-3 block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                {...register('username', { required: 'Please enter your username' })}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                id="password"
                className="block text-sm font-medium leading-6 text-gray-200"
              >
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-cyan-600 hover:text-cyan-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                {...register('password', { required: 'Please enter your password' })}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            href="/register"
            className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500"
          >
            {' '}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
