def calculate_love_score(name1, name2):
    name = name1.lower() + name2.lower()
    true = name.count('t') + name.count('r') + name.count('u') + name.count('e')
    love = name.count('l') + name.count('o') + name.count('v') + name.count('e')
    loveScore = true*10 + love
    print(loveScore)


calculate_love_score("Kanye West", "Kim Kardashian")
