import React from 'react';

function Button(props) {
    return (<button type="button" disabled={props.bla}>{props.buttontext}</button>)
}

// vraag: waarom werkt het niet met <button type="button" {props.bla}>
export default Button