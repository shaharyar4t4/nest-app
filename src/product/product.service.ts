import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    // this is private method
    private products = [
        {id: 1, name: "Mobile", price: 20000},
        {id: 2, name: "Tablet", price: 30000},
        {id: 3, name: "Laptop", price: 40000}
    ];

    // Service --- > Product (All)
    getAllProduct(){
        return this.products;
    }

    // Service  --->  Product (By using the ID)
    getProductId(id: number){
        return this.products.find((product) => product.id == id);
    }

}
