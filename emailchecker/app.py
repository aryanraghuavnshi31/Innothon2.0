from flask import Flask, render_template, request
import pickle

# Load the vectorizer and model
with open('vectorizer.pkl', 'rb') as vec_file:
    vectorizer = pickle.load(vec_file)

with open('model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

app = Flask(__name__)

@app.route('/')
def home():
    return '''
        <h1>SMS Spam Classifier</h1>
        <form action="/predict" method="post">
            <textarea name="message" rows="5" cols="40" placeholder="Enter your message"></textarea><br>
            <input type="submit" value="Predict">
        </form>
    '''

@app.route('/predict', methods=['POST'])
def predict():
    message = request.form['message']
    if not message:
        return "Please enter a message."
    
    message_vector = vectorizer.transform([message])
    prediction = model.predict(message_vector)[0]
    
    result = "Spam" if prediction == 1 else "Not Spam"
    return f'<h2>Prediction: {result}</h2><a href="/">Go Back</a>'

if __name__ == '__main__':
    app.run(debug=True)
