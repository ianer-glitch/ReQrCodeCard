'use client'
import { Title } from "@/shared/components/atoms/title";
import { QrCodeStore } from "../state/QrCodeStore";
import Image from 'next/image'
import { BackButton } from "@/shared/components/molecules/backButton";


export default function QrCodeView(){
    
    
    const store = QrCodeStore()
    
    return(
        <div>
            <BackButton />
            <Title>Your Qr Code is here!</Title>
           {store.imageBase64 &&  <Image src={store.imageBase64} alt="qr-code" height={200} width="200"/>}
        </div>
    )
}