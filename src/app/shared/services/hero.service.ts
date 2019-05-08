import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, QuerySnapshot } from '@angular/fire/firestore';
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
      private afs: AngularFirestore
   ) {
      this.initSourceHero();
   }

   getHeros() {
      this.getHerosFromServer();
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

   queryHerosByName(query: string) {
      let queryObs = from(this.herosCollection.ref.where('name', '==', query).get());
      queryObs.pipe(
         map((querySnapshot: QuerySnapshot<Hero>): Hero[] => {
            return this.fillHeros(querySnapshot);
         })
      ).subscribe((heros: Hero[]) => {
         this.herosSource.next(heros);
      });
   }

   private initSourceHero(): void {
      if (!this.heroObs) {
         this.herosCollection = this.afs.collection<Hero>('heros');
         this.heroObs = this.herosCollection.snapshotChanges();
      }
   }
   
   private getHerosFromServer() {
      this.herosCollection = this.afs.collection<Hero>('heros');
      this.herosCollection
         .get()
         .pipe(
            map((querySnapshot: QuerySnapshot<Hero>): Hero[] => {
               return this.fillHeros(querySnapshot);
            })
         ).subscribe((heros: Hero[]) => {
            this.herosSource.next(heros);
         });
   }

   private fillHeros(querySnapshot: QuerySnapshot<Hero>): Hero[] {
      return querySnapshot.docs.map(doc => {
         const data: Hero = doc.data() as Hero;
         return { key$: doc.id, ...data };
      });
   }

}

