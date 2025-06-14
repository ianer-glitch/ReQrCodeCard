'use client'

import { LanguageResourcesType, useTranslation } from "@/locales"
import { Button } from "../../atoms/button/button"

export const LanguagesButton = () =>{
    const {changeLanguage} = useTranslation()
    
    
    
    const handleLanguageChange =  (newLanguage :LanguageResourcesType) => {
        changeLanguage(newLanguage)
    }

    
    return (
        <ul className="flex items-center justify-center gap-2">
            <Button className="w-20" onClick={() => handleLanguageChange("ptBR")}>PT-BR</Button>
            <Button className="w-20" onClick={() =>handleLanguageChange("enUS")}>EN-US</Button>
        </ul>
    )
}