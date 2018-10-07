export interface TradeOrdersBatchCancel {
  status: string;
  data: TradeOrdersBatchCancelData;
}

interface TradeOrdersBatchCancelData {
  success: string[];
  failed: string[];
}
