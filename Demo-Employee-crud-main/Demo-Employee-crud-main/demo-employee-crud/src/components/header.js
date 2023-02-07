import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header className="navbar sticky-top navbar-dark bg-primary">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Demo Employee</a>
                
            </header>
        );
    }
}

export default Header;