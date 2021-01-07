const domain = process.env.DOMAIN || 'http://localhost:5000';
const validateTransaction = async (comprobante, name) => {
   // fetch(domain, {
   //    method: 'GET',
   //    headers: {
   //       'Content-type': 'text',
   //    },
   // });
   console.log(process.env.REACT_APP_DOMAIN);
   console.log(process.env.NODE_ENV);
   console.log('hola');
   return true;
};
export { validateTransaction };
