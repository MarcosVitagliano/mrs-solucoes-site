import React, { useState, useRef } from 'react';
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Terminal,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MessageSquare,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RefreshCw,
  ExternalLink,
  Heart,
  MessageCircle,
  X,
  SlidersHorizontal,
  ShieldCheck,
  Zap,
  BarChart3
} from 'lucide-react';

export default function App() {
  // Estados do Player de Vídeo na Hero Section
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Estados do Filtro de Projetos
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Estados do Diagnóstico Interativo de IA (Solution Matcher)
  const [selectedPain, setSelectedPain] = useState('erp');

  // Estados do Feed do Instagram (@mrs.solucoes)
  const [isRefreshingInsta, setIsRefreshingInsta] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // Estados do Formulário de Contato
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: 'Automação Python & IA',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleRefreshInstagram = () => {
    setIsRefreshingInsta(true);
    setTimeout(() => {
      setIsRefreshingInsta(false);
    }, 800);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        service: 'Automação Python & IA',
        message: ''
      });
    }, 4500);
  };

  // Dados dos Projetos Reais
  const projects = [
    {
      id: 1,
      title: 'Módulo Fiscal & Conciliação Odoo 19',
      category: 'ERP & Backend',
      client: 'Isy.one / Operação Corporativa',
      description:
        'Customização avançada do Odoo 19 Community com Python ORM e PostgreSQL para ingestão automatizada de faturas, validação fiscal e conciliação bancária em lote.',
      metrics: '-78% tempo operacional',
      tags: ['Python', 'Odoo 19', 'PostgreSQL', 'SQL', 'ORM'],
      highlight: true
    },
    {
      id: 2,
      title: 'ServicioConecta — Marketplace Mobile',
      category: 'Web & Mobile',
      client: 'Plataforma de Serviços Locais',
      description:
        'Aplicação web mobile-first conectando prestadores de serviços locais a clientes finais, com busca geolocalizada, agendamento rápido e fluxo otimizado de conversão.',
      metrics: 'UX Mobile-First',
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'UI/UX'],
      highlight: true
    },
    {
      id: 3,
      title: 'Integração ERP Teknisa + Claude AI',
      category: 'IA & Automação',
      client: 'Gestão Multi-CNPJ',
      description:
        'Arquitetura de inteligência artificial integrada a banco de dados corporativo para consolidação de DRE multi-CNPJ, controle de compras, cardápios e emissão fiscal.',
      metrics: 'Relatórios em tempo real',
      tags: ['Python', 'Claude AI', 'REST API', 'SQL'],
      highlight: true
    },
    {
      id: 4,
      title: 'Motor Quantitativo WDO (MT5 + Python)',
      category: 'IA & Automação',
      client: 'Mesa Proprietária / B3',
      description:
        'Robô de análise quantitativa integrado ao MetaTrader 5 para leitura de fluxo (Tape Reading), agressão compradora e retrações de Fibonacci no Mini Dólar.',
      metrics: 'Execução sub-segundo',
      tags: ['Python', 'MetaTrader 5', 'Pandas', 'Finanças'],
      highlight: false
    },
    {
      id: 5,
      title: 'Aura Estética — Landing Page de Alta Conversão',
      category: 'Web & Mobile',
      client: 'Clínica Aura Estética',
      description:
        'Página institucional responsiva focada em agendamento direto via WhatsApp, carregamento instantâneo, SEO técnico e apresentação visual sofisticada.',
      metrics: '+42% leads qualificados',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Conversão'],
      highlight: false
    },
    {
      id: 6,
      title: 'Dojo Alpha — Portal & Captação de Alunos',
      category: 'Web & Mobile',
      client: 'Academia Dojo Alpha',
      description:
        'Site responsivo de alta performance para academia de artes marciais com grade de horários interativa, apresentação de modalidades e funil de aula experimental.',
      metrics: '100/100 Performance',
      tags: ['React', 'Tailwind CSS', 'Responsivo'],
      highlight: false
    }
  ];

  const categories = ['Todos', 'ERP & Backend', 'IA & Automação', 'Web & Mobile'];

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Soluções recomendadas no Diagnóstico IA
  const solutionRecommendations = {
    erp: {
      badge: 'Arquitetura ERP & Dados',
      title: 'Customização Odoo 19 & Integração Bancária/Fiscal',
      summary:
        'Ideal para empresas que sofrem com retrabalho em planilhas, conciliação financeira manual ou sistemas engessados.',
      deliverables: [
        'Módulos sob medida em Python e PostgreSQL no Odoo 19',
        'Automação de leitura de XML/NF-e e conciliação bancária',
        'Dashboards executivos com indicadores financeiros reais'
      ],
      estimatedImpact: 'Redução de até 75% nas horas manuais do financeiro'
    },
    ai: {
      badge: 'Inteligência Artificial Aplicada',
      title: 'Agentes de IA & Automação de Processos com Python',
      summary:
        'Para negócios que precisam escalar o atendimento, extrair dados de documentos ou conectar ERPs a modelos como OpenAI e Claude.',
      deliverables: [
        'Assistentes inteligentes integrados ao WhatsApp e CRM',
        'Pipelines em Python para análise de dados e relatórios automáticos',
        'Integração via REST APIs com sistemas legados'
      ],
      estimatedImpact: 'Operação 24/7 com resposta imediata e zero gargalo'
    },
    web: {
      badge: 'Presença Digital & Conversão',
      title: 'Aplicações React & Landing Pages de Alta Performance',
      summary:
        'Projetado para empresas e profissionais que precisam transformar visitantes em clientes com autoridade e velocidade.',
      deliverables: [
        'Interface moderna, responsiva e otimizada para dispositivos móveis',
        'Arquitetura em React + Tailwind CSS com foco em SEO e conversão',
        'Integração direta com formulários, CRM e WhatsApp Business'
      ],
      estimatedImpact: 'Aumento expressivo na taxa de conversão de leads'
    }
  };

  // Posts do Feed @mrs.solucoes
  const instagramPosts = [
    {
      id: 101,
      tag: 'Odoo 19 & Python',
      time: 'Atualizado recentemente',
      likes: 84,
      comments: 12,
      caption:
        'Automatizando rotinas fiscais e conciliação bancária diretamente no Odoo 19 com Python e PostgreSQL. Menos digitação manual, mais margem e controle financeiro para sua empresa. 🚀💻 #MRSSolucoes #Odoo19 #Python #ERP',
      gradient: 'from-cyan-500/20 via-slate-900 to-indigo-600/20'
    },
    {
      id: 102,
      tag: 'IA nos Negócios',
      time: 'Destaque técnico',
      likes: 112,
      comments: 19,
      caption:
        'Como unir 15 anos de visão do mercado financeiro com Inteligência Artificial aplicada? Criando sistemas que não apenas têm código limpo, mas entregam ROI mensurável desde o primeiro mês. 📊🤖 #InteligenciaArtificial #Negocios #Tech',
      gradient: 'from-emerald-500/20 via-slate-900 to-cyan-600/20'
    },
    {
      id: 103,
      tag: 'Front-End & Conversão',
      time: 'Portfólio Web',
      likes: 96,
      comments: 15,
      caption:
        'Seu site atual gera reuniões ou apenas ocupa espaço na internet? Desenvolvemos interfaces em React e Tailwind CSS pensadas na jornada de decisão do seu cliente. ✨📱 #ReactJS #WebDesign #MRS',
      gradient: 'from-indigo-500/20 via-slate-900 to-purple-600/20'
    }
  ];

  const currentRecommendation = solutionRecommendations[selectedPain];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navbar Fixa */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white">
                MRS <span className="text-cyan-400">Soluções</span>
              </span>
              <span className="hidden sm:block text-[11px] text-slate-400 leading-none">
                Marcos Paulo Vitagliano
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">
              Trajetória
            </a>
            <a href="#servicos" className="hover:text-cyan-400 transition-colors">
              Soluções
            </a>
            <a href="#projetos" className="hover:text-cyan-400 transition-colors">
              Projetos
            </a>
            <a href="#diagnostico" className="hover:text-cyan-400 transition-colors">
              Simulador IA
            </a>
            <a href="#instagram" className="hover:text-cyan-400 transition-colors">
              @mrs.solucoes
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/mrs.solucoes"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram MRS Soluções"
              className="p-2 rounded-lg border border-slate-800 bg-slate-900/70 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>Iniciar Projeto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION COM VÍDEO */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/60">
        {/* Glows de Fundo */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Coluna Esquerda: Posicionamento */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Engenharia de Software + 15 Anos de Visão Financeira</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Transformo processos complexos em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400">
                  software inteligente e rentável.
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Sou <strong className="text-white">Marcos Paulo Vitagliano</strong>, fundador da{' '}
                <strong className="text-cyan-400">MRS Soluções</strong> e Desenvolvedor Python na{' '}
                <strong className="text-white">Isy.one</strong>. Desenvolvo sistemas web em React,
                automações com Inteligência Artificial e customizações de ERP (Odoo 19) focadas
                em eficiência operacional e retorno financeiro.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25"
                >
                  <span>Explorar Projetos Reais</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#diagnostico"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/80 hover:border-cyan-500/50 text-white font-semibold text-sm transition-all"
                >
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Simular Solução com IA</span>
                </a>
              </div>

              {/* Stack Rápida */}
              <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="font-semibold text-slate-300 mr-1">Stack Principal:</span>
                {['React', 'Python', 'Odoo 19', 'PostgreSQL', 'Tailwind CSS', 'IA & APIs'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Coluna Direita: Player de Vídeo Showcase */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-2.5 shadow-2xl shadow-cyan-950/40 backdrop-blur-sm">
                {/* Barra Superior estilo Janela Tech */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">
                      mrs-solucoes // showcase-2026.mp4
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Demo Interativa
                  </span>
                </div>

                {/* Container do Vídeo */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 group">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-[1.01] transition-transform duration-500"
                  >
                    <source
                      src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4"
                      type="video/mp4"
                    />
                    Seu navegador não suporta a reprodução de vídeo.
                  </video>

                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Legenda e Controles sobre o Vídeo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-4">
                    <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800/90 rounded-lg px-3.5 py-2">
                      <p className="text-xs font-semibold text-cyan-400">
                        Arquitetura Full-Stack & Automação
                      </p>
                      <p className="text-[11px] text-slate-300">
                        Interfaces modernas conectadas a ERPs, bancos de dados e agentes de IA.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                        className="p-2.5 rounded-lg bg-slate-950/85 hover:bg-cyan-500 text-white hover:text-slate-950 border border-slate-700 transition-all"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Ativar som' : 'Silenciar vídeo'}
                        className="p-2.5 rounded-lg bg-slate-950/85 hover:bg-cyan-500 text-white hover:text-slate-950 border border-slate-700 transition-all"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barra de Autoridade / Métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-10 border-t border-slate-800/70">
            {[
              { value: '15+ Anos', label: 'Experiência no Mercado Financeiro & Gestão' },
              { value: 'Odoo 19', label: 'Especialização em Python ORM & PostgreSQL' },
              { value: 'Full-Stack', label: 'React, JavaScript, Tailwind CSS & APIs' },
              { value: '100% Foco', label: 'Em ROI, Automação e Conversão Real' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE / DIFERENCIAL DE NEGÓCIO */}
      <section id="sobre" className="py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Por que trabalhar comigo
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Código limpo guiado por regras de negócio e margem financeira.
              </h2>
              <p className="text-slate-300 leading-relaxed">
                A maioria dos desenvolvedores olha apenas para a tela ou para a biblioteca da moda.
                Com bagagem de 15 anos no mercado financeiro, gestão de redes de franquias e
                graduação em Ciência da Computação (FMU), construo tecnologia pensando no caixa e
                na operação da sua empresa.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Atuação prática como Desenvolvedor Python na Isy.one (Odoo 19)',
                  'Fundador da MRS Soluções — projetos sob medida para PMEs',
                  'Domínio ponta a ponta: do banco de dados SQL à interface React'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: TrendingUp,
                  title: 'Visão Financeira & KPIs',
                  desc: 'Cada funcionalidade é projetada para reduzir custos operacionais, evitar erros manuais ou aumentar a conversão de vendas.'
                },
                {
                  icon: Database,
                  title: 'Arquitetura ERP & Dados',
                  desc: 'Experiência real com Odoo 19, PostgreSQL, SQL e integrações fiscais/bancárias críticas para o dia a dia empresarial.'
                },
                {
                  icon: Cpu,
                  title: 'IA Integrada ao Fluxo',
                  desc: 'Uso prático de LLMs (Claude, OpenAI) e scripts Python para automatizar análises, relatórios e atendimento.'
                },
                {
                  icon: Globe,
                  title: 'Front-End de Alta Conversão',
                  desc: 'Interfaces responsivas em React e Tailwind CSS com carregamento rápido e experiência intuitiva em qualquer dispositivo.'
                }
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS / SOLUÇÕES MRS */}
      <section id="servicos" className="py-20 bg-slate-900/30 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Capacidades Técnicas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Soluções desenvolvidas pela MRS Soluções
            </h2>
            <p className="text-slate-400 mt-3">
              Do desenvolvimento web moderno à automação profunda de back-office e inteligência
              artificial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: 'Sites & Aplicações React',
                subtitle: 'Presença digital e sistemas web',
                items: [
                  'Landing pages de alta conversão e SEO otimizado',
                  'Portais corporativos e plataformas marketplace',
                  'Dashboards interativos responsivos em React +