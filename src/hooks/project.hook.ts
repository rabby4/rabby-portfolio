/* eslint-disable @typescript-eslint/no-explicit-any */
import { createProject } from "@/services/projectServices"
import { useMutation } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form"
import { toast } from "sonner"

export const useCreateProject = () => {
	return useMutation<any, Error, FieldValues>({
		mutationKey: ["PROJECT"],
		mutationFn: async (projectData) => await createProject(projectData),
		onSuccess: () => {
			toast.success(`Project created successfully!`)
		},
		onError: (error) => toast.error(error.message || "Project created failed!"),
	})
}
