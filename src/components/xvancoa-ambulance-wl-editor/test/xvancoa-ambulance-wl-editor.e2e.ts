import { newE2EPage } from '@stencil/core/testing';

describe('xvancoa-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xvancoa-ambulance-wl-editor></xvancoa-ambulance-wl-editor>');

    const element = await page.find('xvancoa-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
