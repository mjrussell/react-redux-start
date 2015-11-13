import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


import * as Actions from '../actions/Actions';
import Example from '../components/Example';

function mapStateToProps(state) {
    const name = state.example.name;
    return {
        name,
    }
}

const ExampleContainer = React.createClass({

    propTypes: {
        name: PropTypes.string,
        submitName: PropTypes.func.isRequired,
        clearName: PropTypes.func.isRequired,
    },

    render() {

        return (
            <Example name={this.props.name} submitName={this.props.submitName} clearName={this.props.clearName} />
        );
    }
});

export default connect(mapStateToProps, {...Actions} )(ExampleContainer);
