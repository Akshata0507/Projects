# student ={
#     'Akshata':100,
#     'John':200
#     }

# #Accessing element
# #print(student['Akshata'])

# #Update
# student['Akshata']= 300
# print(student)

# #delete
# del student['John']
# print(student)

studentGrades ={}

#Add New Student 
def addStudent(name,grade):
    studentGrades[name] = grade
    print(f"Added {name} with a {grade}")

#Update Student 
def updateStudent(name,grade):
    if name in studentGrades:
        studentGrades[name] = grade
        print(f"{name} with marks are updated{grade}")
    else:
        print(f"{name} not found!")

#Delete Student
def deleteStudent(name):
    if name in studentGrades:
        del studentGrades[name]
        print(f"{name} has been successfully deleted")

    else:
        print(f"{name} is not found!")

#view Student
def viewAll():
    if studentGrades:
        for name,grade in studentGrades.item():
            print(f"{name} : {grade}")

    else:
        print(f"No Students found/added ")

def main():
    while True:
        print('\n Student Grades Management System')
        print("1. Add Student")
        print("2. Update Student")
        print("3. Delete Student")
        print("4. View Student")
        print("5. Exit")

        choice = int(input("Enter your Choice ="))
        if choice == 1:
            name = input("Enter student name =")
            grade = int(input("Enter student grade ="))
            addStudent(name,grade)

        elif choice == 2:
            name = input("Enter student name =")
            grade = int(input("Enter student grade ="))
            updateStudent(name,grade)

        elif choice == 3:
            name = input("Enter student name =")
            deleteStudent(name,grade)

        elif choice == 4:
            viewAll()

        elif choice == 5:
            print("Closing the Program...")
            break

        else:
            print("Invalid Input")

main()