import { useRouter } from "next/navigation"
import { Button } from "../atoms/button/button"

export const  BackButton = () => {
    const router = useRouter()
    
    const  handleClick = () =>{
        router.back()
    }
    
    return (
        <Button className="w-10" onClick={handleClick}>Back</Button>
    )
}