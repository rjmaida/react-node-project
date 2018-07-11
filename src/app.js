import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config'

// intialzing packages
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares 
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// routes
app.get('/', (req, res) => {
    res.json({ api: 'works!' })
});

// start the app
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});