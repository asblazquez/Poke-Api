import React from 'react'

class Clock extends React.Component{
    constructor (props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div className='clockContainer'>
                <div className='clock row col-2 offset-9 mt-4'>
                    <h1>Hora</h1>
                    <h2>{this.state.date.toLocaleTimeString()}</h2>
                </div>
            </div>
        )
    }
}

export default Clock