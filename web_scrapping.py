import requests
from bs4 import BeautifulSoup
import pandas as pd

# Send an HTTP GET request to the webpage
url = "https://people.dbmi.columbia.edu/~friedma/Projects/DiseaseSymptomKB/index.html"
response = requests.get(url)

# Parse the HTML content of the page
soup = BeautifulSoup(response.content, "html.parser")

# Find the relevant table that contains disease-symptom data
table = soup.find("table")

# Initialize lists to store data
diseases = []
symptoms = []

# Extract data from the table
for row in table.find_all("tr")[1:]:  # Skip the header row
    columns = row.find_all("td")
    if len(columns) == 2:
        disease = columns[0].text.strip()
        symptom = columns[1].text.strip()
        diseases.append(disease)
        symptoms.append(symptom)

# Create a DataFrame from the extracted data
data = pd.DataFrame({"Disease": diseases, "Symptoms": symptoms})

# Save the data to a CSV file with the absolute file path
data.to_csv("D:/MIHealth/disease_symptoms.csv", index=False)
