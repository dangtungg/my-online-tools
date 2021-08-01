import { Component, OnInit } from '@angular/core';
import { UsState } from 'src/app/_model/us-state';
import { UsStatesService } from 'src/app/_service/us-states.service';

@Component({
  selector: 'app-us-states',
  templateUrl: './us-states.component.html',
  styleUrls: ['./us-states.component.scss']
})
export class UsStatesComponent implements OnInit {

  postalCode: string = '';
  usStates: UsState[] = [];
  searchStates: UsState[] = [];

  constructor(
    private usStateService: UsStatesService
  ) { }

  ngOnInit(): void {
    this.usStateService.getUsState().subscribe(
      (usStatesResponse: UsState[]) => {
        this.usStates = { ...usStatesResponse };
      }
    );
  }

  onSubmit() {
    if (!this.postalCode) {
      console.log("Not Found Postal!");
      return;
    }

    this.searchStates = Object.values(this.usStates).filter(s => s.code === this.postalCode);
    console.log("Found", this.searchStates);
  }

  reset() {
    this.searchStates = [];
    console.log("Clear all!");
  }

}
