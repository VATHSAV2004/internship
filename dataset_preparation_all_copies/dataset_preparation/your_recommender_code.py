import numpy as np
import pandas as pd
import nltk
from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def get_recommendations(project_title):
    projects = pd.read_csv("output.csv")
    projects = projects[["Project Title", "Project Description", "Project Category/Field", "Keywords/Tags",
                         "Tools/Technologies Used", "Project Outcome/Evaluation"]]
    projects = projects.drop_duplicates()
    projects['tags'] = projects['Project Description'] + projects['Project Category/Field'] + projects[
        'Keywords/Tags'] + projects['Tools/Technologies Used'] + projects['Project Outcome/Evaluation']
    new_df = projects[['Project Title', 'tags']]
    projects['project_id'] = range(1, len(projects) + 1)
    projects['title'] = projects['Project Title']
    new_df = projects[['project_id', 'title', 'tags']]
    new_df = new_df[['project_id', 'title', 'tags']]
    new_df['tags'] = new_df['tags'].apply(lambda x: x.lower())

    ps = PorterStemmer()
    new_df['tags'] = new_df['tags'].apply(lambda x: ' '.join([ps.stem(word) for word in x.split()]))
    
    cv = CountVectorizer(max_features=2000, stop_words="english")
    vectors = cv.fit_transform(new_df['tags']).toarray()
    
    similarity = cosine_similarity(vectors)
    movie_index = new_df[new_df['title'] == project_title].index[0]
    distances = similarity[movie_index]
    movies_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:6]
    recommendations = [new_df.iloc[i[0]]['title'] for i in movies_list]
    
    return recommendations