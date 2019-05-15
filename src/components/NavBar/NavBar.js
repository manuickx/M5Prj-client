import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss'

class NavBar extends Component {
    render() {

        return (
            < div className='navbar' >
                {localStorage.getItem('token') ?
                    <div className='navbar-buttons'>
                        <Link to='/'><button>sign out</button></Link>
                        <Link to='/'><button>edit profile</button></Link>
                    </div>
                    :
                    <div className='navbar-buttons'>
                        <Link to='/'><button>sign up</button></Link>
                        <Link to='/'><button>sign in</button></Link>
                    </div>
                }
            </div>
        );
    }
}

export default NavBar;