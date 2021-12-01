export type ResturantModel = {
    id: number
    resturantName:string;
    FoodStyle: string;
    image: string;
    description: string;
    Menu: FoodItem[]
}
export type FoodItem = {
    Food: string,
    Price: number
}