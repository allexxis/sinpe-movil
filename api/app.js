const express = require('express');
const createError = require('http-errors');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.set('useCreateIndex', true);
//Configuration
const app = express();
const PORT = 5000;
const key =
   process.env.KEY || '5Ty%ym%=}PESSVGAcLKe:Ck=k+dvh2aUpV6%5u&zu@6d(+hB=6';
const secret =
   process.env.SECRET || 'VZx&uy8#!Ce+StDSDp]Bi3M,=.CP[n/qCKT:H62WkX;7qC-.}B';
//Middlewares
app.use(cors());
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
   res.send(`Server is healthy mode:${process.env.DOMAIN}`);
});
app.use((req, res, next) => {
   next(createError(404));
});
//Start
mongoose
   .connect('mongodb://mongo:27017/sinpe', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
   })
   .then(() => console.log('Conexion with mongo established'))
   .catch((err) => console.log(err));
app.listen(PORT, () => {
   console.log(`Server has started ...`);
   console.log(`Secret: ${secret}`);
   console.log(`Key: ${key}`);
});
