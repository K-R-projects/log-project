import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { logoutUser } from '../actions/authentication';

 class Home extends Component {
    render() {
        const {auth} = this.props
        if(!auth.isAuthenticated) return <Redirect to ='/login' />
        return (
            <div>
                Home Component
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});


export default connect(mapStateToProps,{ logoutUser })(withRouter(Home))