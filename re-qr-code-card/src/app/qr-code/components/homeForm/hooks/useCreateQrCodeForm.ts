import { useRouter } from "next/navigation"

import { useForm } from "react-hook-form"
import { QrCodeStore } from "@/app/qr-code/state/QrCodeStore"
import { createQrCode } from "@/app/qr-code/services/qr-server.service"
import { z } from "zod/v4"
import { zodResolver } from "@hookform/resolvers/zod"


const schema = z.object({
    qrCodeInput:z.string().min(1,"The text is required")
})

type HomeFormInputs = z.infer<typeof schema>

export const useCreateQrCodeForm= () =>{
    const router = useRouter()
    const {register,handleSubmit,formState : {errors,isSubmitting}} = useForm<HomeFormInputs>({
        resolver:zodResolver(schema),
    })
    
    const store = QrCodeStore()

    const onSubmit = async (data : HomeFormInputs) =>{
        if(data.qrCodeInput !== store.imageBase64){
            const base64Image = await createQrCode("200",data.qrCodeInput)
            store.setImageBase64(base64Image);
        }
        
        router.push("/qr-code/qr-code-view")
    }

    return {register,handleSubmit,errors,onSubmit,isSubmitting}
}