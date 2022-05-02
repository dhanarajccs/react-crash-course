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

export const ClickHandler = () => {

    const clickHandler = (event) => {
        console.log("Button Clicked", event);
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

