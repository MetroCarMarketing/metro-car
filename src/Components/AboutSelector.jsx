import { Button } from '@mui/material';
import React from 'react';

const AboutSelector = ({ name, active, activateBtn }) => {

    return (
        <Button className={active && 'about--selected'} onClick={activateBtn}>
            {name}
        </Button>
    );
}

export default AboutSelector;
