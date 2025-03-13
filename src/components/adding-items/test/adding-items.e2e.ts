import { newE2EPage } from '@stencil/core/testing';

describe('adding-items', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<adding-items></adding-items>');

    const element = await page.find('adding-items');
    expect(element).toHaveClass('hydrated');
  });
});
