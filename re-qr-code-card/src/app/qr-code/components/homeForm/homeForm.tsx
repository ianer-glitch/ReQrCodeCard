'use client'

import { Button } from "@/shared/components/atoms/button/button"
import { Input } from "@/shared/components/atoms/input/input"
import styles from  "./homeForm.module.css"
import { QrCodeLoading } from "../qrCodeLoading/qrCodeLoading"
import { useCreateQrCodeForm } from "./hooks/useCreateQrCodeForm"
import { useTranslation } from "@/locales"


export const HomeForm = () =>{
    const {
        register,handleSubmit,onSubmit,errors,isSubmitting        
    } = useCreateQrCodeForm()

    const {t} = useTranslation()
    
   
    const renderAction = () =>{
        
        if(isSubmitting)
            return <QrCodeLoading/>
        
        return <Button 
                  className="w-full" 
                  >
                  {t('homeButton')}
                </Button>
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles['form-container']} >
            <Input 
                className="w-full" 
                label={t("homeLabel")}
                {...register("qrCodeInput")}
            />
            {renderAction()}
            
            {errors.qrCodeInput && errors.qrCodeInput.message}
        </form>
    )
}