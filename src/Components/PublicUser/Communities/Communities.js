import React from 'react';
import './Communities.css'
import ModrekGrid from '../../UI/Contollers/ModrekGrid/ModrekGrid';

function  Communities ()
{
   
    let columnDefs= 
    [
        {headerName: 'communityID', field: 'communityID' , type:"number" ,visible:true,Id:true ,searchable:true},
        {headerName: 'title', field: 'title' , type:"string" ,visible:true,Id:true ,searchable:true},
        {headerName: 'description', field: 'description', type:"string" ,visible:true,Id:true ,searchable:true},
    ];
    let data={"PageIndex":1 , "PageSize":5 , "Expresstion":""}
    let commandlist= {new:true,edit:true,delete:true}
    let commandaction= {newaction:'',editaction:'',deleteaction:''}
    return( 
        <div className="col-12"> <h1>Communities</h1>
        <ModrekGrid         
           url='api/Community/GetList' 
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

export default Communities;