'use client'
import { Title } from "@/shared/components/atoms/title";
import { QrCodeStore } from "../state/QrCodeStore";
import Image from 'next/image'
import { BackButton } from "@/shared/components/molecules/backButton";
import { useEffect, useState } from "react";
import style from "./qr-code-view.module.css"
import { useTranslation } from "@/locales";


export default function QrCodeView(){
    const store = QrCodeStore()
    const [rotX,setRotX] = useState(0)
    const [rotY,setRotY] = useState(0)
    const {t} = useTranslation()

     
    useEffect(()=>{
        handleMouseMove()
        handleDeviceMove()
    },[])

    const handleMouseMove = () => {
        window.addEventListener("mousemove",e=>{
        const w  = window.innerWidth;
        const h = window.innerWidth;
        
        setRotX(7*4-e.pageY *(14*4/h))
        setRotY(8*4-e.pageX*(16*4/w))
        })
    }

    const handleDeviceMove = () => {
    window.addEventListener("deviceorientation",e=>{

      const limitValue = 40
      const tempX = Math.round(e.beta ?? 0) -40
      
      const x = Math.max(-limitValue,Math.min(tempX,limitValue))
      const y = Math.round(e.gamma ?? 0)
      
      setRotX(x)
      setRotY(y)
    
    })
    
  }
   
    return(
        <div className="h-full">
            <BackButton />
            <Title>{t("qrCodeViewTitle")}</Title>
            <div className={style['qr-code-container']} >
                {store.imageBase64 &&  
                <Image  
                    style={{'transform':'rotateY('+rotY+'deg) rotateX('+rotX+'deg)'}}
                    className={style['qr-code-image']} src={store.imageBase64} 
                    alt="qr-code" 
                    height={200} 
                    width="200"
                />}

            </div>
        </div>
    )
}