import { Transfer } from '../generated/KakarotABI/KakarotABI';
import { Account } from '../generated/schema';
import { BigInt, log } from '@graphprotocol/graph-ts';

export function handleTransfer(event: Transfer): void {
  log.info('BlockNumber:>>>>>>>>>>>>>>>> {}', [event.block.number.toString()]);
  log.info('Value:>>>>>>>>>>>>>>>>>>>>>> {}', [event.params.value.toString()]);

  let accountAddress = event.address.toHexString();
  let account = Account.load(accountAddress);

  if (account == null) {
    account = new Account(accountAddress);
    account.address = event.address;
    account.transactionCount = BigInt.fromI32(0);
  }

  account.transactionCount = account.transactionCount.plus(BigInt.fromI32(1));
  account.save();
}
