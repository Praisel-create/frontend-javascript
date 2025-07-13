//Defininfg the Student Interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

//Table Rendering
function renderTable(students: Student[]): void {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Creating the Header Row of the table
    const headerRow = document.createElement('tr');
    const header1 = document.createElement('th');
    header1.textContent = 'First Name';
    const header2 = document.createElement('th');
    header2.textContent = 'Location';
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    tbody.appendChild(headerRow);

    //Appending a row for each student
    students.forEach(student => {
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}

renderTable(studentsList);

