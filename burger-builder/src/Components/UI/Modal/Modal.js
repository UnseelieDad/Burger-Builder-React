import React, { Component } from 'react';
import classes from "./Modal.module.css";
import Aux from "../../../HOC/Auxilary";
import Backdrop from "../Backdrop/Backdrop";

// Component for spawning a modal
class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        // If show is true, slide the modal onto the screen and make it visible
                        // Else move it below the screen and make it invisible
                        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0"
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

// Also controls updating for Order Summary
export default Modal;