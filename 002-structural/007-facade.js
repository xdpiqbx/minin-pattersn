// Для создания более простого интерфейса для для взаимодействия
// пример jQuery

// Жалобы )
class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {} // Буду реализовывать у наследников

  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}

// Теперь сам фасад
// Может добавлять метаданные, проверки, валидации
class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === "service") {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaints();
    }

    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();

console.log(registry.register("Vladilen", "service", "недоступен"));
console.log(registry.register("Elena", "product", "вылазит ошибка"));
