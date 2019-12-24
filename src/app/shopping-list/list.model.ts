export class list {
  public itemName: string;
  public itemCode: string;
  public itemQty: number;
  public itemUnit: string;

  constructor(name: string, code: string, qty: number, unit: string){
    this.itemName = name;
    this.itemCode = code;
    this.itemQty = qty;
    this.itemUnit = unit;
  }

}
