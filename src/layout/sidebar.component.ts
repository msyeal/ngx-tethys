import { Component, HostBinding, Host, Optional, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { ThyLayoutComponent } from './layout.component';
import { inputValueToBoolean } from '../util/helpers';
// import { ThyButtonIconComponent } from '../button/button-icon.component';
// import { ThyInputSearchComponent } from '../input/input-search.component';
@Component({
    selector: 'thy-sidebar',
    preserveWhitespaces: false,
    // template: `
    //     <ng-content></ng-content>
    // `
    templateUrl: './sidebar.component.html'
})
export class ThySidebarComponent implements OnInit {
    @ContentChild('sidebarContent')
    public sidebarContentTemplateRef: TemplateRef<any>;

    @ContentChild(TemplateRef)
    public headerTemplate: TemplateRef<any>;

    public isTemplateRef: boolean;

    @HostBinding('class.thy-layout-sidebar') thyLayoutSidebarClass = true;

    @HostBinding('class.thy-layout-sidebar--clear-border-right') thyLayoutSidebarClearBorderRightClass = false;

    @HostBinding('style.width.px') thyLayoutSidebarWidth: number;

    @Input() thyTitle: string;

    @Input() thyIcon: string;

    @Input() thyPlaceHolder: any;

    @Input('thyWidth')
    set thyWidth(value: any) {
        this.thyLayoutSidebarWidth = value;
    }

    @Input('thyHasBorderRight')
    set thyHasBorderRight(value: string) {
        this.thyLayoutSidebarClearBorderRightClass = !inputValueToBoolean(value);
    }

    @Output() thyAddEdit: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        @Optional() @Host() private thyLayoutComponent: ThyLayoutComponent,
        // private thyButtonIconComponent: ThyButtonIconComponent,
        // private thyInputSearchComponent: ThyInputSearchComponent
    ) {}

    ngOnInit() {
        if (this.thyLayoutComponent) {
            this.thyLayoutComponent.hasSidebar = true;
        }

        this.isTemplateRef = this.headerTemplate instanceof TemplateRef;
    }

    addModel(event?: Event) {
        this.thyAddEdit.emit();
    }
}
