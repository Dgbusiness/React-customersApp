import  React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from "redux-form";
import { Prompt } from "react-router-dom";
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from "./../components/CustomersActions";

// const isRequired = value => {
//     return (
//         !value && "Este campo es requerido"
//     );
// }

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es requerido";
    }

    if (!values.dni) {
        error.dni = "El DNI es un campo obligatorio";
    }

    return error;
}

const isNumber = value => {
    return (
        isNaN(Number(value)) && "El campo debe ser numerico"
    );
}

const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const onlyGrow = ( value, previousValue, values ) => {
    return (
        value && ( !previousValue ? value : ( value > previousValue ? value : previousValue ))
    );
}

class CustomerEdit extends Component {

    componentDidMount() {
        if (this.txt) {
            this.txt.focus();
        }
    }
    
    renderField = ( { input, meta, type, label, name, withFocus } ) => {
        return (
            <div>
                <div>
                    <label htmlFor={ name }>{ label }</label>
                </div>
                <div>
                    <input { ...input } 
                        type={ !type ? "text" : type }
                        ref={ withFocus && (txt => this.txt = txt) }/>
                    {
                        meta.touched && meta.error && <span>{ meta.error }</span>
                    }
                </div>
            </div>
        );
    }

    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div>
                <h2>Edición del cliente</h2>
                <form onSubmit={ handleSubmit }>
                    <Field 
                        withFocus
                        name="name" 
                        component={ this.renderField } 
                        label="Nombre"></Field>
                    <Field 
                        name="dni" 
                        component={ this.renderField } 
                        validate={ [ isNumber ] }
                        label="DNI"></Field>
                    <Field 
                        name="age" 
                        component={ this.renderField } 
                        type="number"
                        validate={ [ isNumber ] }
                        label="Edad"
                        parse={ toNumber }
                        normalize={ onlyGrow }></Field>
    
                    <CustomersActions>
                        <button type="submit" disabled={ pristine || submitting }>Aceptar</button>
                        <button type="button" disabled={ submitting } onClick={ onBack }>Cancelar</button>
                    </CustomersActions>
                    <Prompt 
                        when={ !pristine && !submitSucceeded }
                        message="Se perderán los datos si continúa"></Prompt>
                </form>           
            </div>
        );
    } 
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({ 
    form: "CustomerEdit",
    validate
})(CustomerEdit);

// const mapStateToProps = (state, props) => {
//     return (
//         {
//             initialValues: props,
//         }
//     );
// }

export default setPropsAsInitial(CustomerEditForm);