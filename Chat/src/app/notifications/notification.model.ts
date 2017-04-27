export enum TypeEnum {
  error = <any>'error',
  success = <any>'success',
  warn = <any>'warn',
  info = <any>'info'
}

export interface Notification {

  type: TypeEnum;
  message: string;

}
