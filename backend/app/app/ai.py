import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer
import chromadb
from chromadb.config import Settings
from pathlib import Path

# Load the model
model = SentenceTransformer("all-MiniLM-L6-v2")

# Initialize ChromaDB client with persistent storage
persist_dir = Path("/data/chroma/about_company")
persist_dir.mkdir(parents=True, exist_ok=True)

chroma_client = chromadb.PersistentClient(path=str(persist_dir))

# Create or get a collection
collection = chroma_client.get_or_create_collection("about_company")

# Load the cleaned data
df_cleaned = pd.read_excel("/data/huddle-expo-cleaned.xlsx")

def search_chroma(query, limit:int):
    embeddings = model.encode([query])
    results = collection.query(query_embeddings=embeddings, n_results=limit)
    return results

def find_similar_companies(organization):
    company = df_cleaned[df_cleaned['organization'] == organization]
    if company.empty:
        return []
    company_description = company['company_description'].values[0]
    results = search_chroma(company_description)
    return (results)

def find_similar_companies_by_id(ticket_num, limit:int):
    company = df_cleaned[df_cleaned['ticket_num'] == ticket_num]
    if company.empty:
        return []
    print("Company: ", company)
    company_description = company['company_description'].values[0]
    if pd.isna(company_description):
        company_description = ''
    print("Company description: ", company_description)
    results = search_chroma(company_description, limit)
    return (results)
