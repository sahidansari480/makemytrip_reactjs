import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => { logout(); navigate("/login"); };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎉 Welcome Home!</h1>
      <button onClick={handleLogout} style={{ marginTop: "20px", padding: "10px 20px" }}>Logout</button>
    </div>
  );
}
