import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TalentpipeFrontendSharedModule } from 'app/shared';
import {
    BenefitComponent,
    BenefitDetailComponent,
    BenefitUpdateComponent,
    BenefitDeletePopupComponent,
    BenefitDeleteDialogComponent,
    benefitRoute,
    benefitPopupRoute
} from './';

const ENTITY_STATES = [...benefitRoute, ...benefitPopupRoute];

@NgModule({
    imports: [TalentpipeFrontendSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BenefitComponent,
        BenefitDetailComponent,
        BenefitUpdateComponent,
        BenefitDeleteDialogComponent,
        BenefitDeletePopupComponent
    ],
    entryComponents: [BenefitComponent, BenefitUpdateComponent, BenefitDeleteDialogComponent, BenefitDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TalentpipeFrontendBenefitModule {}
