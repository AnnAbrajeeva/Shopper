export default function (context) {
    let isAdmin = context.store.getters['user/checkAdmin'];
    if(!isAdmin) {
        context.redirect('/admin/login');
    } 
}