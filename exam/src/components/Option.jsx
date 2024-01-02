import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'
 
const Option = () => {
  return (
     <Container>
<Flex className= 'mt-[230px] mr-[30px]'>
<select className='w-[266px]'>
<option value="someOption">Choose Area</option>
 
</select>
<select className='w-[266px]'>
<option value="someOption">Property Status</option>
 
</select>
<select className='w-[266px]'>
<option value="someOption">Property Type</option>
 
</select>
 <Button text= 'Find Now'  className= 'bg-butcolor w-[180px] h-[50px] px-[25px] py-[13px] text-[14px] ml-[70px]'/>
</Flex>
     </Container>
  )
}

export default Option