import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerList from "../components/CustomersList";
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from "./../actions/fetchCustomers";
import { getCustomers } from '../selectors/customers';


class CustomersContainer extends Component {

    componentDidMount() {
        if (this.props.customers.length === 0) {
            this.props.fetchCustomers();
        }
    }
    

    handleAddNew = () => {
        this.props.history.push("/customers/new");
    }
    
    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = customers => {
        return (
            <div>
                <CustomerList
                    customers={ customers }
                    urlPath={ "customers/" }>
                </CustomerList>
                <CustomersActions>
                    <button onClick={ this.handleAddNew }>Nuevo Cliente</button>
                    <button onClick={ this.handleOnBack }>Volver</button>
                </CustomersActions>
            </div>
        );
    }

    render() {
        const { customers } = this.props;
        return (
            <div>
                <AppFrame
                    header="Listado de clientes"
                    body={this.renderBody(customers)}></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers: [],
};

const mapDispatchToProps = dispatch => {
    return (
        {
            fetchCustomers: () => dispatch(fetchCustomers()),
        }
    );
}

const mapStateToProps = state => {
    return (
        {
            customers: getCustomers(state),
        }
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer));