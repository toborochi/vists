import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TuiThemeNightModule,
  TuiModeModule, TuiSvgModule
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VisModule} from 'ngx-vis';
import {TuiFocusableModule, TuiPortalHostModule} from '@taiga-ui/cdk';
import {TuiDocNavigationModule} from '@taiga-ui/addon-doc';
import {TuiIslandModule, TuiMarkerIconModule, TuiToggleModule} from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';
import { LabFooterComponent } from './components/lab-footer/lab-footer.component';
import { LabHeaderComponent } from './components/lab-header/lab-header.component';
import { LabAboutComponent } from './components/lab-about/lab-about.component';
import { LabLatestComponent } from './components/lab-latest/lab-latest.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LabFooterComponent,
    LabHeaderComponent,
    LabAboutComponent,
    LabLatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VisModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiPortalHostModule,
    TuiButtonModule,
    TuiFocusableModule,
    TuiDocNavigationModule,
    TuiThemeNightModule,
    TuiModeModule,
    TuiThemeNightModule,
    TuiRootModule,
    TuiToggleModule,
    FormsModule,
    TuiIslandModule,
    FlexLayoutModule,
    TuiMarkerIconModule,
    TuiSvgModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
