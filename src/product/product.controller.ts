import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product') // product act as "/product"
export class ProductController {
    constructor(private readonly productservice: ProductService){}

      // this controller ---> get all product on main pages
      @Get()
      // useGuard is a decorator --->  which help to give a user acess or not
      @UseGuards(AuthGuard)
        getProducts(){
            return this.productservice.getAllProduct();
        }
      // this controller ---> get all product by using specific id
      @Get(':id')
      getProduct(@Param('id') id: string){
        return this.productservice.getProductId(Number(id))
      }
}
