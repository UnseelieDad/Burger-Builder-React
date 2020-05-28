import React from 'react';
import Aux from '../../HOC/Auxilary';

// High Level component to contain the layout of the app
const layout = ( props ) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};

export default layout;