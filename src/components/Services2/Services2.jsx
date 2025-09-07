import Flexbox from '../Flexbox/Flexbox'

const Services2 = () => {
    return (
        <div>
            <Flexbox>
                <div className='z-[1] relative bg-[url(./assets/service2.png)] bg-no-repeat bg-cover bg-center w-[50%] pt-[136px] pb-[147px] pl-[56px]'>
                    <div className='z-[-1] absolute top-0 left-0 bg-black/60 h-full w-full'></div>
                    <div>
                        <h2 className='font-primary font-bold text-[36px] text-white w-[691px]'>Supply of national industries.</h2>
                        <button className='font-primary font-semibold text-white text-[16px] py-[13px] px-[30px] bg-[#F40404] mt-[19px] transition-all duration-300 ease-in hover:bg-white/50'>Learn More</button>
                    </div>
                </div>
                <div className='z-[1] relative bg-[url(./assets/service3.png)] bg-no-repeat bg-cover bg-center w-[50%] pt-[136px] pb-[147px] pl-[56px]'>
                    <div className='z-[-1] absolute top-0 left-0 bg-black/60 h-full w-full'></div>
                    <div>
                        <h2 className='font-primary font-bold text-[36px] text-white w-[691px]'>National fuel distribution and supply.</h2>
                        <button className='font-primary font-semibold text-white text-[16px] py-[13px] px-[30px] bg-[#F40404] mt-[19px] transition-all duration-300 ease-in hover:bg-white/50'>Learn More</button>
                    </div>
                </div>
            </Flexbox>
        </div>
    )
}

export default Services2