import { Component, Input } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Conference } from '../conference.model';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css'
})
export class ConferenceDetails {

  @Input() conference: Conference | null = null;

}