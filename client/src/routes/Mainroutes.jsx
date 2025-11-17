import { useEffect, useState } from "react";
import axios from "../api/axios";
import ProtectedRoute from './../components/Protect';
import Home from './../pages/Home';
import Profile from './../pages/Profile';
import Post from './../pages/Post';
import Login from './../pages/Login';
import { Route, Routes } from "react-router-dom";
import { Loader } from "lucide-react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/user", { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="grid place-content-center h-screen w-screen">
  <Loader className="text-white animate-spin h-10 w-10" />
</div>;

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <ProtectedRoute user={user}>
            <Home />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/profile" 
        element={
          <ProtectedRoute user={user}>
            <Profile />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/post" 
        element={
          <ProtectedRoute user={user}>
            <Post />
          </ProtectedRoute>
        } 
      />

      {/* Public Route */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
