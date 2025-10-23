import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import "../CSS_file/LoginPage.css";
import "../CSS_file/Spinner.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../CSS_file/Modal.css";


import axios, { isCancel } from "axios";
import { Modal } from "../Utility/Modal/Modal";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [showModal, setshowModal] = useState(false);
  const { login } = useContext(AuthContext);
  const [propOne,setPropOne] =  useState('');
  const [propTwo,setPropTwo] =  useState('');
  var network_error = false;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setMessage("❌ Please fill all fields");
      return;
    }
    // //setMessage("✅ Login successful! Redirecting...");
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   login();
    //   navigate("/home")
    // }, 3000);
    // //login();
    // //setTimeout(() => navigate("/home"), 1000);
    setLoading(true);

    //console.log(e.target["email"].value,e.target["password"].value);

    const loginObj = {
      Username: e.target["email"].value,
      Password: e.target["password"].value,
    };

    try {
      const response = await axios.post(
        "https://localhost:7151/api/Login",
        loginObj,
        {timeout: 10000}
      );
      // const response = await fetch('https://localhost:7151/api/Login',{
      //   method : 'POST',
      //   headers : {
      //     'Content-type':'application/json',
      //   },
      //   body : JSON.stringify(loginObj),
      // });

      if (response.status === 200 && response.data === "unauthorised") {
        
        setLoading(false);
        setPropOne('⚠️ User Not Found');
        setPropTwo('Please register to continue.')
        setshowModal(true);
        // navigate('/login');
        network_error=false;

        //throw new Error(`HTTP Error! status : ${response.status}`);
      }
      else{

      const result = await response.data;
      sessionStorage.setItem("userName", result["userName"]);
      sessionStorage.setItem("token", result["token"]);
      login();
      setLoading(false);
      navigate("/home");
      //console.log("Success", result);
      
      setshowModal(false);

      }

      
    } catch (error) {
      setLoading(false);
      network_error = true;
      setPropOne(error.code)
      setPropTwo('Network Error . Please contact Admin')
      setshowModal(true);
      console.error(error);
      //console.error("Error", error);
    }

    // setTimeout(() => {
    //   login();
    //   setLoading(false);
    //   navigate("/home");
    // }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <div>
          {loading && (
            <div className="loading-overlay">
              <div className="spinner"></div>
            </div>
          )}
        </div>
        <div>
          
          <Modal 
          propOne={propOne}
          propTwo={propTwo}
          isOpen={showModal}
          onClose={()=>setshowModal(false)}
          control={network_error}
           />
          
        </div>

        {/* {message && <p className="message">{message}</p>} */}
      </div>
    </div>
  );
}
