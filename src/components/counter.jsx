import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        // imageUrl: 'https:picsum.photos/200'
        tags: ['tag1', 'tag2', 'tag3']
        // tags: []
    }
    // EVENT HANDLERS
    //this cant be used in the methods which are called on events (onClick) ie. it should be bind to the method. So we use constructor and bind "this" using ".bind" property
    constructor(props){
        super(props);
        console.log(props)
        this.incrementCounter = this.incrementCounter.bind(this);
    }
    // incrementCounter(){
    //     this.setState({count: this.state.count + 1})
    // }

    //another option is to convert the function into arrow function as it rebinds itself
    incrementCounter = (product) => {
        console.log(product);
        this.setState({value: this.state.value + 1})
    }
    deleteCounter = (product) =>{
        //to change state property;
        console.log(product)
        this.setState({value: this.state.value - 1})
    }
    productDetails = (product) =>{
        console.log(product)
    }

    style = {
        fontSize: '10px',
        // background: 'green'
    }
    formatCounter() {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
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
                {/* {this.props.children} */}
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button style={{ 'fontSize': '16px','padding':'5px','margin':'5px' }} className="btn btn-secondary btn-sm" onClick={() => this.incrementCounter("product")}>Add</button>
                {/* To pass parameters into function */}
                {/* <button onClick={()=> this.productDetails("product")}>Product</button> */}
                <button style={{ 'fontSize': '16px', 'padding':'5px','margin':'5px'}} className="btn btn-danger btn-sm" onClick={this.props.onDelete}>Delete</button>
                {/* <div>
                    {this.state.tags.length ===0 && "Please create Tags"}
                    {this.renderTags()}
                </div> */}
            </div>
        )
    }

    //use refractor to convert loc into function (extract into methods of class)
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;