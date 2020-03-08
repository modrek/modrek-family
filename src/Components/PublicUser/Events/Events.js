import React from 'react';
import './Events.scss'
import ModrekGrid from '../../UI/Contollers/ModrekGrid/ModrekGrid';



function  Events ()
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
    );


  //  axios.post('http://localhost:64001/api/Event/GetList1'
  //   )        
  // .then(function (response) {

  //   dataRaw=[
  //     { EventId : 1,Title:"Event1",Decs:"Desc1" },
  //     { EventId : 2,Title:"Event2",Decs:"Desc2"},
  //     { EventId : 3,Title:"Event3",Decs:"Desc3"},    
  //   ];

  //   console.log(response.data);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log('[Error]',error);
  // })
  // .finally(function () {
  //   // always executed
  // });

          
}


export default Events;