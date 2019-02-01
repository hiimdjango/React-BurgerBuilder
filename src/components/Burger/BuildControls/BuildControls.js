import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'bacon'}
];

const buildControls = ( props ) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => {
            return <BuildControl
                disabled={props.disabled[ctrl.type]}
                removed={() => props.ingredientRemoved(ctrl.type)}
                added={()=> props.ingredientAdded(ctrl.type)}
                key={ctrl.label}
                label={ctrl.label} />
        })}
    </div>
);

export default buildControls;