import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const AppContainer = React.createClass({

    propTypes: {
        children: PropTypes.node
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

export default connect(false)(AppContainer);
