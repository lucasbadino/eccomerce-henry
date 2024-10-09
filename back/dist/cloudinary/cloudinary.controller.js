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
exports.CloudinaryController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const cloudinary_service_1 = require("./cloudinary.service");
const products_service_1 = require("../modules/products/products.service");
let CloudinaryController = class CloudinaryController {
    constructor(cloudinaryService, productService) {
        this.cloudinaryService = cloudinaryService;
        this.productService = productService;
    }
    async uploadImage(file, id, res) {
        try {
            const user = await this.productService.getPruductsById(id);
            if (!user) {
                throw new common_1.HttpException('Error al subir el archivo', common_1.HttpStatus.NOT_FOUND);
            }
            const result = await this.cloudinaryService.uploadFile(file);
            await this.productService.updateImageProduct(id, result.url);
            return res.status(200).send({
                uploadStatus: true,
                result
            });
        }
        catch (error) {
            throw new common_1.HttpException('Error al subir el archivo', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.CloudinaryController = CloudinaryController;
__decorate([
    (0, common_1.Post)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({
                maxSize: 200 * 1000,
                message: 'Archivo demasiado grande'
            }),
            new common_1.FileTypeValidator({
                fileType: /(jpg|jpeg|png|webp)/
            })
        ]
    }))),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], CloudinaryController.prototype, "uploadImage", null);
exports.CloudinaryController = CloudinaryController = __decorate([
    (0, common_1.Controller)('files/uploadImage'),
    __metadata("design:paramtypes", [cloudinary_service_1.CloudinaryService,
        products_service_1.ProductService])
], CloudinaryController);
//# sourceMappingURL=cloudinary.controller.js.map