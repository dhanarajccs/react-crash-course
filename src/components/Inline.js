/*
export const Inline = () => {
    return <div>Inline</div>
}
*/

/*
export const Inline = () => {
    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
    return (
        <div style={heading}>Inline</div>
    )
}
*/

export const Inline = () => {
    const heading = {
        fontSize: '72px',
        color: 'blue',
    }
    return <h1 style={heading}>Inline</h1>
}


// You can use Regular CSS at every child component as well.
/*
export const Inline = () => {
    return <h1 className='error'>Error</h1>
}
*/

// You can’t be used in the child component.
/*
export const Inline = () => {
    return <h1 className={styles.success}>Success</h1>;
}
*/



