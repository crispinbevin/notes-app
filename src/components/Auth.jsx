
import { useState } from 'react';
import { IoMdKey } from "react-icons/io";
import { FaNoteSticky } from "react-icons/fa6";
import { supabase } from '../supabase';

function Auth() {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)


  const handleLogin = async(e) =>{
    e.preventDefault();
    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({email});
    if(error){ 
      alert(error.message);
      setLoading(False)
    }
    else{ alert("Check email for login link")
      setLoading(false);
    }
  }
   
  return (
    <>
      <div className="bg-black flex justify-center items-center text-nred gap-3 "><FaNoteSticky size={72}/><p className='font-nothing text-[72px] text-white'> Notes</p></div>
      <div className='min-h-screen bg-black flex flex-col items-center justify-center '>
        


        <div className="wrapper flex flex-col bg-black p-8 pb-12 border-1 border-nred rounded-xl gap-12 w-xl max-sm:w-full">
          <h1 className="title text-white font-nothing font-bold text-6xl">Login</h1>
          <form onSubmit={handleLogin} className='flex flex-col gap-8'>
            <input
            className='font-plex text-neutral-50 text-sm w-full p-4 border-1 border-solid rounded-sm border-nred 
            focus:shadow-sm focus:shadow-nred focus:border-nred focus:bg-neutral-900
            hover:shadow-nred hover:border-nred
            transition-all duration-300'
            type="email"
            placeholder='Email'
            onChange={(e)=>setEmail(e.target.value)}
            />

          <button
          disabled={loading}
          className="font-plex flex justify-center items-center gap-2 bg-nred px-2 py-4 rounded-sm hover:cursor-pointer hover:bg-red-500 transition-colors duration-200 text-white disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? (
            <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
          ) : (
            <>
              Login/Sign up using email
              <IoMdKey size={24} />
            </>
          )}
        </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Auth