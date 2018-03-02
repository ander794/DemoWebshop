export class ProductItem{

    constructor(name:string,price:number,imageUrl:string,currency:string){
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.currency = currency;
    }
    name: string;
    description: string;
    price: number;
    quantityUnit: string;
    currency: string;
    imageUrl:string;
}