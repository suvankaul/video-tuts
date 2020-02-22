import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        // imageUrl: 'https:picsum.photos/200'
        tags: ['tag1', 'tag2', 'tag3']
        // tags: []
    }

    // EVENT HANDLERS
    //this cant be used in the methods which are called on events (onClick) ie. it should be bind to the method. So we use constructor and bind "this" using ".bind" property
    constructor(){
        super();
        this.incrementCounter = this.incrementCounter.bind(this);
    }
    incrementCounter(){
        this.setState({count: this.state.count + 1})
    }

    //another option is to convert the function into arrow function as it rebinds itself
    decrementCounter = () =>{
        //to change state property;
        this.setState({count: this.state.count - 1})
    }

    style = {
        fontSize: '10px',
        // background: 'green'
    }
    formatCounter() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;

        return (<ul>
            {this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        )
    }
    render() {
        //using React.fragment to avoid using <div> to place 2 elements on same level in render()
        // return (<React.Fragment><span>{this.formatCounter()}</span><button>Increment</button></React.Fragment>);
        return (
            <div>
                {/* <img src={this.state.imageUrl} alt=""></img> */}
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button style={{ 'fontSize': '16px','padding':'5px','margin':'5px' }} className="btn btn-secondary btn-sm" onClick={this.incrementCounter}>Counter Increment</button>
                <button style={{ 'fontSize': '16px', 'padding':'5px','margin':'5px'}} className="btn btn-secondary btn-sm" onClick={this.decrementCounter}>Counter Decrement</button>
                <div>
                    {this.state.tags.length ===0 && "Please create Tags"}
                    {this.renderTags()}
                </div>
            </div>
        )
    }

    //use refractor to convert loc into function (extract into methods of class)
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;