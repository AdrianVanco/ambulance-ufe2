import { newSpecPage } from '@stencil/core/testing';
import { XvancoaAmbulanceWlList } from '../xvancoa-ambulance-wl-list';

describe('xvancoa-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XvancoaAmbulanceWlList],
      html: `<xvancoa-ambulance-wl-list></xvancoa-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xvancoa-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xvancoa-ambulance-wl-list>
    `);
  });
});
