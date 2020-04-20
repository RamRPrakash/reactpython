import Create from './../Pages/Create'
import Update from './../Pages/Update'
import Delete from './../Pages/Delete'
import View from './../Pages/View'
import Main from './../Pages/Main'

export default [
    {
        path: '/',
        component: Main,
        exact: true
    },
    {
        path: '/Create',
        component: Create
    },
    {
        path: '/Update',
        component: Update
    },
    {
        path: '/Delete',
        component: Delete
    },
    {
        path: '/View',
        component: View
    }
]