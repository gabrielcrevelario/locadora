const app = require('./config/config');
const bodyParser = require('body-parser');
const Product = require('./models/Product');
const userRouter = require('./routers/UserRouter');
userRouter(app);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3000);



