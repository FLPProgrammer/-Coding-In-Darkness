// ========== EXERCÍCIO 27: SISTEMA DE USUÁRIOS E SERVIÇOS ==========
// Conceitos: Classes, encapsulamento, responsabilidade única e injeção de dependência.
// Objetivo: Gerenciar usuários, autenticação, relatórios, e-mails e cálculo salarial.

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

// ========== EXERCÍCIO 28: SISTEMA DE BIBLIOTECA ==========
// Conceitos: Classes, composição, arrays de objetos e regras de negócio.
// Objetivo: Cadastrar livros e usuários, registrar empréstimos, devolver livros
// e identificar empréstimos atrasados.


/*class Book {
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
    const registeredLoan = this.allLoans.find(
        (item) => item === loan
    );

    if (!registeredLoan) {
        throw new Error('Loan not registered!');
    }

    if (registeredLoan.returnDate !== null) {
        throw new Error('This book has already been returned!');
    }

    registeredLoan.returnDate = new Date();
    registeredLoan.book.available = true;

    return 'Book returned successfully!';
}

  getOverdueLoans(): Loan[] {
    const today = new Date();

    return this.allLoans.filter(
        (loan) =>
            loan.returnDate === null &&
            loan.dueDate < today
    );
}
}*/

// ========== EXERCÍCIO 29: MINI E-COMMERCE ==========
// Conceitos: Interfaces, polimorfismo, composição e injeção de dependência.
// Objetivo: Gerenciar produtos, usuários, carrinho, pedidos e pagamentos.
// Fluxo: Adicionar produtos -> Calcular total -> Processar pagamento -> Criar pedido.


/*interface PaymentMethod {
    pay(): void;
}

class Checkout {
    processPayment(payment: PaymentMethod): void {
        payment.pay()
    }
}

class CreditCardPayment implements PaymentMethod {
    pay(): void {
        console.log('You are using - [Credit Card]')
    }
}

class PixPayment implements PaymentMethod {
    pay(): void {
        console.log('You are using - [Pix]')
    }
}


class Product {
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(
        id: number,
        name: string,
        price: number,
        stock: number,
    ) {
        this.id = id;
        this.name = name;
        this.price= price;
        this.stock = stock;
    }

}

class User {
    id: number;
    name: string;
    email: string;

    constructor(
        id: number,
        name: string,
        email: string,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

}


class Cart {

    constructor(private products: CartItem[]) {}

    addProduct(product: Product, quantity: number): string {
        if(product.stock < quantity) {
            throw new Error('We do not have this amount available.')
        }
        
        if(product.price <= 0) {
            throw new Error('This price is invalid')
        }

        if(product.stock <= 0) {
            throw new Error('This stock amount is invalid')
        }


        const cartItem = new CartItem(product, quantity);
        
        const registeredProduct = this.products.find((item) => item.product.id === product.id);   
        
         if(registeredProduct) {
            if(registeredProduct.quantity + quantity > product.stock) {
                throw new Error('Insufficient stock')
            }
            registeredProduct.quantity += quantity

         } else {
            this.products.push(cartItem);
         }


        return 'Product was added to cart sucessfully';
    }

    removeProduct(id: number): string {
        const newProducts = this.products.filter(item => item.product.id !== id);
        this.products = newProducts;
        return 'The product was removed from cart sucessfuly'
    }

   calculateTotal(): number {
        return this.products.reduce(
        (total, item) => total + item.calculateSubTotal(),
        0
    );   
}
    getItems(): CartItem[] {
        return [...this.products];
    }

    isEmpty(): boolean {
        return this.products.length === 0;
    }

    clear(): void {
        this.products = [];
    }

}

class CartItem {
    product: Product;
    quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity
    }

    calculateSubTotal(): number {
        return this.product.price * this.quantity;
    }
}


class Order {
    user: User;
    acquiredItems: CartItem[];
    total: number;
    private status: boolean;

    constructor(
        user: User,
        acquiredItems: CartItem[],
        total: number,
        status: boolean,
    ) {
        this.user = user;
        this.acquiredItems = acquiredItems;
        this.total = total;
        this.status = status;
    }

    markAsPaid(): void {
        this.status = true;
    }

    getStatus(): boolean {
        return this.status;
    }
}


class Store {
    private checkout = new Checkout();

    createOrder(
        user: User,
        cart: Cart,
        payment: PaymentMethod,
    ): Order {
        if (cart.isEmpty()) {
            throw new Error('Cannot checkout an empty cart');
        }

        const items = cart.getItems();
        const total = cart.calculateTotal();

        // Verifica o estoque antes do pagamento.
        for (const item of items) {
            if (item.quantity > item.product.stock) {
                throw new Error(
                    `Insufficient stock for ${item.product.name}`
                );
            }
        }

        const order = new Order(
            user,
            items,
            total,
            false,
        );

        this.checkout.processPayment(payment);

        // Simula a confirmação do pagamento.
        for (const item of items) {
            item.product.stock -= item.quantity;
        }

        order.markAsPaid();
        cart.clear();

        return order;
    }
}*/



// ========== EXERCÍCIO 30: SISTEMA DE NOTIFICAÇÕES ==========
// Conceitos: Interfaces e polimorfismo.
// Objetivo: Enviar notificações por Email, SMS e Push.


/*interface Notification {
    send(message: string): void;
}

class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Email: ${message}`)
    }
}

class SMSNotification implements Notification {
    send(message: string): void {
        console.log(`SMS: ${message}`)
    }
}

class PushNotification implements Notification {
    send(message: string): void {
        console.log(`Push:  ${message}`)
    }
}

class NotificationService {
    notify(service: Notification, message: string): void {
        service.send(message)
    }
}

const notificationService = new NotificationService();

notificationService.notify(new EmailNotification(), 'Hello!');
notificationService.notify(new SMSNotification(), 'Hello!');
notificationService.notify(new PushNotification(), 'Hello!');*/


