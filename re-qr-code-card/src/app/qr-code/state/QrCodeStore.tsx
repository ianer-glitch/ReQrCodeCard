import {create} from 'zustand'
import { persist } from 'zustand/middleware';

type QrCodeStore = {
    imageBase64 : string
    setImageBase64 : (value : string) => void
}

export const QrCodeStore  = create<QrCodeStore>()(
    persist(
        (set) => ({
            imageBase64 : "",
            setImageBase64 : (value : string) => set({imageBase64 : value})

        }),
        {
            name:"qr-code-store"
        }
    )
)