export default function (context) {
    let isAdmin = context.store.getters['user/checkAdmin']
    if(!context.store.getters['user/checkAuthUser'] || isAdmin === 'admin') {
        context.redirect('/admin/login')
    }
}