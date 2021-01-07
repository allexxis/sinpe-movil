const domain = process.env.REACT_APP_DOMAIN || 'http://localhost:5000';
const key =
   process.env.REACT_APP_KEY ||
   '5Ty%ym%=}PESSVGAcLKe:Ck=k+dvh2aUpV6%5u&zu@6d(+hB=6';
const secret =
   process.env.REACT_APP_KEY ||
   'VZx&uy8#!Ce+StDSDp]Bi3M,=.CP[n/qCKT:H62WkX;7qC-.}B';
const validateTransaction = async (comprobante, name) => {
   console.log(comprobante, name);
   fetch(domain + '/api/transaction', {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
         'api-key': key,
         'api-secret': secret,
      },
      body: JSON.stringify({
         comprobante,
         name,
      }),
   })
      .then(async (res) => {
         const response = await res.json();
         alert(
            'Transacción validada correctamente \n' +
               JSON.stringify(response, null, 2)
         );
      })
      .catch((error) => {
         console.log(error);
         alert('Error revise el número comprobante');
      });
   return true;
};
export { validateTransaction };
