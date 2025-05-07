# 📊 Graph-Dev

A lightweight web interface for querying and visualizing data from a Neo4j graph database. Write Cypher queries, explore nodes and relationships, and view results in an interactive graph — all from your browser.

## 🚀 Features

- 🔌 Connects to your Neo4j database using the official JavaScript driver
- 🧠 Write and execute custom Cypher queries
- 🕸️ Visualize graph data in a dynamic, interactive UI
- ⚡ Built with Vue.js for a responsive, real-time experience

## 🔧 Tech Stack

- **Frontend**: Vue.js  
- **Backend**: Node.js + Express.js  
- **Database**: Neo4j (via Bolt protocol)  
- **Visualization**: Neovis

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/kaisbitar/graph-dev.git
cd graph-dev
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Add your Neo4j credentials:

```env
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=your_username
NEO4J_PASSWORD=your_password
```

> Replace values with your actual Neo4j connection info.

### 4. Run the App

```bash
npm run serve
```

Then open your browser to [http://localhost:8080](http://localhost:8080)

---

## 📚 Sample Cypher Queries

```cypher
MATCH (n) RETURN n LIMIT 25

MATCH (a)-[r]->(b) RETURN a, r, b LIMIT 50

CREATE (p:Person {name: 'Alice'}) RETURN p
```

---

## 🧱 Folder Structure

```
graph-dev/
├── backend/            # Express server
├── frontend/           # Vue.js app
├── .env                # Environment variables
└── README.md           # You're reading it
```

---

## 📌 TODO / Roadmap

- [ ] Save query history
- [ ] Auth & user accounts
- [ ] Better error handling
- [ ] Export visualizations

---

## 👤 Author

Developed by [@kaisbitar](https://github.com/kaisbitar)  
Pull requests and community contributions welcome!

---

## 🪪 License

MIT License. Free to use and modify.
