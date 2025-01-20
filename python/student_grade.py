student_scores = {
    'Harry': 88,
    'Ron': 78,
    'Hermione': 95,
    'Draco': 75,
    'Neville': 60
}

student_grades = {}

for key in student_grades:
    if student_grades[key] >= 91:
        student_grades[key] = "Outstanding"
    elif student_grades[key] >= 81:
        student_grades[key] = "Exceeds Expectations"
    elif student_grades[key] >= 71:
        student_grades[key] = "Acceptable"
    else:
        student_grades[key] = "Fail"
