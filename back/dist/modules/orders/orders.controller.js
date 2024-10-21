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
exports.OrdersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const orders_dto_1 = require("./dto/orders.dto");
const auth_guard_1 = require("../auth/authGuard/auth.guard");
const swagger_1 = require("@nestjs/swagger");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async getOrders(res) {
        try {
            const orders = await this.ordersService.getOrders();
            res.status(200).send(orders);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener las ordenes', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getOrder(id, res) {
        try {
            const order = await this.ordersService.getOrder(id);
            res.status(200).send(order);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener la orden', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async createOrder(CreateOrderDto, res) {
        try {
            await this.ordersService.createOrderService(CreateOrderDto);
            res.status(201).send('Orden creada con exito');
        }
        catch (err) {
            throw new common_1.HttpException("Error al crear la orden", common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las ordenes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Las ordenes fueron encontradas con exito' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Las ordenes no fueron encontradas' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrders", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una orden por su id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'La orden fue encontrada con exito', type: orders_dto_1.CreateOrderDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'La orden no fue encontrada' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrder", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una orden' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'La orden fue creada con exito', type: orders_dto_1.CreateOrderDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al crear la orden' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [orders_dto_1.CreateOrderDto, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "createOrder", null);
exports.OrdersController = OrdersController = __decorate([
    (0, swagger_1.ApiTags)('orders'),
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [order_service_1.OrdersService])
], OrdersController);
//# sourceMappingURL=orders.controller.js.map