/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSkill } from "@/services/skillServices"
import { useMutation } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form"
import { toast } from "sonner"

export const useCreateSkill = () => {
	return useMutation<any, Error, FieldValues>({
		mutationKey: ["SKILL"],
		mutationFn: async (skillData) => await createSkill(skillData),
		onSuccess: () => {
			toast.success(`Skill created successfully!`)
		},
		onError: (error) => toast.error(error.message || "Skill created failed!"),
	})
}
