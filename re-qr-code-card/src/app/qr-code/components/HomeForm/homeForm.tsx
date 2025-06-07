'use client'

import { Button } from "@/shared/components/atoms/button/button"
import { Input } from "@/shared/components/atoms/input/input"
import styles from  "./homeForm.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"



export const HomeForm = () =>{
    const router = useRouter()

    const [text,setText] = useState("")
    
    const onClick = () =>{
        console.info(text)
        router.push("/qr-code/qr-code-view")
    }


    return (
        <form  className={styles['form-container']} >
            <Input 
                className="w-full" 
                onChange={e => setText(e.target.value)} 
                label="Place the text to be converted"
            />
            <Button 
                className="w-full" 
                type="button" 
                onClick={onClick}>
                Go !
            </Button>
        </form>
    )
}