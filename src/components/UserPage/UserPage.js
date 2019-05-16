import React, { Component } from 'react';

class UserPage extends Component {

    render() {

        if (this.props.user === null) {
            return (<div>Loading</div>)
        }
        else {
            return (
                <div>
                    WELCOME {this.props.user.name}
                </div>
            )
        }
    }
}

export default UserPage;