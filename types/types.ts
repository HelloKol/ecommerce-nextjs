export interface FeaturedType{
    _id:string
    name:string
    image:string
    description:string
}

export interface AllProductsType{
    _id:string
    name:string
    gender:string
    color:string
    price:number
    stock:number
    image?:string
    description:string
}