import { Button } from '@mui/material';
import React from 'react';

const NavBtn = ({ text, isActive, navTo }) => {

    return (
        <Button className={isActive ? `nav__btn-active`: ''} onClick={navTo}>
          {text}
        </Button>
    );
}

export default NavBtn;
