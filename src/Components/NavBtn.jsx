import { Button } from '@mui/material';
import React from 'react';

const NavBtn = ({ text, isActive, navTo, test}) => {

    return (
        <Button className={isActive ? `nav__btn-active`: ''} onClick={navTo ? navTo : test}>
          {text}
        </Button>
    );
}

export default NavBtn;
