import { Test, TestingModule } from '@nestjs/testing';
import { MercadoPagoService } from './mercadopago.service';

describe('MercadopagoService', () => {
  let service: MercadoPagoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MercadoPagoService],
    }).compile();

    service = module.get<MercadoPagoService>(MercadoPagoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
