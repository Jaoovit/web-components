import { newE2EPage } from '@stencil/core/testing';

describe('alert-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<alert-button></alert-button>');

    const element = await page.find('alert-button');
    expect(element).toHaveClass('hydrated');
  });
});
