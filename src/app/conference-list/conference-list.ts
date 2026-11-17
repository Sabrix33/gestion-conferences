import { Component,EventEmitter,Output } from '@angular/core';
import { Conference } from '../conference.model';
import{ DatePipe,UpperCasePipe,NgClass, } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-conference-list',
  imports: [DatePipe,UpperCasePipe,NgClass,FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {
  @Output() conferenceSelected = new EventEmitter<Conference>();
  searchTerm: string = '';

  selectConference(conf: Conference): void {
  this.conferenceSelected.emit(conf);
}
  getRemainingPlaces(conf: Conference): number {
  return conf.maxParticipants - conf.nbParticipants;
}
register(conf: Conference): void {
  if (conf.nbParticipants < conf.maxParticipants) {
    conf.nbParticipants++;
  }
}
get filteredConferences(): Conference[] {
  const term = this.searchTerm.trim().toLowerCase();

  return this.conferences.filter(conf =>
    conf.title.toLowerCase().includes(term)
  );
}

getButtonClass(conf: Conference): string {
  const places = this.getRemainingPlaces(conf);

  if (places === 0) {
    return 'full';
  }

  if (places < 10) {
    return 'few';
  }

  return 'available';
}

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Conférence sur Angular 21.',
      date: new Date('2027-11-15'),
      place: 'Tunis',
      maxParticipants: 30,
      nbParticipants: 5
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les Signals Angular.',
      date: new Date('2027-11-30'),
      place: 'Ariana',
      maxParticipants: 10,
      nbParticipants: 4
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Conférence sur le développement Web.',
      date: new Date('2027-11-20'),
      place: 'Sousse',
      maxParticipants: 25,
      nbParticipants: 25
    }
  ];

}