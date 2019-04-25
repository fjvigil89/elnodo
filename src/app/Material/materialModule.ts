import { MatButtonModule, MatTabsModule, MatCheckboxModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatTabsModule],
    exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatTabsModule],
})
export class MaterialModule { }
