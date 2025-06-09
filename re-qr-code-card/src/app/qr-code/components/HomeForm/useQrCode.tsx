import { api } from "@/shared/config/axios";
import { useEffect, useState } from "react";

export  function  useQrCode  (size:string , data:string){
    const [qrCodeImage,setQrCodeImage] = useState("")
    
    
    useEffect(()=>{
        const getQrCode = async () => {
            const qr = await api.get(`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${data}`,{responseType:'blob'})
            console.info(qr.data)
            setQrCodeImage(qr.data)
        }
         getQrCode()   
        },[data,size])



    
    return {qrCodeImage}
}
