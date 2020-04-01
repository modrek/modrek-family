import React from 'react';
import ModrekButton from '../../ModrekButton/ModrekButton';

function EditForm(props){
    return(
        <div>
            EditForm

            <ModrekButton
                clicked={ props.oncancel()}
                btnType="Danger">Cancel </ModrekButton>
        </div>
    )
}

export default EditForm;