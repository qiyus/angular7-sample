import { PrimengRoutingModule } from './primeng-routing.module';

describe('PrimengRoutingModule', () => {
  let primengRoutingModule: PrimengRoutingModule;

  beforeEach(() => {
    primengRoutingModule = new PrimengRoutingModule();
  });

  it('should create an instance', () => {
    expect(primengRoutingModule).toBeTruthy();
  });
});
