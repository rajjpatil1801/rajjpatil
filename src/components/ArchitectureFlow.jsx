import React, { useState } from 'react';
import { Layers, ArrowRight, Code, Database, Cpu, Search, Check, Sparkles, ChevronRight } from 'lucide-react';

export const ArchitectureFlow = () => {
  const [activeStep, setActiveStep] = useState(2); // default to hybrid scoring

  const steps = [
    {
      id: 0,
      number: '01',
      title: 'Query Tokenization',
      subtitle: 'NLTK Preprocessing Pipeline',
      icon: Search,
      tag: 'Text Ingestion',
      codeSnippet: `import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

def preprocess_query(query: str) -> list[str]:
    tokens = word_tokenize(query.lower())
    stop_words = set(stopwords.words('english'))
    return [t for t in tokens if t.isalnum() and t not in stop_words]`,
      concept: 'Tokenization, Lowercasing, Alphanumeric Filtering & Stopword Elimination',
      description:
        'Raw natural language questions are converted into normalized root tokens, stripping noise and punctuation before mathematical scoring.',
    },
    {
      id: 1,
      number: '02',
      title: 'Statistical TF-IDF',
      subtitle: 'Inverse Document Frequency Scoring',
      icon: Code,
      tag: 'Lexical Match',
      codeSnippet: `from sklearn.feature_extraction.text import TfidfVectorizer

vectorizer = TfidfVectorizer(max_features=10000, sublinear_tf=True)
tfidf_matrix = vectorizer.fit_transform(corpus)
tfidf_score = (query_vector * tfidf_matrix.T).toarray()`,
      concept: 'TF(t, d) = f(t, d) / ∑ f(t\', d)  ×  IDF(t) = log(N / df(t))',
      description:
        'Calculates exact keyword importance by penalizing overly common terms across the entire document corpus to ensure specific search terms stand out.',
    },
    {
      id: 2,
      number: '03',
      title: 'Dense Vector Embeddings',
      subtitle: 'Contextual Semantic Space',
      icon: Cpu,
      tag: 'Deep Semantics',
      codeSnippet: `# Hugging Face Transformers Contextual Dense Vectors
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')
dense_embeddings = model.encode(documents, convert_to_tensor=True)
cosine_sim = util.cos_sim(query_embedding, dense_embeddings)`,
      concept: 'Cosine Similarity = (A • B) / (||A|| × ||B||)',
      description:
        'Projects text into 384-dimensional latent semantic space. Understands synonyms and concepts even when the query uses completely different words than the document.',
    },
    {
      id: 3,
      number: '04',
      title: 'PostgreSQL Vector Store',
      subtitle: 'Relational Index Persistence',
      icon: Database,
      tag: 'Data Persistence',
      codeSnippet: `-- PostgreSQL Table Schema & Index
CREATE TABLE research_papers (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    tfidf_weights JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_papers_gin ON research_papers USING gin(to_tsvector('english', content));`,
      concept: 'Relational ACID persistence with GIN inverted indexing and fast retrieval',
      description:
        'Provides rock-solid document storage, fast metadata querying, and transactional durability for large research paper archives.',
    },
    {
      id: 4,
      number: '05',
      title: 'Hybrid Fusion Ranker',
      subtitle: 'Weighted Top-K Results',
      icon: Layers,
      tag: 'Final Ranking',
      codeSnippet: `def hybrid_rank(query, alpha=0.65, top_k=5):
    # Combines dense vector semantics with lexical TF-IDF precision
    final_score = (alpha * dense_score) + ((1 - alpha) * tfidf_score)
    ranked_indices = np.argsort(final_score)[::-1][:top_k]
    return [corpus[i] for i in ranked_indices]`,
      concept: 'Score_hybrid = α · Sim_dense + (1 - α) · Score_lexical',
      description:
        'The best of both worlds: guarantees exact keyword hits while preserving conceptual semantic intent to deliver superior search accuracy.',
    },
  ];

  const currentStep = steps[activeStep];
  const IconComponent = currentStep.icon;

  return (
    <section className="py-16 border-b border-neutral-200/70 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/30 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              System Engineering Deep-Dive
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
              Architecture: Unified Intelligent Search
            </h3>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm max-w-md">
            Click on any pipeline stage below to inspect the mathematical logic, Python implementation, and persistence layers.
          </p>
        </div>

        {/* Pipeline Step Badges Horizontal Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {steps.map((st) => {
            const StIcon = st.icon;
            const isSelected = activeStep === st.id;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStep(st.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-md scale-[1.02]'
                    : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-400'}`}>
                    {st.number}
                  </span>
                  <StIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">
                    {st.title}
                  </div>
                  <div className={`text-[10px] mt-0.5 truncate ${isSelected ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-400'}`}>
                    {st.tag}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspection Drawer */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Explanation (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center font-bold text-xs">
                {currentStep.number}
              </span>
              <div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">
                  {currentStep.title}
                </h4>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {currentStep.subtitle}
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {currentStep.description}
            </p>

            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                Mathematical Principle:
              </span>
              <div className="text-xs font-mono font-semibold text-neutral-800 dark:text-neutral-200 break-words">
                {currentStep.concept}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <Check className="w-4 h-4" />
              <span>Implemented & Benchmarked in Project</span>
            </div>
          </div>

          {/* Code Viewer (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950 text-neutral-200 rounded-2xl p-5 border border-neutral-800 font-mono text-xs overflow-x-auto shadow-inner">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-[11px] text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="font-sans ml-2 text-neutral-300">pipeline_stage_{currentStep.id + 1}.py</span>
              </span>
              <span>Python 3.11</span>
            </div>

            <pre className="text-neutral-300 leading-relaxed overflow-x-auto whitespace-pre">
              <code>{currentStep.codeSnippet}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};
