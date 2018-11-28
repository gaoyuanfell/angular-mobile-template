import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { CommonModule } from '@angular/common';
import { animationList } from './prepare-route';
import { HeaderComponent } from './header/header.component';
import { TabModalComponent } from './tab-modal/tab-modal.component';
import { TabScrollComponent } from './tab-scroll/tab-scroll.component';
import { TabContentComponent } from './tab-content/tab-content.component';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabBarComponent,
    TabButtonComponent,
    TabContentComponent,
    TabModalComponent,
    TabScrollComponent,

    HeaderComponent,
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
    TabContentComponent,
    TabModalComponent,
    TabScrollComponent,

    HeaderComponent,
    animationList,
  ]
})
export class CoreModule { }
