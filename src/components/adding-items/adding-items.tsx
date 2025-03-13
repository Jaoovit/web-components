import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'adding-items',
  styleUrl: 'adding-items.css',
  shadow: true,
})
export class AddingItems {
  @State() quantity: number = 0;

  increaseQuantity = (): void => {
    this.quantity++;
  };

  decreaseQuantity = (): void => {
    if (this.quantity > 0) {
      this.quantity--;
    }
  };

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
