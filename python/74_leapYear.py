def is_leap_year(year):
    num_year = int(year)
    
    if num_year%4 == 0:
        if num_year%100 == 0:
            if num_year%400 == 0:
                return True
            return False
        return True
    else:
        return False
        
    # Write your code here. 
    # Don't change the function name.
