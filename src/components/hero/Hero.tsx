import landing from '../../images/laptop-landing-3.png'
import laptopLanding from '../../images/laptop-landing-1.png'
import User from './User'

export default function Hero() {
  return (
    <div className='lg:w-[90vw] h-50vh m-auto rounded-3xl overflow-hidden bg-transparent'>
    <div
      style={{backgroundImage: `url(${landing})`}} 
      className='bg-[image:var(backgroundImage)] bg-no-repeat bg-cover z-[-10] w-[100%] h-[60vh] bg-center rounded-3xl'>
    <div>
      <img src={laptopLanding} alt='Afforai'
      className='absolute bg-no-repeat bg-cover mt-[20vh] mr-[20vh] pr-5 z-30 w-[80vw] h-[80vh] bg-center md:pl-20 md:'/>
    </div>
    </div>
    <div className='flex flex-col mt-[60vh]'>
    <User />
    </div>
    </div>
  )
}
