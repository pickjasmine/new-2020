import React from 'react';

const Button = (props) => {
    const {buttonText, onClickFunction} = props;
    // same as saying const buttonText = props.buttonText;

    return (
        <button onClick={onClickFunction}>{buttonText}</button>
    );
};

export {Button};