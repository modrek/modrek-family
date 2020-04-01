import React from 'react';
import './Communities.css'
import ModrekGrid from '../../UI/Contollers/ModrekGrid/ModrekGrid';

function  Communities ()
{  
    let columnDefs={
        contoller:
        {
            communityID:
            {
                elementType: 'number',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Community ID'
                },
                value: '',
                label: 'Community ID',
                validation: {
                    required: true,
                    // isEmail: true,

                },
                key:true,
                valid: false,
                touched: false
            },
            title:
            {
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Title'
                },
                value: '',
                label: 'Title',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false
            },
            description:
            {
                elementType: 'text',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Description'
                },
                value: '',
                label: 'Description',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false
            }
        }
    }
    let data={"PageIndex":1 , "PageSize":5 , "Expresstion":""}
    let commandlist= {new:true,edit:true,delete:true,details:true}
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