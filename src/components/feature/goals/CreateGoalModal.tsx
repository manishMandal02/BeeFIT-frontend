import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Select,
  Checkbox,
  Input,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const habits = ['RUNNING', 'WALKING', 'SWIMMING', 'GYMMING', 'READING'];

const CreateGoalModal = ({ isOpen, onClose }: Props) => {
  const [selectedHabit, setSelectedHabit] = useState(habits[0]);
  const [goalTarget, setGoalTarget] = useState(0);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className='!bg-dark-1'>
          <ModalHeader className='!text-slate-50'>Add Goal 🎯</ModalHeader>
          <ModalCloseButton />
          <ModalBody className='!text-white'>
            <p className='mb-2 font-medium'>Select Habit</p>
            <Select
              value={selectedHabit}
              onChange={(ev) => {
                setSelectedHabit(ev.target.value);
              }}
            >
              {habits.map((habit) => (
                <option value={habit}>{habit.toLowerCase()}</option>
              ))}
            </Select>

            <p className='mb-2 font-medium mt-4'>Set Target</p>
            <NumberInput>
              <NumberInputField
                value={goalTarget}
                onChange={(ev) => {
                  setGoalTarget(Number(ev.target.value));
                }}
              />
              <NumberInputStepper>
                <NumberIncrementStepper className='!bg-white' />
                <NumberDecrementStepper className='!bg-white' />
              </NumberInputStepper>
            </NumberInput>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='gray' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='solid' colorScheme={'cyan'}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateGoalModal;
