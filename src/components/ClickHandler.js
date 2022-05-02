/*
export const ClickHandler = () => {

    const clickHandler = () => {
        console.log("Button Clicked");
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}
*/

// EventHandler automatically receives the event as its argument.
/*
export const ClickHandler = () => {

    const clickHandler = (event) => {
        console.log("Button Clicked", event)
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}
*/

// pass the additional arguments to the EventHandler
export const ClickHandler = () => {

    const clickHandler = (event, count = 1) => {
        console.log("Button Clicked", count, event)
    }

    return (
        <div>
            <button onClick={clickHandler}>Click </button>
            <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
        </div>
    )
}