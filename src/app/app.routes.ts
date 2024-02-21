import { Routes } from '@angular/router';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { ListComponent } from './post/list/list.component';
import { ViewComponent } from './post/view/view.component';

export const routes: Routes = [
    { path: 'post/list', component: ListComponent },
    { path: 'post/:postId/view', component: ViewComponent },
    { path: 'post/create', component: CreateComponent },
    { path: 'post/:postId/edit', component: EditComponent },
    { path: 'post', redirectTo: 'post/list', pathMatch: 'full'},
    { path: '', redirectTo: 'post/list', pathMatch: 'full'},
];
