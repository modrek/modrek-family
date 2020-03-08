import React from 'react';
import './Alerts.scss'
import ModrekGrid from '../../UI/Contollers/ModrekGrid/ModrekGrid';

function  Alerts ()
{
    let columnDefs= 
  [
      {headerName: 'eventID', field: 'eventID' , type:"number" ,visible:true,Id:true ,searchable:true},
      {headerName: 'title', field: 'title' , type:"string" ,visible:true,Id:true ,searchable:true},
      {headerName: 'description', field: 'description', type:"string" ,visible:true,Id:true ,searchable:true},
  ];
  let data={"PageIndex":1 , "PageSize":5 , "Expresstion":""}
  let commandlist= {new:true,edit:true,delete:true}
  let commandaction= {newaction:'',editaction:'',deleteaction:''}
  return( 
      <div> <h1>Alert</h1>
      <ModrekGrid               
         url='api/Event/GetList1' 
         data={data}
         method='post' 
         columnDefs={columnDefs} 
         commandlist={commandlist}
         commandaction={commandaction}
         inlineedit={true}
         inlinenew={true}>
      </ModrekGrid>       
      </div>
    );

}

export default Alerts;