import plate1 from '../../assets/plate1.png'
import plate2 from '../../assets/plate2.png'
import plate3 from '../../assets/plate3.png'
import plate4 from '../../assets/plate4.png'
import Container from '../Layouts/Container'


const NamePlate = () => {
    return (
        <div className='py-[50px] md:py-[117px]'>
            <Container>
                <div className="md:flex justify-between">
                    <img src={plate1} alt="" className='w-[60%] mx-auto md:w-[100%]'/>
                    <img src={plate2} alt="" className='w-[60%] mx-auto md:w-[100%]'/>
                    <img src={plate3} alt="" className='w-[60%] mx-auto md:w-[100%]'/>
                    <img src={plate4} alt="" className='w-[60%] mx-auto md:w-[100%]'/>
                </div>
            </Container>
        </div>
    )
}

export default NamePlate