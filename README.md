# Love Proposal Website

A FastAPI + SQLite romantic proposal website.

## Requirements

Python 3.10+ recommended.

## Installation

Open PowerShell inside this project folder:

```powershell
python -m pip install -r requirements.txt
```

## Run

Use a clean port for the first test:

```powershell
python -m uvicorn main:app --host 127.0.0.1 --port 8010
```

Open:

http://127.0.0.1:8010

Swagger:

http://127.0.0.1:8010/docs

The SQLite database `love_proposal.db` is created automatically.

## Project structure

```text
love_proposal_sqlite_project
├── main.py
├── database.py
├── models.py
├── schemas.py
├── requirements.txt
├── routers
│   ├── __init__.py
│   ├── proposals.py
│   └── public.py
├── templates
│   ├── index.html
│   ├── create.html
│   └── proposal.html
└── static
    ├── css
    │   └── style.css
    └── js
        ├── create.js
        └── proposal.js
```
