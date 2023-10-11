import { FoodCard, Hero, SearchBar, ShowMore } from '@/components'

import { FilterProps, MealProps } from '@/types';
import { fetchFoods } from '@/utils'


export default async function Home({ searchParams }: any) {

  const allFood = await fetchFoods({
    name: searchParams.name || '',
    category: searchParams.category || '',
    area: searchParams.area || '',
    ingredients: searchParams.ingredients || 10,
    limit: searchParams.limit || 10,

  });


  const isDataEmpty = !Array.isArray(allFood.meals) || allFood.meals.length < 1 || !allFood.meals;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        className='mt-12 padding-x padding-y max-width' id="discover">
        <div
          className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catalogue.</h1>
          <p>Explore</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          {/* <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div> */}
        </div>


        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allFood.meals.map((meal: MealProps) => (

                <FoodCard meal={meal} category={searchParams.category} />
              ))}



            </div>
            {/* <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allFood.meals.length} /> */}
          </section>

        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no result</h2>
            <p>{allFood.meals?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
