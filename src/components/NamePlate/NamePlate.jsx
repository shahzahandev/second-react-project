import NamePlate1 from '../../assets/NamePlate1.png'
import NamePlate2 from '../../assets/NamePlate2.png'
import NamePlate3 from '../../assets/NamePlate3.png'
import NamePlate4 from '../../assets/NamePlate4.png'
import Container from '../Layouts/Container'


const NamePlate = () => {
    return (
        <div className='py-[50px] md:py-[117px]'>
            <Container>
                <div className="md:flex justify-between">
                    <img src={NamePlate1} alt="" className='w-[60%] mx-auto md:w-[100%]'/>
                    <img src={NamePlate2} alt="" className='w-[60%] mx-auto md:w-[100%]'/>
                    <img src={NamePlate3} alt="" className='w-[60%] mx-auto md:w-[100%]'/>
                    <img src={NamePlate4} alt="" className='w-[60%] mx-auto md:w-[100%]'/>
                </div>
            </Container>
        </div>
    )
}

export default NamePlate