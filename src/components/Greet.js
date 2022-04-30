/*
function Greet() {
    return <h1>Hello Dhanaraj !</h1>
}

export default Greet 
*/

// Arrow Function

// Default Export

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

