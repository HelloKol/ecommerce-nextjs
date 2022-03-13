export interface FeaturedType{
    _id:string
    name:string
    imageOne?:string
    imageTwo?:string
    description:string
}

export interface JacketsType{
    _id:string
    name:string
    gender:string
    color:string
    price:number
    stock:number
    image?:string
    description:string
}