import { Component } from '@angular/core';
import { removeAddedClasses } from '../../helpers/removeAddedClasses';

@Component({
  selector: 'app-testPassword',
  templateUrl: './testPassword.component.html',
  styleUrls: ['./testPassword.component.css'],
})
export class TestPasswordComponent {
  passwordString = '';

  onPasswordChange(event: any) {
    const sectionItems = document.querySelectorAll('.password-section');
    this.passwordString = event.target.value;

    if (
      !/^[a-zA-Z0-9!@#$%^&*()_+{}|:;<>,.?~\-=/\[\]]*$/.test(this.passwordString)
    ) {
      this.passwordString = this.passwordString.slice(
        0,
        this.passwordString.length - 1
      );

      event.target.value = this.passwordString;
    }

    removeAddedClasses(sectionItems);

    if (this.passwordString.length < 8 && this.passwordString.length !== 0) {
      sectionItems.forEach((el) => el.classList.add('password-is-easy'));
      return;
    }

    if (
      /^\d+$/.test(this.passwordString) ||
      /^[a-zA-Z]+$/.test(this.passwordString) ||
      /^[^a-zA-Z0-9]+$/.test(this.passwordString)
    ) {
      sectionItems[0].classList.add('password-is-easy');
      return;
    }

    if (
      /^[^\d]+$/.test(this.passwordString) ||
      /^[a-zA-Z\d\s]+$/.test(this.passwordString) ||
      /^[^a-zA-Z]+$/.test(this.passwordString)
    ) {
      sectionItems[0].classList.add('password-is-medium');
      sectionItems[1].classList.add('password-is-medium');
      return;
    }

    if (this.passwordString) {
      sectionItems[0].classList.add('password-is-strong');
      sectionItems[1].classList.add('password-is-strong');
      sectionItems[2].classList.add('password-is-strong');
    }
  }

  onShowPasswordButtonMouseDown() {
    const passwordInput = document.querySelector(
      '.input-password'
    ) as HTMLInputElement;

    passwordInput.type = 'text';
  }

  onShowPasswordButtonMouseUp() {
    const passwordInput = document.querySelector(
      '.input-password'
    ) as HTMLInputElement;

    passwordInput.type = 'password';
  }
}
