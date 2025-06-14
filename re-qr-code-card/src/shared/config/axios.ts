import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_QR_CODE_API_URL,
} );
  