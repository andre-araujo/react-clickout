# React Click Out
[![npm](https://img.shields.io/npm/dt/react-click-out.svg)](https://www.npmjs.com/package/react-click-out)

A simple component that triggers a callback function when click out.

## Usage

Just import `ClickOut` component and pass a `function callback` as `onClickOut` prop.

*Critical change - callback prop renamed to onClickOut*

```javascript
import React, { Component } from 'react';
import ClickOut from 'react-click-out';

class App extends Component {
    state = {
        clickedOut: false
    }

    setClickOutState = () => {
        this.setState({ clickedOut: true });
    }

    render() {
        const {
            state: { clickedOut },
            setClickOutState
        } = this;

        return(
            <div>
                <p style={{ color: clickedOut && 'red' }}>Hello</p>
                <ClickOut onClickOut={setClickOutState}>there!</ClickOut>
            </div>
        );
    }
}
```

## API Reference

| prop | description | default |
| --------- | ----------- | ----------- |
| onClickOut | click out callback function | - |
| className | className | - |
| container | sets container element tag | div |
