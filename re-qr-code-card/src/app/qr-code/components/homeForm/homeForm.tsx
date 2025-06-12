'use client'

import { Button } from "@/shared/components/atoms/button/button"
import { Input } from "@/shared/components/atoms/input/input"
import styles from  "./homeForm.module.css"
import { QrCodeLoading } from "../qrCodeLoading/qrCodeLoading"
import { useCreateQrCodeForm } from "./hooks/useCreateQrCodeForm"


export const HomeForm = () =>{
    const {
        register,handleSubmit,onSubmit,errors,isSubmitting        
    } = useCreateQrCodeForm()
    
    const renderAction = () =>{
        if(isSubmitting)
            return <QrCodeLoading/>
        
        return <Button 
                  className="w-full" 
                  >
                  Go!
                </Button>
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles['form-container']} >
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