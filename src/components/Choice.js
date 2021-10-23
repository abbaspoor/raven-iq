import React from 'react'

export default function Choice({questionNumber, choice , handler}) {
    return (
        <button className="col-4 mt-2" value={choice} onClick={ e => handler (e , choice)} >
            <img alt="" width="100%" src={'../iq/' + questionNumber +'/'+ choice + '.svg'}/>
        </button>
        
    )
}
