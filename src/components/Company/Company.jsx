import Container from '../Layouts/Container'
import Flexbox from '../Flexbox/Flexbox'

const Company = () => {
    return (
        <div className='py-[136px] bg-[#F0F0F0]'>
            <Container>
                <Flexbox>
                    <div className='pt-[100px] pb-[99px] pl-[74px] pr-[77px] bg-[#F40404]'>
                        <h2 className='font-primary font-bold text-[36px] text-white  w-[262px]'>Learn more about our company</h2>
                    </div>
                    <div className='bg-[url(./assets/company.png)] bg-no-repeat bg-center bg-cover] pt-[168px] pb-[142px] px-[282px]'>
                        <button className='font-primary font-semibold text-[#F40404] text-[16px] bg-white pt-[14px] pb-[13px] pl-[30px] pr-[30px] transition-all duration-400 ease-in hover:bg-[#F40404]  hover:text-white'>Learn More</button>
                    </div>
                </Flexbox>
            </Container>
        </div>
    )
}

export default Company