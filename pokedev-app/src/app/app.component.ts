import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	images: any = [];
	constructor(private http: HttpClient) {}

  	async ngOnInit() {
		for(let i = 1; i <= 100; i++) {
			await this.http.get("https://pokeapi.co/api/v2/pokemon/" + i).toPromise().then((resp: any) => {
				this.images.push(resp.sprites.front_default);
			});
		}
  	}

}
