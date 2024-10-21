import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query, Res, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./products.service";
import { Response } from "express";
import { AuthGuard } from "../auth/authGuard/auth.guard";
import { CreateProductDto, UpdateProductDto } from "./productsDto/productsDto";
import { Roles } from "../auth/authRoles/roles.decorator";
import { Role } from "../auth/authRoles/roles.auth";
import { RoleGuard } from "../auth/authGuard/role.guard";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Products')
@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
    @Get()
    async getProducts(
        @Res() res?: Response,
    ) {
        try {
            const products = await this.productService.getProducts();
            if (!res) {
                return products
            }
            return res.status(200).send(products);
        } catch (error) {
            throw new HttpException('Error al obtener los productos', HttpStatus.NOT_FOUND);
        }
    }
    @Get(":id")
    async getProductsById(@Param("id", ParseUUIDPipe) id: string, @Res() res?: Response) {
        try {
            const product = await this.productService.getPruductsById(id);
            if (!res) {
                return product
            }
            return res.status(200).send(product);
        } catch (error) {
            throw new HttpException('Error al obtener el producto', HttpStatus.NOT_FOUND);
        }
    }
    @Post()
    async createProduct(@Body() CreateProductDto: CreateProductDto, @Res() res: Response) {
        try {
            const newProduct = await this.productService.createProduct(CreateProductDto);
            return res.status(201).json({
                message: 'Producto creado',
                producto: newProduct
            });
        } catch (error) {
            throw new HttpException('Error al crear el producto', HttpStatus.BAD_REQUEST);
        }

    }
    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RoleGuard)
    @Put(":id")
    async updateProduct(@Param("id", ParseUUIDPipe) id: string, @Body() UpdateProductDto: UpdateProductDto, @Res() res: Response) {
        try {
            const updatedProduct = await this.productService.updateProduct(id, UpdateProductDto);
            return res.status(201).json({
                message: 'Producto modificado con exito',
                producto: updatedProduct
            });
        } catch (error) {
            throw new HttpException('Error al modificar el producto', HttpStatus.BAD_REQUEST);
        }
    }
    @UseGuards(AuthGuard)
    @Delete(":id")
    async deleteProduct(@Param("id", ParseUUIDPipe) id: string, @Res() res?: Response) {
        try {
            const deletedProduct = await this.productService.deleteProduct(id);
            if (!res) {
                return deletedProduct
            }
            return res.status(200).json({
                message: 'Producto eliminado con exito',
                producto: deletedProduct
            });
        } catch (error) {
            throw new HttpException('Error al eliminar el producto', HttpStatus.NOT_FOUND);
        }
    }


}