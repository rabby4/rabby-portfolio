// "use client"
// import {
// 	Controller,
// 	FieldValues,
// 	SubmitHandler,
// 	useForm,
// } from "react-hook-form"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import BottomGradient from "@/components/form/BottomGradient"
// import LabelInputContainer from "@/components/form/LabelInputContainer"
// import { Textarea } from "@/components/ui/textarea"
//
// const CreateProject = () => {
// 	const { control, handleSubmit } = useForm({})
//
// 	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
// 		console.log(data)
// 	}
//
// 	return (
// 		<div className="flex justify-center items-center w-full p-20">
// 			<div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
// 				<h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
// 					Create A Project
// 				</h2>
// 				<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
// 					Create a blog and get more traffic on your portfolio website.
// 				</p>
//
// 				<form className="my-8" onSubmit={handleSubmit(onSubmit)}>
// 					<LabelInputContainer className="mb-4">
// 						<Label htmlFor="title">Project Title</Label>
// 						<Controller
// 							name="title"
// 							control={control}
// 							render={({ field }) => (
// 								<Input
// 									id="title"
// 									placeholder="Project title..."
// 									type="text"
// 									{...field}
// 								/>
// 							)}
// 						/>
// 					</LabelInputContainer>
// 					<LabelInputContainer className="mb-4">
// 						<Label htmlFor="technologies">Technologies</Label>
// 						<Controller
// 							name="technologies"
// 							control={control}
// 							render={({ field }) => (
// 								<Input
// 									id="technologies"
// 									placeholder="Add your project technologies"
// 									type="text"
// 									{...field}
// 								/>
// 							)}
// 						/>
// 					</LabelInputContainer>
// 					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
// 						<LabelInputContainer className="mb-4">
// 							<Label htmlFor="image">Project Image</Label>
// 							<Controller
// 								name="image"
// 								control={control}
// 								render={({ field }) => (
// 									<Input
// 										id="image"
// 										placeholder="Project image..."
// 										type="text"
// 										{...field}
// 									/>
// 								)}
// 							/>
// 						</LabelInputContainer>
// 						<LabelInputContainer className="mb-4">
// 							<Label htmlFor="preview">Live link</Label>
// 							<Controller
// 								name="preview"
// 								control={control}
// 								render={({ field }) => (
// 									<Input
// 										id="preview"
// 										placeholder="Insert your project live link"
// 										type="text"
// 										{...field}
// 									/>
// 								)}
// 							/>
// 						</LabelInputContainer>
// 					</div>
// 					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
// 						<LabelInputContainer className="mb-4">
// 							<Label htmlFor="clientRepo">Frontend Repo link</Label>
// 							<Controller
// 								name="clientRepo"
// 								control={control}
// 								render={({ field }) => (
// 									<Input
// 										id="clientRepo"
// 										placeholder="Frontend github repository link"
// 										type="text"
// 										{...field}
// 									/>
// 								)}
// 							/>
// 						</LabelInputContainer>
// 						<LabelInputContainer className="mb-4">
// 							<Label htmlFor="serverRepo">Backend Repo link</Label>
// 							<Controller
// 								name="serverRepo"
// 								control={control}
// 								render={({ field }) => (
// 									<Input
// 										id="serverRepo"
// 										placeholder="Backend github repository link"
// 										type="text"
// 										{...field}
// 									/>
// 								)}
// 							/>
// 						</LabelInputContainer>
// 					</div>
// 					<LabelInputContainer className="mb-4">
// 						<Label htmlFor="description">Description</Label>
// 						<Controller
// 							name="description"
// 							control={control}
// 							render={({ field }) => (
// 								<Textarea
// 									id="description"
// 									placeholder="Write you blog content"
// 									rows={8}
// 									{...field}
// 								/>
// 							)}
// 						/>
// 					</LabelInputContainer>
//
// 					<button
// 						className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
// 						type="submit"
// 					>
// 						Publish Project
// 						<BottomGradient />
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	)
// }
//
// export default CreateProject
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
import { useState } from "react"
import { useCreateProject } from "@/hooks/project.hook"

