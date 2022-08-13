import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-delete-animal',
  templateUrl: './delete-animal.component.html',
  styleUrls: ['./delete-animal.component.css']
})
export class DeleteAnimalComponent implements OnInit {

  private animal: Animal;
  constructor(private animalService: AnimalService, private router: Router) {
    this.animal = new Animal();
  }

  public deleteAnimal(id: number): void {
    this.animalService.deleteAnimal(id).subscribe(res => {
      this.router.navigate(['/animalsList']);
    });

  }


  ngOnInit() {
  }

}


