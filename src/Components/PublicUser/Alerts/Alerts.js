import React from 'react';
import './Alerts.scss'
import ModrekGrid from '../../UI/Contollers/ModrekGrid/ModrekGrid';

function  Alerts ()
{
    var     columnDefs= [
        {headerName: 'Id', field: 'Id' ,Id:true ,type:"number"},
        {headerName: 'Title', field: 'Title', type:"string"},
        {headerName: 'Decs', field: 'Decs', editable: true, type:"string"},
        {headerName: 'DateTime', field: 'DateTime', type:"date"},
    ];

    var dataRaw=[
        { Id : 1,Title:"Alert1",Decs:"Desc1" , DateTime :"2016-05-05"},
        { Id : 2,Title:"Alert2",Decs:"Desc2", DateTime :"2016-09-05"},
        { Id : 3,Title:"Alert3",Decs:"Desc3", DateTime :"2019-05-05"},
        
    ]
    
  

  
    return(                    
        <ModrekGrid columnDefs={columnDefs} dataRaw={dataRaw}></ModrekGrid>     

        );
        
}

export default Alerts;