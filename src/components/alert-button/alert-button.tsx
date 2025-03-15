import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'alert-button',
  styleUrl: 'alert-button.css',
  shadow: true,
})
export class AlertButton {
  @Prop() alertMessage: string = 'Default alert';

  @Event() sendAlert: EventEmitter<string>;

  handleSendAlert() {
    this.sendAlert.emit(this.alertMessage);
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.handleSendAlert()}>send alert</button>
      </Host>
    );
  }
}
