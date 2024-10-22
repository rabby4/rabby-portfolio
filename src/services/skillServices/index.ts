/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import axiosInstance from "@/lib/AxiosInstance"
import { revalidateTag } from "next/cache"
import { FieldValues } from "react-hook-form"

export const createSkill = async (skillData: FieldValues) => {
	try {
		const { data } = await axiosInstance.post("/skills", skillData)

		revalidateTag("skills")

		return data
	} catch (error: any) {
		throw new Error(error)
	}
}
