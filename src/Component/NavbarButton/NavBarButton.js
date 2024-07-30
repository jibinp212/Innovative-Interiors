import React from 'react';
import './NavBarButton.css';
import { useNavigate } from 'react-router-dom';

function NavBarButton() {
    const navigate = useNavigate();
    return (
        <div>
           
            <button onClick={() => navigate("./Contact")} className='btn-login'> Log In</button>
        </div>
    )
}
export default NavBarButton;
