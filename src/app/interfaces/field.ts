export interface Field {
  id: number
  company_id: number;
  type: 'FutSala' | 'Fut5' | 'Fut7' | 'Fut11';
  location_lat: number;
  location_lng: number;
  address : string;
  is_public : boolean;
  width : number;
  length : number;
  opening_time : string;
  closing_time : string;
}
