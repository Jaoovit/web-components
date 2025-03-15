import { newSpecPage } from '@stencil/core/testing';
import { AlertButton } from '../alert-button';

describe('alert-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AlertButton],
      html: `<alert-button></alert-button>`,
    });
    expect(page.root).toEqualHtml(`
      <alert-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </alert-button>
    `);
  });
});
