import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerList from "../components/CustomersList";
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        "dni":"12345678",
        "name":"Juan Perez",
        "age":37
    },
    {
        "dni":"13345678",
        "name":"Juana Rodriguez",
        "age":27
    },
    {
        "dni":"14345678",   
        "name":"Ester Exposito",
        "age":23
    },
];

class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }
    

    handleAddNew = () => {
        this.props.history.push("/customers/new");
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
                </CustomersActions>
            </div>
        );
    }

    render() {
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
};

const mapDispatchToProps = dispatch => {
    return (
        {
            fetchCustomers: () => dispatch(fetchCustomers()),
        }
    );
}

export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));