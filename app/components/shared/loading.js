import React from 'react';
import PropTypes from 'prop-types';

let styles = {
    content: {
        'textAlign': 'center',
        'fontSize': '35px'
    }
};

export class Loading extends React.Component { 

    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
    }

    componentDidMount() {
        let looped = this.props.text + '...';
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                text: looped === this.state.text ? this.props.text : prevState.text + '.'
            }))
        }, this.props.speed)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <p style={styles.content}>{this.state.text}</p>
        );
    }
}

Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
};

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
}