export interface Hero {
   name: string;
   universe: Entity;
   key$?: string;
}

export interface Entity {
   id: any;
   name: string;
}
