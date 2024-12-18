import {LiveAnnouncer} from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ChangeDetectionStrategy, Component, inject, input, OnInit, output, signal} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { People } from '../../../_models/modals';


@Component({
  selector: 'material-input-with-chips',
  imports: [MatFormFieldModule, MatChipsModule, MatIconModule],
  templateUrl: './materialInputWithChips.component.html',
  styleUrl: './materialInputWithChips.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialInputWithChipsComponent implements OnInit{
  classInput = input<string|null>(null);
  titleLabel = input<string|null>(null);
  members = input<People[]>([]);
  emitterMembers = output<People[]>();

  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly peoples = signal<People[]>([]);
  readonly announcer = inject(LiveAnnouncer);


  ngOnInit(): void {

    if(this.members()){
      this.members().forEach(value => {
        this.peoples.update(peoples => [...peoples, {name:value.name}]);
      });
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add peoples
    if (value) {
      this.peoples.update(peoples => [...peoples, {name: value}]);
      this.emitterMembers.emit(this.peoples());
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(people: People): void {
    this.peoples.update(peoples => {
      const index = peoples.indexOf(people);
      if (index < 0) {
        return peoples;
      }

      peoples.splice(index, 1);
      this.announcer.announce(`Removed ${people.name}`);
      this.emitterMembers.emit(this.peoples());
      return [...peoples];
    });
  }

  edit(people: People, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove people if it no longer has a name
    if (!value) {
      this.remove(people);
      return;
    }

    // Edit existing fruit
    this.peoples.update(peoples => {
      const index = peoples.indexOf(people);
      if (index >= 0) {
        peoples[index].name = value;
        return [...peoples];
      }
      return peoples;
    });
    this.emitterMembers.emit(this.peoples());
  }
}
