/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser } from "@/services/authServices"
import { useMutation } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form"
import { toast } from "sonner"

export const useLogin = () => {
	return useMutation<any, Error, FieldValues>({
		mutationKey: ["USER_LOGIN"],
		mutationFn: async (userData) => await loginUser(userData),
		onSuccess: () => {
			toast.success(`Logged in success!`)
		},
		onError: (error) => toast.error(error.message || "User logged in failed"),
	})
}
