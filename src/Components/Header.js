import React from 'react';

const Header = () => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const today = new Date();
    const date = today.toLocaleDateString('en-UK', options);
    return ( 
        <header>
            <h1>Task Manager</h1>
            <p>{date}</p>
        </header>
     );
}
 
export default Header;