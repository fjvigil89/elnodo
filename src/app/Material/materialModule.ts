import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule],
    exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule],
})
export class MaterialModule { }
