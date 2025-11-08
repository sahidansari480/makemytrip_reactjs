import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./SignUpPage/signup";
import LoginPage from "./LoginPage/Login";
import Home from "./HomePage/HomePage";
import ProtectedRoute from "./AuthContext/ProtectedRoute";
import { Profile } from "./Profile/profile";
//import "src/App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LoginPage/>}></Route>
        <Route path="/home" element={<ProtectedRoute> <Home /></ProtectedRoute>}/>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/myProfile" element= {<ProtectedRoute> <Profile/> </ProtectedRoute> } />
      </Routes>
    </Router>
  );
}

export default App;
