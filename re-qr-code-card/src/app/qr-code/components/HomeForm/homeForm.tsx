'use client'

import { Button } from "@/shared/components/atoms/button/button"
import { Input } from "@/shared/components/atoms/input/input"
import styles from  "./homeForm.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { QrCodeStore } from "../../state/QrCodeStore"



export const HomeForm = () =>{
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)

    const [text,setText] = useState("")

    const store = QrCodeStore()
    
    const onClick = async () =>{
        console.info(text)
        await getQrCodeImage()
        router.push("/qr-code/qr-code-view")
    }

    const getQrCodeImage = async () =>{
        setIsLoading(true)
        store.setImageBase64("");
        setIsLoading(false)
        
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
                {isLoading ? "Loading..." : "Go!"}
            </Button>
        </form>
    )
}