import Flexbox from '../Flexbox/Flexbox'

const Services1 = () => {
  return (
    <div>
        <Flexbox className='items-center'>
            <div className='w-[50%] pt-[134px] pb-[142px] pl-[230px] '>
                <h2 className='font-primary font-bold text-[#000000] text-[64px] w-[509px]'>Our Services</h2>
                <p className='font-primary font-medium text-[16px] text-[#6C6C6C] w-[405px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className='z-[1] relative bg-[url(./assets/service1.png)] bg-no-repeat bg-cover bg-center w-[50%] pt-[136px] pb-[147px] pl-[56px]'>
               <div className='z-[-1] absolute top-0 left-0 bg-black/60 h-full w-full'></div>
               <div>
                <h2 className='font-primary font-bold text-[36px] text-white w-[691px]'>Modern natural oil and gas refineries.</h2>
                <button className='font-primary font-semibold text-white text-[16px] py-[13px] px-[30px] bg-[#F40404] mt-[19px]  transition-all duration-300 ease-in hover:bg-white/50'>Learn More</button>
               </div>
            </div>
        </Flexbox>
    </div>
  )
}

export default Services1