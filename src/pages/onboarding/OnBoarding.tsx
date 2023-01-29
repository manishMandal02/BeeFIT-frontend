import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useState } from 'react';

const OnBoarding = () => {
  const [age, setAge] = useState(23);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);

  return (
    <div>
      <p>We need to know more about you!</p>
      <div>
        {/* Age */}
        <p className='font-medium mb-1'>Age</p>
        <>
          <NumberInput>
            <NumberInputField
              value={age}
              onChange={(ev) => {
                setAge(Number(ev.target.value));
              }}
            />
            <NumberInputStepper>
              <NumberIncrementStepper className='!bg-white' />
              <NumberDecrementStepper className='!bg-white' />
            </NumberInputStepper>
          </NumberInput>
        </>
        {/* Height */}
        <p className='font-medium mb-1'>Height</p>
        <>
          <NumberInput>
            <NumberInputField
              value={height}
              onChange={(ev) => {
                setHeight(Number(ev.target.value));
              }}
            />
            <NumberInputStepper>
              <NumberIncrementStepper className='!bg-white' />
              <NumberDecrementStepper className='!bg-white' />
            </NumberInputStepper>
          </NumberInput>
        </>
        {/* Weight */}
        <p className='font-medium mb-1'>Weight</p>
        <>
          <NumberInput>
            <NumberInputField
              value={weight}
              onChange={(ev) => {
                setWeight(Number(ev.target.value));
              }}
            />
            <NumberInputStepper>
              <NumberIncrementStepper className='!bg-white' />
              <NumberDecrementStepper className='!bg-white' />
            </NumberInputStepper>
          </NumberInput>
        </>
        <button className='bg-primary rounded-full py-2 px-4 text-white font-medium '>Submit</button>
      </div>
    </div>
  );
};

export default OnBoarding;
