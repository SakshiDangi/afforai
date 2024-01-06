import { CiCircleCheck } from "react-icons/ci";
import landing from '../../images/laptop-landing-4.png'


export default function () {
  // const [service, setService] = useState('');
  const services = [
    { name: 'A whip smart research assistant', icon: <CiCircleCheck  /> },
    { name: 'We speak every language', icon: <CiCircleCheck  /> },
    { name: 'Reliable data citation for answers', icon: <CiCircleCheck   /> },
    { name: 'Fort-Knox level data security', icon: <CiCircleCheck  /> },
  ];
  return (
    <div className="flex flex-wrap lg:mx-[9em] mx-[5em] my-[11em] lg:flex-row sm:flex-col md:flex-col gap-y-10s">
      <div className="lg:w-1/2 md:w-full sm:w-full ml-auto h-[50vh]">
        <h2>Say goodbye to long, tiresome documents</h2>
        <p>Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.</p>
        <div>
        {services.map((service) => (
        <div className="flex gap-2 text-[1.1em] text-green-500 font-semibold">{service.icon}{service.name}</div>
        ))} 
        </div>
      </div>
      <div className="lg:w-1/2 md:w-full sm:w-full mr-auto h-[50vh]">
        <img 
          className="w-[100%]"
          src={landing} alt="product detail" />
      </div>
    </div>
  )
}
