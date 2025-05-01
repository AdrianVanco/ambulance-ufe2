import { newSpecPage } from '@stencil/core/testing';
import { XvancoaAmbulanceWlList } from '../xvancoa-ambulance-wl-list';

describe('xvancoa-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XvancoaAmbulanceWlList],
      html: `<xvancoa-ambulance-wl-list></xvancoa-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as XvancoaAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
