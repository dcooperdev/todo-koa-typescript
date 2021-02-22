export default (ctx) => {
    ctx.response.body = {
        ...ctx.state
    }
}