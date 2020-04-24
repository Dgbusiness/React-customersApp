import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';


class NewCustomerContainer extends Component {

    handleSubmit = () => {

    }

    handleOnSubmitSuccess = () => {

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

};

export default connect( null, null )(withRouter(NewCustomerContainer));