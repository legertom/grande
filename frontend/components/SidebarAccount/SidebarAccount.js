import React, {useState, useEffect} from 'react'
// import {useHistory} from 'react-router'
import { useHistory } from 'react-router-dom';
import {Avatar,Popover} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckIcon from '@mui/icons-material/Check'
import './SidebarAccount.css'
import {useStateValue} from '../../context/StateContextProvider'
// import db from '../../firebase'

const SidebarAccount = () => {
    const history = useHistory()
    const [{user}] = useStateValue()
    const [profile, setProfile] = useState(user)

    const [anchorEl, setAnchorEl] = useState(null)
    const onClickExpand= (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)
    const open = Boolean(anchorEl)
    const id = open ? 'post-popover' : undefined

    const signout = () => {
        localStorage.clear()
        // window.location.push('/')
        history.push('/')
        window.location.reload()
    }

    // useEffect(() => {
    //     db.collection('Users').doc(user.id).onSnapshot(res=>{
    //         setProfile(res.data())
    //     })
    // }, [])

       return (
        <>
            <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}

                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                style={{
                    transform:'translate(2rem, -1rem)'
                }}
            >
                <ul className="post__expandList">
        
                    <div className="user__item nocursor" >
                        <Avatar src={profile && profile.profilePictureURL}/>
                        <div className="user__details">
                        <h2>{profile &&  profile.firstName}</h2>
                        <span>{`@${profile && profile.username}`}</span>
                        </div>
                        <CheckIcon />
                    </div>                              
                
                    <li onClick={signout} className='logoutBtn'>
                        <h3>Log out @{profile && profile.username}</h3>
                    </li>
                </ul>
            </Popover>

            <div className='sidebarAccount__wrapper' aria-describedby={id} variant="contained" onClick={onClickExpand }>
                <div className="sidebarAccount__ava">
                    <Avatar src={profile && profile.profilePictureURL} />   
                </div>
                {/* <div className='sidebarAccount__userData' >
                <h2>{profile &&  profile.firstName}</h2>
                <h2>{profile && `@${profile.username}`}</h2>
                </div> */}
                {/* <div className='sidebarAccount__expandIcon'>
                    <ExpandMoreIcon />
                </div> */}
            </div> 
        </>
    )
}

export default SidebarAccount
