import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { removeAddedClasses } from '../../helpers/removeAddedClasses';
import { addClassesForSomeElementsOfList } from 'src/app/helpers/addClassesForSomeElementsOfList';
import {
  checkingCyrillicIncluded,
  passwordIsEasy,
  passwordIsMedium,
} from 'src/app/helpers/passwordTesters';

@Component({
  selector: 'app-testPassword',
  templateUrl: './testPassword.component.html',
  styleUrls: ['./testPassword.component.css'],
})
export class TestPasswordComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  @ViewChildren('passwordSection') ItemsList!: QueryList<ElementRef>;
  passwordString = '';

  onPasswordChange(event: Event) {
    const sectionItems = this.ItemsList.toArray().map((el) => el.nativeElement);
    this.passwordString = (event.target as HTMLInputElement).value;

    if (checkingCyrillicIncluded(this.passwordString)) {
      this.passwordString = this.passwordString.slice(
        0,
        this.passwordString.length - 1
      );

      (event.target as HTMLInputElement).value = this.passwordString;
    }

    removeAddedClasses(sectionItems);

    if (this.passwordString.length < 8 && this.passwordString.length !== 0) {
      addClassesForSomeElementsOfList(sectionItems, 'password-is-easy', 3);
      return;
    }

    if (passwordIsEasy(this.passwordString)) {
      addClassesForSomeElementsOfList(sectionItems, 'password-is-easy', 1);
      return;
    }

    if (passwordIsMedium(this.passwordString)) {
      addClassesForSomeElementsOfList(sectionItems, 'password-is-medium', 2);
      return;
    }

    if (this.passwordString) {
      addClassesForSomeElementsOfList(sectionItems, 'password-is-strong', 3);
    }
  }

  onShowPasswordButtonMouseDown() {
    this.passwordInput.nativeElement.type = 'text';
  }

  onShowPasswordButtonMouseUp() {
    this.passwordInput.nativeElement.type = 'password';
  }
}
