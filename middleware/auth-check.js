export default function (context) {
    // if(process.client) {
    //     context.store.dispatch('user/initAuth', null)
    // } else {
        context.store.dispatch('user/initAuth', context.req);
    // }

}