menu ={
    'Pizza':40,
    'Pasta':60,
    'Burger':100,
    'Falooda':120
}
#print(menu)

#Greet
print("Welcome to Akshata Restro")
print("Pizza:Rs.40\nPasta:Rs.60\nBurger:Rs.100\nFalooda:Rs.120")

#Order 
order_Total = 0

item1 = input("Enter the name of item you want to order =")
if item1 in menu:
    order_Total += menu[item1]
    print(f"Your item {item1} has been added to your order")
else:
    print(f"Ordered item {item1} is not available yet!")

another_order = input("Do you want to add another item? (Yes/No)")     
if another_order == "Yes":
    secondorder = input("Enter the name of second item = ")
    if secondorder in menu:
        order_Total += menu[secondorder]
        print(f"Item {secondorder} has been added to order")
    else:
        print(f"Ordered item {secondorder} is not available!")

print(f"The total amount of items to pay is {order_Total}")