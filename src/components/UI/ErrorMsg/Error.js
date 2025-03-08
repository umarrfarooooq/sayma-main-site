import React from "react";

const Error = (props) =>{
    return(
        <>
            <div id="errorMsg" className={`p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400`} role="alert">
              <span className="font-medium">Alert!</span> {props.message}
            </div>
        </>
    )
}

export default Error;