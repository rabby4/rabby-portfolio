/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBlog } from "@/services/blogServices"
import { useMutation } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form"
import { toast } from "sonner"

export const useCreateBlog = () => {
	return useMutation<any, Error, FieldValues>({
		mutationKey: ["BLOG"],
		mutationFn: async (blogData) => await createBlog(blogData),
		onSuccess: () => {
			toast.success(`Blog created successfully!`)
		},
		onError: (error) => toast.error(error.message || "Blog created failed!"),
	})
}
