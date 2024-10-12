import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Res, UseGuards } from "@nestjs/common";
import { OrdersService } from "./order.service";
import { CreateOrderDto } from "./dto/orders.dto";
import { Response } from "express";
import { AuthGuard } from "../auth/authGuard/auth.guard";

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }
    @UseGuards(AuthGuard)
    @Get(':id')
    async getOrder(@Param('id', ParseUUIDPipe) id: string, @Res() res: Response) {
        try {
            const order = await this.ordersService.getOrder(id);
            res.status(200).send(order);
        } catch (error) {
            throw new HttpException('Error al obtener la orden', HttpStatus.NOT_FOUND);
        }
    }
    @UseGuards(AuthGuard)
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