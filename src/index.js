import React, { Component } from 'react';
import { func, node } from 'prop-types';

class ClickOut extends Component {
    static propTypes = {
        callback: func.isRequired,
        children: node.isRequired,
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.wrapper.addEventListener('click', this.onSelfClick);
            document.addEventListener('click', this.onAnyClick);
        }
    }

    componentWillUnmount() {
        this.wrapper.removeEventListener('click', this.onSelfClick);
        document.removeEventListener('click', this.onAnyClick);
    }

    onSelfClick = (e) => {
        e.clickOutTarget = this.wrapper;
    }

    onAnyClick = (e) => {
        const {
            wrapper,
            props: { callback },
        } = this;

        if (e.clickOutTarget !== wrapper) {
            callback(e);
        }
    }

    render() {
        return (
            <div ref={(wrapper) => { this.wrapper = wrapper; }}>
                { this.props.children }
            </div>
        );
    }
}

export default ClickOut;
