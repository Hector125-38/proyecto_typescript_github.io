(()=>{
// Clase Manager
class Manager {
    name: string;
    id: number;
    phoneNo: number;
    location: string;

    constructor(name: string, id: number, phoneNo: number, location: string) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
        this.location = location;
    }

    purchaseInventory(): void {
        // lógica para comprar inventario
    }

    recordComplaints(): void {
        // lógica para registrar quejas
    }

    manageStaff(): void {
        // lógica para gestionar el personal
    }
}

// Clase Inventory
class Inventory {
    type: string;
    status: string;

    constructor(type: string, status: string) {
        this.type = type;
        this.status = status;
    }
}

// Clase Guest
class Guest {
    name: string;
    id: number;
    phoneNo: number;
    address: string;
    roomNo: number;

    constructor(name: string, id: number, phoneNo: number, address: string, roomNo: number) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
        this.address = address;
        this.roomNo = roomNo;
    }

    checkIn(): void {
        // lógica para hacer check-in
    }

    checkOut(): void {
        // lógica para hacer check-out
    }

    payBill(): void {
        // lógica para pagar la cuenta
    }

    orderFood(): void {
        // lógica para ordenar comida
    }

    submitFeedback(): void {
        // lógica para enviar retroalimentación
    }
}

// Clase Chef
class Chef {
    name: string;
    id: number;
    location: string;

    constructor(name: string, id: number, location: string) {
        this.name = name;
        this.id = id;
        this.location = location;
    }

    takeOrders(): void {
        // lógica para tomar órdenes
    }
}

// Clase Room
class Room {
    roomNo: number;
    location: string;

    constructor(roomNo: number, location: string) {
        this.roomNo = roomNo;
        this.location = location;
    }
}

// Clase Receptionist
class Receptionist {
    name: string;
    id: number;
    phoneNo: number;
    location: string;

    constructor(name: string, id: number, phoneNo: number, location: string) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
        this.location = location;
    }

    checkRoomAvailability(): void {
        // lógica para comprobar disponibilidad de habitaciones
    }

    bookRoom(): void {
        // lógica para reservar una habitación
    }

    generateBill(): void {
        // lógica para generar la cuenta
    }

    acceptCustomerFeedback(): void {
        // lógica para aceptar retroalimentación del cliente
    }
}

// Clase Bill
class Bill {
    billNo: number;
    guestName: string;

    constructor(billNo: number, guestName: string) {
        this.billNo = billNo;
        this.guestName = guestName;
    }
}

// Clase Housekeeping
class Housekeeping {
    name: string;
    id: number;
    location: string;

    constructor(name: string, id: number, location: string) {
        this.name = name;
        this.id = id;
        this.location = location;
    }

    cleanRoom(): void {
        // lógica para limpiar la habitación
    }
}

// Clase FoodItem
class FoodItem {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}



})()