import Country1 from '../../assets/country-1.png'
import Country2 from '../../assets/country-2.png'
import Country3 from '../../assets/country-3.png'
import Country4 from '../../assets/country-4.png'
import Flexbox from '../Flexbox/Flexbox'

const SupplilerImg = () => {
    return (
        <div>
            <Flexbox className="justify-between">
                    <img className='w-[24%] space-x-[29px]' src={Country1} alt="" />
                    <img className='w-[24%] space-x-[29px]' src={Country2} alt="" />
                    <img className='w-[24%] space-x-[29px]' src={Country3} alt="" />
                    <img className='w-[24%] space-x-[29px]' src={Country4} alt="" />

            </Flexbox>
        </div>
    )
}

export default SupplilerImg