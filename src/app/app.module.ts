import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TuiThemeNightModule,
  TuiModeModule,
  TuiSvgModule,
  TuiColorModule,
  TuiFormatNumberPipeModule,
  TuiFormatPhonePipeModule,
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisModule } from 'ngx-vis';
import { TuiFilterPipeModule, TuiFocusableModule, TuiMapperPipeModule, TuiPortalHostModule } from '@taiga-ui/cdk';
import { TuiDocNavigationModule } from '@taiga-ui/addon-doc';
import {
  TuiAvatarModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiTabsModule,
  TuiToggleModule,
  TuiSelectModule,
  TuiDataListWrapperModule,
  TuiFilterByInputPipeModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabFooterComponent } from './components/lab-footer/lab-footer.component';
import { LabHeaderComponent } from './components/lab-header/lab-header.component';
import { LabAboutComponent } from './components/lab-about/lab-about.component';
import { LabLatestComponent } from './components/lab-latest/lab-latest.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LatestCardComponent } from './tag-components/latest-card/latest-card.component';
import { AboutCardComponent } from './tag-components/about-card/about-card.component';
import { PageAboutNodeComponent } from './pages/page-about-node/page-about-node.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HttpClientModule } from '@angular/common/http';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { TuiDataListModule } from '@taiga-ui/core';
import { PageContributeComponent } from './pages/page-contribute/page-contribute.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiComboBoxModule } from '@taiga-ui/kit';
import { TuiStringifyPipeModule } from '@taiga-ui/kit';
@NgModule({
  declarations: [
    AppComponent,
    LabFooterComponent,
    LabHeaderComponent,
    LabAboutComponent,
    LabLatestComponent,
    LatestCardComponent,
    AboutCardComponent,
    PageAboutNodeComponent,
    PageHomeComponent,
    PageContributeComponent,
  ],
  imports: [
    RouterModule,
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
    TuiSvgModule,
    FontAwesomeModule,
    TuiTabsModule,
    TuiColorModule,
    TuiAvatarModule,
    ScrollToModule.forRoot(),
    HttpClientModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiInputModule,
    TuiComboBoxModule,
    TuiStringifyPipeModule,
    FormsModule,
    TuiDataListWrapperModule,
    TuiFilterPipeModule,
    TuiFormatNumberPipeModule,
    TuiFormatPhonePipeModule,
    TuiMapperPipeModule,
    TuiFilterByInputPipeModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
