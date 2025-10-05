import Flexbox from '../Flexbox/Flexbox'
import Container from '../Layouts/Container'
import logo2 from '../../assets/logo2.png'
import footer1 from '../../assets/footer1.png'
import footer2 from '../../assets/footer2.png'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='pt-[50px] md:pt-[149px] pb-[50px] md:pb-[170px] text-white bg-[#1F1F1F]'>
            <Container>
                <div className="md:flex justify-between items-center">
                    <div>
                        <img src={logo2} alt=""/>
                        <Flexbox className='flex-col mt-[15px] md:mt-[33px] font-normal font-primary text-[12px] md:text-[14px] text-white space-y-[10px]  md:space-y-[15px]'>
                            <Flexbox className="space-x-[5px] items-center">
                                <MdOutlineMarkEmailUnread />
                                <a href="">mail@yourcompany.com</a>
                            </Flexbox>
                            <Flexbox className="space-x-[5px] items-center">
                                <LuPhoneCall />
                                <a href="">+896 120 5889 (Toll free)</a> 
                            </Flexbox>
                            <Flexbox className="space-x-[5px] items-center">
                                <FaMapLocationDot />
                                <p>101 Baker Street, New York, USA, 12345</p>
                            </Flexbox>
                        </Flexbox>

                        <Flexbox className="mt-[17px] md:mt-[34px] list-none  space-x-[12px] text-center" >
                            <li className='flex items-center p-[8px] bg-[#F40404] rounded-[50%] transition-all duration-200 hover:shadow-[0px_0px_10px_rgba(225,100,100,1)]'>
                                <a href=""><FaFacebookF  className='animate-bounce'/></a>
                            </li>
                            <li className='flex items-center p-[8px] bg-[#F40404] rounded-[50%] transition-all duration-200 hover:shadow-[0px_0px_10px_rgba(225,100,100,1)]'>
                                <a href=""><FaTwitter  className='animate-bounce'/></a>
                            </li>
                            <li className='flex items-center p-[8px] bg-[#F40404] rounded-[50%] transition-all duration-200 hover:shadow-[0px_0px_10px_rgba(225,100,100,1)]'>
                                <a href=""><FaLinkedinIn  className='animate-bounce'/></a>
                            </li>
                            <li className='flex items-center p-[8px] bg-[#F40404] rounded-[50%] transition-all duration-200 hover:shadow-[0px_0px_10px_rgba(225,100,100,1)]'>
                                <a href=""><FaInstagram  className='animate-bounce'/></a>
                            </li>
                        </Flexbox>
                    </div>
                    <div className="md:flex md:justify-between items-center space-x-[20px] md:space-x-[60px] mt-[30px] md:mt-[0px]">
                        <div>
                            <div className='font-primary font-bold text-white text-[14px] md:text-[16px]'>Company</div>
                            <Flexbox className="flex-col mt-[21px] font-normal font-primary text-[12px] md:text-[14px] text-white space-y-[10px] md:space-y-[15px]">
                                <a href="" className='transition-all duration-300 ease-in hover:text-white/70'>Home</a>
                                <a href="" className='transition-all duration-300 ease-in hover:text-white/70'>About</a>
                                <a href="" className='transition-all duration-300 ease-in hover:text-white/70'>Services</a>
                                <a href="" className='transition-all duration-300 ease-in hover:text-white/70'>Gallery</a>
                            </Flexbox>
                        </div>
                        <div className='mt-8 md:mt-0'>
                            <div className='font-primary font-bold text-white text-[14px] md:text-[16px]'>Others</div>
                            <Flexbox className="flex-col mt-[21px] font-normal font-primary text-[12px] md:text-[14px] text-white space-y-[10px] md:space-y-[15px]">
                                <a href="" className='transition-all duration-300 ease-in hover:text-white/70'>Blog</a>
                                <a href="" className='transition-all duration-300 ease-in hover:text-white/70'>Contact</a>
                                <a href="" className='transition-all duration-300 ease-in hover:text-white/70'>Terms & Conditions</a>
                                <a href="" className='transition-all duration-300 ease-in hover:text-white/70'>Privacy Policy</a>
                            </Flexbox>
                        </div>
                        <div className='mt-8 md:mt-0'>
                            <div className='font-primary font-bold text-white text-[14px] md:text-[16px]'>Certificate</div>
                            <div className="flex space-x-[5px] mt-[12px] md:mt-[21px]">
                                <img src={footer1} alt="" className="animate-pulse"/>
                                <img src={footer2} alt="" className='animate-pulse'/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer

