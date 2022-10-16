import React from "react";
// import {useNavigate} from "react-router";
// import './navCss.css'

// import {useNavigate} from "react-router";

const NavBar = () => {
    // const navigate = useNavigate()
    return (
        // <div className="navCss">
        //     <div className="favorite" />
        // </div>
        <div style={{backgroundColor: '#FFFBF3',position:'fixed',bottom:'0px',display:"flex", justifyContent:'space-between', alignItems:'center', width:'390px',height:'80px'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <img src="img/misc/search.svg" alt="Like User" style={{width:'30px', height:'30px',margin:'5px'}}/>
                    <p style={{color: 'rgba(29, 29, 29, 0.3)',margin:'0', fontSize:'15px'}}>Поиск</p>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <img src="img/misc/fly.svg" alt="Like User" style={{width:'30px', height:'30px',margin:'5px'}}/>
                <p style={{color: 'rgba(29, 29, 29, 0.3)',margin:'0', fontSize:'15px'}}>Сервисы</p>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} >
                <img src="img/misc/travel.svg" alt="Like User" style={{width:'30px', height:'30px',margin:'5px'}}/>
                <p style={{color: '#1D1D1D',margin:'0', fontSize:'15px'}}>Попутчики</p>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <img src="img/misc/favourite.svg" alt="Like User" style={{width:'30px', height:'30px',margin:'5px'}}/>
                <p style={{color: 'rgba(29, 29, 29, 0.3)',margin:'0', fontSize:'15px'}}>Избранное</p>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <img src="img/misc/user.png" alt="Like User" style={{width:'30px', height:'30px',margin:'5px'}}/>
                <p style={{color: 'rgba(29, 29, 29, 0.3)',margin:'0', fontSize:'15px'}}>Профиль</p>
            </div>
            </div>
    )
}


export default NavBar;
