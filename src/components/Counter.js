import React from "react";
import Card from "./Card"



export default class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            title: 'sosila',
            error: null,

        }
    }
    clickHandler = () => {
        this.setState((prevState) => ({count: prevState.count+1}))
        if(this.state.count+1>10) {
            this.setState({error: 'Counter exceeded maximum allowed value!'})
        }
    }

    componentDidMount() {
        console.log('component did mount')
    }
    componentWillUnmount() {
        console.log('component is destroyed')
    }


    render() {
        const {count, title, error} = this.state;
        return(
            <div>
                <h1>{title}</h1>
                <button onClick={() => this.setState({title: 'babucuna'})}>Change Name</button>

                {count>0 ? (<p>Counter is active</p>) : null}
                <p>
                   Counter Value: {count}
                </p>
                <button onClick={this.clickHandler}>increase </button>

                {error&& <div>{error}</div>}

                <Card title={title} subtitle={'sgsdgsdgsg'}> sgsgsgd</Card>
            </div>


        )
    }
}