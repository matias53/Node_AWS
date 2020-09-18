const Koa = require("koa");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
const appPort = process.env.PORT || 3000;

const app = new Koa();

app.use(json({ pretty: true }));
app.use(bodyParser());
app.listen(appPort, () =>
    console.log(
        "[App Initialization] App Running. Server Started on port " + appPort + "..."
    )
);


app.use(ctx => {
    ctx.body = 'Hello World';
});