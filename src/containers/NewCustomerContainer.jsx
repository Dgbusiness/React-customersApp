import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { insertCustomer } from "./../actions/insertCustomer";


class NewCustomerContainer extends Component {

    handleSubmit = values => {
        return this.props.insertCustomer(values);
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit 
                    onSubmit={ this.handleSubmit }
                    onSubmitSuccess={ this.handleOnSubmitSuccess }
                    onBack={ this.handleOnBack }></CustomerEdit>
    }
    render() {
        return (
            <AppFrame
                header="Creación del cliente"
                body={this.renderBody()}></AppFrame>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
};

export default connect( null, { insertCustomer } )(withRouter(NewCustomerContainer));