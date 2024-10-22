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
import { Textarea } from "@/components/ui/textarea"
import { useCreateBlog } from "@/hooks/blog.hook"

const CreateBlog = () => {
	const { control, handleSubmit } = useForm({})
	const { mutate: handleCreateBlog } = useCreateBlog()

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		console.log(data)
		handleCreateBlog(data)
	}

	return (
		<div className="flex justify-center items-center h-screen w-full p-20">
			<div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
				<h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
					Create A Blog
				</h2>
				<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
					Create a blog and get more traffic on your portfolio website.
				</p>

				<form className="my-8" onSubmit={handleSubmit(onSubmit)}>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="title">Email Address</Label>
						<Controller
							name="title"
							control={control}
							render={({ field }) => (
								<Input
									id="title"
									placeholder="Blog title..."
									type="text"
									{...field}
								/>
							)}
						/>
					</LabelInputContainer>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="image">Feature Image</Label>
						<Controller
							name="image"
							control={control}
							render={({ field }) => (
								<Input
									id="image"
									placeholder="Insert Feature image URL"
									type="text"
									{...field}
								/>
							)}
						/>
					</LabelInputContainer>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="description">Description</Label>
						<Controller
							name="description"
							control={control}
							render={({ field }) => (
								<Textarea
									id="description"
									placeholder="Write you blog content"
									rows={8}
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

export default CreateBlog
