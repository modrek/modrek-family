import React from 'react';
import './Events.scss'
import ModrekGrid from '../../UI/Contollers/ModrekGrid/ModrekGrid';



function Events() {

  let columnDefs={
    contoller:
    {
        eventID:
        {
            elementType: 'number',
            elementConfig: {
                type: 'number',
                placeholder: 'eventID ID'
            },
            value: '',
            label: 'eventID ID',
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
  let data = { "PageIndex": 1, "PageSize": 5, "Expresstion": "" }
  let commandlist = { new: true, edit: true, delete: true }
  let commandaction = { newaction: '', editaction: '', deleteaction: '' }
  return (
    <div className="col-12"><h1>Events</h1>
      <ModrekGrid
        url='api/Event/GetList'
        method='post'
        data={data}
        columnDefs={columnDefs}
        commandlist={commandlist}
        commandaction={commandaction}
        inlineedit={true}
        inlinenew={true}>
      </ModrekGrid>
    </div>
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