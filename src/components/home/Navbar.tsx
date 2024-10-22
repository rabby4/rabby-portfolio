"use client"
import React, { useState } from "react"
import { Menu, MenuItem } from "../ui/navbar-menu"
import { cn } from "@/lib/utils"

export function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null)
	return (
		<div
			className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50", className)}
		>
			<Menu setActive={setActive}>
				<MenuItem
					setActive={setActive}
					active={active}
					item="Home"
					link={"/"}
				/>
				<MenuItem
					setActive={setActive}
					active={active}
					item="About"
					link={"/about"}
				/>
				<MenuItem
					setActive={setActive}
					active={active}
					item="Blog"
					link={"/blog"}
				/>
			</Menu>
		</div>
	)
}
