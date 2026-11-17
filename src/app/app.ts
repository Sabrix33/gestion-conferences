import { Component } from '@angular/core';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { ProfileUser } from './profile-user/profile-user';
import { FriendsList } from './friends-list/friends-list';
import { NotificationList } from './notification-list/notification-list';
import { Footer } from './footer/footer';
import { ConferenceList } from './conference-list/conference-list';
import { ConferenceDetails } from './conference-details/conference-details';
import { Conference } from './conference.model';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Navbar,
    ProfileUser,
    FriendsList,
    NotificationList,
    Footer,
    ConferenceList,
    ConferenceDetails
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedConference: Conference | null = null;

onConferenceSelected(conf: Conference): void {
  this.selectedConference = conf;
}
}