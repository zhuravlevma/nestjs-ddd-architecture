import { DeliverymanEntity } from '../../entities/deliveryman.entity';

export interface CreateDeliverymanCommand {
  firstName: string;
  lastName: string;
}
export abstract class CreateDeliverymanUseCase {
  abstract execute(
    createDeliverymanCommand: CreateDeliverymanCommand,
  ): Promise<DeliverymanEntity>;
}
