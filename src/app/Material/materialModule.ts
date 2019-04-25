import { MatCardModule, MatButtonModule, MatTabsModule, MatCheckboxModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatCardModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatTabsModule],
    exports: [MatCardModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatTabsModule],
})
export class MaterialModule { }
