// import Flexbox from '../Flexbox/Flexbox'

const Services = () => {
    return (
        <div className='pt-[28px]'>
            <div className="md:flex md:items-center">
                <div className="w-[100%] md:w-[50%] px-6 md:px-0">
                    <div className='flex md:justify-end md:mr-[60px]'>
                        <div className=' w-[509px]'>
                            <h2 className='font-primary font-bold text-[#000000] text-[32px] md:text-[64px]'>Our Services</h2>
                            <p className='font-primary font-medium text-[14px] md:text-[16px] text-[#6C6C6C] w-[320px] md:w-[405px] m-[10px] my:mt-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <div className='z-[1] relative bg-[url(./assets/service1.png)] bg-no-repeat bg-cover bg-center w-[100%] md:w-[50%] pt-[50px] md:pt-[136px] pb-[50px] md:pb-[147px] pl-[20px] md:pl-[56px]'>
                    <div className='z-[-1] absolute top-0 left-0 bg-black/60 h-full w-full'></div>
                    <div>
                        <h2 className='font-primary font-bold text-[24px] md:text-[36px] text-white w-[320px] md:w-[691px]'>Modern natural oil and gas refineries.</h2>
                        <button className='font-primary font-semibold text-white text-[14px] md:text-[16px] py-[10px] md:py-[13px] px-[20px] md:px-[30px] bg-[#F40404] mt-[19px]  transition-all duration-300 ease-in hover:bg-white/50'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='md:flex'>
                <div className='z-[1] relative bg-[url(./assets/service2.png)] bg-no-repeat bg-cover bg-center w-[100%] md:w-[50%] pt-[50px] md:pt-[136px] pb-[50px] md:pb-[147px] pl-[20px] md:pl-[56px]'>
                    <div className='z-[-1] absolute top-0 left-0 bg-black/60 h-full w-full'></div>
                    <div>
                        <h2 className='font-primary font-bold text-[24px] md:text-[36px] text-white w-[320px] md:w-[691px]'>Supply of national industries.</h2>
                        <button className='font-primary font-semibold text-white text-[14px] md:text-[16px] py-[10px] md:py-[13px] px-[20px] md:px-[30px] bg-[#F40404] mt-[19px] transition-all duration-300 ease-in hover:bg-white/50'>Learn More</button>
                    </div>
                </div>
                <div className='z-[1] relative bg-[url(./assets/service3.png)] bg-no-repeat bg-cover bg-center w-[100%] md:w-[50%] pt-[50px] md:pt-[136px] pb-[50px] md:pb-[147px] pl-[20px] md:pl-[56px]'>
                    <div className='z-[-1] absolute top-0 left-0 bg-black/60 h-full w-full'></div>
                    <div>
                        <h2 className='font-primary font-bold text-[24px] md:text-[36px] text-white w-[320px] md:w-[691px]'>National fuel distribution and supply.</h2>
                        <button className='font-primary font-semibold text-white text-[14px] md:text-[16px] py-[10px] md:py-[13px] px-[20px] md:px-[30px] bg-[#F40404] mt-[19px] transition-all duration-300 ease-in hover:bg-white/50'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services