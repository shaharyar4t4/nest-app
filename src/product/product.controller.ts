import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product') // product act as "/product"
export class ProductController {
    constructor(private readonly productservice: ProductService){}

      // this controller ---> get all product on main pages
      @Get()
        getProducts(){
            return this.productservice.getAllProduct();
        }
      // this controller ---> get all product by using specific id
      @Get(':id')
      getProduct(@Param('id') id: string){
        return this.productservice.getProductId(Number(id))
      }
}
