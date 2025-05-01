import { newE2EPage } from '@stencil/core/testing';

describe('xvancoa-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xvancoa-ambulance-wl-list></xvancoa-ambulance-wl-list>');

    const element = await page.find('xvancoa-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
