import Container from "../Layouts/Container"
import logo from "../../assets/logo.png"
import Flexbox from "../Flexbox/Flexbox"
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="bg-[#F40404] py-[30px]">
            <Container>
                <div className="hidden md:flex justify-between md:items-center">
                    <div>
                        <img src={logo} alt="" className="" />
                    </div>
                    <div>
                        <ul className="hidden md:flex items-center space-x-[47px] text-white pt-[27px] pb-[27px]">
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
                                <a href="" className="font-primary font-semibold text-[16px] border-2 py-[13px] px-[31px] transition-all duration-300 ease-in hover:bg-white/50">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between md:hidden">
                    <div>
                        <img src={logo} alt="" className="w-[150px]" />
                    </div>
                    <div className="">
                        {
                            show ?
                                (<div className="absolute top-[140px] right-0 bg-[#F40404] z-[99999] w-full transition-all duration-700 ease-in-out">
                                    <ul className="font-primary font-semibold text-white py-[30px] space-y-5 pl-5">
                                        <li>
                                            <a href="" className=" text-[16px] transition-all duration-300 ease-in hover:text-white/70">Home</a>
                                        </li>
                                        <li>
                                            <a href="" className="text-[16px] transition-all duration-300 ease-in hover:text-white/70">About</a>
                                        </li>
                                        <li>
                                            <a href="" className="text-[16px] transition-all duration-300 ease-in hover:text-white/70">Services</a>
                                        </li>
                                        <li>
                                            <a href="" className="text-[16px] transition-all duration-300 ease-in hover:text-white/70">Gallery</a>
                                        </li>
                                        <li>
                                            <a href="" className="text-[16px] transition-all duration-300 ease-in hover:text-white/70">Blog</a>
                                        </li>
                                        <li>
                                            <a href="" className="text-[15px] border-2 py-[10px] px-[20px] transition-all duration-300 ease-in hover:bg-white/50">CONTACT</a>
                                        </li>
                                    </ul>
                                </div>) : (
                                    ""
                                )
                        }
                        <div>
                            { show ? (
                                      <RxCross1 onClick={() => setShow(!show)} className="text-white text-2xl" />
                                     ) : 
                                     (
                                     <FaBars onClick={() => setShow(!show)} className="text-white text-2xl" />
                                     )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar