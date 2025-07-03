# Display art
import random
from art import logo, vs
from game_data import data

def format_data(account):
    """" Takes the account data and returns the printable format the account data into printable format"""
    account_name = account["name"]
    account_descr = account["description"]
    account_country = account["country"]
    return f"{account_name}, a {account_descr}, from{account_country}"

def check_answer(user_guess, a_followers, b_followers):
    """ Takes a user's guess and the follower counts and returns if they got it right"""
    if a_followers > b_followers:
        return guess =="a"
    else:
        return guess == "b"

print(logo)
score = 0
game_should_continue = True
account_b = random.choice(data)

while game_should_continue:
    # Generate a random account from game_data.py
    account_a = account_b
    account_b = random.choice(data)

    if account_a == account_b:
        account_b = random.choice(data)

    print(f"Compare A: {format_data(account_a)}")
    print(vs)
    print(f"Against B: {format_data(account_b)}")

    # Ask user for a guess.
    guess = input("Who has more followers? Type 'A' or 'B' : ").lower()

    # Clear the screen
    print("\n"*20)
    print(logo)

    # Check if user is correct.
    ## Get follower count of each account.
    a_follower_count = account_a["follower_count"]
    b_follower_count = account_b["follower_count"]
    is_correct = check_answer(guess, a_follower_count, b_follower_count)

    ## Use if statement to check if user is correct.
    # Score keeping
    if is_correct:
        score += 1
        print(f"You're right! Current score: {score}")
    else:
        print(f"Sorry, that's wrong! Final score: {score}")
        game_should_continue = False

# Give user feedback on their guess.

# score keeping.

# Make the game repeatable.

# Making account at position B become the next account at position A
