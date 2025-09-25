import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Container from "../Layouts/Container";
import Flexbox from "../Flexbox/Flexbox";

const Header = () => {
    return (
        <div className="bg-[#282828] border-b-2 border-[#FFB800]">
            <Container>
                {/* contact part(gmail, call) */}
                <Flexbox className="md:justify-between items-center">
                    <div className="md:flex pt-[15px] pb-[16px] space-x-[49px]">
                        <div className="flex items-center space-x-[5px]">
                            <MdOutlineMarkEmailUnread className="text-[15px] md:text-[20px] text-white" />
                            <div className="text-[10px] md:text-[12px] font-normal text-[#FFFFFF]">mail@yourcompany.com</div>
                        </div>
                        <div className="relative after:content-[''] after:absolute after:top-[5px] after:left-[-27px] after:w-[1px] after:h-[16px] after:bg-[#5C6A92] flex items-center space-x-[5px]">
                            <LuPhoneCall className="text-[15px] md:text-[18px] text-white" />
                            <div className="text-[9px] md:text-[11px] font-normal text-[#FFFFFF]">+896 120 5889 (Toll free)</div>
                        </div>
                    </div>
                    {/* media items */}
                    <ul className="flex space-x-[19px] text-white">
                        <li className="transition-all duration-200 ease-in hover:text-[#F40404]">
                            <a href=""><FaFacebookF /></a>
                        </li>
                        <li className="transition-all duration-200 ease-in hover:text-[#F40404]">
                            <a href=""><FaTwitter /></a>
                        </li>
                        <li className="transition-all duration-200 ease-in hover:text-[#F40404]">
                            <a href=""><FaLinkedinIn /></a>
                        </li>
                        <li className="transition-all duration-200 ease-in hover:text-[#F40404]">
                            <a href=""><FaInstagram /></a>
                        </li>
                    </ul>
                </Flexbox>
            </Container>
        </div>

    )
}

export default Header