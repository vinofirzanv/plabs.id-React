import React from 'react'

const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Hello VIno JSX</h1>
    //     </div>
    // )

    return React.createElement('div',{id: 'hello', className:'dummy'}, 
    React.createElement('h1',null,'hai vino jsx'))
}

export default Hello;