import React from 'react'
import { categoryData } from '../../assets/data/categoryData'
import { Link, useNavigate } from 'react-router-dom'
import QuestionCard from '../../Components/QuestionCard/QuestionCard';

function QnAPage() {
  const navigate = useNavigate();
  const handleChange = (optionValue) => {
console.log(optionValue)
      navigate(`/allMcQ/${optionValue}`);
      };

  return (
    <div>
        
        <div className='flex flex-col lg:flex-row items-center justify-around '>

        <div className=' py-2 px-3 mb-6 text-xl rounded-lg'>
      <div className=" text-sm font-normal relative h-11 w-[300px] ">
      <select name='subject' className=" peer h-full w-full border-b border-blue-600 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-600 focus:border-blue-400 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
        {
          categoryData.map((e) => <option key={e.i} className="bg-purple-950 text-white w-full" onClick={handleChange} value={e.categoryName} >
          {e.name}
        </option>)
        }
   

  </select>
  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[16px] font-semibold leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:after:scale-x-100 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    
    </label>
      </div>
      </div>
        <div className=' py-2 px-3 mb-6 text-xl rounded-lg'>
      <div className=" text-sm font-normal relative h-11 w-[300px] ">
      <select name='subject' className=" peer h-full w-full border-b border-blue-600 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-600 focus:border-blue-400 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">

   <option className="bg-purple-950 text-white w-full" >A - Z</option>
   <option className="bg-purple-950 text-white w-full" >Z - A</option>

  </select>
  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[16px] font-semibold leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:after:scale-x-100 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    
    </label>
      </div>
      </div>
        </div>
      {/* ------------------------------------------------ */}
        <div className='grid grid-cols-2 items-center mx-3'>

        <QuestionCard/>
        </div>
    </div>
  )
}

export default QnAPage