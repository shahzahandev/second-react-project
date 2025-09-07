import NamePlate1 from '../../assets/NamePlate1.png'
import NamePlate2 from '../../assets/NamePlate2.png'
import NamePlate3 from '../../assets/NamePlate3.png'
import NamePlate4 from '../../assets/NamePlate4.png'
import Container from '../Layouts/Container'
import Flexbox from '../Flexbox/Flexbox'

const NamePlate = () => {
    return (
        <div className='py-[117px]'>
            <Container>
                <Flexbox className="justify-between">
                    <img src={NamePlate1} alt="" />
                    <img src={NamePlate2} alt="" />
                    <img src={NamePlate3} alt="" />
                    <img src={NamePlate4} alt="" />
                </Flexbox>
            </Container>
        </div>
    )
}

export default NamePlate