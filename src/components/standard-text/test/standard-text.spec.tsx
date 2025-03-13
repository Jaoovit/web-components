import { newSpecPage } from '@stencil/core/testing';
import { StandardText } from '../standard-text';

describe('standard-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StandardText],
      html: `<standard-text></standard-text>`,
    });
    expect(page.root).toEqualHtml(`
      <standard-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </standard-text>
    `);
  });
});
