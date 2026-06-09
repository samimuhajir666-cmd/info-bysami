// AI Advisor Function
function askAI() {
    let question = document.getElementById("question").value;
    let answerDiv = document.getElementById("answer");
    
    if (!question.trim()) {
        answerDiv.innerText = "Ask me something about Sami!";
        return;
    }
    
    let q = question.toLowerCase();
    let reply = "";
    
    if (q.includes("skill") || q.includes("know") || q.includes("python")) {
        reply = "✅ Sami knows: Python, LangChain, RAG, AI Agents, Chatbots, HTML/CSS, JavaScript, Groq API, NumPy, Pandas, Node.js.";
    }
    else if (q.includes("project")) {
        reply = "🚀 Sami built 6 projects: AI Career Advisor, Al Shifa Healthcare, Siddique Brothers, RAG Q&A, AI Agent, Urdu Bot, and Sirat-e-Mustaqeem.";
    }
    else if (q.includes("experience") || q.includes("intern")) {
        reply = "💼 Sami has 4+ months AI internship experience, building real-world LLM applications and AI agents.";
    }
    else if (q.includes("learn")) {
        reply = "📚 Sami is currently learning Fine-tuning LLMs, Advanced RAG, and Backend Integration.";
    }
    else if (q.includes("name")) {
        reply = "🧑‍💻 This is Sami — AI Engineer and Dars-e-Nizami student.";
    }
    else if (q.includes("earn") || q.includes("salary")) {
        reply = "💰 Sami's earning potential: Intern ₹15k-25k/month, Junior AI Engineer ₹30k-50k/month, Freelance ₹20k-80k/project.";
    }
    else {
        reply = "💡 Ask about: skills, projects, experience, learning, name, or earning potential.";
    }
    
    answerDiv.innerText = reply;
}

// Show all projects when heading is clicked
function showAllProjects() {
    let container = document.getElementById("projectsList");
    
    if (container.style.display === "none") {
        container.style.display = "grid";
        container.innerHTML = `
            <div class="project-item">
                <h3>🏥 Al Shifa Healthcare</h3>
                <button class="project-info-btn" onclick="showProjectDetails('al_shifa')">📖 About this project</button>
                <div id="info_al_shifa" class="project-info-box" style="display: none;"></div>
            </div>
            <div class="project-item">
                <h3>🏢 Siddique Brothers</h3>
                <button class="project-info-btn" onclick="showProjectDetails('siddique')">📖 About this project</button>
                <div id="info_siddique" class="project-info-box" style="display: none;"></div>
            </div>
            <div class="project-item">
                <h3>📄 RAG Document Q&A</h3>
                <button class="project-info-btn" onclick="showProjectDetails('rag')">📖 About this project</button>
                <div id="info_rag" class="project-info-box" style="display: none;"></div>
            </div>
            <div class="project-item">
                <h3>🧠 AI Agent with Tools</h3>
                <button class="project-info-btn" onclick="showProjectDetails('agent')">📖 About this project</button>
                <div id="info_agent" class="project-info-box" style="display: none;"></div>
            </div>
            <div class="project-item">
                <h3>🗣️ Urdu Bilingual Bot</h3>
                <button class="project-info-btn" onclick="showProjectDetails('urdu')">📖 About this project</button>
                <div id="info_urdu" class="project-info-box" style="display: none;"></div>
            </div>
            <div class="project-item">
                <h3>🕌 Sirat-e-Mustaqeem AI Agent</h3>
                <button class="project-info-btn" onclick="showProjectDetails('sirat')">📖 About this project</button>
                <div id="info_sirat" class="project-info-box" style="display: none;"></div>
            </div>
        `;
    } else {
        container.style.display = "none";
        container.innerHTML = "";
    }
}

// Show project details when button is clicked
function showProjectDetails(projectId) {
    let infoDiv = document.getElementById(`info_${projectId}`);
    let allInfoDivs = document.querySelectorAll('.project-info-box');
    
    // Hide all other info boxes
    allInfoDivs.forEach(div => {
        if (div.id !== `info_${projectId}`) {
            div.style.display = "none";
        }
    });
    
    // Toggle current
    if (infoDiv.style.display === "none") {
        let details = {
            al_shifa: "🏥 **Al Shifa Healthcare Chatbot**\n\n🔧 Tech: RAG, LangChain, Groq API, ChromaDB\n\n✨ Features: Medical queries, appointment guidance, medicine info\n\n📅 Timeline: 2 weeks",
            siddique: "🏢 **Siddique Brothers Chatbot**\n\n🔧 Tech: AI Agents, LangGraph, Groq API\n\n✨ Features: Product inquiry, order tracking, customer support\n\n📅 Timeline: 10 days",
            rag: "📄 **RAG Document Q&A**\n\n🔧 Tech: LangChain, ChromaDB, Groq API\n\n✨ Features: Upload PDF/TXT, ask questions, get answers\n\n📅 Timeline: 1 week",
            agent: "🧠 **AI Agent with Tools**\n\n🔧 Tech: LangGraph, Groq API\n\n✨ Features: Web search, calculator, multi-step reasoning\n\n📅 Timeline: 5 days",
            urdu: "🗣️ **Urdu Bilingual Bot**\n\n🔧 Tech: Python, Groq API\n\n✨ Features: Roman Urdu, translation, local context\n\n📅 Timeline: 4 days",
            sirat: "🕌 **Sirat-e-Mustaqeem AI Agent**\n\n🔧 Tech: Python, Speech Recognition, Groq API\n\n✨ Features: Voice-enabled, halal ideas, haram warnings, motivation\n\n📅 Timeline: 1 week"
        };
        infoDiv.innerText = details[projectId];
        infoDiv.style.display = "block";
    } else {
        infoDiv.style.display = "none";
    }
}

// Skill info function
function askAboutSkill(skillName) {
    let answerDiv = document.getElementById("answer");
    let skillReplies = {
        "Python": "🐍 Python: Used for all AI projects — LangChain, data processing, APIs.",
        "LangChain": "🦜 LangChain: Framework for LLM apps — used in RAG, Agents, Chatbots.",
        "RAG": "📚 RAG: Retrieval Augmented Generation — answers from custom documents.",
        "AI Agents": "🤖 AI Agents: LangGraph-based agents with tools (web search, calculator).",
        "Chatbots": "💬 Chatbots: 6 different bots — healthcare, business, career, bilingual.",
        "Groq API": "⚡ Groq API: Ultra-fast LLM inference — 500 tokens/sec.",
        "HTML/CSS/JS": "🌐 Frontend: Portfolio website, interactive UI, responsive design.",
        "NumPy/Pandas": "📊 Data analysis: Data processing for ML models.",
        "Node.js": "🟢 Backend: Server-side JavaScript, API integration."
    };
    
    let reply = skillReplies[skillName] || `🔧 ${skillName}: Part of Sami's AI toolkit.`;
    answerDiv.innerText = reply;
}