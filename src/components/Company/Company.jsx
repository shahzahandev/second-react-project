import Container from '../Layouts/Container'
// import Flexbox from '../Flexbox/Flexbox'

const Company = () => {
    return (
        <div className='font-primary py-[50px] md:py-[136px] bg-[#F0F0F0]'>
            <Container>
                <div className='md:flex items-center inline-block'>
                    <div className='py-[60px] md:py-[100px] px-[100px] md:px-[75px] bg-[#F40404]'>
                        <h2 className=' font-bold text-[24px] md:text-[36px] text-white w-[150px] md:w-[262px]'>Learn more about our company</h2>
                    </div>
                    <div className='bg-[url(./assets/company.png)] bg-no-repeat bg-center bg-cover] pt-[100px] md:pt-[168px] pb-[90px] md:pb-[142px] px-[95px] md:px-[282px]'>
                        <button className='font-semibold text-[#F40404] text-[14px] md:text-[16px] bg-white pt-[14px] pb-[13px] pl-[30px] pr-[30px] transition-all duration-400 ease-in hover:bg-[#F40404]  hover:text-white'>Learn More</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Company