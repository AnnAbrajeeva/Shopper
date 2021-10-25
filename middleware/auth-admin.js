export default function (context) {
    console.log(context)
    if(!context.store.getters['user/checkAuthUser']) {
        context.redirect('/admin/auth')
    }
}