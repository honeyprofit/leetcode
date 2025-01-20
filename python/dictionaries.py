programming_dictionary = {
    "Bug": "An error in a program that prevents the program from running as expected.",
    "Function": "A piece of code that you can easily call over and over again.",
}

# print(programming_dictionary["Bug"])
print(programming_dictionary)

programming_dictionary["Loop"] = "A action of doing something over and over again."
print(programming_dictionary)


# clear dictionary
empty_dictionary = {}
programming_dictionary = empty_dictionary
print(programming_dictionary)

# Edit an item in a dictionary
programming_dictionary["Bug"]= "A moth in your computer"
print(programming_dictionary)

#Loop through a dictionary
for key in programming_dictionary:
    print(key)
    print(programming_dictionary[key])
