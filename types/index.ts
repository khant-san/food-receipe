import { DialogTitleProps } from "@headlessui/react";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyle?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}
export interface SearchManufactureProps {
    manufacturer: string;
    setManufacture: (manufacturer: string) => void;
}
export interface SearchCategoryProps {
    category: string;
    setCategory: (category: string) => void;
}

export interface CategoryProps {
    idCategory: number,
    strCategory: string
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;

}
export interface MealProps {
    idMeal: number,
    strMeal: string,
    strDrinkAlternate: string,
    strCategory: string,
    strArea: string,
    strInstructions: string,
    strMealThumb: string,
    strTags: string,
    strYoutube: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,

    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,


}
export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string
}
export interface FoodFilterProps {
    name: string,
    category: string,
    area: string,
    ingredients: string
    limit: number
}
export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}
export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean
}