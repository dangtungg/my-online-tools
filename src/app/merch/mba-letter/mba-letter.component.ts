import { Component, OnInit } from '@angular/core';
import { MBALetter } from 'src/app/_model/mba-letter';
import { MbaLetterService } from 'src/app/_service/mba-letter.service';

@Component({
  selector: 'app-mba-letter',
  templateUrl: './mba-letter.component.html',
  styleUrls: ['./mba-letter.component.scss']
})
export class MbaLetterComponent implements OnInit {

  mbaLetters = this.mbaLetterService.getMBALetter();

  constructor(
    private mbaLetterService: MbaLetterService
  ) { }

  ngOnInit(): void {}

}
