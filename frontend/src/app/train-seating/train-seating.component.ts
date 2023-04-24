import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-train-seating',
  templateUrl: './train-seating.component.html',
  styleUrls: ['./train-seating.component.css']
})

export class TrainSeatingComponent   {
  numbers: number[][];
  available : any;

  seats: string[] = ['1A', '2A', '3A', '4A', '5A', '6A', '7A', '8A', '9A', '10A',
  '1B', '2B', '3B', '4B', '5B', '6B', '7B', '8B', '9B', '10B'];

  constructor(private http: HttpClient) { 
  const range = Array.from({ length: 80 }, (_, i) => i + 1);
    this.numbers = this.chunkArray(range, 7);
  }
  
  private chunkArray(arr: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    console.log(chunks)
    return chunks;
  }

  ngOnInit() {
    this.http.get('https://backend-train-system-ew31.vercel.app/api/v1/user').subscribe(data => {
      this.available=data
      console.log(this.available)
});
  }

  formData = {
    name: '',
    seats: 0
  };
  reserveSeats(numSeats: number){
    let reservedSeats = [];
   const seatLayout = this.chunkArray(this.available, 7);
    // Loop through the rows of the seat layout
    for (let i = 0; i < seatLayout.length; i++) {
      let row = seatLayout[i];
  
      // Check if the row has enough available seats to accommodate the reservation
      let numAvailableSeats = row.filter(seat => seat === 1).length;
      if (numAvailableSeats >= numSeats) {
        // Reserve seats in the same row
        for (let j = 0; j < row.length && numSeats > 0; j++) {
          if (row[j] === 1) {
            reservedSeats.push(i * 7 + j + 1);
            row[j] = 0; // Mark the seat as reserved
            numSeats--;
          }
        }
  
        // If all seats are reserved, return the reserved seat numbers
        if (numSeats === 0) {
          return reservedSeats;
        }
      }
    }
  
    // If there are not enough available seats in one row, reserve nearby seats
    for (let i = 0; i < seatLayout.length; i++) {
      let row = seatLayout[i];
  
      for (let j = 0; j < row.length && numSeats > 0; j++) {
        if (row[j] === 1) {
          reservedSeats.push(i * 7 + j + 1);
          row[j] = 0; // Mark the seat as reserved
          numSeats--;
        }
      }
  
      // If all seats are reserved, return the reserved seat numbers
      if (numSeats === 0) {
        return reservedSeats;
      }
    }
  
    // If there are no available seats left, return an empty array
    return reservedSeats
  }  

  onSubmit() {
    if((this.formData.seats)>7){
      this.formData.seats=7
    }
    const numbers=this.reserveSeats(this.formData.seats)
    console.log(numbers)
    this.http.post('https://backend-train-system-ew31.vercel.app/api/v1/user', {"name":this.formData.name,"seats":this.formData.seats,"numbers":numbers}).subscribe(response => {
      console.log(response);
      alert(`Booked Seats : ${numbers}`)
    window.location.reload();

    });
  }
  

}
