"""
1.input from user(Rock,Paper,scissor)
2.computer choose randomly choice
3.result print

case - Rock 
Rock -Rock = tie
Rock -paper = paper win 
Rock - scissor = Rock win

case - Paper 
Paper - Paper = tie
Paper - Rock = paper win 
Paper - Scissor = scissor win 

case - Scissor 
Scissor - Scissor = tie
Scissor - Rock = Rock win 
Scissor - Paper = scissor win 
"""

import random

item_list=["Roock","Paper","Scissor"]

userChoice = input("Enter your move -: Rock,Paper,Scissor=")

computerChoice = random.choice(item_list)

print(f"user choice = {userChoice}, Computer Choice = {computerChoice}")


if userChoice == computerChoice:
    print("Both chooses same: Match tie")

elif userChoice == "Rock":
    if computerChoice == "Paper":
        print("Paper Covers Rock: Computer  Win")
    else:
        print("Rock Smashes Scissor: you Win")

elif userChoice == "Paper":
    if computerChoice == "Scissor":
        print("Scissor cut Paper: Computer Win")
    else:
        print("Paper Covers Rock: you Win")
    
elif userChoice == "Scissor":
    if computerChoice == "Paper":
        print("Scissor cut Paper: You Win")
    else:
        print("Rock Smashes Scissor: Computer Win")

         
    