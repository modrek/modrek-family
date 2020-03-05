import React from 'react';
import './ModrekGrid.scss'


function ItemMenu (props){


    function renderSwitch(type) {
        switch(type) {
          case 'string':
            return '--s--';
          case 'number':
             return '--n--';
          case 'date':
             return '--d--';
          default:
            return '';
        }
      }

    return(
        <div className="modrekgrid-headercol" key={props.Key}>
        <div className="modrekgrid-headercolTitle">
        {props.headerName}
        </div>
        <div className="modrekgrid-headercolMenu d-flex align-content-around flex-wrap">
            {
                  renderSwitch(props.type)              
            }
        </div>
    </div>
    );
}


export default ItemMenu;