# Display art
import random
from art import logo
from game_data import data

def format_data(account):
    """" Format the account data into printable format"""
    account_name = account["name"]
    account_descr = account["description"]
    account_country = account["country"]
    return f"{account_name}, a {account_descr}, from{account_country}"


print(logo)

# Generate a random account from game_data.py
account_a = random.choice(data)
account_b = random.choice(data)
if account_a == account_b:
    account_b = random.choice(data)

print(f"Compare A: {format_data(account_a)}")
print(f"Compare B: {format_data(account_b)}")

# Ask user for a guess.

# Check if user is correct.
## Get follower count of each account.
## Use if statement to check if user is correct.

# Give user feedback on their guess.

# score keeping.

# Make the game repeatable.

# Making account at position B become the next account at position A
