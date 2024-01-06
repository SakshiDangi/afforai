import Button from '../ui/Button'
import laptop5 from '../../images/laptop-landing-5.png'

export default function Productivity() {
  return (
    <main> 
      <div>
        <Button variant={'basecolor'}>10x your productivity</Button>
        <h2>Save yourself from stress & streamline your workflow</h2>
        <p>The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).</p>
      </div>
      <div>
        <img src={laptop5} alt='productivity analysis' />
      </div>
    </main>
  )
}