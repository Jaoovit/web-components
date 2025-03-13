import { newE2EPage } from '@stencil/core/testing';

describe('standard-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<standard-text></standard-text>');

    const element = await page.find('standard-text');
    expect(element).toHaveClass('hydrated');
  });
});
