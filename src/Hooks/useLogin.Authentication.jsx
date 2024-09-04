import { useMutation } from "@tanstack/react-query"
import postLogin from "../api/postLogin"



export default function useLoginAuthentication() {
  return useMutation({
    mutationKey:"login",
    mutationFn:(user)=>postLogin(user)
  })
}
