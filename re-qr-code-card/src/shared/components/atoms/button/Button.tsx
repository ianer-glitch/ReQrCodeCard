import { Button as ShadcnButton } from "@/components/ui/button"
import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<typeof ShadcnButton>;

export const Button  = ( props: ButtonProps) => {
    return (
        <ShadcnButton {...props}/>
    )
}