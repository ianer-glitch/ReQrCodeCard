import { useRouter } from "next/navigation"
import { Button } from "../atoms/button/button"

export const  BackButton = () => {
    const router = useRouter()
    
    const  handleClick = () =>{
        router.back()
    }
    
    return (
        <Button onClick={handleClick}>Back</Button>
    )
}