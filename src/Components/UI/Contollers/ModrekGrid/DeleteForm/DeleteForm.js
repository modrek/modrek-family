import React from 'react';
import ModrekButton from '../../ModrekButton/ModrekButton';

function DeleteForm(props){
    return(
        <div>
            DeleteForm

            <ModrekButton
                clicked={ props.oncancel()}
                btnType="Danger">Cancel </ModrekButton>
        </div>
    )
}

export default DeleteForm;