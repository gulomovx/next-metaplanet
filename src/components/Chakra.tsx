import React from 'react'
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'
  import { Box } from '@chakra-ui/react'
const Chakra = () => {
    
    const steps = [
        { title: 'First', description: 'Contact Info' },
        { title: 'Second', description: 'Date & Time' },
        { title: 'Third', description: 'Select Rooms' },
    ]
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
      })
  return (
    <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle className='text-slate-800'>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>  )
}

export default Chakra