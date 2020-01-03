import React from 'react'

function Memocomp({name}) {
    console.log("Rendering memo Component")
    return (
        <div>
           {name} 
        </div>
    )
}

export default React.memo(Memocomp)
