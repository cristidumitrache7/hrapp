import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HrappLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { HrappDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { HrappEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { HrappJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        HrappLocationMySuffixModule,
        HrappDepartmentMySuffixModule,
        HrappEmployeeMySuffixModule,
        HrappJobMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HrappEntityModule {}
