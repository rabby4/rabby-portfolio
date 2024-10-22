"use client"
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import BottomGradient from "@/components/form/BottomGradient"
import LabelInputContainer from "@/components/form/LabelInputContainer"
import { useCreateSkill } from "@/hooks/skill.hook"

const CreateSkill = () => {
	const { control, handleSubmit } = useForm({})
	const { mutate: handleCreateSkill } = useCreateSkill()

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		console.log(data)
		handleCreateSkill(data)
	}

	return (
		<div className="flex justify-center items-center h-screen w-full p-20">
			<div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
				<h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
					Create A Skill
				</h2>
				<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
					Create a skill and add on your portfolio website.
				</p>

				<form className="my-8" onSubmit={handleSubmit(onSubmit)}>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="title">Skill Name</Label>
						<Controller
							name="title"
							control={control}
							render={({ field }) => (
								<Input
									id="title"
									placeholder="Skill Name..."
									type="text"
									{...field}
								/>
							)}
						/>
					</LabelInputContainer>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="image">Skill Image</Label>
						<Controller
							name="image"
							control={control}
							render={({ field }) => (
								<Input
									id="image"
									placeholder="Insert skill image URL"
									type="text"
									{...field}
								/>
							)}
						/>
					</LabelInputContainer>

					<button
						className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
						type="submit"
					>
						Publish Blog
						<BottomGradient />
					</button>
				</form>
			</div>
		</div>
	)
}

export default CreateSkill
