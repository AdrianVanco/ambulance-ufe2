import { newE2EPage } from '@stencil/core/testing';

describe('xvancoa-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xvancoa-ambulance-wl-app></xvancoa-ambulance-wl-app>');

    const element = await page.find('xvancoa-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
