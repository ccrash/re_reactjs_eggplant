import React from 'react';
import * as rciSdk from '@eggplantio/real-user-data-sdk-js';

export default class EggPlant {

  state = {
    tenancyId: null,
    targetUrl: null,
    transport: null,
    producer: null,
  }

  static init(tenancyId) {
    // Step 1: Configure your Transport with the tenancyId provided
    const targetUrl = `https://target.domain/v1/${tenancyId}/stream`;
    console.log('eggplant targetUrl', targetUrl);

    const transport = new rciSdk.Transport(targetUrl)
    console.log('eggplant transport', transport);
    // Step 2: Capture your default collectors
    const defaults = rciSdk.collector.defaultCollectors;
    console.log('eggplant defaults', defaults);

    // Step 3: Build a new Producer with transport and collector
    const producer = new rciSdk.Producer(transport, defaults)
    console.log(producer);

    this.setState({tenancyId, targetUrl, transport, producer})
    // Step 4: Register your hook
    (async function send () {
      try {
        // Step 5: Collect and send the event
        await producer.collect();
        console.log('await completed');
      } catch (cause) {
        console.log('Error processing event', cause);
      }
    })();
  }
}
