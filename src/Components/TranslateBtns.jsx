import { Button, IconButton } from '@mui/material';
import React from 'react';

const TranslateBtns = ({ setEnglish, setSpanish }) => {
    return (
        <div className="translate__btns">
          <IconButton className="translate__btns--phone" onClick={setSpanish}>
            <p>🇪🇸</p>
          </IconButton>
          <IconButton className="translate__btns--phone" onClick={setEnglish}>
            <p>🇺🇸</p>
          </IconButton>
          <Button  className="translate__btns--desktop" onClick={setSpanish}>
            Español
          </Button>
          <Button  className="translate__btns--desktop" onClick={setEnglish}>
            English
          </Button>
        </div>
    );
}

export default TranslateBtns;
