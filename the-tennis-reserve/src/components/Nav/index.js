import React from 'react';

function Nav(props) {
    
const tabs = ['Home', 'Gallery', 'Contact'];

  return (
    <header data-testid="header" className="flex-row px-1">
        <nav>
            <ul className ="flex-row">
                    {tabs.map((tab) => (
                        <li className="mx-1" key={tab}>
                            <a href={'#' + tab}
                            onClick={() => props.handlePageChange(tab)}
                            className ={props.currentPage === tab ? 'nav-link active' : 'mx-1'}> {tab} </a>
                        </li>
                    ))}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;