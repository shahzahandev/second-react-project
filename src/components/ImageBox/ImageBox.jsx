import Flexbox from "../Flexbox/Flexbox"
import Container from "../Layouts/Container"
import { FaGreaterThan } from "react-icons/fa";

const ImageBox = () => {
    return (
        <div className="py-[110px] bg-[#F0F0F0]">
            <Container>
                <Flexbox className="justify-between items-center">
                    <div className="z-[1] relative bg-[url(./assets/imge1.png)] bg-no-repeat bg-center bg-cover pt-[75px] px-[45px]">
                        <div className=" z-[-1] absolute top-0 left-0 w-full h-full bg-black/60"></div>
                        <div>
                            <h2 className="font-primary font-bold text-[24px] text-white w-[249px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                            <button className="font-primary font-semibold text-white text-[12px] py-[10px] px-[23px] bg-white/60 mt-[52px] mb-[55px] transition-all duration-300 ease-in hover:bg-[#F40404]  hover:text-white">Read more</button>
                        </div>
                    </div>
                    <div className="z-[1] relative bg-[url(./assets/imge2.png)] bg-no-repeat bg-center bg-cover pt-[75px] px-[45px]">
                        <div className=" z-[-1] absolute top-0 left-0 w-full h-full bg-black/60"></div>
                        <div>
                            <h2 className="font-primary font-bold text-[24px] text-white w-[249px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                            <button className="font-primary font-semibold text-white text-[12px] py-[10px] px-[23px] bg-white/60 mt-[52px] mb-[55px] transition-all duration-300 ease-in hover:bg-[#F40404]  hover:text-white">Read more</button>
                        </div>
                    </div>
                    <div className="z-[1] relative bg-[url(./assets/imge3.png)] bg-no-repeat bg-center bg-cover pt-[75px] px-[45px]">
                        <div className=" z-[-1] absolute top-0 left-0 w-full h-full bg-black/60"></div>
                        <div>
                            <h2 className="font-primary font-bold text-[24px] text-white w-[249px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                            <button className="font-primary font-semibold text-white text-[12px] py-[10px] px-[23px] bg-white/60 mt-[52px] mb-[55px] transition-all duration-300 ease-in hover:bg-[#F40404]  hover:text-white">Read more</button>
                        </div>
                    </div>
                </Flexbox>
                <Flexbox className="justify-end items-center space-x-[5px] mt-[29px] transition-all duration-200 ease-in hover:text-[#F40404]">
                    <a href="" className="font-primary font-bold text-[#000000] text-[16px] transition-all duration-200 ease-in hover:text-[#F40404]">MORE FROM THE BLLOG</a>
                     <a href=""><FaGreaterThan/></a>
                </Flexbox>
            </Container>
        </div>
    )
}

export default ImageBox