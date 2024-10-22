// import React, { ReactNode } from "react"
//
// const AdminLayout = ({ children }: { children: ReactNode }) => {
// 	return (
// 		<>
// 			<div className="grid grid-cols-12 gap-5">
// 				<div className="col-span-3">
// 					<div className="sticky top-20 h-screen">
// 						<LeftSidebar />
// 					</div>
// 				</div>
// 				<div className="col-span-9">{children}</div>
// 			</div>
// 		</>
// 	)
// }
//
// export default AdminLayout

"use client"
import React, { ReactNode, useState } from "react"

import {
	IconArrowLeft,
	IconBrandTabler,
	IconUserBolt,
} from "@tabler/icons-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { CodeXml, FileCode2, FilePenLine } from "lucide-react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
	const links = [
		{
			label: "Dashboard",
			href: "/admin",
			icon: (
				<IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
		{
			label: "Profile",
			href: "/admin/profile",
			icon: (
				<IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
		{
			label: "Add Blog",
			href: "/admin/create-blog",
			icon: (
				<FilePenLine className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
		{
			label: "Add Project",
			href: "/admin/create-project",
			icon: (
				<FileCode2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
		{
			label: "Add Skill",
			href: "/admin/create-skill",
			icon: (
				<CodeXml className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
		{
			label: "Logout",
			href: "#",
			icon: (
				<IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
	]
	const [open, setOpen] = useState(false)

	return (
		<div
			className={cn(
				"rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
				"h-[calc(100vh-200px)] mt-40"
			)}
		>
			<Sidebar open={open} setOpen={setOpen} animate={false}>
				<SidebarBody className="justify-between gap-10">
					<div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
						<div className="text-2xl font-bold">
							{/* <Logo /> */}
							Rabby
						</div>
						<div className="mt-8 flex flex-col gap-2">
							{links.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
					</div>
					<div>
						<SidebarLink
							link={{
								label: "Manu Arora",
								href: "#",
								icon: (
									<Image
										src="https://assets.aceternity.com/manu.png"
										className="h-7 w-7 flex-shrink-0 rounded-full"
										width={50}
										height={50}
										alt="Avatar"
									/>
								),
							}}
						/>
					</div>
				</SidebarBody>
			</Sidebar>
			<div className="bg-white w-full flex justify-center items-center">
				{children}
			</div>
		</div>
	)
}
