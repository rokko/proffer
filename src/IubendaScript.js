import { useEffect } from 'react';

function IubendaScript() {
  useEffect(() => {
    const iubendaConfigurationScript = document.createElement('script');
    iubendaConfigurationScript.type = 'text/javascript';
    iubendaConfigurationScript.innerHTML = `
      var _iub = _iub || [];
      _iub.csConfiguration = {
        "askConsentAtCookiePolicyUpdate": true,
        "enableFadp": true,
        "enableLgpd": true,
        "enableUspr": true,
        "fadpApplies": true,
        "floatingPreferencesButtonDisplay": "bottom-left",
        "perPurposeConsent": true,
        "siteId": 3678883,
        "usprApplies": true,
        "whitelabel": false,
        "cookiePolicyId": 12802649,
        "lang": "it",
        "banner": {
          "acceptButtonDisplay": true,
          "closeButtonDisplay": false,
          "customizeButtonDisplay": true,
          "explicitWithdrawal": true,
          "listPurposes": true,
          "ownerName": "www.valepertutti.it/",
          "position": "float-top-center",
          "rejectButtonDisplay": true,
          "showTitle": false,
          "showTotalNumberOfProviders": true
        }
      };
    `;
    document.body.appendChild(iubendaConfigurationScript);

    const iubendaAutoblockingScript = document.createElement('script');
    iubendaAutoblockingScript.src = 'https://cs.iubenda.com/autoblocking/3678883.js';
    iubendaAutoblockingScript.type = 'text/javascript';
    document.body.appendChild(iubendaAutoblockingScript);

    const iubendaGppStubScript = document.createElement('script');
    iubendaGppStubScript.src = '//cdn.iubenda.com/cs/gpp/stub.js';
    iubendaGppStubScript.type = 'text/javascript';
    document.body.appendChild(iubendaGppStubScript);

    const iubendaCsScript = document.createElement('script');
    iubendaCsScript.src = '//cdn.iubenda.com/cs/iubenda_cs.js';
    iubendaCsScript.type = 'text/javascript';
    iubendaCsScript.charset = 'UTF-8';
    iubendaCsScript.async = true;
    document.body.appendChild(iubendaCsScript);

    return () => {
      document.body.removeChild(iubendaConfigurationScript);
      document.body.removeChild(iubendaAutoblockingScript);
      document.body.removeChild(iubendaGppStubScript);
      document.body.removeChild(iubendaCsScript);
    };
  }, []);

  return null;
}

export default IubendaScript;
