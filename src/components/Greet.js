/*
function Greet() {
    return <h1>Hello Dhanaraj !</h1>
}

export default Greet 
*/

// Arrow Function

// Default Export
/*
const Greet = () => {
    return <h1>Hello Dhanaraj !</h1>
}
export default Greet


const Greet = () => (
    <h1>Hello Dhanaraj !</h1>
)
export default Greet


const Greet = () => <h1>Hello Dhanaraj !</h1>
export default Greet
*/

// Named Export
/*
export const Greet = () => {
    return <h1>Hello Dhanaraj !</h1>
}

export const Greet = () => (
    <h1>Hello Dhanaraj !</h1>
)

export const Greet = () => <h1>Hello Dhanaraj !</h1>
*/

export const Greet = (props) => {
    return <h1>Hello {props.name}</h1>;
}