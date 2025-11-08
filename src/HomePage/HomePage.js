import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import "../CSS_file/HomePage.css";
import down_arrow from "../Utility/images/dropdown-48.png"
import home_img from "../Utility/images/MMYT.png"
import Dropdown from "../Dropdown/Dropdown/Dropdown";
import DropdownUser from "../Dropdown/Dropdown_User/Dropdown_user";
import user_logo from "../Utility/images/user.png"
import backgroundImg from '../Utility/images/homepage_airplane.jpg'

export default function Home() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // dropdown

  const userName = sessionStorage.getItem('userName');
  //const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Profile", onClick: () => navigate("/myProfile") },
    { label: "Settings", onClick: () => alert("Settings clicked") },
    { label: "Logout", onClick: () => handleLogout() },
  ]


  // const dropdownHandle = ()=>{
  //   const drop_down_element = document.getElementById('user_logo');
  //   if(down === 0){
  //     drop_down_element.style.transition ='transform 0.3s ease-out'
  //     drop_down_element.style.transform = 'rotate(-90deg)';
  //     setdown(1);

  //     //console.log(down)
  //   }
  //   if (down === 1){
  //     drop_down_element.style.transform = 'rotate(0deg)';
  //     setdown(0);
  //     //console.log(down)
  //   }
    
  // }
   let current_url = window.location.pathname;
  // console.log(current_url);

  //dropdown end

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="left_side">
            <img id="homePageIcon" alt="" onClick={() => navigate('/home')} src={home_img}></img>
            <a href="/news">MY Bookings</a>
            <picture>
              {/* <img id="drop_down" src={down_arrow} onClick={dropdownHandle}></img> */}

              <Dropdown iconSrc={down_arrow} items={menuItems} />
            </picture>
          </div>
          <div className="right_side">
            <a href="/myProfile">Hello {userName}</a>
            <picture id="user_logo">
              <DropdownUser iconSrc={user_logo} items={menuItems} />
            </picture>
            
          </div>
        </nav>
      </div>

    {current_url =='/home' && <div className="homePageImg"><img src={backgroundImg}></img></div>}
      <div className="homepage" >
        {/* <h1>🎉 Welcome Home!</h1>
        <button onClick={handleLogout} style={{ marginTop: "20px", padding: "10px 20px" }}>
          Logout
        </button> */}
        
      </div>
      
    </>
  );
}
