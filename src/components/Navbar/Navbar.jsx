import Container from "../Layouts/Container"
import logo from "../../assets/logo.png"
import Flexbox from "../Flexbox/Flexbox"

const Navbar = () => {
    return (
        <div className="bg-[#F40404]">
            <Container>
                <Flexbox className="justify-between items-center">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <ul className="flex items-centers space-x-[47px] text-white pt-[27px] pb-[27px]">
                            <li>
                                <a href="" className="font-primary font-semibold text-[16px] transition-all duration-300 ease-in hover:text-white/70">Home</a>
                            </li>
                            <li>
                                <a href="" className="font-primary font-semibold text-[16px] transition-all duration-300 ease-in hover:text-white/70">About</a>
                            </li>
                            <li>
                                <a href="" className="font-primary font-semibold text-[16px] transition-all duration-300 ease-in hover:text-white/70">Services</a>
                            </li>
                            <li>
                                <a href="" className="font-primary font-semibold text-[16px] transition-all duration-300 ease-in hover:text-white/70">Gallery</a>
                            </li>
                            <li>
                                <a href="" className="font-primary font-semibold text-[16px] transition-all duration-300 ease-in hover:text-white/70">Blog</a>
                            </li>
                            <li>
                                <a href="" className="font-primary font-semibold text-[16px] border-2 pt-[13px] pb-[14px] pl-[31px] pr-[32px] transition-all duration-300 ease-in hover:bg-white/50">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </Flexbox>
            </Container>
        </div>
    )
}

export default Navbar