const projectDetails = async () => {
    const url = "http://127.0.0.1:5000/recommend";

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "project_title": "Adversarial Machine Learning for Cyber Defense" }) // Modify this line
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

(async () => {
    const result = await projectDetails();
    console.log(result);
})();

