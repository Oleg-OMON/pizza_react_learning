import classNames from 'classnames';
import React from 'react';


const Button = ({className, onClick, children, outline}) => {
    return(
        <button onClick = {onClick}
        className ={classNames('button',className,  {
            'button--outline': outline  
        })}>
            {children}
            
        </button>
    );
};

export default Button;