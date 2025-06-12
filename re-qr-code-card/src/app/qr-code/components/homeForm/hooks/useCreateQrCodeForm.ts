import { useRouter } from "next/navigation"
import { HomeFormInputs } from "../homeForm.types"
import { useForm } from "react-hook-form"
import { useQrCode } from "./useQrCode"
import { QrCodeStore } from "@/app/qr-code/state/QrCodeStore"

export const useCreateQrCodeForm= () =>{
    const router = useRouter()
    const {register,handleSubmit,formState : {errors,isSubmitting}} = useForm<HomeFormInputs>()
    const {fetchQrCode} = useQrCode();
    const store = QrCodeStore()

    const onSubmit = async (data : HomeFormInputs) =>{
        const base64Image = await fetchQrCode("200",data.qrCodeInput)
        store.setImageBase64(base64Image);
        router.push("/qr-code/qr-code-view")
    }

    return {register,handleSubmit,errors,onSubmit,isSubmitting}
}