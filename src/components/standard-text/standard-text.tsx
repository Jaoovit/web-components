import { Component, h, Host, Listen } from '@stencil/core';

@Component({
  tag: 'standard-text',
  styleUrl: 'standard-text.css',
  shadow: true,
})
export class StandardText {
  @Listen('sendAlert')
  handleTextAlert(event: CustomEvent<string>) {
    alert(event.detail);
  }

  render() {
    return (
      <Host>
        <div class="standard-text">
          <h1>Standard title</h1>
          <p>This is a standard text to use as exemplo how to render an web component</p>
          <alert-button alert-message="Are you sure?"></alert-button>
        </div>
      </Host>
    );
  }
}
