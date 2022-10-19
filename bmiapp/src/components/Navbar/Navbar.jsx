import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useEffect } from 'react';


//styling of navbar
const MainNavbar = styled.div`
height:60px; 
width:100vw;
display:flex;
justify-content:center;
position:fixed;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
background-color:#53a2a3;
top:0;
z-index:1000;
.mainNavDivSmall{
    visibility:hidden;
    background-color:#53a2a3;
    position:fixed;
}
.searchInput{
    background-color:#53a2a3;
    font-size:17px;
    font-family:-apple-system, -apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto,Oxygen, Ubuntu, Cantarell, 'Open Sans','Helvetica Neue', sans-serif;
    border:0;
    outline: none;
    width:100%;
    opacity:0.6;
    
}
.navbarDivLinks{
    display:flex;
    list-style:none;
    justify-content:space-between;
}
.navbarLinks{
    height:23px;
}
.mainNavDiv{
    position:fixed;
    top:0;
    ${'' /* border:1px solid black; */}
    width:950px;
    margin:auto;
    display:grid;
    grid-template-columns:0.8fr 1fr;
    justify-content:space-around;
}
.searchHide{
    visibility:visible; 
}

.mainNavSearchPart{
    display:flex;
    align-items:center;
    margin:auto;
    width:75%;
    height:40px;
    border-radius:8px;
    background-color:#53a2a3;
    visibility:visible;
}
@media (max-width: 950px) {
    .akBlogLogo{
        float:center;
    }
    .mainNavDiv{
        width:850px;
        grid-template-columns:0.6fr 1fr 1fr;
    }
    .mainNavSearchPart{
        width:75%;
        visibility:visible;
    }
}
@media (max-width: 850px) {
    .mainNavDiv{
        width:750px;
        grid-template-columns:0.5fr 1fr 1fr;
    }
    .akBlogLogo{
        float:center;
    }
    .mainNavSearchPart{
        width:75%;
        visibility:visible;
    }
}
@media (max-width: 750px) {
    .akBlogLogo{
        float:center;
    }
    .mainNavDiv{
    width:600px;
    grid-template-columns:0.4fr 0.8fr 1fr;
    }
    .mainNavSearchPart{
        width:80%;
        visibility:visible;
    }
}
@media (max-width: 600px) {
    .akBlogLogo{
        float:center;
    }
    .mainNavDiv{
        width:100vw;
        grid-template-columns:0.3fr 0fr 1fr;
    }
    .mainNavSearchPart{
        width:1%;
        background-color:#53a2a3;
    }
    .searchHide{
        visibility:hidden; 
        background-color:#53a2a3;
    }
}
@media (max-width: 400px) {
    .akBlogLogo{
        float:center;
    }
    .searchHide{
        visibility:hidden; 
        background-color:#53a2a3;
    }
    .mainNavDiv{
        visibility:hidden;
    }
    .navbarDivLinks1{
        list-style:none;
        display:grid;
        grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
        justify-content:space-around;
        background-color:#53a2a3;

    }
    .mainNavDivSmall{
        visibility:visible;
        position:fixed;
        z-index:20;
        width:100vw;
        padding-top:5px;
        background-color:#53a2a3;
    }
    .navbarLinks1{
        height:35px;
        width:100%;
    }
}

`

const Navbar = () => {
    var a = JSON.parse(localStorage.getItem('TodoLoginAuth')) || {};
    var len = Object.keys(a).length;
    if(len!==0){
        var name = a.email.split("@")[0];
    }
    const navigate = useNavigate();
    const [navToggle, setNavToggle] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    useEffect(()=>{
        if(len===0){
            setNavToggle(true)
        }else{
            setNavToggle(false)
        }
    },[a])
    
    const handleLogout = () => {
        // console.log('logout');
        alert('Logged Out Successfully!!');
        // localStorage.removeItem('TodoLoginAuth');
        localStorage.setItem('TodoLoginAuth',JSON.stringify({}));
        setNavToggle(false)
        navigate("/login")
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setNavToggle(true)
    };

    return (
        <MainNavbar>
            <React.Fragment>

                <div className='mainNavDiv' style={{background:'#53a2a3'}}>
                    <Link to="/" style={{fontSize:'25px', fontWeight:'700',marginLeft:'15px', marginTop:'15px', color:'#235784'}} >BMI-CALCULATOR</Link>
                    <ul className='navbarDivLinks'>
                        <li><Link to="/" style={{fontSize:'15px', fontWeight:'500', color:'black'}} >Sign-Up</Link></li>
                        {
                            navToggle ? <li><Link to="/login" style={{fontSize:'15px', fontWeight:'500', color:'black'}} >Sign-In</Link></li>
                            : <li><Link to="#" onClick={()=>handleLogout()} style={{fontSize:'15px', fontWeight:'500', color:'black'}} >Logout</Link></li>                       
                        }
                        <li>
                            <Tooltip title="Profile">
                                <IconButton
                                    className='navbarLinks'
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 0, p: 0 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <h3 style={{ display:'flex', marginTop:'10px', padding:'10px', color:"black"}}>{name}</h3>
                                    <Avatar sx={{ width:'fit-content', height: 35 }}>
                                        <img height="100%" src="https://avatars.githubusercontent.com/u/99959745?v=4" alt='ProfilePick' />
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        </MainNavbar>
    )
}

export default Navbar