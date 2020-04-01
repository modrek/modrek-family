import React from 'react';
import ModrekButton from '../../ModrekButton/ModrekButton';

function DetailsForm(props){
    return(
        <div>
            DetailsForm

            <ModrekButton
                clicked={ props.oncancel()}
                btnType="Danger">Cancel </ModrekButton>
        </div>
    )
}

export default DetailsForm;