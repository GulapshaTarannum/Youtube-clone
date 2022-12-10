import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

const Header = () => {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className='header'>

            <div className="header_left">
                <MenuIcon />
                <Link to='/'>
                    <img className='header_logo' src='data:image/png;base64,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' alt='YouTube logo' />

                </Link>


            </div>
            <div className="header_input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text' />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header_inputButton' />

                </Link>


            </div>

            <div className="header_icons">
                <VideoCallIcon className='header_icon' />
                <AppsIcon className='header_icon' />
                <NotificationsIcon className='header_icon' />
                <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqtWSAaYPRgPkgvIlF9YtzFeJtWGNG1rvk5j4qdN1iA&s"

                />


            </div>





        </div>
    );
}

export default Header;
