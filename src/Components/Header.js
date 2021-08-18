import React from 'react';
import Button from './Button';
import "../index.css";

const Header = ({ showForm, changeTextAndColor }) => {
  return (
        <div>
            <header className="header">
                <h2 className="app-header">Link Vote App</h2>
            </header>
            <Button className="btnhdr" onClick={showForm} color={changeTextAndColor ? 'red' : 'green'} text={changeTextAndColor ? 'Close' : 'Submit Link'} />
        </div>
    )
}
export default Header;