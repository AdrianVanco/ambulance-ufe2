import { newSpecPage } from '@stencil/core/testing';
import { XvancoaAmbulanceWlApp } from '../xvancoa-ambulance-wl-app';

describe('xvancoa-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XvancoaAmbulanceWlApp],
      html: `<xvancoa-ambulance-wl-app base-path="/"></xvancoa-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xvancoa-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XvancoaAmbulanceWlApp],
      html: `<xvancoa-ambulance-wl-app base-path="/ambulance-wl/"></xvancoa-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xvancoa-ambulance-wl-list");
  });
});