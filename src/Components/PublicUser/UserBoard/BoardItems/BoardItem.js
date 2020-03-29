import React from 'react';
import { NavLink } from 'react-router-dom';

function BoardItem(props)
{
    
    return(
        <div>            
             <NavLink className="boardnav-link " to= {props.url}  >
             {props.name}
                    </NavLink>
           
        </div>
    )
}

export default BoardItem;