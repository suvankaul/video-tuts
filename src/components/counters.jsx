import React, { Component } from 'react';

import Counter from './counter'

class Counters extends Component {
    
    render() { 

        // return (<div>
        //     {this.state.counters.map((counter) => <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.deleteCounter}>
        // {/* <h4>Counter #{counter.id}</h4> */}
        //     </Counter>)}
        // </div>);
        return(
            <div>
                <button className="btn btn-primary btn-sm-2" onClick={this.props.onReset}>RESET</button>
                {this.props.counters.map((counter)=>(
                    <Counter key={counter.id} counter={counter} onDelete={this.props.onDelete} onAdd={this.props.onAdd}></Counter>
                ))}
            </div>
        )
    }
}
 
export default Counters;