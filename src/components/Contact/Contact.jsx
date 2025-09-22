import Container from '../Layouts/Container'
import Flexbox from '../Flexbox/Flexbox'

const Contact = () => {
  return (
    <div className='bg-[#F40404] py-[25px] md:py-[45px] border-b-[5px] border-[#FFB800]'>
      <Container>
        <div className="flex md:justify-between items-center">
          <h2 className='font-primary font-bold text-[18px] md:text-[36px] text-white w-[230px] md:w-auto'>Want to join as member branch in your area?</h2>
          <button className='font-primary font-semibold text-[14px] md:text-[16px] text-white py-[10px] md:py-[14px] px-[20px] md:px-[32px] border-[2px] transition-all duration-300 ease-in hover:bg-white/50'>CONTACT</button>
        </div>
      </Container>
    </div>
  )
}

export default Contact