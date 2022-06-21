import React from 'react'

// cara 1
// function Greet(){
//     return <h1>Hello Vino</h1>
// }

// cara 2
// const Greet = (props) =>{
//     return (
//         <div>
//             <h1>Hello {props.name} aka {props.heroName}</h1>
//             {props.children}
//         </div>
        
//     )
// } 

const Greet = props =>{
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} aka {heroName}
            </h1>
            {props.children}
        </div>
        
    )
} 

export default Greet;