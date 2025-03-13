import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'standard-text',
  styleUrl: 'standard-text.css',
  shadow: true,
})
export class StandardText {
  render() {
    return (
      <Host>
        <div class="standard-text">
          <h1>Standard title</h1>
          <p>This is a standard text to use as exemplo how to render an web component</p>
        </div>
      </Host>
    );
  }
}
