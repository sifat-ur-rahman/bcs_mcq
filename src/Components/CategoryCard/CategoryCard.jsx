import { Link } from "react-router-dom"
import ProgressLine from "../ProgressLine/ProgressLine"
import Counter from "../Counter/Counter"


function CategoryCard({category}) {
    const {categoryName, describe,name, img}= category
  return (
    <Link className="flex items-center border-2 rounded-lg border-slate-400 px-4 py-2 w-full" to={`/category/${categoryName}`}>

        <div>
            <img className="w-44 h-20 rounded-s-lg" src={img} alt="" />
        </div>
        <div className="ml-3">
            <h4 className="text-2xl font-bold">{name}</h4>
            <p className="text-lg">{describe}</p>
            <ProgressLine
            visualParts={[
                 {
                percentage: "95%",
                color: "tomato"
                 }
                ]}
            />
        </div>

    </Link>
  )
}

export default CategoryCard