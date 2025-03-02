from random import randint

logo = """
 ______     __  __     ______     ______     ______        ______   __  __     ______        __   __     __  __     __    __     ______     ______     ______    
/\  ___\   /\ \/\ \   /\  ___\   /\  ___\   /\  ___\      /\__  _\ /\ \_\ \   /\  ___\      /\ "-.\ \   /\ \/\ \   /\ "-./  \   /\  == \   /\  ___\   /\  == \   
\ \ \__ \  \ \ \_\ \  \ \  __\   \ \___  \  \ \___  \     \/_/\ \/ \ \  __ \  \ \  __\      \ \ \-.  \  \ \ \_\ \  \ \ \-./\ \  \ \  __<   \ \  __\   \ \  __<   
 \ \_____\  \ \_____\  \ \_____\  \/\_____\  \/\_____\       \ \_\  \ \_\ \_\  \ \_____\     \ \_\\"\_\  \ \_____\  \ \_\ \ \_\  \ \_____\  \ \_____\  \ \_\ \_\ 
  \/_____/   \/_____/   \/_____/   \/_____/   \/_____/        \/_/   \/_/\/_/   \/_____/      \/_/ \/_/   \/_____/   \/_/  \/_/   \/_____/   \/_____/   \/_/ /_/                                                                                                                                                       
"""

EASY_LEVEL_TURNS = 10
HARD_LEVEL_TURNS = 5


# Function to check users' guess against actual answer
def check_answer(user_guess, actual_answer, turns):
    if user_guess > actual_answer:
        print("Too high")
        return turns-1
    elif user_guess < actual_answer:
        print("Too low")
        return turns-1
    else:
        print(f"You've got it! The answer was {actual_answer}")

# Function to set difficulty
def set_difficulty():
    level = input("Choose a difficulty. Type 'easy' or 'hard': ")
    if level == 'easy':
        return  EASY_LEVEL_TURNS
    else:
        return  HARD_LEVEL_TURNS


def game():
    print(logo)

    # Choosing a random number between 1 and 100
    print('Welcome to the Number Guessing Game!')
    print("I'm thinking of a number between 1 and 100.")
    answer = randint(1, 100)
    print(f"The correct answer is {answer}")

    turns = set_difficulty()

    # Repeat the guessing functionality if they get it wrong
    #  Let the user guess a number
    guess = 0
    while guess != answer:
        # Track the number of turns and reduce by 1 if they get it wrong
        print(f"You have {turns} attempts remaining to guess the number.")

        guess = int(input("Make a guess: "))
        turns = check_answer(guess, answer, turns)
        if turns == 0:
            print("You've run out of guesses. You lose!")
            break
        elif guess != answer:
            print("Guess again")


game()
