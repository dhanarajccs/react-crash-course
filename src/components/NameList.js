/*
export const NameList = () => {
    const names = ['Dhanaraj', 'Sekar', 'Prasanth', 'Sharva'];
    return (
        <div>
            {names.map((name) => { 
                return <h2>{name}</h2>
            })
        }
        </div>
    )
}
*/

export const NameList = () => {
    const names = ['Dhanaraj', 'Sekar', 'Prasanth', 'Sharva'];
    return (
        <div>
            {names.map((name) => { 
                return <h2 key={name}>{name}</h2>
            })
        }
        </div>
    )
}