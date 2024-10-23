import { Module } from '@nestjs/common';
import { MercadoPagoModule } from './payment/mercado-pago/mercado-pago.module';

@Module({
  imports: [MercadoPagoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
