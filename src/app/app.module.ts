import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoContainerComponent } from './info-container/info-container.component';
import { TeamListContainerComponent } from './team-list-container/team-list-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { AddNewMemberDialogComponent } from './add-new-member-dialog/add-new-member-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AddNewTeamDialogComponent } from './add-new-team-dialog/add-new-team-dialog.component';
import { TeamListItemComponent } from './team-list-item/team-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTeamDialogComponent } from './edit-team-dialog/edit-team-dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoContainerComponent,
    TeamListContainerComponent,
    AddNewMemberDialogComponent,
    AddNewTeamDialogComponent,
    TeamListItemComponent,
    EditTeamDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddNewMemberDialogComponent, AddNewTeamDialogComponent, EditTeamDialogComponent]
})
export class AppModule { }
