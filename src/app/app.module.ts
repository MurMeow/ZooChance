import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './molecules/nav/nav.component';
import { NavItemComponent } from './atoms/nav-item/nav-item.component';
import { HeaderComponent } from './organizms/header/header.component';
import { ButtonComponent } from './atoms/button/button.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { FooterComponent } from './organizms/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TermsconditionsComponent } from './pages/termsconditions/termsconditions.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TemporaryComponent } from './pages/temporary/temporary.component';
import { ArrowComponent } from './atoms/arrow/arrow.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CatalogcardComponent } from './molecules/catalogcard/catalogcard.component';
import { SliderComponent } from './organizms/slider/slider.component';
import { TestComponent } from './pages/test/test.component';
import { TestformComponent } from './molecules/testform/testform.component';
import { ProgressbarComponent } from './molecules/progressbar/progressbar.component';
import { ForumComponent } from './pages/forum/forum.component';
import { PetComponent } from './pages/pet/pet.component';
import {ProjectorComponent} from "./organizms/projector/projector.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavItemComponent,
    HeaderComponent,
    ButtonComponent,
    LogoComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    ContactsComponent,
    TermsconditionsComponent,
    PartnersComponent,
    NotfoundComponent,
    TemporaryComponent,
    ArrowComponent,
    CatalogComponent,
    CatalogcardComponent,
    SliderComponent,
    TestComponent,
    TestformComponent,
    ProgressbarComponent,
    ForumComponent,
    PetComponent,
    ProjectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
