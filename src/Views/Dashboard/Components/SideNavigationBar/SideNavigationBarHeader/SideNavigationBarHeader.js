import logo from '../../../../../nexvent-logo'
import React from 'react';


class SideNavigationBarHeader extends React.Component
{
    render()
    {
        return (
            <header className="app-header">
                <nav className="navbar ml-5 mt-4">
                    <div className="container">
                        <div className="navbar-brand">
                            <div className="navbar-item">
                                <div className="brand">
                                    <div className="brand-icon">
                                        <img alt="Logo"
                                             role="presentation"
                                             src={logo}/>
                                    </div>
                                    <div className="brand-content">
                                        <div className="brand-title"> Nexvent</div>
                                        <div className="brand-subtitle">Business</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );

    };
}

export default SideNavigationBarHeader;