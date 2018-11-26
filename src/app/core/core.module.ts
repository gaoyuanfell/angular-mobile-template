import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { CommonModule } from '@angular/common';
import { animationList } from './prepare-route';
import { HeaderComponent } from './header/header.component';
import { ContentModalComponent } from './content-modal/content-modal.component';
import { ScrollContentComponent } from './scroll-content/scroll-content.component';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabBarComponent,
    TabButtonComponent,

    HeaderComponent,
    ContentModalComponent,
    ScrollContentComponent,

    animationList
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TabsComponent,
    TabComponent,
    TabBarComponent,
    TabButtonComponent,

    HeaderComponent,
    ContentModalComponent,
    ScrollContentComponent,

    animationList,
  ]
})
export class CoreModule { }
