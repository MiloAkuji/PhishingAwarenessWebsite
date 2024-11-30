from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

# Quiz submit route
@app.route('/quiz/submit', methods=['POST'])
def quiz_submit():
    data = request.json  # Assume JSON data is sent with answers
    answers = data.get('answers', {})
    correct_answers = {
        'q1': 'no',
        'q2': 'no',
        'q3': 'phishing',
    }
    # Calculate score
    score = sum(1 for q, a in answers.items() if correct_answers.get(q) == a)
    total = len(correct_answers)
    return jsonify({'score': score, 'total': total})


@app.route('/resources')
def resources():
    return render_template("resources.html")

@app.route('/simulator')
def simulator():
    return render_template('simulator.html')

@app.route('/videos')
def videos():
    return render_template('videos.html')

@app.route('/tutorials')
def tutorials():
    return 'In development'

@app.route('/guide')
def guide():
    return 'In development'

@app.route('/blog')
def blog():
    return 'In development'

@app.route('/tools')
def tools():
    return 'In development'

@app.route('/faq')
def faq():
    return 'In development'

if __name__ == '__main__':
    app.run(debug=True)
