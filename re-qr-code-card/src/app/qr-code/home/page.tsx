import { Button } from "@/shared/components/atoms/button/button";
import { Input } from "@/shared/components/atoms/input/input";
import { Title } from "@/shared/components/atoms/title";

export default function Home(){
    return (
        <div>
            <Title>Re Qr Code</Title>
            <Input label="Place the text to be converted"/>
            <Button >Go !</Button>
        </div>
    )
}