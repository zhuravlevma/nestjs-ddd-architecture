import { DeliverymanEntity } from '../../entities/deliveryman.entity';

export interface ChangeDeliverymansStatusCommand {
  deliverymanId: string;
  isActive: boolean;
}
export abstract class ChangeDeliverymansStatusUseCase {
  abstract execute(
    changeDeliverymansStatusCommand: ChangeDeliverymansStatusCommand,
  ): Promise<DeliverymanEntity>;
}
