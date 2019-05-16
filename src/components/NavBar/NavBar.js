import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss'

class NavBar extends Component {

    render() {
        return (
            < div className='navbar' >
                {this.props.loggedIn?
                    <div className='navbar-buttons'>
                        <Link to='/'><button onClick={this.props.handleLogOut}>log out</button></Link>
                        <Link to='/'><button>edit profile</button></Link>
                    </div>
                    :
                    <div className='navbar-buttons'>
                        <Link to='/user/signup'><button>sign up</button></Link>
                        <Link to='/user/login'><button>log in</button></Link>
                    </div>
                }
            </div>
        );
    }
}

export default NavBar;