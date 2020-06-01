import React from 'react';
import classes from "./Modal.module.css";
import Aux from "../../../HOC/Auxilary";
import Backdrop from "../Backdrop/Backdrop";

// Component for spawning a modal
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                // If show is true, slide the modal onto the screen and make it visible
                // Else move it below the screen and make it invisible
                transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.show ? "1" : "0"
            }}
        >
            {props.children}
        </div>
    </Aux>
);

// Component should only re-render if props.show changes
const noChanges = (prevProps, nextProps) => {
    return prevProps.show === nextProps.show;
}

// If no changes is false, re-render Modal and order summary
// Also controls updating for Order Summary
export default React.memo(modal, noChanges);