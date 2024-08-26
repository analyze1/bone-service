const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const path = require('path');

const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const swaggerRoutes = require('./routes/swagger');

const requestLogger = require('./app/middleware/loggerMiddleware');

const app = express();

const domain = process.env.DOMAIN;
const httpPort = process.env.PORT;
const httpsPort = 443;

// rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50 // limit each IP to 50 requests per windowMs
});

// middleware
app.use(requestLogger);
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);

app.use('/', apiRoutes);
app.use('/', webRoutes);
app.use('/', swaggerRoutes);

// welcome html page
app.listen(httpPort, () => {
    if (process.env.NODE_ENV === 'production') {
        console.log(`Server is running on https://${domain}`);
    } else {
        console.log(`Server is running on http://${domain}:${httpPort}`);
    }
});
