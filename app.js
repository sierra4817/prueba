// Dynamic Course Manager - Visión Trading Pro
const courseData = {
  module1: {
    id: "module1",
    title: "1. Introducción a Futuros",
    completed: false,
    unlocked: true,
    score: 0,
    content: `
      <p>Bienvenido al <strong>Módulo 1</strong>. En esta lección aprenderemos los fundamentos técnicos y estructurales del mercado de futuros, esenciales antes de arriesgar un solo dólar.</p>
      
      <h3>¿Qué es un Contrato de Futuros?</h3>
      <p>Un contrato de futuros es un acuerdo financiero estandarizado para comprar o vender un activo (como índices de acciones, materias primas o monedas) a un precio predeterminado en una fecha futura. A diferencia del mercado spot o de acciones, no eres dueño de una porción de una empresa; estás operando contratos de compromiso de valor.</p>
      
      <div class="concept-grid">
        <div class="concept-card">
          <div class="concept-card-title">🏢 Mercado Regulado y Centralizado</div>
          <p style="font-size: 0.85rem;">Todos los contratos se negocian en bolsas centralizadas como el <strong>CME Group</strong> (Chicago Mercantile Exchange). Esto elimina la manipulación de los brokers de CFD y proporciona un libro de órdenes transparente y regulado.</p>
        </div>
        <div class="concept-card">
          <div class="concept-card-title">⚙️ Contratos Estandarizados</div>
          <p style="font-size: 0.85rem;">Cada contrato tiene un tamaño predefinido, fecha de vencimiento (trimestral en índices) y especificaciones precisas que no varían.</p>
        </div>
      </div>

      <h3>Apalancamiento y Margen</h3>
      <p>Los futuros se operan usando "margen". En lugar de pagar el valor total del contrato (que puede ser de más de $200,000 para el S&P 500), solo necesitas depositar una pequeña fracción como garantía colateral para abrir y mantener la posición.</p>
      
      <ul>
        <li><strong>Margen Inicial:</strong> La cantidad de capital requerida en tu cuenta de corretaje para abrir una posición de 1 contrato.</li>
        <li><strong>Margen de Mantenimiento:</strong> El capital mínimo que debe permanecer en tu cuenta mientras la operación esté abierta. Si tu balance cae por debajo de este nivel, sufrirás una <em>llamada de margen (Margin Call)</em> y el broker cerrará tu posición con pérdidas inmediatamente.</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ Alerta de Riesgo:</strong> El apalancamiento es un arma de doble filo. Permite multiplicar tus ganancias pero también tus pérdidas de forma acelerada si no utilizas un stop loss estricto.
      </div>

      <h3>Entendiendo los Ticks y el Tamaño del Punto</h3>
      <p>En el mercado de futuros, los precios no se mueven en centavos individuales, sino en <strong>ticks</strong> (la fluctuación mínima de precio). Cada tick tiene un valor monetario predeterminado según el tipo de contrato:</p>

      <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-family: var(--font-mono); font-size: 0.9rem; border: 1px solid var(--border-color);">
        <thead>
          <tr style="background: var(--bg-tertiary); text-align: left;">
            <th style="padding: 10px; border-bottom: 2px stroke var(--border-color);">Contrato</th>
            <th style="padding: 10px; border-bottom: 2px stroke var(--border-color);">Activo</th>
            <th style="padding: 10px; border-bottom: 2px stroke var(--border-color);">Tamaño Tick</th>
            <th style="padding: 10px; border-bottom: 2px stroke var(--border-color);">Valor por Tick</th>
            <th style="padding: 10px; border-bottom: 2px stroke var(--border-color);">Valor por Punto (4 Ticks)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 10px;"><strong>ES</strong></td>
            <td style="padding: 10px;">E-mini S&P 500</td>
            <td style="padding: 10px;">0.25</td>
            <td style="padding: 10px; color: var(--color-bull);">$12.50</td>
            <td style="padding: 10px; font-weight: 700;">$50.00</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 10px;"><strong>MES</strong></td>
            <td style="padding: 10px;">Micro E-mini S&P 500</td>
            <td style="padding: 10px;">0.25</td>
            <td style="padding: 10px; color: var(--color-bull);">$1.25</td>
            <td style="padding: 10px; font-weight: 700;">$5.00</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 10px;"><strong>NQ</strong></td>
            <td style="padding: 10px;">E-mini Nasdaq 100</td>
            <td style="padding: 10px;">0.25</td>
            <td style="padding: 10px; color: var(--color-bull);">$5.00</td>
            <td style="padding: 10px; font-weight: 700;">$20.00</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 10px;"><strong>MNQ</strong></td>
            <td style="padding: 10px;">Micro E-mini Nasdaq 100</td>
            <td style="padding: 10px;">0.25</td>
            <td style="padding: 10px; color: var(--color-bull);">$0.50</td>
            <td style="padding: 10px; font-weight: 700;">$2.00</td>
          </tr>
        </tbody>
      </table>

      <p>Por ejemplo, si compras 1 contrato de <strong>E-mini S&P 500 (ES)</strong> en 4800.00 y lo vendes en 4802.00, el precio se ha movido 2 puntos completos (8 ticks). Tu ganancia será: 2 puntos x $50 = $100.</p>
    `,
    quiz: [
      {
        q: "¿Qué es el margen de mantenimiento en futuros?",
        options: [
          "El capital mínimo requerido en tu cuenta para mantener abierta una posición.",
          "El capital inicial que cobra la bolsa como comisión no reembolsable.",
          "La ganancia garantizada del broker por día de operativa."
        ],
        answer: 0,
        explanation: "El margen de mantenimiento es la cantidad mínima de fondos propios que debe haber en la cuenta de corretaje para mantener la posición abierta."
      },
      {
        q: "Si operas 1 contrato de E-mini S&P 500 (ES) y el precio sube 2 puntos completos, ¿cuál es tu ganancia?",
        options: [
          "$20.00 dólares.",
          "$100.00 dólares.",
          "$250.00 dólares."
        ],
        answer: 1,
        explanation: "Cada punto completo en ES equivale a $50 dólares (4 ticks de $12.50). Por lo tanto, 2 puntos = $100 dólares de ganancia."
      },
      {
        q: "¿Dónde se negocian de forma oficial y regulada los futuros de índices americanos como el ES y NQ?",
        options: [
          "En plataformas OTC descentralizadas sin regulación.",
          "En la bolsa centralizada CME Group (Chicago Mercantile Exchange).",
          "En cualquier broker de Forex a través de contratos por diferencia CFD."
        ],
        answer: 1,
        explanation: "Los futuros de índices americanos están centralizados y regulados en el CME Group, garantizando transparencia de precios y volumen real."
      }
    ]
  },
  module2: {
    id: "module2",
    title: "2. Acción del Precio",
    completed: false,
    unlocked: false,
    score: 0,
    content: `
      <p>La base de un gráfico de trading es el precio. En este módulo estudiaremos la <strong>Acción del Precio (Price Action)</strong>, que consiste en interpretar la psicología del mercado leyendo velas y estructuras, sin depender de indicadores rezagados.</p>

      <h3>Lectura de Velas Japonesas</h3>
      <p>Una vela japonesa nos muestra la batalla ganada o perdida entre compradores y vendedores durante un marco de tiempo específico (por ejemplo, 5 minutos o 1 hora).</p>
      
      <ul>
        <li><strong>Cuerpo de la vela:</strong> Muestra la distancia entre el precio de apertura y de cierre. Un cuerpo verde indica que ganaron los compradores; uno rojo indica control vendedor.</li>
        <li><strong>Mechas (Sombras):</strong> Indican rechazo de precios. Una mecha larga superior significa que los compradores intentaron empujar el precio al alza pero los vendedores los obligaron a retroceder antes del cierre de la vela.</li>
      </ul>

      <div class="concept-grid">
        <div class="concept-card">
          <div class="concept-card-title">🟢 Vela de Intención Alcista</div>
          <p style="font-size: 0.85rem;">Cuerpo grande, verde, con poca mecha. Muestra un fuerte impulso de compra sostenido.</p>
        </div>
        <div class="concept-card">
          <div class="concept-card-title">🔴 Vela de Rechazo Bajista (Pin Bar)</div>
          <p style="font-size: 0.85rem;">Mecha superior muy larga y cuerpo pequeño en la parte inferior. Indica que las compras fallaron y el precio fue rechazado con fuerza.</p>
        </div>
      </div>

      <h3>Soportes y Resistencias Técnicos</h3>
      <p>Son niveles horizontales clave donde anteriormente el mercado ha detenido su marcha y ha rebotado debido a desequilibrios entre oferta y demanda institucional.</p>
      
      <ul>
        <li><strong>Soporte:</strong> Zona de precios "barata" donde el interés de compra supera al de venta. El precio tiende a rebotar al alza al tocar este nivel.</li>
        <li><strong>Resistencia:</strong> Zona de precios "cara" donde la presión de venta supera a la de compra, deteniendo las subidas del precio y provocando giros a la baja.</li>
      </ul>

      <div class="highlight-box">
        <strong>📈 Ley de Alternancia (Polaridad):</strong> Cuando un nivel de resistencia fuerte es roto al alza, se convierte automáticamente en un nivel de soporte futuro si el precio regresa a testearlo.
      </div>

      <h3>Estructura de Mercado</h3>
      <p>El mercado no se mueve en línea recta, sino en zigzag formando oscilaciones (impulsos y retrocesos):</p>
      <ul>
        <li><strong>Tendencia Alcista:</strong> Caracterizada por una serie de máximos más altos (HH - Higher Highs) y mínimos más altos (HL - Higher Lows).</li>
        <li><strong>Tendencia Bajista:</strong> Caracterizada por máximos más bajos (LH - Lower Highs) y mínimos más bajos (LL - Lower Lows).</li>
      </ul>
    `,
    quiz: [
      {
        q: "¿Qué indica una vela japonesa con un cuerpo extremadamente pequeño y mechas muy largas en ambos extremos (Doji)?",
        options: [
          "Fuerte tendencia alcista inminente.",
          "Indecisión en el mercado y equilibrio de fuerzas entre compradores y vendedores.",
          "Que las instituciones financieras han retirado todas sus órdenes del mercado."
        ],
        answer: 1,
        explanation: "Un Doji representa equilibrio temporal e indecisión, ya que la sesión cerró prácticamente en el mismo precio en el que abrió a pesar de las oscilaciones."
      },
      {
        q: "¿Cuál es la forma correcta de trazar una línea de tendencia alcista válida?",
        options: [
          "Uniendo los máximos decrecientes de las velas.",
          "Uniendo al menos dos mínimos ascendentes sucesivos.",
          "Trazando una línea horizontal sobre el soporte más fuerte."
        ],
        answer: 1,
        explanation: "Una línea de tendencia alcista se traza conectando los mínimos más altos (Higher Lows) que sostienen la estructura alcista."
      },
      {
        q: "Si el precio rompe una Resistencia fuerte al alza y luego retrocede hacia ella, ¿qué comportamiento se espera según la ley de polaridad?",
        options: [
          "Que actúe como un nuevo Soporte y el precio rebote al alza.",
          "Que el precio continúe cayendo libremente sin frenar.",
          "La resistencia rota no tiene ninguna relevancia futura."
        ],
        answer: 0,
        explanation: "La ley de polaridad indica que las resistencias rotas tienden a convertirse en soportes, ya que los vendedores perdedores buscan cerrar a break-even y entran nuevos compradores."
      }
    ]
  },
  module3: {
    id: "module3",
    title: "3. Sistema Visión Pro",
    completed: false,
    unlocked: false,
    score: 0,
    content: `
      <p>En este módulo aprenderemos la estrategia central de <strong>Visión Trading Pro</strong>, inspirada en las reglas de cálculo de nuestro script automatizado para TradingView.</p>

      <div class="strategy-box">
        <h4 style="color: var(--color-bull); margin-bottom: 8px;">📊 Filosofía del Sistema Integral</h4>
        <p>No buscamos adivinar techos ni suelos. Nuestra meta es alinearnos con el dinero institucional a favor de la tendencia usando un <strong>filtro de tendencia</strong> estricto y un <strong>gatillo de momento</strong> objetivo.</p>
      </div>

      <h3>Componente 1: Filtro de Tendencia (EMA 200)</h3>
      <p>La Media Móvil Exponencial de 200 períodos (EMA 200) es el árbitro del sistema. Nos dice en qué dirección del mercado tenemos las probabilidades a nuestro favor:</p>
      <ul>
        <li><strong>Filtro Alcista:</strong> Si el precio está por encima de la EMA 200, <strong>solo se permiten operaciones de compra (Long)</strong>.</li>
        <li><strong>Filtro Bajista:</strong> Si el precio está por debajo de la EMA 200, <strong>solo se permiten operaciones de venta (Short)</strong>.</li>
      </ul>

      <h3>Componente 2: Gatillo de Momento (RSI 14)</h3>
      <p>Para entrar al mercado, requerimos que el Índice de Fuerza Relativa (RSI de 14 períodos) confirme la aceleración del precio cruzando su línea de control media (50):</p>
      <ul>
        <li><strong>Gatillo de Compra (Long):</strong> El precio cotiza por encima de la EMA 200 AND el RSI de 14 cruza por encima de 50.</li>
        <li><strong>Gatillo de Venta (Short):</strong> El precio cotiza por debajo de la EMA 200 AND el RSI de 14 cruza por debajo de 50.</li>
      </ul>

      <h3>Componente 3: Ubicación Técnica del Stop Loss</h3>
      <p>Un Stop Loss nunca debe colocarse en un nivel aleatorio. En el sistema Visión Trading Pro:</p>
      <ul>
        <li>En un <strong>Long</strong>, el Stop Loss se coloca justo por debajo del mínimo de oscilación reciente (Swing Low - un lookback de 3 a 5 velas atrás).</li>
        <li>En un <strong>Short</strong>, el Stop Loss se coloca justo por encima del máximo de oscilación reciente (Swing High).</li>
      </ul>

      <div class="highlight-box">
        <strong>🚀 Regla de Entrada:</strong> Espera siempre a que cierre la vela de confirmación. Nunca entres antes del cierre de la vela, ya que el RSI podría retroceder y cancelar la señal antes de consolidarse.
      </div>
    `,
    quiz: [
      {
        q: "Según el sistema 'Visión Trading Pro', ¿cuándo se valida una señal de compra (Long)?",
        options: [
          "Cuando el precio está por encima de la EMA 200 y el RSI 14 cruza o se mantiene por encima de 50.",
          "Cuando el precio está por debajo de la EMA 200 y el RSI está en sobrecompra de 70.",
          "Cuando el RSI cruza 30 hacia arriba sin importar la EMA 200."
        ],
        answer: 0,
        explanation: "La condición de compra requiere tendencia alcista (precio > EMA 200) combinada con momento alcista (RSI 14 > 50)."
      },
      {
        q: "¿Cuál es la función de la EMA 200 en este sistema operativo?",
        options: [
          "Determinar el tamaño de la posición a comprar.",
          "Actuar como filtro direccional de tendencia principal para evitar operar en contra de las instituciones.",
          "Es el gatillo exacto para cerrar la operación con ganancias."
        ],
        answer: 1,
        explanation: "La EMA 200 sirve de filtro principal: si el precio está arriba solo buscamos compras, si está abajo solo buscamos ventas."
      },
      {
        q: "¿Dónde debe ubicarse técnicamente el Stop Loss en una posición de Venta (Short)?",
        options: [
          "A una distancia aleatoria de 5 puntos para ahorrar margen.",
          "Justo por encima del último máximo de oscilación relevante (Swing High).",
          "Exactamente sobre el precio de la EMA 200 en todo momento."
        ],
        answer: 1,
        explanation: "El Stop Loss se sitúa sobre el último máximo relativo (Swing High) porque invalidaría la estructura de máximos más bajos de la tendencia bajista."
      }
    ]
  },
  module4: {
    id: "module4",
    title: "4. Gestión y Psicología",
    completed: false,
    unlocked: false,
    score: 0,
    content: `
      <p>Puedes tener la mejor estrategia del mundo, pero sin una gestión del riesgo matemática y una disciplina psicológica inquebrantable, tu cuenta terminará en cero. Este es el módulo más importante del curso.</p>

      <h3>La Regla Matemática del 1%</h3>
      <p>Un trader profesional ve el dinero como su inventario de negocio, no como fichas de casino. La regla de oro dicta:</p>
      
      <div class="highlight-box" style="border-color: var(--color-bear);">
        <strong>📈 Máximo Riesgo por Operación = 1% del capital de la cuenta.</strong><br>
        Si tienes una cuenta de $10,000, lo máximo que tienes permitido perder en una sola operación fallida es $100.
      </div>

      <p>Si arriesgas el 1% por operación, necesitarías una racha improbable de 100 operaciones perdedoras seguidas para quebrar tu cuenta. Si arriesgas el 10%, con solo 10 malas operaciones seguidas habrás destruido todo tu capital.</p>

      <h3>El Ratio Riesgo/Beneficio (R:B)</h3>
      <p>Nunca entres a una operación si tu beneficio proyectado (Take Profit) es menor que tu pérdida potencial (Stop Loss). Buscamos ratios mínimos de <strong>1:2</strong>.</p>
      <ul>
        <li>Si arriesgas $100 en el Stop Loss, tu objetivo de Take Profit debe ser de al menos $200 de ganancia.</li>
        <li>Con un ratio de 1:2, solo necesitas acertar el 34% de tus operaciones para ser rentable en el largo plazo.</li>
      </ul>

      <h3>Psicología del Trading (Psicotrading)</h3>
      <p>El mercado de futuros es un entorno de alta volatilidad y apalancamiento que explota las debilidades psicológicas humanas. Albert insiste en estas tres reglas:</p>

      <div class="concept-grid">
        <div class="concept-card">
          <div class="concept-card-title">🚫 Evita el FOMO</div>
          <p style="font-size: 0.85rem;"><em>Fear Of Missing Out</em> (miedo a perderse el movimiento). Si el precio ya se disparó sin darte entrada, no lo persigas. El mercado siempre da nuevas oportunidades; persigue tu plan, no el precio.</p>
        </div>
        <div class="concept-card">
          <div class="concept-card-title">📉 Controla el Drawdown Diario</div>
          <p style="font-size: 0.85rem;">Define tu límite de pérdida diaria (por ejemplo, 3%). Si pierdes esa cantidad en un día, apaga las pantallas. Operar bajo frustración te llevará a la "operativa de venganza" y a pérdidas masivas.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Si aplicas estrictamente la regla de gestión de riesgo del 1% en una cuenta de $50,000, ¿cuál es tu pérdida máxima permitida en un trade?",
        options: [
          "$50.00 dólares.",
          "$500.00 dólares.",
          "$5,000.00 dólares."
        ],
        answer: 1,
        explanation: "El 1% de $50,000 es $500. Ese es el límite absoluto de dólares arriesgados en la distancia de tu Stop Loss."
      },
      {
        q: "Si tu ratio Riesgo/Beneficio es 1:2 y arriesgas $100 en un trade, ¿dónde debes fijar tu objetivo de ganancia en dólares?",
        options: [
          "En $50 dólares.",
          "En $100 dólares.",
          "En $200 dólares."
        ],
        answer: 2,
        explanation: "En un ratio de 1:2, la ganancia potencial (Take Profit) debe ser el doble de la pérdida arriesgada (Stop Loss), es decir, $200."
      },
      {
        q: "¿Qué acción define a un trader disciplinado al alcanzar el límite máximo de pérdida diaria (Drawdown diario)?",
        options: [
          "Aumentar el apalancamiento al 100x para recuperar rápido lo perdido.",
          "Apagar las pantallas de inmediato, aceptar las pérdidas como costo del negocio y no volver a operar hasta el día siguiente.",
          "Cambiar de activo a uno que no conozca para probar suerte."
        ],
        answer: 1,
        explanation: "Aceptar la pérdida y retirarse para evitar operar con sesgo emocional o frustración es el pilar de la longevidad en el trading."
      }
    ]
  }
};

// Global App State
let activeSection = "welcome";
let activeQuizAnswers = {}; // { questionIndex: selectedOptionIndex }

// Load progress from localStorage
const loadProgress = () => {
  const savedProgress = localStorage.getItem("vision_trading_progress");
  if (savedProgress) {
    try {
      const parsed = JSON.parse(savedProgress);
      Object.keys(parsed).forEach(key => {
        if (courseData[key]) {
          courseData[key].completed = parsed[key].completed;
          courseData[key].unlocked = parsed[key].unlocked;
          courseData[key].score = parsed[key].score;
        }
      });
    } catch (e) {
      console.error("Error parsing saved progress", e);
    }
  }
  updateUIProgress();
};

// Save progress to localStorage
const saveProgress = () => {
  const stateToSave = {};
  Object.keys(courseData).forEach(key => {
    stateToSave[key] = {
      completed: courseData[key].completed,
      unlocked: courseData[key].unlocked,
      score: courseData[key].score
    };
  });
  localStorage.setItem("vision_trading_progress", JSON.stringify(stateToSave));
};

// Update Progress bars and sidebar locking badges
const updateUIProgress = () => {
  let completedCount = 0;
  const totalModules = 4;

  // Render sidebar status items
  for (let i = 1; i <= totalModules; i++) {
    const modId = `module${i}`;
    const mod = courseData[modId];
    const statusEl = document.getElementById(`status-${modId}`);
    const menuItemEl = document.querySelector(`[data-target="${modId}"]`);

    if (!statusEl) continue;

    if (mod.completed) {
      completedCount++;
      statusEl.innerHTML = '<i data-lucide="check-circle" class="status-completed"></i>';
    } else if (mod.unlocked) {
      statusEl.innerHTML = '<i data-lucide="circle" class="status-unlocked" style="color: var(--color-accent)"></i>';
    } else {
      statusEl.innerHTML = '<i data-lucide="lock" class="status-locked"></i>';
    }

    // Toggle styling on sidebar menu items based on lock state
    if (menuItemEl) {
      if (mod.unlocked) {
        menuItemEl.style.opacity = "1";
        menuItemEl.style.pointerEvents = "auto";
      } else {
        menuItemEl.style.opacity = "0.4";
        menuItemEl.style.pointerEvents = "none";
      }
    }
  }

  // Update progress percentage UI
  const percentage = Math.round((completedCount / totalModules) * 100);
  document.getElementById("progress-text").textContent = `${percentage}%`;
  document.getElementById("progress-bar").style.width = `${percentage}%`;

  // Re-trigger Lucide icon renders
  lucide.createIcons();
};

// Reset progress button helper (for testing, if needed)
window.resetAcademyProgress = () => {
  localStorage.removeItem("vision_trading_progress");
  Object.keys(courseData).forEach((key, index) => {
    courseData[key].completed = false;
    courseData[key].unlocked = index === 0;
    courseData[key].score = 0;
  });
  saveProgress();
  updateUIProgress();
  showSection("welcome");
};

// Section Router
const showSection = (sectionId) => {
  // Deactivate active section
  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));

  // Activate target section
  const targetSec = document.getElementById(sectionId);
  if (targetSec) {
    targetSec.classList.add("active");
  }

  const targetMenuItem = document.querySelector(`[data-target="${sectionId}"]`);
  if (targetMenuItem) {
    targetMenuItem.classList.add("active");
  }

  activeSection = sectionId;

  // Load section specific setups
  if (sectionId.startsWith("module")) {
    loadModuleContent(sectionId);
  }
};

// Render lesson and quiz dynamically
const loadModuleContent = (moduleId) => {
  const mod = courseData[moduleId];
  if (!mod) return;

  // Render Lesson Content
  const lessonContainer = document.getElementById(`lesson-content-${mod.id === "module1" ? "m1" : mod.id === "module2" ? "m2" : mod.id === "module3" ? "m3" : "m4"}`);
  if (lessonContainer) {
    lessonContainer.innerHTML = mod.content;
  }

  // Render Quiz
  const quizContainer = document.getElementById(`quiz-${mod.id === "module1" ? "m1" : mod.id === "module2" ? "m2" : mod.id === "module3" ? "m3" : "m4"}`);
  if (quizContainer) {
    renderQuiz(mod, quizContainer);
  }
};

// Render Quiz structure inside target container
const renderQuiz = (module, container) => {
  activeQuizAnswers = {}; // Reset active selection answers
  
  let html = `<div class="quiz-questions-wrapper">`;
  
  module.quiz.forEach((qObj, qIndex) => {
    html += `
      <div class="quiz-question-block" style="margin-bottom: 24px;" data-q-index="${qIndex}">
        <p class="quiz-question">${qIndex + 1}. ${qObj.q}</p>
        <div class="quiz-options">
    `;
    
    qObj.options.forEach((opt, optIndex) => {
      html += `
        <button class="quiz-option" onclick="handleSelectOption('${module.id}', ${qIndex}, ${optIndex}, this)">
          ${opt}
        </button>
      `;
    });
    
    html += `
        </div>
        <div class="quiz-feedback" id="feedback-${module.id}-${qIndex}"></div>
      </div>
    `;
  });

  html += `</div>`;
  
  // Quiz Action bar
  html += `
    <div class="quiz-action-bar">
      <button class="btn btn-success" id="btn-submit-quiz-${module.id}" onclick="submitQuiz('${module.id}')" disabled>
        <i data-lucide="check"></i> Evaluar Respuestas
      </button>
    </div>
  `;

  container.innerHTML = html;
  lucide.createIcons();
};

// Handles option selection styling & storage
window.handleSelectOption = (moduleId, qIndex, optIndex, buttonElement) => {
  const mod = courseData[moduleId];
  if (mod.completed) return; // Ignore if already passed

  const questionBlock = buttonElement.closest(".quiz-question-block");
  
  // Remove selection from siblings
  questionBlock.querySelectorAll(".quiz-option").forEach(btn => {
    btn.classList.remove("correct", "incorrect");
    btn.style.borderColor = "var(--border-color)";
    btn.style.background = "var(--bg-tertiary)";
  });

  // Style selected button
  buttonElement.style.borderColor = "var(--color-accent)";
  buttonElement.style.background = "rgba(59, 130, 246, 0.08)";

  // Store selection
  activeQuizAnswers[qIndex] = optIndex;

  // Check if all questions have been answered to enable submission button
  const totalQuestions = mod.quiz.length;
  const answeredCount = Object.keys(activeQuizAnswers).length;
  
  const submitBtn = document.getElementById(`btn-submit-quiz-${moduleId}`);
  if (submitBtn) {
    submitBtn.disabled = answeredCount !== totalQuestions;
  }
};

// Evaluate Quiz Answers
window.submitQuiz = (moduleId) => {
  const mod = courseData[moduleId];
  if (!mod) return;

  const quizContainer = document.getElementById(`quiz-${mod.id === "module1" ? "m1" : mod.id === "module2" ? "m2" : mod.id === "module3" ? "m3" : "m4"}`);
  let correctCount = 0;
  const totalQuestions = mod.quiz.length;

  mod.quiz.forEach((qObj, qIndex) => {
    const selectedOpt = activeQuizAnswers[qIndex];
    const questionBlock = quizContainer.querySelector(`[data-q-index="${qIndex}"]`);
    const options = questionBlock.querySelectorAll(".quiz-option");
    const feedbackEl = document.getElementById(`feedback-${moduleId}-${qIndex}`);

    // Disable options
    options.forEach(btn => btn.classList.add("disabled"));

    if (selectedOpt === qObj.answer) {
      correctCount++;
      options[selectedOpt].classList.add("correct");
      
      feedbackEl.className = "quiz-feedback correct";
      feedbackEl.innerHTML = `<strong>🟢 ¡Correcto!</strong> ${qObj.explanation}`;
    } else {
      options[selectedOpt].classList.add("incorrect");
      options[qObj.answer].classList.add("correct");
      
      feedbackEl.className = "quiz-feedback incorrect";
      feedbackEl.innerHTML = `<strong>🔴 Incorrecto.</strong> La respuesta correcta es: "${qObj.options[qObj.answer]}". <br>${qObj.explanation}`;
    }
  });

  // Calculate grade score
  const score = Math.round((correctCount / totalQuestions) * 100);
  mod.score = score;

  // Hide submit button, replace with completion state
  const actionBar = quizContainer.querySelector(".quiz-action-bar");
  
  if (score === 100) {
    mod.completed = true;
    
    // Unlock next module
    const nextModIndex = parseInt(moduleId.replace("module", "")) + 1;
    const nextModId = `module${nextModIndex}`;
    if (courseData[nextModId]) {
      courseData[nextModId].unlocked = true;
    }

    saveProgress();
    updateUIProgress();

    actionBar.innerHTML = `
      <div class="quiz-completed-overlay" style="width: 100%;">
        <div class="quiz-score-circle">10/10</div>
        <h4 style="color: var(--color-bull); margin-bottom: 8px;">🎉 ¡Excelente! Aprobado con éxito</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Has comprendido todos los conceptos clave de este módulo.</p>
        ${courseData[`module${parseInt(moduleId.replace("module", "")) + 1}`] 
          ? `<button class="btn btn-success" onclick="showSection('module${parseInt(moduleId.replace("module", "")) + 1}')">Siguiente Módulo <i data-lucide='arrow-right'></i></button>`
          : `<button class="btn btn-success" onclick="showSection('simulator')">Ir al Simulador de Gráficos <i data-lucide='play'></i></button>`
        }
      </div>
    `;
  } else {
    // Failed (needs 100% correct, typical in premium short academies)
    actionBar.innerHTML = `
      <div class="quiz-completed-overlay" style="width: 100%;">
        <div class="quiz-score-circle fail">${correctCount}/${totalQuestions}</div>
        <h4 style="color: var(--color-bear); margin-bottom: 8px;">⚠️ Cuestionario no superado</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Para avanzar al siguiente nivel debes contestar correctamente el 100% de las preguntas.</p>
        <button class="btn btn-secondary" onclick="loadModuleContent('${moduleId}')">Reintentar Evaluación</button>
      </div>
    `;
  }
  
  lucide.createIcons();
};

// Audio Narration State
let activeAudio = null;
let activeNarratorButton = null;

const getApiKey = () => {
  const stored = localStorage.getItem("vision_elevenlabs_api_key");
  if (!stored || stored === "null" || stored === "undefined" || stored.trim() === "") {
    return "sk_cf0eff44faa9a9838a53af3850a02dc60c96e883b95570ce";
  }
  return stored.trim();
};

const stopAllSpeech = () => {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  
  // Reset all narration buttons in UI
  document.querySelectorAll(".btn-narrate").forEach(btn => {
    btn.classList.remove("active");
    btn.style.background = "";
    btn.style.color = "";
    btn.style.borderColor = "";
    const span = btn.querySelector("span");
    if (span) span.textContent = "Narrar Lección";
    const icon = btn.querySelector("i");
    if (icon) icon.setAttribute("data-lucide", "volume-2");
  });
  lucide.createIcons();
  activeNarratorButton = null;
};

const handleNarrateClick = async (moduleId, button) => {
  // If this button is already active, we stop all narration and return
  if (button === activeNarratorButton) {
    stopAllSpeech();
    return;
  }

  // Stop any other active speech
  stopAllSpeech();

  const mod = courseData[moduleId];
  if (!mod) return;

  // Extract clean text from lesson content container
  const containerId = `lesson-content-${moduleId === "module1" ? "m1" : moduleId === "module2" ? "m2" : moduleId === "module3" ? "m3" : "m4"}`;
  const container = document.getElementById(containerId);
  if (!container) return;

  // Get clean innerText (without HTML tags)
  const textToRead = container.innerText || container.textContent;

  // Check ElevenLabs settings
  const apiKey = getApiKey();
  const voiceId = "c6rAmJGsdzNWAIVkws45";

  if (apiKey) {
    // Narrate via ElevenLabs API
    try {
      button.disabled = true;
      button.classList.add("loading");
      button.querySelector("span").textContent = "Generando Audio...";
      
      console.log(`[Narrador] Enviando petición a ElevenLabs. Voice ID: ${voiceId}`);
      
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": apiKey
        },
        body: JSON.stringify({
          text: textToRead,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75
          }
        })
      });

      if (!response.ok) {
        let errMsg = `Código ${response.status}`;
        try {
          const errJson = await response.json();
          if (errJson && errJson.detail && errJson.detail.message) {
            errMsg = errJson.detail.message;
          }
        } catch (e) {
          errMsg = response.statusText || errMsg;
        }
        throw new Error(errMsg);
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      activeAudio = new Audio(audioUrl);
      
      button.disabled = false;
      button.classList.remove("loading");
      button.classList.add("active");
      button.style.background = "rgba(16, 185, 129, 0.15)";
      button.style.color = "var(--color-bull)";
      button.style.borderColor = "var(--color-bull)";
      button.querySelector("span").textContent = "Detener";
      button.querySelector("i").setAttribute("data-lucide", "square");
      lucide.createIcons();
      activeNarratorButton = button;

      console.log(`[Narrador] Reproduciendo audio generado por ElevenLabs.`);
      activeAudio.play();
      activeAudio.onended = () => {
        stopAllSpeech();
      };
    } catch (err) {
      button.disabled = false;
      button.classList.remove("loading");
      button.querySelector("span").textContent = "Narrar Lección";
      console.warn(`[Narrador] Error con ElevenLabs: ${err.message}. Usando fallback.`);
      alert(`Error con ElevenLabs: ${err.message}. Usando el narrador gratuito por defecto...`);
      speakBrowser(textToRead, button);
    }
  } else {
    // Fallback to Web Speech API
    console.log(`[Narrador] No hay API Key configurada. Usando Web Speech API del navegador.`);
    speakBrowser(textToRead, button);
  }
};

const speakBrowser = (text, button) => {
  if (!window.speechSynthesis) {
    alert("Tu navegador no soporta síntesis de voz.");
    return;
  }

  window.speechSynthesis.cancel();
  
  // Clean up double spaces/lines
  const cleanText = text.replace(/\s+/g, " ").trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "es-ES";
  
  // Find a spanish voice
  const voices = window.speechSynthesis.getVoices();
  const esVoice = voices.find(v => v.lang.startsWith("es-ES") || v.lang.startsWith("es"));
  if (esVoice) {
    utterance.voice = esVoice;
  }

  utterance.onstart = () => {
    button.classList.add("active");
    button.style.background = "rgba(59, 130, 246, 0.15)";
    button.style.color = "var(--color-accent)";
    button.style.borderColor = "var(--color-accent)";
    button.querySelector("span").textContent = "Detener";
    button.querySelector("i").setAttribute("data-lucide", "square");
    lucide.createIcons();
    activeNarratorButton = button;
  };

  utterance.onend = () => {
    stopAllSpeech();
  };

  utterance.onerror = () => {
    stopAllSpeech();
  };

  window.speechSynthesis.speak(utterance);
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Force initialize or upgrade the API Key if empty, corrupt, or matching the old key
  const currentKey = localStorage.getItem("vision_elevenlabs_api_key");
  const defaultKey = "sk_cf0eff44faa9a9838a53af3850a02dc60c96e883b95570ce";
  const oldKey = "sk_d3c40fb422b9d257c30601542793b1787034f3e29f41d984";

  if (!currentKey || currentKey === "null" || currentKey === "undefined" || currentKey.trim() === "" || currentKey === oldKey) {
    localStorage.setItem("vision_elevenlabs_api_key", defaultKey);
  }

  // Navigation Menu Event Listeners
  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      showSection(target);
      stopAllSpeech(); // stop narrating on tab change
    });
  });

  // Delegated Event Listener for Narrate buttons
  document.addEventListener("click", (e) => {
    const button = e.target.closest(".btn-narrate");
    if (button) {
      const moduleId = button.getAttribute("data-module");
      handleNarrateClick(moduleId, button);
    }
  });

  // Audio settings modal setup
  const btnAudioSettings = document.getElementById("btn-audio-settings");
  const audioSettingsModal = document.getElementById("audio-settings-modal");
  const btnCloseAudioModal = document.getElementById("btn-close-audio-modal");
  const btnSaveAudioSettings = document.getElementById("btn-save-audio-settings");
  const elApiKeyInput = document.getElementById("el-api-key");

  if (btnAudioSettings) {
    // Load saved API Key
    elApiKeyInput.value = getApiKey();

    btnAudioSettings.addEventListener("click", () => {
      audioSettingsModal.style.display = "flex";
    });

    btnCloseAudioModal.addEventListener("click", () => {
      audioSettingsModal.style.display = "none";
    });

    btnSaveAudioSettings.addEventListener("click", () => {
      const apiKey = elApiKeyInput.value.trim();
      if (apiKey) {
        localStorage.setItem("vision_elevenlabs_api_key", apiKey);
        alert("Configuración guardada. Se utilizará la voz de ElevenLabs (c6rAmJGsdzNWAIVkws45) al narrar.");
      } else {
        localStorage.removeItem("vision_elevenlabs_api_key");
        alert("Configuración guardada. Se utilizará la voz del sistema por defecto.");
      }
      audioSettingsModal.style.display = "none";
    });

    // Close on overlay click
    audioSettingsModal.addEventListener("click", (e) => {
      if (e.target === audioSettingsModal) {
        audioSettingsModal.style.display = "none";
      }
    });
  }

  // Load progress
  loadProgress();
});
