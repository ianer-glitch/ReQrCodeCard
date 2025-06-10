import { api } from "@/shared/config/axios";
import { blobToBase64 } from "@/shared/utils/blobToBase64";


export  function  useQrCode  (){
   
   const fetchQrCode = async (size: string, data: string) => {
    const response = await api.get(
      `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${data}`,
      { responseType: 'blob' }
    );
    return blobToBase64(response.data);
  };

  return { fetchQrCode };

}
