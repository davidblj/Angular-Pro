import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth/auth.service'; 
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    error: string;
    
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void { }

    async registerUser(event: FormGroup) {
        
        const { email, password } = event.value;
        try {
            await this.authService.createUser(email, password);
            this.router.navigate(['/']);
        } catch (err) {
            this.error = err.message
        }        
    }
}
