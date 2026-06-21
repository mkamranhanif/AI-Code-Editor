function NavBar() {
    return (
        <nav>
            <div className="flex">
                <p className="text-4xl  font-bold text-[#2573E6]">SYNTAX_CORE</p>
                <ul className="flex ">
                    <li className=" font-bold">WORKSPACE</li>
                    <li className=" font-bold">Sessions</li>
                    <li className=" font-bold">History</li>
                    <li className=" font-bold">Docs</li>
                </ul>
            </div>

            <div>
                <button className=" font-Mono bg-[#053900]">Run Code</button>
                <button>Setting</button>

            </div>
        </nav>

    )
}
export default NavBar