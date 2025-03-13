import { newSpecPage } from '@stencil/core/testing';
import { AddingItems } from '../adding-items';

describe('adding-items', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AddingItems],
      html: `<adding-items></adding-items>`,
    });
    expect(page.root).toEqualHtml(`
      <adding-items>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </adding-items>
    `);
  });
});
