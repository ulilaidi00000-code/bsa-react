import { homeSection } from "../data/HomeSection"
import logo from "../media/logo.jpg"

function Navbar() {
  return (
    <header className="bg-white fixed">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
                <a href="#">
                <span className="sr-only">Home</span>
                <img src={logo} className="block text-teal-600 size-12 rounded-full" />
                </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                    </li>
                </ul>
                </nav>

                <div className="hidden md:relative md:block">
                <button type="button" className="overflow-hidden rounded-full border border-gray-300 shadow-inner">
                    <span className="sr-only">Toggle dashboard menu</span>

                    <img src={homeSection.image} alt="" className="size-10 object-cover"/>
                </button>

                <div className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg" role="menu">
                    <div className="p-2">
                    <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                        My profile
                    </a>

                    <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                        Billing summary
                    </a>

                    <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                        Team settings
                    </a>
                    </div>

                    <div className="p-2">
                    <form method="POST" action="#">
                        <button type="submit" className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50" role="menuitem">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"></path>
                        </svg>

                        Logout
                        </button>
                    </form>
                    </div>
                </div>
                </div>

                <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
