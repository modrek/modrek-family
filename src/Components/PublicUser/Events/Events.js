import React from 'react';
import './Events.scss'
import ModrekGrid from '../../UI/Contollers/ModrekGrid/ModrekGrid';

function  Events ()
{
    var     columnDefs= [
        {headerName: 'EventId', field: 'EventId' ,Id:true , type:"number"},
        {headerName: 'Title', field: 'Title' , type:"string"},
        {headerName: 'Decs', field: 'Decs', editable: true , type:"date"},
 
    ];

    var dataRaw=[
        { EventId : 1,Title:"Event1",Decs:"Desc1" },
        { EventId : 2,Title:"Event2",Decs:"Desc2"},
        { EventId : 3,Title:"Event3",Decs:"Desc3"},
        
    ]
    
  

  
    return(                    
        <ModrekGrid columnDefs={columnDefs} dataRaw={dataRaw}></ModrekGrid>     

        );
        
}

export default Events;