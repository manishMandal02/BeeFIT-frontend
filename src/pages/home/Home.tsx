import CreateGoalModal from '@/components/feature/goals/CreateGoalModal';
import { useState } from 'react';
import { GiStairsGoal } from 'react-icons/gi';
import { HiArrowNarrowRight } from 'react-icons/hi';

const profilePic = 'https://lh3.googleusercontent.com/a/AEdFTp4o7w64q5Pxne5Qhd2dgn_l7gZb0Ql-fHqDfn_gwQ=s96-c';

const Home = () => {
  const [isAddGoalModalOpen, setIsAddGoalModalOpen] = useState(false);
  const onClose = () => {
    setIsAddGoalModalOpen(false);
  };

  return (
    <div className='bg-slate-600 h-full py-3 flex flex-col items-start'>
      {/* header  */}

      <div className='flex items-center justify-between w-full px-4'>
        {/* left container */}
        <div className='flex flex-col items-start'>
          <p className=' font-medium  text-slate-400'>Good Afternoon!</p>
          <p
            className=' text-2xl  font-semibold tracking-wide -mt-1
          text-transparent  bg-clip-text bg-gradient-to-r from-primary to-emerald-500 
          '
          >
            {'Manish Mandal'}
          </p>
        </div>
        <img
          src={profilePic}
          alt={'Manish Mandal'}
          className='rounded-full w-12  ring-2 ring-emerald-400/20  '
        />
      </div>
      {/* bmi */}
      <div className='mt-2 px-4 w-full'>
        <p className='text-2xl tracking-wider font-bold text-start ml-2 text-slate-200'>BMI 🏋️</p>
        <div className='bg-gradient-to-tr from-fuchsia-400 to-cyan-500 py-4 px-4 rounded-lg flex w-full items-center justify-between mt-1'>
          <div className=''>
            <p className='text-sm font-medium'>
              Height <span className='bg-white px-1 py-1 rounded-md text-xs  ml-1.5 '>175</span>
            </p>
            <p className='text-sm mt-2.5 font-medium'>
              Weight <span className='bg-white px-1.5 py-1 rounded-md text-xs  ml-1.5  '>73</span>
            </p>
          </div>
          <div className=''>
            <div className='border-4 border-green-500 px-2.5 py-2 rounded-full'>
              <p className='font-black text-3xl text-white'>20</p>
            </div>
          </div>
        </div>
      </div>
      {/* goals */}
      <div className='mt-6 px-4 w-full flex flex-col '>
        {/* heading */}
        <div className='flex items-center justify-between '>
          <p className='text-2xl tracking-wider font-bold text-start ml-2 text-slate-200'>Goals 🎯</p>
          <HiArrowNarrowRight className='text-white mr-2 scale-125' size={20} />
        </div>
        {/* goals list */}
        <button
          className='bg-primary px-4 font-medium w-56 self-center flex items-center mt-4  text-slate-700 py-2 rounded-full'
          onClick={() => setIsAddGoalModalOpen(true)}
        >
          Create your first Goal <GiStairsGoal size={20} className='-mt-1 ml-2' />
        </button>
      </div>
      {/* recommendation */}
      <div className='mt-14 px-4 w-full flex flex-col '>
        {/* heading */}
        <div className='flex items-center justify-between '>
          <p className='text-2xl tracking-wide font-semibold text-start ml-1 text-slate-200'>
            Ai Suggestion 🤖
          </p>
          <HiArrowNarrowRight className='text-white mr-2 scale-125' size={20} />
        </div>
        {/* goals list */}
        <p className='mt-2 text-left bg-primary rounded-md px-4 font-sans py-3'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corporis delectus eligendi
          distinctio quae facilis voluptate error voluptas explicabo, veritatis possimus tempora facere nemo
          suscipit totam debitis doloremque mollitia! Adipisci?
        </p>
      </div>
      {/* create goal modal */}
      <CreateGoalModal isOpen={isAddGoalModalOpen} onClose={onClose} />
    </div>
  );
};

export default Home;
