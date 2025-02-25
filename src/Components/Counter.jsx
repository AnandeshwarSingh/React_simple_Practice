
import React, { useState } from 'react';

// class Count extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//       }
//     increment=()=>{
//         this.setState((prevState)=>({ count:prevState.count + 1 }));
//     }

//     decrement=()=>{
//         this.setState((prevState)=>({count:prevState.count-1}));
//     }
    
//     render(){
//         return(
//             <>
//                 <h1> count: {this.state.count}</h1>
//                 <button onClick={this.increment}>Increase by one</button>
//                 <button onClick={this.decrement}>Decrease by one</button>
//             </>
//         )
//     }
// }
// export default Count;

let Counter =() => {
    let [count, setCount] = useState(0);
    let increase=()=>{
        setCount(count+1);
    }
    let decrease=()=>{
        setCount(count-1)
    }
    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={increase}>Increase by one</button>
        <button onClick={decrease}> Decrease by 1</button>
        </>
    )
}
export default Counter