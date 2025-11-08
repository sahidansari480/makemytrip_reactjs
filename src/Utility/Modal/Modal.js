import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../../CSS_file/Modal.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export function Modal({propOne,propTwo,isOpen = true,onClose,control}){

    const [popUpOpenModal,setpopUpOpenModal] = useState(isOpen);

    const navigate = useNavigate();

    useEffect(()=>{
        setpopUpOpenModal(isOpen);
    },[isOpen])

    const handleClose = ()=>{
        setpopUpOpenModal(false);
        if(onClose) onClose();
    }

    return (

    <Popup
    open={popUpOpenModal}
    closeOnDocumentClick
    onClose={handleClose}
    modal
    nested
    >
    <div className="modern-modal">
    <h2>{propOne}</h2>
    <p>{propTwo}</p>
    <div className="modal-buttons">
        <button className="btn btn-close" onClick={handleClose}>
        Close
        </button>
        <button hidden={control} className="btn btn-primary" onClick={() => navigate("/signup")}>
        Signup
        </button>
    </div>
    </div>
    </Popup>
)
}