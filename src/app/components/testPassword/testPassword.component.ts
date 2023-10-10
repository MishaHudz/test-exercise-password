import { Component } from '@angular/core';
import { removeAddedClasses } from '../../helpers/removeAddedClasses';

@Component({
  selector: 'app-testPassword',
  templateUrl: './testPassword.component.html',
  styleUrls: ['./testPassword.component.css'],
})
export class TestPasswordComponent {
  onPasswordChange(event: any) {
    const sectionItems = document.querySelectorAll('.password-section');
    const inputtedString = event.target.value;

    removeAddedClasses(sectionItems);

    if (inputtedString.length < 8 && inputtedString.length !== 0) {
      sectionItems.forEach((el) => el.classList.add('password-is-easy'));
      return;
    }

    if (
      /^\d+$/.test(inputtedString) ||
      /^[a-zA-Z]+$/.test(inputtedString) ||
      /^[^a-zA-Z0-9]+$/.test(inputtedString)
    ) {
      sectionItems[0].classList.add('password-is-easy');
      return;
    }

    if (
      /^[^\d]+$/.test(inputtedString) ||
      /^[a-zA-Z\d\s]+$/.test(inputtedString) ||
      /^[^a-zA-Z]+$/.test(inputtedString)
    ) {
      sectionItems[0].classList.add('password-is-medium');
      sectionItems[1].classList.add('password-is-medium');
      return;
    }

    if (inputtedString) {
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
