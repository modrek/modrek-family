import React, { Component } from 'react';
import ModrekInput from '../../Contollers/ModrekInput/ModrekInput';
import checkValidity from '../../Utility/Utility';
import ModrekButton from '../../../UI/Contollers/ModrekButton/ModrekButton'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contoller:
            {
                username:
                {
                    elementType: 'text',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Mail Address'
                    },
                    value: '',
                    label:'User Name',
                    validation: {
                        required: true,
                        isEmail: true,

                    },
                    valid: false,
                    touched: false
                },
                password:
                {
                    elementType: 'text',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Password'
                    },
                    value: '',
                    label:'Password',
                    validation: {
                        required: true,
                        minLength: 6,
                    },
                    valid: false,
                    touched: false
                }
            }
        }

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
        for ( let key in this.state.contoller ) {
            formElementsArray.push( {
                id: key,
                config: this.state.contoller[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <ModrekInput
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                label={formElement.config.label}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );


        return (
            <div className="col-8 p-2 login">
                {form}
                <ModrekButton
                    clicked={this.switchAuthModeHandler}
                    // btnType="Success">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</ModrekButton>
                    btnType="Success">SIGNIN</ModrekButton>
            </div>
        )
    }

}

export default Login;