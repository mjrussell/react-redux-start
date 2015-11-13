import React, { PropTypes } from 'react';

const Example = React.createClass({

    propTypes: {
        name: PropTypes.string,
        submitName: PropTypes.func.isRequired,
        clearName: PropTypes.func.isRequired,
    },

    renderName: function() {
        if (this.props.name) {
            return <h6>How are you {this.props.name}</h6>;
        } else {
            return <h6>You are an unknown user</h6>;
        }
    },

    onSubmit: function(e) {
        this.props.submitName({
            name: React.findDOMNode(this.refs.username).value,
        });

        e.preventDefault();
    },

    render: function() {

        return (
            <div>
                <h1>Hello world!</h1>
                {this.renderName()}
                <input type='username' id='username' ref='username' placeholder='Username'/>
                <button type='submit' onClick={this.onSubmit}>Login</button>
                <button type='submit' onClick={this.props.clearName}>Clear</button>
            </div>
        );
    }
});


export default Example;
