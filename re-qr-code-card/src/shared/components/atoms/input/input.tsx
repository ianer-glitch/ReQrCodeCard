import { Input as Inp } from "@/components/ui/input"
import { ComponentProps } from "react"

export type InputProps = ComponentProps<typeof Inp> & {
    label? : string
}

export const Input = ({label, ...props} : InputProps) =>{
    return (
        <fieldset className="w-full">
            <label>{label}</label>
            <Inp {...props}/>
        </fieldset>
    )
}