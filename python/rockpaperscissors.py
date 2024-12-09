import random

rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

user_choice = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.\n"))
com_choice = random.randint(0,2)

print(f'user_choice:{user_choice}|com_choice:{com_choice}')

if user_choice==0:
   print(rock)
elif user_choice==1:
    print(paper)
elif user_choice==2:
    print(scissors)

print('Computer chose:')
if com_choice==0:
   print(rock)
elif com_choice==1:
    print(paper)
elif com_choice==2:
    print(scissors)

if user_choice==com_choice:
    print('draw')
elif user_choice-com_choice == -1 or user_choice-com_choice ==2:
    print('You lose')
elif user_choice-com_choice == -2 or user_choice-com_choice ==1:
    print('You win')
