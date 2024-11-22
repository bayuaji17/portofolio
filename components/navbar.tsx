"use client"
import * as React from "react"

import { ModeToggle } from "./toggle-theme"

export default function Navbar() {
    
    return (
        <header className="py-4">
            <nav className="flex w-full justify-between items-center px-10 bg-[#ff6f2e] rounded-lg h-14">
                <h1 className="text-3xl font-bold text-black">Bandev</h1>
                <ModeToggle/>
            </nav>
        </header>
    )
}