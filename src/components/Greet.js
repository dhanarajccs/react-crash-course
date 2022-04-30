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

/*
export const Greet = (props) => {
    return <h1>Hello {props.name}</h1>;
}
*/

/*
export const Greet = (props) => {
    return <h1>Hello {props.name} @ {props.heroName}</h1>;
}
*/

// To render the unknown content using children props
/*
export const Greet = (props) => {
    return (
        <h1> Hello {props.name} @ {props.heroName}</h1>
        {props.children}
    )
}
*/

/*
export const Greet = (props) => {
    return (
        <div>
            <h1> Hello {props.name} @ {props.heroName}</h1>
            {props.children}
        </div>
    )
}
*/

// props are immutable – The value can’t be changed.
export const Greet = (props) => {
    props.name = "Sharva";
    return (
        <div>
            <h1> Hello {props.name} @ {props.heroName}</h1>
            {props.children}
        </div>
    )
}