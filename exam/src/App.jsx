import Container from "./components/Container"
import Flex from "./components/Flex"
import Image from "./components/Image"
 
 import House from "./assets/house.png"
import Paragraph from "./components/Paragraph"
import Heading from "./components/Heading"
import Button from "./components/Button"
import { FaArrowRight } from "react-icons/fa";
import Option from "./components/Option"

function App() {
 

  return (
    <>
       <Container  className='mr-[100px]'>
        <Flex>
           
          <Image src={House}/>
          <Paragraph text= 'Real Estate Agency' className='text-pcolor text-[16px] text-regular '/>
         
        </Flex>
        <Heading text='Find Your Dream '   className= 'text-black text-[60px] font-bold font-pop mb-[20px]'/>
        <Heading text='House By Us' className= 'text-black text-[60px] font-bold font-pop  '/>
        <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipisicing' className= 'text-p2color   text-[16px] font-regular font-nun mt-[10px]' />

        <Flex className='mt-[27px]'> 
        <Button text= 'View Properties' className= 'bg-butcolor px-[25px] py-[13px] text-[14px] '/>
        <FaArrowRight className="mt-[20px] ml-[24px]"/>
        </Flex>
        <Option/>
       </Container>
    </>
  )
}

export default App
