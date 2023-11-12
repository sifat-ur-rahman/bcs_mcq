import { useState } from "react"
import Swal from "sweetalert2";
import { categoryData } from "../../assets/data/categoryData";


function McqForm() {



const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target 
        const subject = form.subject.value
        const question = form.question.value
        const answer = form.answer.value
        const explanation = form.explanation.value
        

        const QnA ={
          question,
          subject,
          answer,
          explanation
        }

        console.log(QnA)
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          iconColor:"#00FF00",
          color: "#ffffff",
          background: "#ad0efd",
          
        });
};




  
  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="500" className="lg:container mx-auto pt-32 pb-14 h-screen flex flex-col items-center">
      <form  onSubmit={handleSubmit}>
      <div className=' py-2 px-3 mb-6 text-xl rounded-lg'>
      <div className=" text-sm font-normal relative h-11 w-[300px] lg:min-w-[600px]">
      <select name='subject' className=" peer h-full w-full border-b border-blue-600 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-600 focus:border-blue-400 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
        {
          categoryData.map((e) => <option key={e.i} className="bg-slate-700 text-white w-[300px]" >{e.name}</option>)
        }
   

  </select>
  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[16px] font-semibold leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:after:scale-x-100 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    
    </label>
      </div>
      </div>
      <div className=' py-2 px-3 mb-6 text-xl rounded-lg'>
          <div className="  relative h-11 w-[300px] lg:min-w-[600px]">
    <input
      className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-600 focus:border-blue-400 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
      name='question' 
    />
    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[16px] font-semibold leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:after:scale-x-100 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Question
    </label>
          </div>
          </div>
      <div className=' py-2 px-3 mb-6 text-xl rounded-lg'>
          <div className="  relative h-11 w-[300px] lg:min-w-[600px]">
    <input
      className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-600 focus:border-blue-400 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
      name='answer' 
    />
    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[16px] font-semibold leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:after:scale-x-100 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Answer
    </label>
          </div>
          </div>
      <div className=' py-2 px-3 mb-6 text-xl rounded-lg'>
          <div className="  relative h-11 w-[300px] lg:min-w-[600px]">
    <textarea
      className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-600 focus:border-blue-400 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
      name='explanation' 
    />
    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[16px] font-semibold leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:after:scale-x-100 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Explanation
    </label>
          </div>
          </div>
          <div className="flex flex-col items-end">
          <button className="btn common-btn" type="submit">Save</button>
      {/* <input  className=" " alt="" type="submit" /> */}
          </div>
    </form>
    </div>
  )
}

export default McqForm