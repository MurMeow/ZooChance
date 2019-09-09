import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { TermsconditionsComponent} from './pages/termsconditions/termsconditions.component';
import { NotfoundComponent} from './pages/notfound/notfound.component';
import { BlogComponent} from './pages/blog/blog.component';
import { TemporaryComponent} from './pages/temporary/temporary.component';
import { CatalogComponent} from './pages/catalog/catalog.component';
import { TestComponent} from './pages/test/test.component';
import { ForumComponent} from './pages/forum/forum.component';
import {PetComponent} from './pages/pet/pet.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'temporary',
    component: TemporaryComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pet',
    component: PetComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'partners',
    component: PartnersComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'terms-and-conditions',
    component: TermsconditionsComponent,
  },
  {
      path: 'forum',
      // component: ForumComponent,
      component: TemporaryComponent,
      data:{
          date: "31 Oktember 2019",
          message: "I'm sorry!"
      }
  },
  {
    path: '**',
    component: NotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
