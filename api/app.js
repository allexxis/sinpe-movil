const express = require('express');
const createError = require('http-errors');
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
//Configuration
const app = express();
const PORT = 5000;
const key = '5Ty%ym%=}PESSVGAcLKe:Ck=k+dvh2aUpV6%5u&zu@6d(+hB=6';
const secret = 'VZx&uy8#!Ce+StDSDp]Bi3M,=.CP[n/qCKT:H62WkX;7qC-.}B';
//Middlewares
app.use(express.json());

//Routes

app.use((req, res, next) => {
   if (req.headers['api-key'] !== key || req.headers['api-secret'] !== secret) {
      return next(createError(401));
   }
   next();
});
app.use('/api', routes);
app.get('/health', (req, res) => {
   res.send(`Server is healthy`);
});
app.use((req, res, next) => {
   next(createError(404));
});
//Start
mongoose
   .connect('mongodb://localhost:27017/sinpe', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
   })
   .then(() => console.log('Conexion with mongo established'))
   .catch((err) => console.log(err));
app.listen(PORT, () => {
   console.log(`Server has started ...`);
});
