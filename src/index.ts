class User {
    name: string;
    email: string;
    password: string;
    salary: number;

    constructor(
        name: string,
        email: string,
        password: string,
        salary: number,
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.salary = salary;
    }
    
}

class UserDataBase {
   private usersDb: User[] = []


    add(user: User): void {
        this.usersDb.push(user);
    }

    findByEmail(email: string): User | undefined {
        return this.usersDb.find(user => user.email === email)
    }

    getAll() {
        return [...this.usersDb]
    }
}


class UserService {
    constructor(private database: UserDataBase) {}

    createUser(name: string, email: string, password: string, salary: number) {
        const newUser: User = new User(name, email, password, salary);
        this.database.add(newUser);
        return newUser;
    }
}


class AuthService {
    constructor(private database: UserDataBase) {}

    login(email: string, password: string): boolean {
        const user = this.database.findByEmail(email);

        if(!user || user.password !== password) {
            console.log('Invalid credentials')
            return false;
        }

        console.log(`Welcome  ${user.name}`)
        return true;
    }
}

class EmailService {
    sendWelcomeEmail(user: User): void {
        console.log(`Welcome email sent to ${user.email}`)
    }
}


class ReportService {
    constructor(private database: UserDataBase) {};

    generateReport(): void {
        const allUsers = this.database.getAll();

        console.log('=== General Report ====')

        for(const user of allUsers) {
            console.log(`Name: ${user.name}`)
            console.log(`Email: ${user.email}`)
        }
    }
}

class SalaryService {
    calculateSalary(user: User, hours: number): number {
        return user.salary * hours;
    }
}


class Application {
    start(): void {
        const database = new UserDataBase();

        const userService = new UserService(database);
        const authService = new AuthService(database);
        const emailService = new EmailService();
        const reportService = new ReportService(database);
        const salaryService = new SalaryService();

        const user = userService.createUser(
            'Felipe',
            'felipe@example.com',
            '123456',
            26
        );

        emailService.sendWelcomeEmail(user);
        authService.login('felipe@example.com', '123456');
        reportService.generateReport();

        const totalSalary = salaryService.calculateSalary(user, 160);
        console.log(`Calculate salary: ${totalSalary}`);
    }
}

const app = new Application();
app.start();