import Image from "next/image"

import logo from "../public/logo.png"

const Navbar = () => {
    return (
        <div className="container mx-auto py-2">
            <div className="flex items-center gap-1">
                <Image src={logo} alt="Logo" />
                <h2 className="text-3xl font-bold font-serif">Obliq</h2>
            </div>
        </div>
    )
}

export default Navbar