import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent implements OnInit {

  private animal: Animal;
  constructor(private animalService: AnimalService, private router: Router) {
    this.animal = new Animal();
  }

  public updateAnimal(): void {
    this.animalService.updateAnimal(this.animal).subscribe(res => {
      // this.animal = new Animal();
      this.router.navigate(['/animalsList']);
    })
  }

  ngOnInit() {
  }

}
