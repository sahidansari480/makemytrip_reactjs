import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import "../CSS_file/HomePage.css";
import down_arrow from "../Utility/images/dropdown-48.png"
import home_img from "../Utility/images/MMYT.png"
import Dropdown from "../Dropdown/Dropdown/Dropdown";
import DropdownUser from "../Dropdown/Dropdown_User/Dropdown_user";
import user_logo from "../Utility/images/user.png"

export default function Home() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // dropdown
  const [down ,setdown] = useState(0);
  //const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Profile", onClick: () => alert("Profile clicked") },
    { label: "Settings", onClick: () => alert("Settings clicked") },
    { label: "Logout", onClick: () => alert("Logout clicked") },
  ]


  const dropdownHandle = ()=>{
    const drop_down_element = document.getElementById('user_logo');
    if(down === 0){
      drop_down_element.style.transition ='transform 0.3s ease-out'
      drop_down_element.style.transform = 'rotate(-90deg)';
      setdown(1);

      //console.log(down)
    }
    if (down === 1){
      drop_down_element.style.transform = 'rotate(0deg)';
      setdown(0);
      //console.log(down)
    }
    
  }

  //dropdown end

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="left_side">
            <img alt="" src={home_img}></img>
            <a href="#">News</a>
            <picture>
              {/* <img id="drop_down" src={down_arrow} onClick={dropdownHandle}></img> */}

              <Dropdown iconSrc={down_arrow} items={menuItems} />
            </picture>
          </div>
          <div className="right_side">
            <a href="#">Home</a>
            <picture id="user_logo">
              <DropdownUser iconSrc={user_logo} items={menuItems} />
            </picture>
            
          </div>
        </nav>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>🎉 Welcome Home!</h1>
        <button onClick={handleLogout} style={{ marginTop: "20px", padding: "10px 20px" }}>
          Logout
        </button>
      </div>
    </>
  );
}
