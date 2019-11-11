import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamService } from '../team.service';
import { AddNewMemberDialogComponent } from '../add-new-member-dialog/add-new-member-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-team-list-container',
  templateUrl: './team-list-container.component.html',
  styleUrls: ['./team-list-container.component.scss']
})
export class TeamListContainerComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService, public addMemberDialog: MatDialog) {}

  openAddPersonDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "400px";
    this.addMemberDialog.open(AddNewMemberDialogComponent, dialogConfig);
  }

  ngOnInit() {
    this.teams = this.teamService.teams;
  }

  setSelectedTeam(team: Team) {
    this.teamService.selectedTeam.next(team);
  }

}
