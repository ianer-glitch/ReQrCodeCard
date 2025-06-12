'use client'

import { Button } from "@/shared/components/atoms/button/button"
import { Input } from "@/shared/components/atoms/input/input"
import styles from  "./homeForm.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { QrCodeStore } from "../../state/QrCodeStore"
import { useQrCode } from "./useQrCode"
import { QrCodeLoading } from "../qrCodeLoading/qrCodeLoading"
import { SubmitHandler, useForm } from "react-hook-form"
import { HomeFormInputs } from "./homeForm.types"


export const HomeForm = () =>{
    
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)
    const {fetchQrCode} = useQrCode()
    const {register,handleSubmit,formState : {errors}} = useForm<HomeFormInputs>()
    
    
    const store = QrCodeStore()
    
    const hadleOnSubmit : SubmitHandler<HomeFormInputs> = async (data) =>{
        setIsLoading(true)
        await getQrCodeImage(data.qrCodeInput)
        router.push("/qr-code/qr-code-view")

    }

    const getQrCodeImage = async (text:string) =>{
        const base64Image = await fetchQrCode("200",text)
        store.setImageBase64(base64Image);
        
    }

    const renderAction = () =>{
        if(isLoading)
            return <QrCodeLoading/>
        
        return <Button 
                  className="w-full" 
                  >
                  Go!
                </Button>
    }


    return (
        <form onSubmit={handleSubmit(hadleOnSubmit)} className={styles['form-container']} >
            <Input 
                className="w-full" 
                label="Place the text to be converted"
                {...register("qrCodeInput",{required:true})}
            />
            {renderAction()}

            {errors.qrCodeInput && 'Text is required!'}
        </form>
    )
}