"use client"

import { Bell, Home, BarChart2, Trash2, ShoppingBag, User, Settings, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const bins = [
  {
    id: "ch_079845",
    location: "Kigali-Masaka Street",
    status: "Medium",
    percentage: "42%",
  },
  {
    id: "ch_079845",
    location: "Kigali-Masaka Street",
    status: "Medium",
    percentage: "42%",
  },
  {
    id: "ch_079845",
    location: "Kigali-Masaka Street",
    status: "Medium",
    percentage: "42%",
  },
  {
    id: "ch_079845",
    location: "Kigali-Masaka Street",
    status: "Medium",
    percentage: "42%",
  },
]

export default function BinsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <Image src="/assets/images/logo_with_text_cheemba.png" alt="Cheemba Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-medium">
              Chee-<span className="text-blue-600">mba</span>
            </span>
          </div>
        </div>
        <nav className="space-y-1 p-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/statistics"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
          >
            <BarChart2 className="h-5 w-5" />
            Statistics
          </Link>
          <Link href="/bins" className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-blue-600">
            <Trash2 className="h-5 w-5" />
            Bins
          </Link>
          <Link href="/market" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100">
            <ShoppingBag className="h-5 w-5" />
            Market
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
          >
            <User className="h-5 w-5" />
            Profile
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-4">
          <div className="flex w-full max-w-md items-center gap-2">
            <Search className="h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for anything..."
              className="border-none bg-transparent focus-visible:ring-0"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">EnviroServe</span>
              <span className="text-sm text-gray-500">Kigali, Rwanda</span>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>ES</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Bins</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Kanban View
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>List View</DropdownMenuItem>
                <DropdownMenuItem>Kanban View</DropdownMenuItem>
                <DropdownMenuItem>Map View</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="space-y-4">
            {bins.map((bin, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg border bg-white p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Trash2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{bin.id}</h3>
                    <p className="text-sm text-gray-500">{bin.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="bg-green-50 text-green-700">
                    {bin.status}
                  </Badge>
                  <span className="text-sm font-medium">{bin.percentage}</span>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    Delete
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">Add new bin</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

