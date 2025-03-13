import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
  shadow: true,
})
export class NavBar {
  @Prop() linkOne: string = '';
  @Prop() linkTwo: string = 'contact us';
  @Prop() linkThree: string = 'about us';

  @Prop() linkHoverColor: string = '';

  render() {
    return (
      <Host>
        <style>
          {`
            a:hover {
              color: ${this.linkHoverColor} !important;
            }
            `}
        </style>

        <div class="nav-bar">
          <a href={this.linkOne}>{this.linkOne}</a>
          <a href={this.linkTwo}>{this.linkTwo}</a>
          <a href={this.linkThree}>{this.linkThree}</a>
        </div>
      </Host>
    );
  }
}
