import React from "react";
import {useNavigate, useLocation} from "react-router-dom";

const tabs = [
    {
        name: 'Dashboard',
        path: '/dashboard'
    },
    {
        name: 'Deposit',
        path: '/deposit'
    },
    {
        name: 'Transfer',
        path: '/transfer'
    },
    {
        name: 'Withdraw',
        path: '/withdraw'
    }
]
export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        localStorage.removeItem("auth")
        navigate("/")
    }

    const getHighlightStyle = (path) => {
        if (location.pathname === path) {
            return {
                color: 'blue'
            }
        }
        return {}
    }
    return (
        <div style={{display: 'flex', padding: '20px', fontWeight: 'bold', color: 'skyblue'}} className='header'>
        <div style={{display: 'flex', justifyContent: 'space-between',  width: '70%', margin: 'auto'}}>
            {tabs.map((tab) => {
                return <a key={tab.name} onClick={() => navigate(tab.path)} style={getHighlightStyle(tab.path)}> {tab.name} </a>
            })}
        </div>
            <a onClick={logout}>Logout</a>
        </div>
    )
}