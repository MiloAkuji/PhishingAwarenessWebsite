def evaluate_quiz(answers):
    correct_answers = {
        'q1': 'no',
        'q2': 'no',
        'q3': 'phishing',
    }
    score = sum(1 for question, answer in answers.items() if correct_answers.get(question) == answer.lower())
    total = len(correct_answers)
    return score, total