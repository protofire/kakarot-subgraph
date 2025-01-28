import { Transfer } from '../generated/ABI/ABI';
import { Account } from '../generated/schema';
import { BigInt, log } from '@graphprotocol/graph-ts';

export function handleTransfer(event: Transfer): void {
  const receipt = event.receipt;

  let receiptLength = 0;
  let receiptLength1 = 0;
  if (receipt) {
    receiptLength = receipt.logs.length;
    log.info('Receipt Logs Length12123: {}', [receiptLength.toString()]);
  }

  let accountAddress = event.address.toHexString();
  let account = Account.load(accountAddress);

  if (account == null) {
    account = new Account(accountAddress);
    account.address = event.address;
    account.transactionCount = BigInt.fromI32(0);
    account.receiptLength = receiptLength;
  } else {
    account.transactionCount = account.transactionCount.plus(BigInt.fromI32(1));
    account.receiptLength = receiptLength;
  }

  account.save();
}
