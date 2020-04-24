import React, { Component } from 'react';

export const setPropsAsInitial = WrappedComponent => {
    return (
        class extends Component {
            render() {
                return (
                    <WrappedComponent { ...this.props } initialValues={ this.props }/>
                );
            }
        }
    );
}