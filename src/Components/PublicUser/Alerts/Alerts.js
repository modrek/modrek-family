import React from 'react';
import './Alerts.scss'
import ModrekGrid from '../../UI/Contollers/ModrekGrid/ModrekGrid';

function Alerts() {
    // let columnDefs =
    //     [
    //         { headerName: 'eventID', field: 'eventID', type: "number", visible: true, Id: true, searchable: true },
    //         { headerName: 'title', field: 'title', type: "string", visible: true, Id: true, searchable: true },
    //         { headerName: 'description', field: 'description', type: "string", visible: true, Id: true, searchable: true },
    //     ];
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
        <div className="col-12"> <h1>Alert</h1>
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