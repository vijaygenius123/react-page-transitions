import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className={"text-2xl font-medium relative z-10 lg:px-48 px-16 text-gray-900"}>
            <ul className={"flex gap-12"}>
                <Link href={"/"}>
                    <li>Home</li>
                </Link>
                <Link href={"/contact"}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}
