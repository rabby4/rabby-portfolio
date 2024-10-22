import { Navbar } from "@/components/home/Navbar"
import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative flex flex-col h-screen">
			<Navbar />
			<main>{children}</main>
		</div>
	)
}

export default layout
