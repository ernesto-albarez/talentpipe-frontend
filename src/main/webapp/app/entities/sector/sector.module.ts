import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TalentpipeFrontendSharedModule } from 'app/shared';
import {
    SectorComponent,
    SectorDetailComponent,
    SectorUpdateComponent,
    SectorDeletePopupComponent,
    SectorDeleteDialogComponent,
    sectorRoute,
    sectorPopupRoute
} from './';

const ENTITY_STATES = [...sectorRoute, ...sectorPopupRoute];

@NgModule({
    imports: [TalentpipeFrontendSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [SectorComponent, SectorDetailComponent, SectorUpdateComponent, SectorDeleteDialogComponent, SectorDeletePopupComponent],
    entryComponents: [SectorComponent, SectorUpdateComponent, SectorDeleteDialogComponent, SectorDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TalentpipeFrontendSectorModule {}
