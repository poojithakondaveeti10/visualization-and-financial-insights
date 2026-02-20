import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
from database.db_connection import get_connection

mydb = get_connection()

st.header("Financial Dashboard")

df = pd.read_sql("SELECT * FROM expenses", mydb)

if not df.empty:

    # Category-wise sum
    summary = df.groupby("category")["amount"].sum()

    # Bar Chart
    st.subheader("Category-wise Expenses")
    st.bar_chart(summary)

    # Pie Chart
    st.subheader("Expense Distribution")
    fig, ax = plt.subplots()
    ax.pie(summary, labels=summary.index, autopct="%1.1f%%")
    st.pyplot(fig)

else:
    st.write("No data available.")
