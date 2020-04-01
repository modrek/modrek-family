import React, { Component } from 'react';
import ModrekButton from '../../ModrekButton/ModrekButton';
import ModrekInput from '../../ModrekInput/ModrekInput';
import checkValidity from '../../../Utility/Utility';


class CRUDFrom extends Component {

    constructor(props) {
        super(props);
        this.state = props.columnDefs;
    }

    render() {

        this.inputChangedHandler = (event, controllerid) => {

            var controller = { ...this.state.contoller }
            controller[controllerid].value = event.target.value;
            controller[controllerid].touched = true;
            controller[controllerid].valid = checkValidity(event.target.value, controller[controllerid].validation);
            this.setState({ controller })

        }


        const formElementsArray = [];
        for (let key in this.state.contoller) {
            if (!this.state.contoller[key].key)
            formElementsArray.push({
                id: key,
                config: this.state.contoller[key]
            });
        }


        let form = formElementsArray.map(formElement => (                     
            <ModrekInput
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                label={formElement.config.label}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} >
                    </ModrekInput>                              
        )
        );



        return (

            <div>
                <h2>{this.props.type} Data</h2>
        
                {form}

                <ModrekButton
                    clicked={this.props.oncancel()}
                    btnType="Success">Save </ModrekButton>
                <ModrekButton
                    clicked={this.props.oncancel()}
                    btnType="Danger">Cancel </ModrekButton>
            </div>
        )
    }


}

export default CRUDFrom;