import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {

    const greetParent = () => {
        alert("Hello from Parent Component");
    }

    return <ChildComponent greetHandler={greetParent} />
}