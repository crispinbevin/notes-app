import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import Auth from './components/Auth.jsx'
import NotesHome from './components/notesHome.jsx'
import NotesView from './components/notesView.jsx'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/notes" /> : <Auth />} />
        <Route path="/notes" element={user ? <NotesHome user={user} /> : <Navigate to="/" />} />
        <Route path="/notes/:id" element={user ? <NotesView user={user} /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
