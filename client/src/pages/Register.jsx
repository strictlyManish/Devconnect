import { ChevronRight, BookOpen, Map, Sparkles, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import axios from "../api/axios"

function Register() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const SumbmitHandler = async (data) => {
    try {
      await axios.post(
        "/auth/register",
        {
          username: data.username,
          email: data.email,
          password: data.password,
        }
      );

      toast.success("Account created successfully!");
      navigate('/login')
      reset();
    }
    catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Registration failed!");
      }
      else if (error.request) {
        toast.error("Server not responding. Check your network or CORS settings.");
      }
      else {
        toast.error("Something went wrong. Try again.");
      }
    }
  }

  const menuItems = [
    {
      icon: BookOpen,
      title: 'Visit our Support Center',
      subtitle: 'Get guidance from our Support team.',
    },
    {
      icon: Map,
      title: 'View our Product Roadmap',
      subtitle: 'Browse and vote on what\'s next.',
    },
    {
      icon: Sparkles,
      title: 'Check out the latest releases',
      subtitle: 'See new features and updates.',
    },
    {
      icon: Users,
      title: 'Join our Slack Community',
      subtitle: 'Connect with thousands of Coda users.',
    },
  ];

  return (
    <div className='flex justify-center items-center min-h-screen '>
      <div className="flex w-full max-w-5xl overflow-hidden rounded shadow-2xl h-[35vw]">
        {/* Left Side - White Login Form */}
        <div className="w-1/2 bg-white px-15 flex flex-col justify-between">
          <div className="flex-1 flex flex-col justify-center">

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Welcome</h1>
              <p className="text-gray-600 text-[11px] text-center">Please enter your details.</p>
            </div>
            <form onSubmit={handleSubmit(SumbmitHandler)}>

              {/* Email Input */}
              <div className="mb-5">
                <label className="block text-[11px] font-medium text-gray-900 mb-2">Email <sup> {errors.email && <span className='text-red-500'>*</span>}</sup> </label>
                <input
                  {...register('email', { required: true })}
                  type='email'
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-[11px]"
                  placeholder=""
                />

              </div>
              <div className="mb-5">
                <label className="block text-[11px] font-medium text-gray-900 mb-2">Username <sup> {errors.email && <span className='text-red-500'>*</span>}</sup></label>
                <input
                  {...register('username', { required: true })}
                  type='text'
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-[11px]"
                  placeholder=""
                />
              </div>

              {/* Password Input */}
              <div className="mb-5">
                <label className="block text-[11px] font-medium text-gray-900 mb-2">Password <sup> {errors.email && <span className='text-red-500'>*</span>}</sup></label>
                <input
                  {...register('password', { required: true })}
                  type="password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-[11px]"
                  placeholder=""
                />
              </div>


              {/* Submit Button */}
              <button
                type='submit'
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition text-[11px] mb-6"
              >
                Submit
              </button>

            </form>
            {/* Sign Up Link */}
            <p className="text-center text-[11px] text-gray-600">
              Allready have an account?{' '}
              <button onClick={() => navigate('/login')} className="font-medium cursor-pointer text-gray-900 hover:underline">
                Login here
              </button>
            </p>
          </div>
        </div>

        {/* Right Side - Dark Menu */}
        <div className="w-1/2 bg-linear-to-br from-gray-700 via-gray-800 to-gray-900 p-12 flex flex-col justify-center">
          <div className="space-y-4">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-start p-4 rounded-xl hover:bg-white hover:bg-opacity-10 transition group text-left"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white bg-opacity-10 flex items-center justify-center mr-4">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-100 font-medium text-[11px] mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-xs">{item.subtitle}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 shrink-0 ml-2 group-hover:text-gray-700 transition" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Register