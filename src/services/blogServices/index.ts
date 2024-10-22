/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import axiosInstance from "@/lib/AxiosInstance"
import { revalidateTag } from "next/cache"
import { FieldValues } from "react-hook-form"

export const createBlog = async (blogData: FieldValues) => {
	try {
		const { data } = await axiosInstance.post("/blogs", blogData)

		revalidateTag("blog")

		return data
	} catch (error: any) {
		throw new Error(error)
	}
}
