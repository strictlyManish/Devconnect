import Profile from './../pages/Profile';
import Post from './../pages/Post';
import Login from './../pages/Login';
import { Route, Routes } from "react-router-dom";
import Register from './../pages/Register';
import Feed from './../pages/Feed';

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={

          <Feed />

        }
      />

      <Route
        path="/profile"
        element={

          <Profile />

        }
      />

      <Route
        path="/post"
        element={

          <Post />

        }
      />
      <Route
        path="/register"
        element={

          <Register />

        }
      />

      {/* Public Route */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
