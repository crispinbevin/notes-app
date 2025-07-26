import React from 'react'
import { FaNoteSticky } from "react-icons/fa6";
import { supabase } from '../supabase';

function NotesHome({ user }) {
  
      const handleLogout = async() => {
        const {error} = await supabase.auth.signOut();
        if (error){
          alert('Logout failed');
        }
        else{
          window.location.href = '/'
        }
      };

  return (  
    <>
      <div className="min-h-screen bg-black ">
        <nav className='min-h-16 flex items-center p-8 justify-between'>
          <div className="icon text-nred flex gap-3 items-center"><FaNoteSticky size={40}/><p className='font-nothing text-3xl text-white'> Notes</p></div>
          <div className="buttonlist">
            <button className='font-plex flex justify-center items-center gap-2 bg-nred py-3 px-6 rounded-sm hover:cursor-pointerhover:-translate-y-1 hover:shadow-white hover:shadow-lg hover:cursor-pointer transition-all duration-300 text-white' onClick={handleLogout}>Log out</button>
          </div>
        </nav>


        k

      </div>
    </>
  )
}

export default NotesHome