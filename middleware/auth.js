export default function (context) {
    if(!context.store.getters['user/checkAuthUser']) {
        context.redirect(context.localPath('/auth/login'))
    }
}