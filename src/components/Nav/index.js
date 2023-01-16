import React from 'react';

const Nav = (props) => {
    
    const tabs = ['About me', 'Projects', 'Contact me'];

    return (
        <nav>
            <ul>
                {tabs.map(tab => (
                    <li className='nav-item' key={tab}>
                        <span 
                        onClick={() => props.handlePageChange(tab)}
                        className={
                            props.currnetPage === tab ? 'naveActive' : ''
                        }
                    >
                    {tab}
                    </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Nav