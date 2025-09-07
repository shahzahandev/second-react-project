import Container from '../Layouts/Container'
import Flexbox from '../Flexbox/Flexbox'

const Contact = () => {
  return (
    <div className='bg-[#F40404] py-[45px] border-b-[5px] border-[#FFB800]'>
      <Container>
        <Flexbox className="justify-between items-center">
          <h2 className='font-primary font-bold text-[36px] text-white'>Want to join as member branch in your area?</h2>
          <button className='font-primary font-semibold text-[16px] text-white py-[14px] px-[32px] border-[2px] transition-all duration-300 ease-in hover:bg-white/50'>CONTACT</button>
        </Flexbox>
      </Container>
    </div>
  )
}

export default Contact