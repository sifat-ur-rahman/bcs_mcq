import CategoryCard from "../../Components/CategoryCard/CategoryCard"


function Home() {
    const categoryData = [
        {
            id : 1,
            categoryName : 'bangla',
            name: "Bangla MCQ",
            describe : 'Bengali Difficult Questions of BCS',
            img: 'https://i.ibb.co/1MWkYK3/bangla-Img.png',
            

        },
        {
            id : 2,
            categoryName : 'english',
            name: "English MCQ",
            describe : 'English Difficult Questions of BCS',
            img: 'https://i.ibb.co/vLq4jKk/English-Img.png',


        },
        {
            id : 3,
            categoryName : 'math',
            name: "Math MCQ",
            describe : 'Math Difficult Questions of BCS',
            img: 'https://i.ibb.co/rpyCtPw/Math-Img.png',


        },
        {
            id : 4,
            categoryName : 'GK',
            name: "G.K. MCQ",
            describe : 'G.K. Difficult Questions of BCS',
            img: 'https://i.ibb.co/zRw5fCD/GK-Img.png',


        },
        {
            id : 5,
            categoryName : 'other',
            name: "Other MCQ",
            describe : 'Other Difficult Questions of BCS',
            img: 'https://i.ibb.co/FhN32Fz/Other-Img.png',


        },
    ]
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