import user from '../assets/user.svg'
function NavBar() {
    return (
        <nav className='flex items-center justify-between border-b-2 border-[#0D1C2D] p-4 ' >
            <div className=" flex items-center gap-6 ">
                <p className="text-4xl  font-bold text-[#81AAFF]">SYNTAX_CORE</p>
                <ul className="flex gap-x-6 text-[#94A3B8]">
                    <li className=" ">WorkSpace</li>
                    <li className=" ">Edit</li>
                    <li className=" ">History</li>
                    <li className=" ">Help</li>
                </ul>
            </div>

            <div className='h-8 w-8 overflow-hidden rounded-2xl border-2 border-[#233143]'>
                <img className='object-cover invert' src={user} alt="" />
            </div>
        </nav>


    )
}
export default NavBar