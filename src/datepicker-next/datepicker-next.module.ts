import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ThyDatepickerNextService } from './datepicker-next.service';
import { ThyDatepickerNextContainerComponent } from './datepicker-container.component';


import { ThyDatepickerNextCalendarHeadComponent } from './calendar/calendar.head.component';
import { ThyDatepickerNextCalendarDayComponent } from './calendar/calendar-day.component';
import { ThyDatepickerNextCalendarMonthComponent } from './calendar/calendar-month.component';
import { ThyDatepickerNextCalendarYearComponent } from './calendar/calendar-year.component';

import { ThyDatepickerNextShortcutComponent } from './shortcut/shortcut.component';

import { ThyDatepickerNextTimeComponent } from './time/time.component';
import { ThyDatepickerNextTimeAccurateComponent } from './time/time-accurate.component';
import { ThyDatepickerNextTimeSimplyComponent } from './time/time-simply.component';

import { ThyStoreModule } from '../store/module';
import { ThyDatepickerNextStore } from './datepicker-next.store';
import { ThyButtonModule } from '../button';
import { ThyDatepickerNextOperationComponent } from './operation/operation.component';

@NgModule({
    imports: [
        CommonModule,
        ThyButtonModule,
        ThyStoreModule.forFeature([ThyDatepickerNextStore]),
    ],
    exports: [
        ThyDatepickerNextContainerComponent,
    ],
    entryComponents: [
        ThyDatepickerNextContainerComponent,
        ThyDatepickerNextCalendarDayComponent,
        ThyDatepickerNextCalendarMonthComponent,
        ThyDatepickerNextCalendarYearComponent,
        ThyDatepickerNextShortcutComponent,
        ThyDatepickerNextTimeComponent,
        ThyDatepickerNextTimeAccurateComponent,
        ThyDatepickerNextTimeSimplyComponent,
        ThyDatepickerNextOperationComponent,
    ],
    declarations: [
        ThyDatepickerNextContainerComponent,
        ThyDatepickerNextCalendarHeadComponent,
        ThyDatepickerNextCalendarDayComponent,
        ThyDatepickerNextCalendarMonthComponent,
        ThyDatepickerNextCalendarYearComponent,
        ThyDatepickerNextShortcutComponent,
        ThyDatepickerNextTimeComponent,
        ThyDatepickerNextTimeAccurateComponent,
        ThyDatepickerNextTimeSimplyComponent,
        ThyDatepickerNextOperationComponent,
    ],
    providers: [
    ],
})
export class ThyDatepickerNextModule { }
