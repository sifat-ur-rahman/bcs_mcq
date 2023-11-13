
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaEdit, } from "react-icons/fa";
import { IconName, MdDelete } from "react-icons/md";

function QuestionCard() {
  return (
    <div>
        
        <div className='border-2 border-gray-400 p-2'>
            <div className="flex items-center justify-between">
                <input type="checkbox"  className="checkbox checkbox-md" />
                <p>1</p>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="m-1"><BiDotsVerticalRounded/></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-12">
                    <li ><FaEdit className=""/> </li>
                    <li><MdDelete/></li>
            </ul>
</div>
            </div>

        </div>
    </div>
  )
}

export default QuestionCard