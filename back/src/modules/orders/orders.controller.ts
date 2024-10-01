import { Body, Controller, HttpException, HttpStatus, Post, Res } from "@nestjs/common";
import { OrdersService } from "./order.service";
import { CreateOrderDto } from "./dto/orders.dto";
import { Response } from "express";

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Post()
    async createOrder(@Body() CreateOrderDto: CreateOrderDto, @Res() res: Response) {
        try {
            await this.ordersService.createOrderService(CreateOrderDto);
            res.status(201).send('Orden creada con exito');

        } catch (err) {
            throw new HttpException("Error al crear la orden", HttpStatus.BAD_REQUEST);
        }
    }
}