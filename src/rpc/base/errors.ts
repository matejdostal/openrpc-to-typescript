export interface JsonRpcErrorObject<D = unknown> {
  code: number;
  message: string;
  data?: D;
}

export class JsonRpcError<D = unknown> extends Error {
  readonly code: number;
  readonly data?: D;
  constructor(obj: JsonRpcErrorObject<D>) {
    super(obj.message);
    this.name = "JsonRpcError";
    this.code = obj.code;
    this.data = obj.data;
  }
}
