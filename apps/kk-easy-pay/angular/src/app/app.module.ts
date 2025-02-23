import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { LeistungsPaketDisplayComponent } from './leistungs-paket-display/leistungs-paket-display.component';
import { LeistungPaketPageComponent } from './leistung-paket-page/leistung-paket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LeistungsPaketDisplayComponent,
    LeistungPaketPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
