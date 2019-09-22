import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/auth/shared/services/auth/auth.service';

@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

    @Output()
    logout = new EventEmitter<any>();

    @Input()
    user: User

    constructor() { }

    ngOnInit(): void { }

    logoutUser() {
        this.logout.emit();
    }
}
