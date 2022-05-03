/*
export const UserGreeting = () => {
    const isLogged = false
    return <div>Welcome {isLogged ? "India" : "Australia"}</div>
}
*/

/*
export const UserGreeting = () => {
    const isLogged = true
    return <div>Welcome {isLogged && 'Canada'}</div>
}
*/

export const UserGreeting = () => {
    const isLogged = false
    return <div>Welcome {isLogged && 'Canada'}</div>
}
  