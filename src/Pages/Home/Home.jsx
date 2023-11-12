import CategoryCard from "../../Components/CategoryCard/CategoryCard"
import { categoryData } from "../../assets/data/categoryData"


function Home() {

  return (
    <div data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="500" className='mt-16 pb-28 '>
            <h2 className='text-4xl font-extrabold  text-center '>Question Category</h2>
            <div className='grid lg:container lg:mx-auto mx-4 my-8  lg:gap-16 gap-4 grid-cols-1  lg:grid-cols-2'>
            {
               categoryData.map((category)=> <CategoryCard
               key={category.id}
               category = {category}
               ></CategoryCard>) 
            }

            </div>
        </div>
  )
}

export default Home