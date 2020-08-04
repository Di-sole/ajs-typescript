import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];
  
    add(item: Buyable): void {
      this._items.push(item);
    }
  
    get items(): Buyable[] {
      return [...this._items];
    }
  
    totalCost(): number {
      let totalCost: number = 0;
      this._items.forEach(element => {
        totalCost += element.price;
      });
  
      return totalCost;
    }
  
    discountCost(discount: number): number {
      let totalCost: number = 0;
      this._items.forEach(element => {
        totalCost += element.price;
      });
  
      return totalCost - totalCost / 100 * discount;
    }
  
    remove(id: number): void {
      const i: number = this._items.findIndex(element => {
        return element.id === id;
      });
  
      if (i >= 0) {
        this._items.splice(i, 1);
      }
    }
  }
  