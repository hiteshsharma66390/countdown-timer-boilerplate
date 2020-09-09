import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    getCount = (count) => {
        this.setState({
            count: count
        })
    }
    timer = () => {
        if (this.state.count > 0) this.setState((prevState) => ({ count: prevState.count - 1 }))
        if (this.state.count < 1) this.setState({ count: 0 })
    }
    componentDidMount() {
        setInterval(this.timer, 1000)
    }
    render() {

        return (

            <div>
                <Clock timeInSeconds={this.state.count} />
                <CountdownForm onSetCountdownTime={this.getCount} />
            </div>
        );
    }
}

export default Countdown;