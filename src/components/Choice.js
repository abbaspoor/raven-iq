import React from 'react'

export default function Choice({question_number, choice , handler}) {
    return (
        <button value={choice} onClick={ e => handler (e , choice)} >
            <img alt="" width="70%" src={'../iq/' + question_number +'/'+ choice + '.svg'}/>
        </button>
        
    )
}
