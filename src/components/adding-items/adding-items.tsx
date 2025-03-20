import { Component, Host, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'adding-items',
  styleUrl: 'adding-items.css',
  shadow: true,
})
export class AddingItems {
  @State() stock: number = 10;
  @State() quantity: number = 0;

  increaseQuantity = (): void => {
    this.quantity++;
  };

  decreaseQuantity = (): void => {
    if (this.quantity > 0) {
      this.quantity--;
    }
  };

  @Watch('quantity')
  handleQuantityChange() {
    if (this.quantity > this.stock) {
      window.alert(`We don't have more then ${this.stock} in stock`);
      this.decreaseQuantity();
    }
  }

  render() {
    return (
      <Host>
        <div class="adding-items">
          <button onClick={this.decreaseQuantity}>-</button>
          <p>{this.quantity}</p>
          <button onClick={this.increaseQuantity}>+</button>
        </div>
      </Host>
    );
  }
}
