import React from 'react';
import './ModrekGrid.scss'
import ItemMenu from './ItemMenu';

function  ModrekGrid (props)
{
 
    const headerList = props.columnDefs.map((col)=>{   
        return (               
          <ItemMenu 
            key={col.headerName} 
            headerName={col.headerName}
            type={col.type}>                
          </ItemMenu>
        )
    });  


    const dataList = props.columnDefs.map((col)=>{   
        return (               
        <div  key={col.field}>
                {
                    props.dataRaw.map((datacol)=>{
                          return ( <div 
                            key={datacol[col.Id]} 
                            className="modrekgrid-datacol"> 
                            {datacol[col.field]}

                            </div>)
                    })
                }             
                
        </div>
        )
    });  

    return(                    
            <div className="modrekgrid"> 
            
            <div className="modrekgrid-header">{headerList}</div>
 
            <div className="modrekgrid-row">
           
                    {dataList}

            </div>
            </div>

        );
        
}

export default ModrekGrid;