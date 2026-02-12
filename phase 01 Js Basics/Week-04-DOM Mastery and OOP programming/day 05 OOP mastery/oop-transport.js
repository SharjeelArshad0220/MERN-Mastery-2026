// ===== BASE CLASS STRUCTURE =====
class Vehicle {
    constructor(type, capacity, farePerKm) {
        // TODO: Initialize common properties
        this.type = type;
        this.capacity = capacity;
        this.farePerKm = farePerKm;
        this.passengers = [];
        this.totalEarnings = 0;
        this.trips = [];
        this.onTrip=false;
    }

    addPassenger(name, destination, distance) {
        // TODO: Check capacity, calculate fare, update earnings
        if (this.passengers.length < this.capacity) {
            const passenger = { passengerName: name, passengerDestination: destination, passengerDistance: distance };
            this.passengers.push(passenger);
            this.totalEarnings+=this.calculateFare(distance);
        }
        else{
            console.warn("Capacity overflow!!!");
        }
    }

    calculateFare(distance) {
        // TODO: Base fare calculation
        return (distance*this.farePerKm);
    }
    get earnings(){
        return this.totalEarnings;
    }
     startTrip(whereTo){
        const available=this.onTrip?false:true;
        if (available) {
            this.onTrip = !this.onTrip;
            const trip={destination:whereTo,status : "not completed"};
            this.trips.push(trip);
            console.log(`Trip started for ${whereTo}`);
        } else {
            console.log("Vehicle is already on trip.");
        }
    }
     endTrip(whereTo){
        if (this.onTrip) {
            this.trips.forEach((trip)=>{
            if (trip.destination===whereTo && trip.status==="not completed") {
                trip.status="completed";
                return;
            }
            else{
                console.log("Trip is not on boarding.");
            }
        });
        }
        else{
            console.log("vehicle is not on trip.");
        }
    }
     cancelTrip(whereTo){
                if (this.onTrip) {
            this.trips.forEach((trip)=>{
            if (trip.destination===whereTo && (trip.status==="not completed" || !trip.status==="completed")) {
                trip.status="cancelled";
                return;
            }
            else{
                console.log("Trip is not on boarding.");
            }
        });
        }
        else{
            console.log("vehicle is not on trip.");
        }
    }

    // TODO: Add other necessary methods
}
// ===== SPECIALIZED VEHICLES =====
class Rickshaw extends Vehicle {
    constructor() {
        // TODO: Call super with appropriate values
        super("Rickshaw",3,20);
        // Rickshaw: 3 capacity, Rs.20 per km
    }
    // TODO: Override calculateFare for minimum fare
    // Short distance (<2km): Rs.50 minimum
    calculateFare(distance){
        let fare=super.calculateFare(distance);
        if (distance<2) {
            fare=50;
        }
        return fare;
    }
}

class Careem extends Vehicle {
    constructor(haveAc,isPremium) {
        // TODO: Call super with appropriate values
        // Careem: 4 capacity, Rs.50 per km
        super("Careem",4,50);
        this.driver='';
        this.haveAc=haveAc;
        this.isPremium=isPremium;
        this.driverRating=0;
    }

    // TODO: Add driver assignment and rating system
     Driver(driverName){
        this.driver=driverName;
    }

     rate(rating){
        this.driverRating +=rating;
    }
    calculateFare(distance){
        let fare=super.calculateFare(distance);
        if (fare<200 && this.haveAc) {
            if (this.isPremium) {
                fare +=500;
            }
            else{
                fare+=250;
            }
        }
        return fare;
    }
}

class MetroBus extends Vehicle {
    constructor(routeNumber) {
        // TODO: Call super with appropriate values
        super("MetroBus",50,5);
        this.routeNumber=routeNumber;
        // MetroBus: 50 capacity, Rs.5 per km
    }
    calculateFare(distance){
        
        return 30;
    }
    // TODO: Override calculateFare for flat rate
    // Flat rate: Rs.30 regardless of distance
}
// ===== MANAGEMENT SYSTEM =====
class TransportSystem {
    constructor(cityName) {
        // TODO: Initialize with vehicles array and revenue tracking
        this.vehicles=[];
        this.totalRevenue=0;
        this.cityName=cityName;
    }

