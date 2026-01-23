import { Test, TestingModule } from '@nestjs/testing';
import { AgeCheckerController } from './age-checker.controller';

describe('AgeCheckerController', () => {
  let controller: AgeCheckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgeCheckerController],
    }).compile();

    controller = module.get<AgeCheckerController>(AgeCheckerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
