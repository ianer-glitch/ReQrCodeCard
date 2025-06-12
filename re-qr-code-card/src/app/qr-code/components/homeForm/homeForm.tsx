'use client'

import { Button } from "@/shared/components/atoms/button/button"
import { Input } from "@/shared/components/atoms/input/input"
import styles from  "./homeForm.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { QrCodeStore } from "../../state/QrCodeStore"
import { useQrCode } from "./useQrCode"
import { QrCodeLoading } from "../qrCodeLoading/qrCodeLoading"



export const HomeForm = () =>{
    
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)
    const [text,setText] = useState("")
    const {fetchQrCode} = useQrCode()
    
    
    const store = QrCodeStore()
    
    const onClick = async () =>{
        setIsLoading(true)
        await getQrCodeImage()
        router.push("/qr-code/qr-code-view")
        setIsLoading(false)

    }

    const getQrCodeImage = async () =>{
        const base64Image = await fetchQrCode("200",text)
        store.setImageBase64(base64Image);
        
    }

    const renderAction = () =>{
        if(isLoading)
            return <QrCodeLoading/>
        
        return <Button 
                  className="w-full" 
                  type="button" 
                  onClick={onClick}>
                  Go!
                </Button>
    }


    return (
        <form  className={styles['form-container']} >
            <Input 
                className="w-full" 
                onChange={e => setText(e.target.value)} 
                label="Place the text to be converted"
            />
            {renderAction()}
        </form>
    )
}