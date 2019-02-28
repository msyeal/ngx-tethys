import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyLayoutComponent } from './layout.component';
import { ThyHeaderComponent } from './header.component';
import { ThyContentComponent } from './content.component';
import { ThySidebarComponent } from './sidebar.component';
import { ThyContentSectionComponent } from './content-section.component';
import { ThyContentMainComponent } from './content-main.component';
import { ThyButtonModule } from '../button/button.module';
import { ThyInputModule } from '../input/module';

@NgModule({
    declarations: [
        ThyLayoutComponent,
        ThyHeaderComponent,
        ThyContentComponent,
        ThySidebarComponent,
        ThyContentSectionComponent,
        ThyContentMainComponent
    ],
    imports: [
        CommonModule,
        ThyButtonModule,
        ThyInputModule
    ],
    exports: [
        ThyLayoutComponent,
        ThyHeaderComponent,
        ThyContentComponent,
        ThySidebarComponent,
        ThyContentSectionComponent,
        ThyContentMainComponent
    ]
})
export class ThyLayoutModule {

}
