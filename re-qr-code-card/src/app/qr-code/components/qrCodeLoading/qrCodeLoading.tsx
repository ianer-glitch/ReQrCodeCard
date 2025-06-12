import style from "./qrCodeLoading.module.css"

export const QrCodeLoading = () => {
    return (
        <div className=" absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className=" w-52 h-52 flex items-center justify-between">
            <div className={`${style.item1} shadow-2xl  w-20 h-20 rounded-4xl`}></div>
            <div className={`${style.item2} shadow-2xl  w-20 h-20 bg-teal-950 rounded-4xl`}></div>
            <div className={`${style.item3} shadow-2xl  w-20 h-20 bg-teal-950 rounded-4xl`}></div>
        </div>
</div>


    )
}