import Container from '../Layouts/Container'

const Banner = () => {
    return (
        <div className='z-[1] relative bg-[url(./assets/banner.png)] bg-no-repeat bg-cover bg-left md:bg-center py-[120px] md:py-[257px]'>
            <div className='z-[-1] absolute top-0 left-0 bg-black/60 w-full h-full'></div>
            <Container>
                <h1 className='text-[32px] md:text-[64px] font-primary text-white font-bold w-[320px] md:w-[842px]'>We exist since 1975 on the oil and gas industry.</h1>
                <button className='font-primary font-semibold text-[12px] md:text-[16px] py-[10px] md:py-[13px] px-[30px] md:px-[40px] text-white bg-[#F40404] mt-[31px] transition-all duration-300 ease-in hover:bg-white/50'>LEARN MORE</button>
            </Container>
        </div>
    )
}

export default Banner