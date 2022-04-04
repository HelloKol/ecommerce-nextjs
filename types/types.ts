export interface FeaturedType{
    _id:string
    name:string
    image:string
    description:string
}

export interface CollectionsType{
  _id:string
  name:string
  gender:string
  image:string
}

export interface AllProductsType{
    _id:string
    name:string
    slug: {
        current:string,
        _type:string
    }
    gender:string
    color:string
    sizes:[]
    price:number
    stock:number
    image: {
        asset: {
          _id: string;
          url: string;
        };
      };
    description:string
}