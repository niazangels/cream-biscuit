import pandas as pd

from app.ai import search_chroma, find_similar_companies, find_similar_companies_by_id
from app import ai

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
df = pd.read_excel("/data/huddle-expo-cleaned.xlsx")

@app.get("/")
def read_root():
    return {"message": "Hello World"}


@app.get("/search/organizations")
def search_organizations(search_text: str):
    result = df[df['organization'].str.contains(search_text, case=False, na=False)]
    result = result.fillna('')
    return result.to_dict(orient="records")


@app.get("/organizations", response_model=list[dict])
def get_organizations():
    return df.to_dict(orient="records")[:10]

@app.get("/organizations/{ticket_num}", response_model=dict)
def get_organizations_by_ticket_num(ticket_num: str):
    result = df[df['ticket_num'] == ticket_num].to_dict(orient="records")
    
    if len(result) == 0:
        raise HTTPException(status_code=404, detail="Organization not found")
    return result[0]

@app.get("/organizations/{ticket_num}/similar")
def get_similar_startups_by_id(ticket_num: str, limit:int=8):
    results = find_similar_companies_by_id(ticket_num, limit)
    results = results['metadatas'][0]
    return results



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

