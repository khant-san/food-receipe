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

export interface CarProps {
    city_mpg: number;
    class: string;
    combinaiton_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    modal: string;
    transmission: string;
    years: number;

}