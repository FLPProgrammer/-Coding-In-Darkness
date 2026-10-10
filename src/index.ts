/*class User {
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
app.start();*/


class Book {
    title: string;
    author: string;
    isbn: string;
    available: boolean;

    constructor(
        title: string,
        author: string,
        isbn: string,
        available: boolean,
    )
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = available
    }
}

class User {
    id: number;
    name: string;


    constructor(
        id: number,
        name: string,
    )
    {
        this.id = id;
        this.name = name;
    }
}

class Loan {
   book: Book;
   user: User;

   loanDate: Date;
   dueDate: Date;
   returnDate: Date | null;

  constructor(
    book: Book,
    user: User,
    loanDate: Date,
    dueDate: Date,
  )
  {
    this.book = book;
    this.user = user;
    this.loanDate = loanDate;
    this.dueDate = dueDate;
    this.returnDate = null;
  }
}

class Library { 
    allBooks: Book[] = [];
    allUsers: User[] = [];
    allLoans: Loan[] = [];

    addNewBook(book: Book): string {
        if(this.allBooks.some((item) => item.isbn === book.isbn)) {
            throw new Error('This book is already registered in the system.')
        }       
        this.allBooks.push(book);
        return 'New Book added successfully!'
    }

    findBook(title: string): Book | undefined {
        return this.allBooks.find((book) => book.title === title);
    }

    registerNewUser(user: User) {
        if(this.allUsers.some((item) => item.id === user.id)) {
            throw new Error('This user is already registered!')
        }
        this.allUsers.push(user);
        return 'User registered sucessfully!'
    }

    findUser(id: number): User | undefined {
        return this.allUsers.find((user) => user.id === id);
    }


    registerLoan(
        book: Book,
        user: User,
        dueDate: Date
    ): string {
        
        const registeredBook = this.allBooks.find((item) => item.isbn === book.isbn);

        const registeredUser = this.allUsers.find((item) => item.id === user.id);

        if(!registeredBook || !registeredUser) {
            throw new Error('Book or user not registered')
        }

        if(!registeredBook.available) {
            throw new Error('This book is not available');
        }


        const newLoan = new Loan(
            registeredBook,
            registeredUser,
            new Date(),
            dueDate
        )

        if(newLoan.dueDate <= newLoan.loanDate) {
            throw new Error('Expiration is wrong!')
        }

        this.allLoans.push(newLoan);
        registeredBook.available = false;
        
        return 'This book was lent sucessfully!';
    }
  
    returnBook(loan: Loan): string {

    }

    getOverdueLoans()
}