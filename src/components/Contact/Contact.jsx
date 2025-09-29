import Container from '../Layouts/Container'

const Contact = () => {
  return (
    <div className='bg-[#F40404] py-[10px] md:py-[45px] border-b-[3px] md:border-b-[5px] border-[#FFB800]'>
      <Container>
        <div className="md:flex md:justify-between items-center text-center space-y-3 md:space-y-0">
          <h2 className='font-primary font-bold text-[18px] md:text-[36px] text-white w-[230px] mx-auto md:w-auto'>Want to join as member branch in your area?</h2>
          <button className='font-primary font-semibold text-[14px] md:text-[16px] text-white py-[8px] md:py-[14px] px-[20px] md:px-[32px] border-[2px] transition-all duration-300 ease-in hover:bg-white/50'>CONTACT</button>
        </div>
      </Container>
    </div>
  )
}

export default Contact