const CreateProject = () => {
	const { control, handleSubmit } = useForm({})
	const { mutate: handleCreateProject } = useCreateProject()

	// List of available technologies
	const availableTechnologies = [
		"React",
		"Next.js",
		"Node.js",
		"MongoDB",
		"GraphQL",
		"TailwindCSS",
	]

	// State to manage selected technologies
	const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])

	// State to toggle the dropdown visibility
	const [dropdownOpen, setDropdownOpen] = useState(false)

	// Add a technology to the selected list and close the dropdown
	const handleAddTechnology = (tech: string) => {
		if (!selectedTechnologies.includes(tech)) {
			setSelectedTechnologies([...selectedTechnologies, tech])
		}
		// Close the dropdown after selecting an item
		setDropdownOpen(false)
	}

	// Remove a technology from the selected list
	const handleRemoveTechnology = (tech: string) => {
		setSelectedTechnologies(
			selectedTechnologies.filter((item) => item !== tech)
		)
	}

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const updatedData = {
			...data,
			technologies: selectedTechnologies,
		}
		console.log(updatedData)
		handleCreateProject(updatedData)
	}

	return (
		<div className="flex justify-center items-center w-full p-20">
			<div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
				<h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
					Create A Project
				</h2>
				<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
					Create a blog and get more traffic on your portfolio website.
				</p>

				<form className="my-8" onSubmit={handleSubmit(onSubmit)}>
					{/* Project Title */}
					<LabelInputContainer className="mb-4">
						<Label htmlFor="title">Project Title</Label>
						<Controller
							name="title"
							control={control}
							render={({ field }) => (
								<Input
									id="title"
									placeholder="Project title..."
									type="text"
									{...field}
								/>
							)}
						/>
					</LabelInputContainer>

					{/* Technologies Dropdown */}
					<LabelInputContainer className="mb-4">
						<Label htmlFor="technologies">Technologies</Label>

						{/* Dropdown Button */}
						<div className="relative">
							<button
								type="button"
								className="w-full bg-gray-200 dark:bg-gray-700 rounded-md px-4 py-2 text-left"
								onClick={() => setDropdownOpen(!dropdownOpen)}
							>
								{dropdownOpen
									? "Select Technologies (click to close)"
									: "Select Technologies (click to open)"}
							</button>

							{/* Dropdown Menu */}
							{dropdownOpen && (
								<div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto">
									{availableTechnologies.map((tech) => (
										<div
											key={tech}
											className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
											onClick={() => handleAddTechnology(tech)}
										>
											{tech}
										</div>
									))}
								</div>
							)}
						</div>

						{/* Render selected technologies as removable tags */}
						<div className="mt-4 flex flex-wrap gap-2">
							{selectedTechnologies.map((tech) => (
								<div
									key={tech}
									className="flex items-center bg-blue-200 dark:bg-blue-600 rounded-full px-4 py-1"
								>
									<span className="text-black dark:text-white">{tech}</span>
									<button
										type="button"
										className="ml-2 text-red-500"
										onClick={() => handleRemoveTechnology(tech)}
									>
										&times;
									</button>
								</div>
							))}
						</div>
					</LabelInputContainer>

					{/* Project Image */}
					<LabelInputContainer className="mb-4">
						<Label htmlFor="image">Project Image</Label>
						<Controller
							name="image"
							control={control}
							render={({ field }) => (
								<Input
									id="image"
									placeholder="Project image..."
									type="text"
									{...field}
								/>
							)}
						/>
					</LabelInputContainer>

					{/* Live Link */}
					<LabelInputContainer className="mb-4">
						<Label htmlFor="preview">Live link</Label>
						<Controller
							name="preview"
							control={control}
							render={({ field }) => (
								<Input
									id="preview"
									placeholder="Insert your project live link"
									type="text"
									{...field}
								/>
							)}
						/>
					</LabelInputContainer>

					{/* Repositories */}
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
						<LabelInputContainer className="mb-4">
							<Label htmlFor="clientRepo">Frontend Repo link</Label>
							<Controller
								name="clientRepo"
								control={control}
								render={({ field }) => (
									<Input
										id="clientRepo"
										placeholder="Frontend GitHub repository link"
										type="text"
										{...field}
									/>
								)}
							/>
						</LabelInputContainer>
						<LabelInputContainer className="mb-4">
							<Label htmlFor="serverRepo">Backend Repo link</Label>
							<Controller
								name="serverRepo"
								control={control}
								render={({ field }) => (
									<Input
										id="serverRepo"
										placeholder="Backend GitHub repository link"
										type="text"
										{...field}
									/>
								)}
							/>
						</LabelInputContainer>
					</div>

					{/* Description */}
					<LabelInputContainer className="mb-4">
						<Label htmlFor="description">Description</Label>
						<Controller
							name="description"
							control={control}
							render={({ field }) => (
								<Textarea
									id="description"
									placeholder="Write your blog content"
									rows={8}
									{...field}
								/>
							)}
						/>
					</LabelInputContainer>

					{/* Submit Button */}
					<button
						className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
						type="submit"
					>
						Publish Project
						<BottomGradient />
					</button>
				</form>
			</div>
		</div>
	)
}

export default CreateProject
