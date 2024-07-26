import venom from 'venom-bot';

let instance = null;

export const VenomBot = {
  getInstance: async () => {
    if (!instance) {
      instance = await venom.create(
        'sessionName',
        (base64Qr, asciiQR, attempts, urlCode) => {
          console.log(asciiQR); // Optional to log the QR in the terminal
        },
        (statusSession, session) => {
          console.log('Status Session: ', statusSession); // Return is the current status of the session
          // Example: isLogged, notLogged, phoneNotConnected, browserClose, qrReadSuccess, qrReadFail, qrRead
        },
        {
          headless: true,
          useChrome: false,
          logQR: false,
        }
      );
    }
    return instance;
  },
};
