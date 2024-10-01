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
exports.OrdersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const orders_entity_1 = require("./orders.entity");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
const products_entity_1 = require("../products/products.entity");
const orderDetails_entity_1 = require("../ordersDetails/orderDetails.entity");
const users_service_1 = require("../users/users.service");
const products_service_1 = require("../products/products.service");
let OrdersRepository = class OrdersRepository {
    constructor(usersService, ordersRepository, productsService, orderDetailsRepository) {
        this.usersService = usersService;
        this.ordersRepository = ordersRepository;
        this.productsService = productsService;
        this.orderDetailsRepository = orderDetailsRepository;
    }
    async addOrder(CreateOrderDto) {
        try {
            const { userId, products } = CreateOrderDto;
            const user = await this.usersService.getUserById(userId);
            const order = await this.ordersRepository.create({
                user,
                date: new Date()
            });
            const { totalPrice } = await this.productsService.buyProduct(products);
            const orderDetail = await this.orderDetailsRepository.create({
                price: totalPrice,
                products,
            });
            await this.orderDetailsRepository.save(orderDetail);
            order.orderDetail = orderDetail;
            await this.ordersRepository.save(order);
            return order;
        }
        catch (error) {
            throw Error(`Error al crear la orden: ${error}`);
        }
    }
    async getOrder(id) {
        const order = await this.ordersRepository.findOneBy({
            id,
            orderDetail: {
                products: true
            }
        });
        if (!order) {
            throw Error('Order not found');
        }
        return order;
    }
};
exports.OrdersRepository = OrdersRepository;
exports.OrdersRepository = OrdersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __param(1, (0, typeorm_1.InjectRepository)(orders_entity_1.Orders)),
    __param(2, (0, typeorm_1.InjectRepository)(products_entity_1.Products)),
    __param(3, (0, typeorm_1.InjectRepository)(orderDetails_entity_1.OrderDetails)),
    __metadata("design:paramtypes", [users_service_1.UserService,
        typeorm_2.Repository,
        products_service_1.ProductService,
        typeorm_2.Repository])
], OrdersRepository);
//# sourceMappingURL=orders.repository.js.map