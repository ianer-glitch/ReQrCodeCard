import { Button } from "@/shared/components/atoms/button/button"
import { Input } from "@/shared/components/atoms/input/input"
import styles from  "./homeForm.module.css"

export const HomeForm = () =>{
    return (
        <form className={styles['form-container']} >
            <Input className="w-full" label="Place the text to be converted"/>
            <Button className="w-full">Go !</Button>
        </form>
    )
}