    registerVehicle(vehicle) {
        // TODO: Add vehicle to system
        this.vehicles.push(vehicle);
        console.log(`${vehicle.type} registered in ${this.cityName}`);
    }

    findAvailableVehicle(type) {
        // TODO: Return first available vehicle of given type
        return this.vehicles.find(vehicle=>vehicle.type===type && vehicle.passengers.length<vehicle.capacity);
    }

    bookRide(passengerName, destination, distance, vehicleType) {
        // TODO: Find vehicle, add passenger, update revenue
        const vehicle=this.findAvailableVehicle(vehicleType);
        if (vehicle) {
            vehicle.addPassenger(passengerName, destination, distance);
            this.totalRevenue+=vehicle.calculateFare(distance);
            console.log(`${passengerName} booked ${vehicleType} to ${destination}`);
        }
        else{
            console.log("No available vehicle found.");
        }
    }

    getDailyReport() {
        // TODO: Generate formatted report
        console.log(`\n===== ${this.cityName} Transport Report =====`);
        this.vehicles.forEach(vehicle=>{
            console.log(`${vehicle.type}: ${vehicle.passengers.length} passengers | Rs.${vehicle.totalEarnings} earned`);
        });
        console.log(`Total City Revenue: Rs.${this.totalRevenue}`);
        console.log('='.repeat(40));
    }
}
// Test your implementation with this simulation
function runSimulation() {
    const lahore = new TransportSystem('Lahore');

    // Create vehicles
    // TODO: Create 2 rickshaws, 1 careem, 1 metro bus
    const rickshaw1=new Rickshaw();
    const rickshaw2=new Rickshaw();
    const careem1=new Careem(true,true);
    const metro1=new MetroBus(1);
    lahore.registerVehicle(rickshaw1);
    lahore.registerVehicle(rickshaw2);
    lahore.registerVehicle(careem1);
    lahore.registerVehicle(metro1);


    // Morning rush hour bookings
    // TODO: Simulate 5-7 bookings
    lahore.bookRide('Ali', 'Mall Road', 5, 'Rickshaw');
    lahore.bookRide('Sara', 'DHA', 10, 'Careem');
    lahore.bookRide('Hassan', 'Johar Town', 1.5, 'Rickshaw');
    lahore.bookRide('Fatima', 'Liberty', 15, 'MetroBus');
    lahore.bookRide('Ahmed', 'Gulberg', 8, 'Careem');
    lahore.bookRide('Fatima', 'Liberty', 15, 'MetroBus');
    lahore.bookRide('Hassan', 'Johar Town', 1.5, 'Rickshaw');
    lahore.bookRide('Fatima', 'Liberty', 15, 'MetroBus');
    // Afternoon bookings  
    // TODO: Simulate 3-4 bookings
    lahore.bookRide('Ali', 'Mall Road', 5, 'Rickshaw');
    lahore.bookRide('Sara', 'DHA', 10, 'Careem');
    lahore.bookRide('Hassan', 'Johar Town', 1.5, 'Rickshaw');
    lahore.bookRide('Fatima', 'Liberty', 15, 'MetroBus');
    lahore.bookRide('Ahmed', 'Gulberg', 8, 'Careem');
    lahore.bookRide('Fatima', 'Liberty', 15, 'MetroBus');
    lahore.bookRide('Hassan', 'Johar Town', 1.5, 'Rickshaw');
    lahore.bookRide('Fatima', 'Liberty', 15, 'MetroBus');
    // Evening bookings
    // TODO: Simulate 4-5 bookings
    lahore.bookRide('Ali', 'Mall Road', 5, 'Rickshaw');
    lahore.bookRide('Sara', 'DHA', 10, 'Careem');
    lahore.bookRide('Hassan', 'Johar Town', 1.5, 'Rickshaw');
    lahore.bookRide('Fatima', 'Liberty', 15, 'MetroBus');
    lahore.bookRide('Ahmed', 'Gulberg', 8, 'Careem');
    lahore.bookRide('Fatima', 'Liberty', 15, 'MetroBus');
    lahore.bookRide('Hassan', 'Johar Town', 1.5, 'Rickshaw');
    lahore.bookRide('Fatima', 'Liberty', 15, 'MetroBus');
    // Generate report
    lahore.getDailyReport();
}
runSimulation();