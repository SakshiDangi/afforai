import AppSumo from './AppSumo'
import ServiceCard from './ServiceCard'
import Button from '../ui/Button'

export default function Dashboard() {

  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <AppSumo />
      <div >
      <h2 className='max-w-[700px] pt-4 text-center font-semibold text-black-300 text-[55px] leading-snug align-center'>
        Your second brain for maximizing productivity
      </h2>
      <p className='max-w-[700px] pt-3 text-center align-center'>
      Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
      </p>
      </div>
      <div>
        <ServiceCard />
      </div>
      <div className='mt-5'>
        <Button className='mr-7'>Try for Free</Button>
        <Button variant={'secondary'}>View pricing</Button>
      </div>
    </div>
  )
}