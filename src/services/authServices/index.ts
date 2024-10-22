/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
"use server"
import envConfig from "@/config/envConfig"
import axiosInstance from "@/lib/AxiosInstance"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"

export const loginUser = async (userData: FieldValues) => {
	console.log(userData)
	try {
		const { data } = await axiosInstance.post("/auth/login", userData)

		if (data.success) {
			cookies().set("accessToken", data?.data?.accessToken)
		}
		revalidateTag("user")

		return data
	} catch (error: any) {
		throw new Error(error)
	}
}

export const logOut = async () => {
	cookies().delete("accessToken")
}
export const getCurrentUser = async () => {
	const fetchOptions: any = {
		next: {
			tags: ["user"],
		},
	}
	const accessToken = cookies().get("accessToken")?.value

	let user = null

	if (accessToken) {
		const res = await fetch(`${envConfig.baseApi}/auth/me`, {
			headers: { Authorization: accessToken },
			...fetchOptions,
		})

		const data = await res.json()

		user = data?.data
	}

	return user
}
