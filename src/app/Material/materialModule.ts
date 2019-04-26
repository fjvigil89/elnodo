import { MatSidenavModule, MatCardModule, MatButtonModule, MatTabsModule, MatCheckboxModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatSidenavModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatTabsModule],
    exports: [MatSidenavModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatTabsModule],
})
export class MaterialModule { }
