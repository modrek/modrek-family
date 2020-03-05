import React from 'react';
import './Communities.css'
import ModrekGrid from '../../UI/Contollers/ModrekGrid/ModrekGrid';

function  Communities ()
{
   
    var dataRaw=[
        { Id : 1,Title:"title1",Decs:"Desc1" , DateTiem :"2016-05-05"},
        { Id : 2,Title:"title2",Decs:"Desc2", DateTiem :"2016-09-05"},
        { Id : 3,Title:"title3",Decs:"Desc3", DateTiem :"2019-05-05"},
        { Id : 4,Title:"title4",Decs:"Desc4", DateTiem :"2028-07-01"},
        { Id : 5,Title:"title5",Decs:"Desc5", DateTiem :"2028-07-01"},
        { Id : 6,Title:"title6",Decs:"Desc6", DateTiem :"2028-07-01"},
        { Id : 7,Title:"title7",Decs:"Desc7", DateTiem :"2028-07-01"},
        { Id : 8,Title:"title8",Decs:"Desc8", DateTiem :"2028-07-01"},
    ]
    
    var     columnDefs= [
            {headerName: 'Id', field: 'Id', type:"number"},
            {headerName: 'Title', field: 'Title', type:"string"},
            {headerName: 'Decs', field: 'Decs', editable: true, type:"string"},
        ];

  
    return(                    
        <ModrekGrid columnDefs={columnDefs} dataRaw={dataRaw}></ModrekGrid>     

        );
        
}

export default Communities;