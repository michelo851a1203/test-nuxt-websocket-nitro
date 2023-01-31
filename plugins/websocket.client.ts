export default defineNuxtPlugin(() => {
  const mainProtocol = window.location.protocol === 'https' ? 'wss' : 'ws';
  const url = `${mainProtocol}://${window.location.host.replace('3000', '8080')}`;
  const socket = new WebSocket(url);

  return {
    provide: {
      socket,
    }
  }
})
