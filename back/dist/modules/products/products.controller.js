"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const auth_guard_1 = require("../auth/authGuard/auth.guard");
const productsDto_1 = require("./productsDto/productsDto");
const roles_decorator_1 = require("../auth/authRoles/roles.decorator");
const roles_auth_1 = require("../auth/authRoles/roles.auth");
const role_guard_1 = require("../auth/authGuard/role.guard");
const swagger_1 = require("@nestjs/swagger");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getProducts(res) {
        try {
            const products = await this.productService.getProducts();
            if (!res) {
                return products;
            }
            return res.status(200).send(products);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener los productos', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getProductsById(id, res) {
        try {
            const product = await this.productService.getPruductsById(id);
            if (!res) {
                return product;
            }
            return res.status(200).send(product);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener el producto', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async createProduct(CreateProductDto, res) {
        try {
            const newProduct = await this.productService.createProduct(CreateProductDto);
            return res.status(201).json({
                message: 'Producto creado',
                producto: newProduct
            });
        }
        catch (error) {
            throw new common_1.HttpException('Error al crear el producto', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateProduct(id, UpdateProductDto, res) {
        try {
            const updatedProduct = await this.productService.updateProduct(id, UpdateProductDto);
            return res.status(201).json({
                message: 'Producto modificado con exito',
                producto: updatedProduct
            });
        }
        catch (error) {
            throw new common_1.HttpException('Error al modificar el producto', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteProduct(id, res) {
        try {
            const deletedProduct = await this.productService.deleteProduct(id);
            if (!res) {
                return deletedProduct;
            }
            return res.status(200).json({
                message: 'Producto eliminado con exito',
                producto: deletedProduct
            });
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar el producto', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)(":id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsById", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productsDto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_auth_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Put)(":id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, productsDto_1.UpdateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(":id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductService])
], ProductController);
//# sourceMappingURL=products.controller.js.map