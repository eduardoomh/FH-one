import React, { FC, ReactComponentElement } from "react"

interface Props{
    children: any
}

export const LightLayout: FC<Props> = ({children}) =>{
    return(
        <div style={{
            backgroundColor: "#808080",
            color: "000"
        }}>
            <div>
                {children}
            </div>
            
        </div>
    )
}