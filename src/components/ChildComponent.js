/*
export const ChildComponent = (props) => {
  return (
    <div>
        <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  )
}
*/

export const ChildComponent = (props) => {
    return (
      <div>
        <button onClick={() => props.greetHandler("with child")}>Greet Parent</button>
      </div>
  )
}