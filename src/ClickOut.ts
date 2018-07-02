import * as React from 'react';

interface Props {
    onClickOut: (event: MouseEvent) => void
    className: string,
    container: string
}

class ClickOut extends React.Component<Props, {}> {
    private wrapper: Element;

    static defaultProps = {
        container: 'div'
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
            props: {
                onClickOut
            },
        } = this;

        if (e.clickOutTarget !== wrapper) {
            onClickOut && onClickOut(e);
        }
    }

    render() {
        const { className, children, container } = this.props;

        return (
            React.createElement(container, {
                ref: (wrapper) => {
                    this.wrapper = wrapper;
                },
                children,
                className
            })
        );
    }
}

export default ClickOut;
