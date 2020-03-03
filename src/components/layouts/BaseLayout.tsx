import React from "react"
import Header from "../shared/Header"

const BaseLayout: React.FC<{ className?: string }> = ({ children, className }) => {
    return (
        <div>
            <Header />
            <div className={`cover ${className}`}>
                {children}
            </div>
        </div>
    )
}


export default BaseLayout