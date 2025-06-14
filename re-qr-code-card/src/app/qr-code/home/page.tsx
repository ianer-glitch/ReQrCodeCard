import { Title } from "@/shared/components/atoms/title";
import { HomeForm } from "../components/homeForm/homeForm";
import { LanguagesButton } from "@/shared/components/molecules/languagesButton/languageButton";

export default function Home(){
    return (
        <div>
            <div className="flex w-full items-center justify-between">
            <Title>Re Qr Code</Title>
            <LanguagesButton/>
            </div>
            <HomeForm/>
        </div>
    )
}