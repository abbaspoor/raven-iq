import React from 'react'

function Layout(props) {
    return (
        <div  className="container w-50 text-white mt-1 p-2 text-center">
            {props.children}
        </div>
    )
}

export default Layout
