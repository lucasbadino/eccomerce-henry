import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./products.service";
import { CreateProductDto, Product } from "./productsDto/productsDto";
import { Response } from "express";
import { AuthGuard } from "../auth/authGuard/auth.guard";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
    @Get()
    getProducts(
        @Res() res: Response,
        @Query("limit") limit: number = 5,
        @Query("page") page: number = 1,

    ) {
        const products = this.productService.getPruducts(page, limit);
        return res.status(200).send(products);
    }
    @Get(":id")
    getProductsById(@Param("id") id: number, @Res() res: Response) {
        const product = this.productService.getPruductsById(Number(id));
        return res.status(200).send(product);
    }
    @UseGuards(AuthGuard)
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createProduct(@Body() CreateProductDto: CreateProductDto, @Res() res: Response) {
        const newProduct = this.productService.createProduct(CreateProductDto);
        return res.status(201).json({
            message: 'Producto creado',
            producto: newProduct
        });

    }
    @UseGuards(AuthGuard)
    @Put(":id")
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    updateProduct(@Param("id") id: number, @Body() CreateProductDto: CreateProductDto, @Res() res: Response) {
        const updatedProduct = this.productService.updateProduct(Number(id), CreateProductDto);
        return res.status(201).json({
            message: 'Producto modificado con exito',
            producto: updatedProduct
        });
    }
    @UseGuards(AuthGuard)
    @Delete(":id")
    deleteProduct(@Param("id") id: number, @Res() res: Response) {
        const deletedProduct = this.productService.deleteProduct(Number(id));
        return res.status(200).json({
            message: 'Producto eliminado con exito',
            producto: deletedProduct
        });
    }


}