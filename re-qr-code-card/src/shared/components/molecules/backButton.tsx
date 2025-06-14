import { useRouter } from "next/navigation"
import { Button } from "../atoms/button/button"
import { useTranslation } from "@/locales"

export const  BackButton = () => {
    const router = useRouter()
    const {t} = useTranslation()
    
    const  handleClick = () =>{
        router.back()
    }
    
    return (
        <Button className="w-15" onClick={handleClick}>{t("backButton")}</Button>
    )
}