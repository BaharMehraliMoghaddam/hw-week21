import { useMutation } from "@tanstack/react-query";
import postSingup from "../api/postSignup";

export default function useSignupAuthentication() {
  return useMutation({
    mutationKey: "signup",
    mutationFn: (user) => postSingup(user),
  });
}
