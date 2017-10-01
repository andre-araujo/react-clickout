# React Click Out

A simple component that triggers a callback function when click out.

## Usage

Just import `ClickOut` component and pass a `function` as `callback` prop.

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
                <ClickOut callback={setClickOutState}>there!</ClickOut>
            </div>
        );
    }
}
```