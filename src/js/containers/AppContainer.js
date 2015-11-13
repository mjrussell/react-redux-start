import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return { }
}

const AppContainer = React.createClass({

    propTypes: {
        children: PropTypes.node
    },

    componentDidMount: function() {
    },

    componentWillReceiveProps: function(nextProps) {
    },

    render() {
        const { children } = this.props;

        return (
            <div className='app-container'>
                { children }
            </div>
        );
    }
});

export default connect(mapStateToProps, {} )(AppContainer);
