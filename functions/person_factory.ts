import { Client, Employee } from "./person";

export class PersonFactory {
    getPerson(type: string | null){
        if (type == null) {
            return null;
        }
        switch (type.toLowerCase()) {
            case "employee":
              return new Employee("John Doe", "john.doe@example.com", new Date("1990-01-01"), 50000);
            case "client":
              return new Client("Jane Doe", "jane.doe@example.com", new Date("1992-02-02"), "123 Main St");
            default:
              return null;
        }
    }
}
