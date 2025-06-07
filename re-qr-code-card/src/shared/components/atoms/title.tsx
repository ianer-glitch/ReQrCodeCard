import React from "react";
interface TitleProps {
    children : React.ReactNode
}
export const Title = ({children} : TitleProps) =>{
    return (
        <h1>
            {children}
        </h1>
    )
}