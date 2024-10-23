import { Module } from '@nestjs/common';
import { MercadoPagoService } from './services/mercadopago.service';
import { MercadoPagoController } from './controllers/mercado-pago.controller';


@Module({
  imports: [],
  providers: [MercadoPagoService],
  controllers: [MercadoPagoController],
})
export class MercadoPagoModule {}