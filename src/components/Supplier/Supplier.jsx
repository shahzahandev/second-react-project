import Container from '../Layouts/Container'
import Flexbox from '../Flexbox/Flexbox'

const Supplier = () => {
    return (
        <div className='pt-[78px] py-[100px]'>
            <Container>
                <Flexbox className='justify-between items-center'>
                    <h2 className='text-[48px] font-primary text-[#000000] font-bold w-[289px]'>The biggest supplier on the country</h2>
                    <p className='w-[651px] font-primary font-medium text-[#6C6C6C] text-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </Flexbox>
            </Container>
        </div>
    )
}

export default Supplier