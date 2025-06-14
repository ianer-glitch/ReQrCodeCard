import  { ReactNode } from "react";
import styles from "./qr-code.module.css"



export default function QrCodeLayout({children}: Readonly<{children : ReactNode}>){
    return(
        <div className={styles['qr-code-layout']}>
            {children}
        </div>
    )
}