import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Hero } from '../interfaces/hero.interface';
import { ApiService } from './api.service';
import { HEROES_API_REST } from '../constants/url';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { from } from 'rxjs';

@Injectable()
export class HeroService {
   private heroObs: Observable<DocumentChangeAction<Hero>[]>;
   private herosCollection: AngularFirestoreCollection<Hero>;
   private herosSource: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);
   public heros$ = this.herosSource.asObservable();

   constructor(
      private apiService: ApiService,
      private afs: AngularFirestore
   ) {
      this.initSourceHero();
   }

   getHeros(): void {
      this.heroObs.pipe(
         map((actions): Hero[] => {
            return actions.map(doc => {
               const data: Hero = doc.payload.doc.data() as Hero;
               return { key$: doc.payload.doc.id, ...data };
            });
         })
      ).subscribe((response) => {
         this.herosSource.next(response);
      });
   }

   getHero(key$: string) {
      return this.herosCollection.doc(key$).get()
         .pipe(
            map(response => response.data())
         );
   }

   addHero(hero: Hero): Observable<any> {
      return from(this.herosCollection.add(hero));
   }

   updateHero(hero: Hero, key$: string): Observable<any> {
      return from(this.herosCollection.doc(key$).update(hero));
   }


   deleteHero(key$: string) {
      return from(this.herosCollection.doc(key$).delete());
   }

   private initSourceHero(): void {
      if (!this.heroObs) {
         this.herosCollection = this.afs.collection<Hero>('heros');
         this.heroObs = this.herosCollection.snapshotChanges();
      }
   }

}

