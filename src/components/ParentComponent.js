/*
import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {

    const greetParent = () => {
        alert("Hello from Parent Component");
    }

    return <ChildComponent greetHandler={greetParent} />
}
*/

import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {

    const greetParent = (childName) => {
        alert(`Hello from Parent Component ${childName}`);
    }

    return <ChildComponent greetHandler={greetParent} />
}

