import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { CommonModule } from '@angular/common';
import { animationList } from './prepare-route';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabBarComponent,
    TabButtonComponent,

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

    animationList,
  ]
})
export class CoreModule { }
