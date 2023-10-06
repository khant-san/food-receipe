import { CarProps, CategoryProps, FilterProps, FoodFilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    const headers = {

        "X-RapidAPI-Key": "4183a11565msh6c1a6a45c8a6d9bp1e25b7jsnd22dd1c10966",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",

    }
    console.log(filters)

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?
    make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    });

    const result = await response.json();

    return result;
}
export async function fetchFoods(filters: FoodFilterProps) {
    const { name, category, area, ingredients } = filters;
    let result: any;

    if (category !== '') {
        const response = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        result = (await response).json();
    } else {
        const response = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        result = (await response).json();
    }




    return result;
}

export async function fetchFoodCategory() {


    const response = fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const result = (await response).json()

    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(response => response.json())
        .then(data => console.log(data))



    return result;
}




export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value)


    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    return newPathname;
}