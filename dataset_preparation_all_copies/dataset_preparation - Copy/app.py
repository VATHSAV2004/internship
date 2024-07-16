from flask import Flask, request, jsonify
from flask_cors import CORS
from your_recommender_code import get_recommendations

app = Flask(__name__)
CORS(app)

@app.route('/recommend', methods=['POST'])
def recommend_projects():
    data = request.get_json()
    project_title = data['project_title']
    recommendations = get_recommendations(project_title)
    return jsonify({'recommendations': recommendations})

if __name__ == '__main__':
    app.run(debug=True)