import React from 'react'

export default function Choice({questionNumber, choice , handler}) {
    return (
        <button value={choice} onClick={ e => handler (e , choice)} >
            <img alt="" width="70%" src={'../iq/' + questionNumber +'/'+ choice + '.svg'}/>
        </button>
        
    )
}
