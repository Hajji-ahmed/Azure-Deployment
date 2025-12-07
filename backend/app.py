from fastapi import FastAPI
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],     
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],     
)

def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host="db",  # Service name of your MySQL container
            user="root",
            password="root",
            database="db"
        )
        return conn
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None

@app.get("/")
async def read_root():
    return {"message": "Hello FastAPI with MySQL!"}

@app.get("/users")
async def get_users():
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()
        cursor.close()
        conn.close()
        return {"users": users}
    return {"error": "Could not connect to database"}

@app.get("/user")
def get_user(email: str, password: str):
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor(dictionary=True)
        query = "SELECT * FROM users WHERE email = %s AND password = %s"
        cursor.execute(query, (email, password))
        user = cursor.fetchone()
        cursor.close()
        conn.close()
        if user:
            return {"user": user}
        else:
            return {"error": "User not found"}
    return {"error": "Could not connect to database"}