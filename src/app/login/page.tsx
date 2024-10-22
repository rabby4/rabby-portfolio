"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"
import { useLogin } from "@/hooks/auth.hooks"
import { useRouter } from "next/navigation"
import LabelInputContainer from "@/components/form/LabelInputContainer"
import BottomGradient from "@/components/form/BottomGradient"

export default function LoginPage() {
	const { control, handleSubmit } = useForm({})
	const { mutate: handleLogin, isPending, isSuccess } = useLogin()
	const router = useRouter()

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		console.log(data)
		await handleLogin(data)
	}

	if (!isPending && isSuccess) {
		router.push("/admin")
	}

	return (
		<div className="flex justify-center items-center h-screen w-full">
			<div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
				<h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
					Login
				</h2>
				<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
					Insert your credentials and login to your portfolio website
				</p>

				<form className="my-8" onSubmit={handleSubmit(onSubmit)}>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="email">Email Address</Label>
						<Controller
							name="email"
							control={control}
							render={({ field }) => (
								<Input
									id="email"
									placeholder="example@gmail.com"
									type="email"
									{...field}
								/>
							)}
						/>
					</LabelInputContainer>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="password">Password</Label>
						<Controller
							name="password"
							control={control}
							render={({ field }) => (
								<Input
									id="password"
									placeholder="••••••••"
									type="password"
									{...field}
								/>
							)}
						/>
					</LabelInputContainer>

					<button
						className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
						type="submit"
					>
						Sign up &rarr;
						<BottomGradient />
					</button>
				</form>
			</div>
		</div>
	)
}
