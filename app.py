import os
import streamlit as st
from google import genai
import logging
import requests

# --- Environment Variables ---
PROJECT_ID = os.environ.get("PROJECT_ID", "aiagent-478816")  # fallback
REGION = os.environ.get("REGION", "global")
GEMINI_MODEL_NAME = "gemini-2.5-flash"

# --- Vertex AI Client ---
try:
    client = genai.Client(
        vertexai=True,
        project=PROJECT_ID,
        location=REGION,
    )
    logging.info(f"VertexAI Client initialized with model {GEMINI_MODEL_NAME}")
except Exception as e:
    st.error(f"Error initializing VertexAI client: {e}")
    st.stop()

# --- Function to call LLM ---
def call_model(prompt: str):
    try:
        response = client.models.generate_content(
            model=GEMINI_MODEL_NAME,
            contents=[prompt],
        )
        return response.text
    except Exception as e:
        return f"Error: {e}"

# --- Streamlit App ---
st.set_page_config(page_title="AI BulkSMS Shield", page_icon="📩")

st.title("📩 AI BulkSMS Shield")
st.write("Filter spammy or malicious SMS and analyze messages with AI.")

# Session state for chat history
if "messages" not in st.session_state:
    st.session_state["messages"] = [
        {"role": "assistant", "content": "Send an SMS text to check."}
    ]

# Display messages
for msg in st.session_state["messages"]:
    st.chat_message(msg["role"]).write(msg["content"])

# User input
if prompt := st.chat_input("Type SMS content here"):
    st.session_state["messages"].append({"role": "user", "content": prompt})
    st.chat_message("user").write(prompt)

    with st.spinner("Analyzing SMS..."):
        result = call_model(prompt)
        st.session_state["messages"].append({"role": "assistant", "content": result})
        st.chat_message("assistant").write(result)


