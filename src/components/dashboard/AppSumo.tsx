import Button from '../ui/Button'
import appsumo from '../../images/appsumo.png'

export default function AppSumo() {
  return (
    <div className='flex w-60 items-center justify-between'> 
      <img src={appsumo} className='w-26 h-26' alt='AppSumo'/>
        <span>Now on AppSumo</span>
        <a href='https://appsumo.com/products/Afforai/?p=1&clickId=UN3x3XyIqxyPRa5Ui%3AUdDTzlUkFSJNTqCTTjw80&irgwc=1&utm_medium=4245229&utm_campaign=Online%20Tracking%20Link&utm_source=IR#pricePlans' target='_blank'>
            Get Lifetime Deal
            
        </a>
    </div>
  )
}
