import React from 'react';
import classes from './Layout.module.css';

const layout = ( props ) => (
    <>
        <div className={classes.Content}>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </>
);

export default layout;