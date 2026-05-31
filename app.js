// Dynamic Course Manager - Visión Trading Pro (30-Day Intensive)

// 30 Days Syllabus Data
const courseData = {
  day1: {
    id: "day1",
    pilar: 1,
    title: "El Precio es lo Único que Importa",
    unlocked: true,
    completed: false,
    challenge: "Identifica y documenta un sesgo de falsas expectativas que hayas tenido en tu operativa reciente o en tu fase de aprendizaje.",
    content: `
      <p>Comenzamos el <strong>Módulo 1: Mentalidad Ganadora</strong>. Como trader estoico, debes grabarte esta regla de oro: <strong>el precio es lo único que importa</strong>. El mercado no sabe quién eres, cuánto dinero necesitas, ni qué opinas sobre la economía mundial.</p>
      <h3>Desmitificando Sesgos y Expectativas</h3>
      <p>El principal enemigo del operador novato es su propia mente. Las falsas expectativas de dinero fácil y rápido deforman la realidad. Creer que el mercado se mueve de forma injusta o que el precio \"debe\" rebotar en un soporte es un error cognitivo destructivo.</p>
      <ul>
        <li><strong>Aceptación del Precio:</strong> El precio actual es la verdad objetiva del mercado. Si el precio sube contra tu posición corta, tu opinión es errónea, no el precio.</li>
        <li><strong>Desapego de Opiniones:</strong> No intentes tener la razón; busca ser rentable operando lo que ves, no lo que crees.</li>
      </ul>
      <div class="alert-box">
        <strong>📈 Regla Estoica:</strong> Controla tus reacciones internas. El mercado es un reflejo de flujos de capital, no una entidad que conspira contra ti.
      </div>
    `
  },
  day2: {
    id: "day2",
    pilar: 1,
    title: "Sesgos Cognitivos en el Trading",
    unlocked: false,
    completed: false,
    challenge: "Identifica y documenta un sesgo cognitivo propio (como el sesgo de confirmación o de aversión a la pérdida) durante tu análisis de mercado.",
    content: `
      <p>Hoy analizaremos los <strong>sesgos cognitivos</strong>. Son atajos mentales que nuestro cerebro utiliza de forma automática, pero que en el trading resultan fatales para el capital operativo.</p>
      <h3>Sesgos Principales</h3>
      <ul>
        <li><strong>Sesgo de Aversión a la Pérdida:</strong> Dolor desproporcionado ante una pérdida que te lleva a mover tu Stop Loss esperando un milagro.</li>
        <li><strong>Sesgo de Reciente:</strong> Darle más importancia a los resultados de las últimas operaciones, modificando tu estrategia tras solo 2 fallos consecutivos.</li>
      </ul>
      <p>Un trader pragmático neutraliza los sesgos utilizando reglas escritas y una bitácora objetiva.</p>
    `
  },
  day3: {
    id: "day3",
    pilar: 1,
    title: "La Ilusión de la Certeza",
    unlocked: false,
    completed: false,
    challenge: "Escribe en tu bitácora por qué una operación individual con setup perfecto puede ser perdedora y cómo afecta esto a tu mentalidad.",
    content: `
      <p>El mercado es un <strong>entorno de probabilidades, no de certezas</strong>. Cada operación individual tiene un resultado aleatorio e independiente de las anteriores.</p>
      <h3>La Distribución de Resultados</h3>
      <p>Incluso con un sistema de trading que tenga un 60% de acierto estadístico a largo plazo, es matemáticamente posible (y normal) experimentar rachas de 4 o 5 operaciones perdedoras consecutivas sin que el sistema esté roto.</p>
    `
  },
  day4: {
    id: "day4",
    pilar: 1,
    title: "Anatomía de la Manipulación de Mercado",
    unlocked: false,
    completed: false,
    challenge: "Busca en tu gráfico un caso de rompimiento falso (caza de stops) y documenta cómo reaccionó el precio tras atrapar a los operadores ansiosos.",
    content: `
      <p>Para no ser la presa, debes entender cómo opera el cazador. La manipulación de mercado no es una conspiración, sino la necesidad de <strong>liquidez institucional</strong>.</p>
      <h3>Trampas Técnicas y Caza de Liquidez</h3>
      <p>Los grandes participantes (bancos, fondos de cobertura) necesitan contrapartida para llenar sus órdenes masivas. Para comprar barato, inducen a los traders minoristas a vender rompiendo soportes de manera temporal para activar sus stops (que son órdenes de venta de mercado), absorbiendo toda esa liquidez para iniciar el movimiento alcista real.</p>
    `
  },
  day5: {
    id: "day5",
    pilar: 1,
    title: "Entendiendo el Short Squeeze",
    unlocked: false,
    completed: false,
    challenge: "Explica en tus palabras la mecánica de un Short Squeeze y por qué está prohibido intentar adivinar el techo de un movimiento parabólico.",
    content: `
      <p>El <strong>Short Squeeze</strong> es un ejemplo clásico de manipulación y pánico técnico. Ocurre cuando un gran número de vendedores en corto se ven obligados a cerrar sus posiciones de manera simultánea.</p>
      <h3>La Cascada de Compras Forzadas</h3>
      <p>Dado que cerrar una posición en corto requiere una orden de compra, el pánico de los vendedores y la ejecución de sus Stop Losses empujan el precio exponencialmente al alza, barriendo a cualquiera que intente buscar techos sin confluencias estructurales.</p>
    `
  },
  day6: {
    id: "day6",
    pilar: 1,
    title: "Identificación de Trampas y Fakeouts",
    unlocked: false,
    completed: false,
    challenge: "Describe la diferencia visual en un gráfico entre una vela de ruptura institucional limpia y una vela que solo cazó liquidez (fakeout).",
    content: `
      <p>Los <strong>Fakeouts</strong> (falsos rompimientos) ocurren constantemente en zonas obvias de soporte y resistencia. Aprender a identificarlos evita entrar tarde al mercado.</p>
      <h3>Mecánica de la Trampa</h3>
      <p>Si el precio perfora un nivel clave pero cierra rápidamente dentro del rango previo dejando una mecha larga, estamos ante un rechazo por absorción institucional. Los operadores profesionales esperan la vela de confirmación en lugar de comprar o vender impulsivamente la ruptura de la línea.</p>
    `
  },
  day7: {
    id: "day7",
    pilar: 1,
    title: "Evaluación y Manifiesto de Mentalidad",
    unlocked: false,
    completed: false,
    challenge: "Escribe tu compromiso mental: declara que aceptas el resultado probabilístico del mercado y define qué sesgo vas a monitorizar esta semana.",
    content: `
      <p>Felicidades por completar el Módulo 1. Has aprendido que el precio es lo único real y has analizado los mecanismos de manipulación y sesgos que destruyen al trader aficionado.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 1:</strong> Responde correctamente el cuestionario de abajo para certificar tu comprensión y desbloquear el Módulo de Gestión y Disciplina.
      </div>
    `
  },
  day8: {
    id: "day8",
    pilar: 2,
    title: "Matemáticas del Trader Profesional",
    unlocked: false,
    completed: false,
    challenge: "Calcula la ruina matemática de una cuenta de $10,000 arriesgando el 10% por operación frente al 1% en una racha de 10 operaciones fallidas.",
    content: `
      <p>Iniciamos el <strong>Módulo 2: Gestión y Disciplina</strong>. El trading no es un arte; es un negocio de <strong>estadística y matemáticas aplicadas</strong>.</p>
      <h3>La Preservación del Capital</h3>
      <p>Tu capital es tu inventario de trabajo. Si arriesgas el 1% por operación, necesitas 100 operaciones perdedoras consecutivas para quebrar. Si arriesgas el 10%, con solo 10 operaciones perdedoras (un suceso estadísticamente probable en cualquier sistema) estarás fuera del negocio de forma permanente.</p>
    `
  },
  day9: {
    id: "day9",
    pilar: 2,
    title: "Asimetría Matemática y Ratio R:R",
    unlocked: false,
    completed: false,
    challenge: "Si realizas 20 operaciones arriesgando $100 por trade con un R:R 1:2, y ganas 8 operaciones (40% acierto) y pierdes 12, calcula tu beneficio neto.",
    content: `
      <p>No necesitas acertar el 90% de tus operaciones para ser rentable. La clave está en la <strong>asimetría de los ratios de Riesgo/Beneficio (R:R)</strong>.</p>
      <h3>La ventaja de un R:R 1:2</h3>
      <p>Con un ratio de 1:2, cada acierto paga el doble de lo que cuesta cada pérdida. Esto te permite tener un balance positivo a largo plazo incluso ganando menos de la mitad de tus operaciones.</p>
    `
  },
  day10: {
    id: "day10",
    pilar: 2,
    title: "El Límite de Pérdida Diaria (Drawdown)",
    unlocked: false,
    completed: false,
    challenge: "Establece tu regla inquebrantable de Drawdown diario: define en dinero cuánto es tu límite diario y escribe tu protocolo de apagado inmediato.",
    content: `
      <p>El <strong>Daily Drawdown</strong> o Límite de Pérdida Diaria es el sistema de seguridad de tu cuenta. Evita que un día de frustración o falta de sincronización destruya tu capital de meses.</p>
      <h3>La Regla de las Dos Pérdidas</h3>
      <p>Si ejecutas dos operaciones fallidas en la misma sesión, la regla estoica dicta que debes cerrar la plataforma inmediatamente. El mercado estará ahí mañana; tu capital, si continúas operando con sesgos emocionales, probablemente no.</p>
    `
  },
  day11: {
    id: "day11",
    pilar: 2,
    title: "La Bitácora de Trading",
    unlocked: false,
    completed: false,
    challenge: "Documenta en tu bitácora una operación simulada (o real) reciente siguiendo estrictamente tus reglas de gestión: capital, riesgo exacto y R:R.",
    content: `
      <p>Lo que no se mide no se puede mejorar. La <strong>Bitácora de Trading</strong> es el registro histórico de tu comportamiento frente al mercado.</p>
      <h3>El Espejo del Trader</h3>
      <p>Un sistema repetible se construye documentando cada entrada, salida, emociones sentidas y el cumplimiento o violación de las reglas. Esto transforma un pasatiempo en una profesión auditable.</p>
    `
  },
  day12: {
    id: "day12",
    pilar: 2,
    title: "Cómo Documentar Procesos Operativos",
    unlocked: false,
    completed: false,
    challenge: "Registra en tu diario de trading los costos de comisiones y el deslizamiento (slippage) estimado de tu última operación simulada.",
    content: `
      <p>Una bitácora técnica no solo registra si ganaste o perdiste dinero; registra la calidad de tu <strong>proceso de toma de decisiones</strong>.</p>
      <h3>Parámetros de Auditoría</h3>
      <ul>
        <li><strong>Desviación del Plan:</strong> ¿Operaste por impulso o por setup?</li>
        <li><strong>Ejecución del Stop:</strong> ¿Respetaste el Stop Loss original o lo moviste en contra?</li>
        <li><strong>Comisiones y Slippage:</strong> El costo de comisiones es el costo de hacer negocios; debes medirlo para evaluar tu rentabilidad neta real.</li>
      </ul>
    `
  },
  day13: {
    id: "day13",
    pilar: 2,
    title: "Construcción de un Sistema Repetible",
    unlocked: false,
    completed: false,
    challenge: "Describe por qué operar de forma aleatoria (cambiando reglas cada día) impide obtener una ventaja estadística válida.",
    content: `
      <p>La consistencia no proviene de predecir el futuro; proviene de <strong>ejecutar un proceso repetible</strong> con disciplina de máquina.</p>
      <h3>La Consistencia Operativa</h3>
      <p>Un sistema repetible requiere que las condiciones de entrada y de salida sean idénticas en cada trade. Si cambias de indicadores o de reglas de riesgo cada vez que pierdes, nunca sabrás si tu ventaja estadística realmente funciona a lo largo de una muestra representativa de operaciones.</p>
    `
  },
  day14: {
    id: "day14",
    pilar: 2,
    title: "Cálculo Dinámico de Contratos",
    unlocked: false,
    completed: false,
    challenge: "Si tu cuenta tiene $5,000, arriesgas el 1% ($50) y tu Stop Loss en MES está a 10 puntos ($5 por punto por contrato), ¿cuántos contratos debes operar?",
    content: `
      <p>El tamaño de tu posición nunca debe ser al azar o basarse en el sentimiento. Se calcula matemáticamente antes de cada trade.</p>
      <h3>Fórmula de Posición</h3>
      <div class="highlight-box">
        <strong>Contratos = Riesgo en Dólares / (Distancia de Stop Loss en Puntos x Valor del Punto del Contrato)</strong>
      </div>
      <p>Si la distancia de tu Stop Loss técnico es mayor, debes reducir el número de contratos para que el riesgo financiero siga siendo exactamente el mismo.</p>
    `
  },
  day15: {
    id: "day15",
    pilar: 2,
    title: "Evaluación de Gestión y Riesgo",
    unlocked: false,
    completed: false,
    challenge: "Firma tu manifiesto de riesgo y define tu riesgo máximo por operación (%) y tu límite de pérdida diario en dólares.",
    content: `
      <p>Has finalizado el Módulo 2. Ahora comprendes la naturaleza matemática del trading, el cálculo de posición, la asimetría R:R y la bitácora técnica de procesos.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 2:</strong> Aprueba el cuestionario de gestión de riesgo abajo para desbloquear el Módulo de Estrategia Técnica.
      </div>
    `
  },
  day16: {
    id: "day16",
    pilar: 3,
    title: "Estructura de Mercado Real",
    unlocked: false,
    completed: false,
    challenge: "Dibuja o identifica en tu simulador una serie de Máximos más Altos (HH) y Mínimos más Altos (HL) en una tendencia alcista.",
    content: `
      <p>Comenzamos el <strong>Módulo 3: Estrategia de Alta Probabilidad</strong>. Aprenderemos a leer el mercado de forma limpia, directa y <strong>sin indicadores de ruido</strong>.</p>
      <h3>La Subasta Continua</h3>
      <p>El mercado es una subasta. La estructura nos muestra quién tiene el control: si la tendencia hace máximos y mínimos ascendentes, los compradores dominan la subasta; si hace máximos y mínimos descendentes, los vendedores tienen el control.</p>
    `
  },
  day17: {
    id: "day17",
    pilar: 3,
    title: "Ruptura de Estructura (BOS)",
    unlocked: false,
    completed: false,
    challenge: "Busca en el gráfico en vivo un cambio de tendencia marcado por un quiebre de estructura (BOS) y documenta los precios de los niveles rotos.",
    content: `
      <p>El <strong>BOS (Break of Structure)</strong> es el primer indicio de un cambio en la dirección de la subasta de precios.</p>
      <h3>Mecánica del BOS</h3>
      <p>En una tendencia alcista, el último Mínimo Ascendente (HL) es el nivel de defensa de los compradores. Si el precio rompe y cierra por debajo de este nivel, la estructura alcista se invalida, dando paso a una probable estructura bajista (BOS bajista).</p>
    `
  },
  day18: {
    id: "day18",
    pilar: 3,
    title: "Soportes y Resistencias de Valor",
    unlocked: false,
    completed: false,
    challenge: "Identifica en el gráfico de futuros una zona donde el precio haya rebotado al menos dos veces con fuerte volumen y márcala como zona de valor.",
    content: `
      <p>Los soportes y resistencias no son líneas delgadas en el gráfico; son <strong>zonas de acumulación de órdenes</strong> institucionales pendientes por ejecutar.</p>
      <h3>Zonas de Oferta y Demanda</h3>
      <p>Un soporte de valor se localiza en el origen de un fuerte movimiento alcista previo. Buscamos operar en estas zonas porque la probabilidad de que los grandes participantes defiendan sus posiciones es altamente favorable.</p>
    `
  },
  day19: {
    id: "day19",
    pilar: 3,
    title: "Acción del Precio Pura",
    unlocked: false,
    completed: false,
    challenge: "Realiza un análisis completo del activo actual en el simulador basándote únicamente en la estructura y la acción del precio actual sin indicadores.",
    content: `
      <p>Llenar tu pantalla de indicadores como Bandas de Bollinger, MACD o Estocásticos solo añade retraso y parálisis por análisis. El precio es el único indicador líder en tiempo real.</p>
      <h3>La Lectura Limpia</h3>
      <p>Operar con el precio puro consiste en observar la interacción entre impulsos, retrocesos, velocidad de las velas y zonas de liquidez para tomar decisiones rápidas y precisas.</p>
    `
  },
  day20: {
    id: "day20",
    pilar: 3,
    title: "La Ley de Polaridad S/R",
    unlocked: false,
    completed: false,
    challenge: "Encuentra en el simulador un ejemplo de resistencia que, tras ser rota con intención, haya actuado como soporte. Anota los precios del testeo.",
    content: `
      <p>La <strong>Ley de Polaridad</strong> demuestra la memoria del mercado y el comportamiento del flujo de órdenes.</p>
      <h3>Soporte convertido en Resistencia</h3>
      <p>Cuando un soporte fuerte es perforado, los compradores atrapados esperan a que el precio regrese a su nivel de entrada para cerrar sus posiciones con pérdidas nulas (breakeven). Ese cierre de posiciones vendedoras, sumado a nuevos vendedores, transforma el antiguo soporte en resistencia.</p>
    `
  },
  day21: {
    id: "day21",
    pilar: 3,
    title: "Filtros Técnicos de Confluencia",
    unlocked: false,
    completed: false,
    challenge: "Utilizando la EMA 200 y el RSI 14, identifica si el precio cotiza en zona de compras o ventas y anota la señal del oscilador de momentum.",
    content: `
      <p>Aunque operamos basados en acción de precio, el Setup de confluencia Visión Pro utiliza dos filtros complementarios para validar el momentum.</p>
      <ul>
        <li><strong>Filtro de Tendencia (EMA 200):</strong> Si el precio está sobre la EMA 200, la subasta es alcista (solo buscamos compras). Si está bajo ella, es bajista (solo cortos).</li>
        <li><strong>Filtro de Momentum (RSI 14):</strong> Confirmamos el impulso cuando el RSI cruza la línea central de 50 a favor de la tendencia.</li>
      </ul>
    `
  },
  day22: {
    id: "day22",
    pilar: 3,
    title: "Evaluación de Lectura Técnica",
    unlocked: false,
    completed: false,
    challenge: "Explica detalladamente en tu bitácora por qué un gráfico sin indicadores de ruido mejora la toma de decisiones bajo presión.",
    content: `
      <p>Has finalizado el Módulo 3. Conoces las estructuras de mercado, los quiebres (BOS), la polaridad y los filtros de confluencia técnica para una lectura limpia de precios.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 3:</strong> Completa y aprueba el cuestionario técnico de abajo para desbloquear el Módulo de Ejecución y Autocontrol Mental.
      </div>
    `
  },
  day23: {
    id: "day23",
    pilar: 4,
    title: "Rutina y Protocolo del Trader",
    unlocked: false,
    completed: false,
    challenge: "Diseña por escrito tu rutina diaria antes de la sesión de trading: horas de sueño, preparación física, revisión de noticias y análisis técnico previo.",
    content: `
      <p>Comenzamos el <strong>Módulo 4: Ejecución y Evaluación</strong>. Un trader profesional se comporta como un atleta de alto rendimiento: tiene una rutina rígida antes, durante y después de operar.</p>
      <h3>La Disciplina del Protocolo</h3>
      <p>Operar de manera profesional requiere estar en un estado mental calmado y descansado. Improvisar la sesión o abrir gráficos minutos antes de la apertura del mercado invita al desastre operativo.</p>
    `
  },
  day24: {
    id: "day24",
    pilar: 4,
    title: "El Protocolo Pre-market y Checklist",
    unlocked: false,
    completed: false,
    challenge: "Escribe una lista de comprobación (checklist) de 5 puntos obligatorios que debes marcar de manera positiva antes de abrir cualquier operación en real.",
    content: `
      <p>Antes de que un piloto despegue, revisa una checklist exhaustiva. En el trading de futuros, debes hacer exactamente lo mismo.</p>
      <h3>Checklist de Confluencias</h3>
      <ul>
        <li>¿El precio está alineado con la EMA 200?</li>
        <li>¿El RSI cruzó la línea central de 50 en vela cerrada?</li>
        <li>¿El Stop Loss está colocado en un nivel estructural válido?</li>
        <li>¿El tamaño de posición respeta el 1% de riesgo máximo?</li>
      </ul>
    `
  },
  day25: {
    id: "day25",
    pilar: 4,
    title: "Ejecución bajo Presión",
    unlocked: false,
    completed: false,
    challenge: "Realiza 5 operaciones en el simulador y documenta tu nivel de calma del 1 al 10 antes de hacer clic en los botones de COMPRAR o VENDER.",
    content: `
      <p>Cuando el precio oscila rápido, tu cerebro entra en modo de alerta. El control emocional bajo presión consiste en <strong>confiar en el proceso matemático</strong> y no en el resultado del trade actual.</p>
      <h3>Aceptación del Riesgo</h3>
      <p>Si has calculado tu tamaño de posición correctamente y has colocado tu stop loss técnico, ya sabes exactamente cuánto vas a perder si falla. Una vez que aceptas esa pérdida como el costo de tu negocio, la ansiedad de la ejecución desaparece.</p>
    `
  },
  day26: {
    id: "day26",
    pilar: 4,
    title: "Protocolo de Cierre Post-Sesión",
    unlocked: false,
    completed: false,
    challenge: "Describe tu protocolo de cierre: ¿qué haces inmediatamente después de terminar tu sesión de trading para desconectar mentalmente?",
    content: `
      <p>El día de trading no termina cuando cierras tu última posición. Termina con tu protocolo de cierre estoico.</p>
      <h3>Desconexión Mental</h3>
      <p>Guarda tus resultados, documenta la sesión en tu bitácora, cierra la plataforma y aléjate de los gráficos. Analizar pantallas constantemente fuera de tu horario operativo fomenta la obsesión y el sobreoperar.</p>
    `
  },
  day27: {
    id: "day27",
    pilar: 4,
    title: "Auditoría Crítica de Operaciones",
    unlocked: false,
    completed: false,
    challenge: "Revisa tu bitácora de la semana pasada, analiza tu tasa de acierto y tu ratio R:R real. Anota cualquier desviación de tu plan de trading.",
    content: `
      <p>La auditoría es el análisis racional y frío de tus estadísticas operativas. Nos permite identificar si nuestra rentabilidad está alineada con la ventaja estadística del sistema.</p>
      <h3>Estadísticas de Valor</h3>
      <ul>
        <li><strong>Profit Factor:</strong> Suma de ganancias dividida por la suma de pérdidas.</li>
        <li><strong>R:R Promedio:</strong> Determina si de verdad estás dejando correr las operaciones ganadoras a 1:2.</li>
      </ul>
    `
  },
  day28: {
    id: "day28",
    pilar: 4,
    title: "El Diario de Errores Operativos",
    unlocked: false,
    completed: false,
    challenge: "Clasifica los últimos 5 errores cometidos en tu simulador como \"técnico\" (romper reglas del setup) o \"emocional\" (entrar por impaciencia o venganza).",
    content: `
      <p>Errar es humano, pero repetir el mismo error operativo por falta de autoanálisis es inaceptable en un trader profesional.</p>
      <h3>El Registro de Desviaciones</h3>
      <p>Mantén un diario específico de errores. Al clasificarlos de manera honesta y objetiva, sabrás con precisión si tu problema actual es la lectura del mercado (error técnico) o la falta de autodisciplina (error emocional).</p>
    `
  },
  day29: {
    id: "day29",
    pilar: 4,
    title: "Mejora Continua Estoica",
    unlocked: false,
    completed: false,
    challenge: "Define una medida correctiva específica y procesable para el error más frecuente (técnico o emocional) que hayas detectado en tu diario de errores.",
    content: `
      <p>El estoicismo es pragmatismo puro. No nos lamentamos por los errores pasados; los analizamos científicamente para diseñar <strong>acciones correctivas concretas</strong>.</p>
      <h3>El Plan de Mejora</h3>
      <p>Si tu error más común es entrar por FOMO antes del cierre de vela, tu regla correctiva debe ser: \"Sólo puedo abrir una posición si pongo una alarma al cierre de la vela actual y mis manos están fuera del ratón hasta entonces\".</p>
    `
  },
  day30: {
    id: "day30",
    pilar: 4,
    title: "Evaluación del Módulo 4",
    unlocked: false,
    completed: false,
    challenge: "Completa y aprueba la evaluación del Módulo 4 con 100% de aciertos para desbloquear el bloque avanzado de Patrones de Gráficos.",
    content: `
      <p>Has alcanzado el final del Módulo 4: Ejecución y Evaluación. Has progresado desde desmitificar tus sesgos mentales hasta consolidar una rutina operativa inquebrantable de gestión de riesgo y lectura técnica limpia.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 4:</strong> Aprueba el examen técnico-práctico de 5 preguntas de abajo para certificar tu comprensión y desbloquear el Módulo 5 (Patrones de Gráficos).
      </div>
    `
  },
  day31: {
    id: "day31",
    pilar: 5,
    title: "Doble Techo y Doble Suelo: Psicología de la Reversión",
    unlocked: false,
    completed: false,
    challenge: "Identifica en el simulador o en un gráfico real un patrón de Doble Techo o Doble Suelo. Dibuja la línea de cuello (neckline) y calcula el objetivo teórico basado en la altura del patrón. Registra los precios en tu bitácora.",
    content: `
      <p>Bienvenidos al <strong>Módulo 5: Doble Techo y Doble Suelo (Patrones de Reversión Clásicos)</strong>. Como trader principiante, debes entender que la estructura del precio no se mueve en línea recta. Los giros de mercado ocurren tras batallas prolongadas entre las fuerzas de compra y venta. Dos de las formaciones de cambio de tendencia más confiables y operadas en todo el mundo son el Doble Techo (Double Top) y el Doble Suelo (Double Bottom).</p>
      <h3>1. La Psicología detrás de la Formación</h3>
      <p>El Doble Techo es un patrón bajista de reversión que se forma tras una tendencia alcista prolongada. El precio sube hasta encontrar un nivel de resistencia fuerte (primer máximo) donde el flujo institucional de ventas detiene el avance. Desde allí, el precio retrocede hasta un soporte intermedio que llamamos la "línea de cuello" (neckline). Los compradores, creyendo que la tendencia alcista continuará, vuelven a entrar al mercado impulsando el precio al alza por segunda vez. Sin embargo, no logran superar el primer máximo (segundo máximo). El agotamiento comprador es evidente. Cuando el precio cae de nuevo y rompe la línea de cuello, se confirma que el control ha pasado a los vendedores y la estructura alcista se ha roto de forma definitiva.</p>
      <p>Por otro lado, el Doble Suelo es la imagen reflejada del Doble Techo. Ocurre al final de una tendencia bajista. El precio cae hasta un nivel clave de soporte (primer mínimo), rebota hacia una resistencia intermedia (línea de cuello), y cae de nuevo para testear el soporte previo. Al fallar en hacer un nuevo mínimo (segundo mínimo), los vendedores capitulan. La posterior ruptura al alza de la línea de cuello confirma el cambio a una estructura alcista.</p>
      <h3>2. Reglas Técnicas de Ejecución y Gestión de Riesgo</h3>
      <p>Para operar estos patrones de manera profesional y pragmática, debemos seguir reglas inquebrantables de entrada y salida:</p>
      <ul>
        <li><strong>Fase de Espera:</strong> Nunca debes anticipar el patrón. Muchos operadores novatos entran en corto tan pronto como el precio alcanza el nivel del primer máximo por segunda vez. Esto es un error grave porque la tendencia sigue siendo alcista hasta que se demuestre lo contrario. La confirmación ocurre únicamente cuando el precio rompe y cierra por debajo de la línea de cuello.</li>
        <li><strong>La Entrada Técnica:</strong> Existen dos métodos de entrada válidos. El primero es entrar inmediatamente al cierre de la vela que rompe la línea de cuello con fuerza. El segundo es esperar un retesteo (pullback para el doble techo, o throwback para el doble suelo) de la línea de cuello convertida en polaridad. El retesteo ofrece un mejor ratio de riesgo/beneficio, aunque a veces el precio se mueve tan rápido que no regresa.</li>
        <li><strong>Ubicación del Stop Loss:</strong> Para un Doble Techo, el stop loss técnico obligatorio se coloca justo por encima del segundo máximo (o por encima de la última vela de rechazo del segundo techo). Para un Doble Suelo, se coloca debajo del segundo mínimo.</li>
        <li><strong>Proyección del Take Profit (Objetivo Teórico):</strong> Mide la distancia vertical desde la línea de cuello hasta el punto más alto del patrón (la altura total). Proyecta esa misma distancia desde la línea de cuello rota en la dirección de la ruptura. Este es tu objetivo mínimo de ganancias.</li>
      </ul>
      <div class="strategy-box">
        <strong>💡 Confluencia de Alta Probabilidad:</strong> Para maximizar la efectividad de estos patrones, busca que el segundo máximo o mínimo se forme con un volumen decreciente respecto al primero. Esto demuestra de forma objetiva que el interés del dinero profesional por continuar empujando en esa dirección ha desaparecido.
      </div>
    `
  },
  day32: {
    id: "day32",
    pilar: 6,
    title: "Hombro-Cabeza-Hombro: Transición de Tendencia",
    unlocked: false,
    completed: false,
    challenge: "Encuentra un patrón Hombro-Cabeza-Hombro (o su versión invertida) en tu gráfico. Identifica la línea de cuello inclinada u horizontal y mide la distancia desde la cabeza hasta el cuello para proyectar el objetivo. Registra la zona de entrada.",
    content: `
      <p>Bienvenidos al <strong>Módulo 6: Hombro-Cabeza-Hombro (HCH) y HCH Invertido</strong>. Hoy analizaremos el rey de los patrones de reversión estructural: el Hombro-Cabeza-Hombro. Este patrón representa una transición gradual y completa del control de una tendencia alcista a una bajista, revelando el debilitamiento sistemático de las compras institucionales.</p>
      <h3>1. Estructura y Anatomía del Hombro-Cabeza-Hombro</h3>
      <p>El HCH tradicional es un patrón bajista que consta de tres picos sucesivos sobre una línea de soporte común denominada "línea de cuello" o directriz del cuello (neckline):</p>
      <ul>
        <li><strong>Hombro Izquierdo (Left Shoulder):</strong> El precio realiza un impulso alcista fuerte dentro de una tendencia alcista establecida, seguido de una corrección normal que encuentra soporte.</li>
        <li><strong>Cabeza (Head):</strong> Los compradores vuelven a presionar con fuerza haciendo un máximo significativamente más alto que el anterior (creando la cabeza). Sin embargo, el precio retrocede nuevamente hasta la línea de cuello, mostrando una debilidad mayor a la esperada.</li>
        <li><strong>Hombro Derecho (Right Shoulder):</strong> Los compradores intentan un último impulso al alza, pero este resulta notablemente débil y falla antes de alcanzar el nivel de la cabeza, a menudo deteniéndose a la altura del hombro izquierdo. Esto confirma que la demanda se ha agotado.</li>
        <li><strong>Línea de Cuello (Neckline):</strong> Es la línea de soporte que conecta los mínimos de las correcciones del hombro izquierdo y de la cabeza. Puede ser horizontal o tener una ligera inclinación.</li>
      </ul>
      <p>El HCH Invertido sigue exactamente la misma lógica pero a la inversa, apareciendo al final de una tendencia bajista y anunciando una reversión alcista mayor. El hombro izquierdo es un mínimo, la cabeza es un mínimo más bajo, y el hombro derecho es un mínimo más alto que no alcanza la profundidad de la cabeza, terminando con la ruptura al alza de la línea de cuello.</p>
      <h3>2. Operativa Profesional: Entradas, Stops y Objetivos</h3>
      <p>Un trader pragmático no se deja llevar por la forma del patrón; opera las reglas matemáticas del Setup:</p>
      <ol>
        <li><strong>Entrada en Ruptura:</strong> Se ejecuta en corto cuando una vela de rango amplio rompe y cierra por debajo de la línea de cuello (o en largo al romper al alza la línea de cuello en el HCH Invertido). Es fundamental que la vela de ruptura cierre fuera del patrón.</li>
        <li><strong>Entrada en Pullback:</strong> Se espera a que el precio rompa la línea de cuello y luego realice un retroceso técnico hacia ella (polaridad). Si el precio rechaza la línea de cuello con velas de mecha larga, se entra en la dirección de la ruptura.</li>
        <li><strong>Stop Loss Técnico:</strong> Se sitúa justo por encima del hombro derecho para el HCH tradicional (o por debajo del hombro derecho en el invertido). Si el hombro derecho es superado, el patrón se considera invalidado.</li>
        <li><strong>Objetivo de Take Profit:</strong> Calcula la altura vertical desde el punto más alto de la cabeza hasta la línea de cuello. Proyecta esta misma distancia desde la zona de ruptura de la línea de cuello en dirección descendente (o ascendente en el invertido).</li>
      </ol>
      <div class="alert-box">
        <strong>⚠️ Regla de Oro:</strong> La inclinación de la línea de cuello importa. Un HCH bajista con una línea de cuello inclinada hacia abajo es más agresivo y suele dar rupturas muy violentas. Un Hombro-Cabeza-Hombro invertido con la línea de cuello inclinada hacia arriba demuestra una fuerza alcista acumulada excepcional.
      </div>
    `
  },
  day33: {
    id: "day33",
    pilar: 7,
    title: "Triángulos de Consolidación: Simétrico, Ascendente y Descendente",
    unlocked: false,
    completed: false,
    challenge: "Dibuja un triángulo ascendente en una tendencia alcista y un triángulo descendente en una bajista. Identifica las líneas de tendencia de soporte y resistencia y define las condiciones de volumen necesarias para validar el rompimiento.",
    content: `
      <p>Bienvenidos al <strong>Módulo 7: Triángulos en el Gráfico (Consolidación y Ruptura)</strong>. Los triángulos son patrones de consolidación de precios que representan periodos de equilibrio temporal entre la oferta y la demanda. A medida que el precio se comprime dentro de estas figuras geométricas, la volatilidad disminuye y las órdenes se acumulan, preparando el escenario para una ruptura explosiva.</p>
      <h3>1. Clasificación de Triángulos y su Significado Psicológico</h3>
      <p>Existen tres tipos principales de triángulos, cada uno con características y comportamientos específicos:</p>
      <ul>
        <li><strong>Triángulo Simétrico:</strong> Está formado por dos líneas de tendencia convergentes: una línea de soporte ascendente y una línea de resistencia descendente. Psicológicamente, representa una indecisión absoluta en el mercado. Tanto compradores como vendedores están empujando con la misma fuerza, comprimiendo el precio en un rango cada vez más estrecho. La ruptura puede ocurrir en cualquier dirección, aunque suele continuar la tendencia previa.</li>
        <li><strong>Triángulo Ascendente:</strong> Consta de una línea de resistencia horizontal superior y una línea de soporte ascendente inferior. Este patrón es tradicionalmente alcista. Muestra que los compradores están dispuestos a comprar a precios cada vez más altos (mínimos crecientes), mientras que la oferta se mantiene constante en un nivel de resistencia fijo. Tarde o temprano, la demanda absorbe toda la oferta en ese techo, resultando en una fuerte ruptura alcista.</li>
        <li><strong>Triángulo Descendente:</strong> Se compone de una línea de soporte horizontal inferior y una línea de resistencia descendente superior. Es un patrón tradicionalmente bajista. Indica que los vendedores están presionando el precio hacia abajo de forma constante (máximos decrecientes), mientras que la demanda defiende un nivel de soporte horizontal. La presión vendedora termina quebrando el soporte, provocando una caída acelerada del precio.</li>
      </ul>
      <h3>2. Táctica Operativa para Evitar Rupturas Falsas</h3>
      <p>La clave para ser rentable operando triángulos no es adivinar la dirección del movimiento, sino reaccionar a la ruptura confirmada:</p>
      <ul>
        <li><strong>Esperar la Compresión:</strong> La ruptura ideal de un triángulo debe ocurrir entre el 60% y el 80% de la distancia total desde el inicio del triángulo hasta el ápice (punto donde se cruzan las líneas). Si el precio llega al ápice sin romper, el patrón suele perder fuerza y convertirse en un movimiento lateral sin interés.</li>
        <li><strong>Confirmación con Volumen:</strong> Una ruptura válida debe estar acompañada de un incremento notable en el volumen de transacciones. Si el precio rompe con volumen bajo, existe un riesgo muy alto de que se trate de un falso rompimiento (fakeout) diseñado para cazar stops.</li>
        <li><strong>Estrategia de Entrada:</strong> Entra al cierre de la vela de ruptura o coloca una orden pendiente ligeramente por encima/debajo de las líneas del triángulo. El stop loss técnico se coloca detrás de la última oscilación menor dentro del triángulo (el último mínimo ascendente para el ascendente, o el último máximo decreciente para el descendente).</li>
        <li><strong>Objetivo de Beneficios:</strong> Mide la parte más ancha del triángulo (la base o altura inicial) y proyéctala desde el punto donde el precio rompió el patrón.</li>
      </ul>
      <div class="strategy-box">
        <strong>📈 Consejo Estoico:</strong> Evita operar dentro del triángulo a medida que se acerca al ápice. La falta de espacio hace que los ratios de riesgo/beneficio disminuyan sustancialmente y que la volatilidad aleatoria te saque de la posición.
      </div>
    `
  },
  day34: {
    id: "day34",
    pilar: 8,
    title: "Canales de Tendencia y Banderas de Continuación",
    unlocked: false,
    completed: false,
    challenge: "Encuentra un canal alcista y dibuja la bandera de consolidación (flag) posterior a un impulso fuerte. Establece cómo colocarías una orden de compra en el quiebre de la bandera y dónde se ubicaría el stop loss.",
    content: `
      <p>Bienvenidos al <strong>Módulo 8: Canales de Tendencia y Banderas</strong>. En este módulo estudiaremos los patrones de continuidad de tendencia por excelencia. Para un trader pragmático, operar a favor de la tendencia dominante es la forma más segura de generar ganancias consistentes. Los canales y las banderas nos muestran dónde se detiene temporalmente la tendencia para acumular energía antes de reanudar su camino.</p>
      <h3>1. Canales de Tendencia: Líneas de Carretera del Precio</h3>
      <p>Un canal de tendencia se forma dibujando dos líneas paralelas: la línea de tendencia principal (que une los mínimos en una tendencia alcista o los máximos en una bajista) y la línea de canal (paralela a la anterior que une los extremos opuestos de la oscilación). Los canales definen el rango de fluctuación saludable de un activo:</p>
      <ul>
        <li><strong>Canal Ascendente:</strong> El precio sube de forma ordenada rebotando entre el soporte del canal y la resistencia del canal. Operamos principalmente las compras en la parte inferior del canal, alineados con la tendencia mayor.</li>
        <li><strong>Canal Descendente:</strong> El precio desciende rebotando entre la resistencia del canal y el soporte. Buscamos principalmente operaciones en corto en la parte superior del canal.</li>
      </ul>
      <h3>2. Banderas (Flags) y Banderines (Pennants): La Pausa del Impulso</h3>
      <p>Las banderas son patrones de continuidad de corto plazo que se forman tras un movimiento de precio casi vertical e impulsivo (el "mástil"). La bandera en sí es una consolidación en forma de canal pequeño que se mueve en dirección contraria al mástil (un retroceso ordenado):</p>
      <ul>
        <li><strong>Bandera Alcista (Bull Flag):</strong> Un fuerte mástil alcista seguido de un pequeño canal descendente y estrecho. Indica que tras la subida agresiva, los operadores toman ganancias de forma controlada sin que los vendedores tengan suficiente fuerza para revertir la tendencia. Cuando el precio rompe la resistencia de la bandera, se desata una nueva oleada de compras.</li>
        <li><strong>Bandera Bajista (Bear Flag):</strong> Un mástil bajista violento seguido de una pequeña consolidación alcista. La ruptura del soporte de la bandera reactiva las ventas de pánico.</li>
      </ul>
      <p>El banderín (pennant) es idéntico a la bandera, pero en lugar de consolidar en un canal paralelo, consolida en forma de un pequeño triángulo simétrico.</p>
      <h3>3. Ejecución Estratégica del Setup</h3>
      <p>Para operar una bandera o banderín con éxito:</p>
      <ol>
        <li><strong>Validar el Mástil:</strong> El movimiento inicial debe ser rápido, fuerte y con alto volumen, demostrando una clara intención institucional.</li>
        <li><strong>Monitorear el Canal de Retroceso:</strong> El retroceso debe tener un volumen decreciente y no debe retroceder más del 50% de la altura del mástil (idealmente debe detenerse en el nivel 38.2% del retroceso de Fibonacci). Un retroceso profundo destruye la probabilidad de una ruptura explosiva.</li>
        <li><strong>Entrada y Stop:</strong> Compra en la ruptura y cierre de la vela sobre la bandera. El Stop Loss obligatorio se coloca debajo del punto más bajo de la bandera de consolidación.</li>
        <li><strong>Cálculo de Take Profit:</strong> Mide la altura total del mástil y proyecta esa misma distancia desde el punto más bajo del canal de consolidación (o desde el punto de ruptura).</li>
      </ol>
      <div class="strategy-box">
        <strong>📉 Regla de Disciplina:</strong> No compres dentro del canal de consolidación esperando la ruptura. Espera a que el mercado demuestre la intención rompiendo la estructura de la bandera en vela cerrada para evitar quedar atrapado en una lateralización prolongada.
      </div>
    `
  },
  day35: {
    id: "day35",
    pilar: 9,
    title: "Cuñas y Figuras de Agotamiento de Tendencia",
    unlocked: false,
    completed: false,
    challenge: "Localiza una cuña ascendente en un gráfico alcista (que actúa como patrón de reversión bajista). Explica por qué este patrón denota el agotamiento de los compradores y registra el punto de confirmación de entrada en corto.",
    content: `
      <p>Bienvenidos al <strong>Módulo 9: Cuñas de Ensanchamiento y de Implicación Tendencial</strong>. Las cuñas son patrones gráficos de compresión del precio que se asemejan a los triángulos, pero con una diferencia fundamental: ambas líneas de tendencia (soporte y resistencia) apuntan en la misma dirección, ya sea de forma ascendente o descendente. Esto las convierte en patrones de alto valor debido a su doble naturaleza como figuras de reversión o de continuación según el contexto.</p>
      <h3>1. Tipos de Cuñas y Dinámica del Flujo de Órdenes</h3>
      <p>Analizaremos las dos cuñas estructurales principales y su implicación en el mercado:</p>
      <ul>
        <li><strong>Cuña Ascendente (Rising Wedge):</strong> Se forma cuando el precio se consolida entre una línea de soporte ascendente y una línea de resistencia también ascendente, pero esta última con una pendiente menos pronunciada. Esto hace que el canal se estreche a medida que el precio sube. Aunque el precio hace máximos más altos, estos se realizan con menor momentum e impulso. Psicológicamente, representa un agotamiento de las compras. La cuña ascendente es un patrón bajista. Si aparece tras una tendencia alcista, indica reversión bajista; si aparece en medio de una tendencia bajista, representa una pausa temporal (retroceso alcista débil) antes de continuar cayendo.</li>
        <li><strong>Cuña Descendente (Falling Wedge):</strong> Se forma por una línea de resistencia descendente y una línea de soporte descendente más plana, comprimiendo el precio a la baja. Indica que la fuerza vendedora está perdiendo fuerza. La cuña descendente es un patrón alcista. Si aparece al final de una tendencia bajista, indica reversión alcista; si aparece en una tendencia alcista, representa un retroceso correctivo antes de la continuación del movimiento.</li>
      </ul>
      <h3>2. Reglas de Operación y Gestión para el Trader Principiante</h3>
      <p>Operar cuñas requiere una precisión técnica elevada para evitar entrar antes de tiempo:</p>
      <ol>
        <li><strong>Identificación de Mínimo 5 Toques:</strong> Para validar una cuña, el precio debe tocar las líneas de tendencia al menos cinco veces en total (por ejemplo, tres toques en la resistencia y dos en el soporte, o viceversa) antes de romper.</li>
        <li><strong>Entrada en Ruptura Confirmada:</strong> La entrada se ejecuta al cierre de la vela que rompe la cuña en la dirección contraria a la pendiente de la cuña. Para una cuña ascendente (pendiente alcista), entramos en corto cuando rompe el soporte. Para una cuña descendente (pendiente bajista), entramos en largo cuando rompe la resistencia.</li>
        <li><strong>Stop Loss Técnico:</strong> Coloca el stop loss por encima del punto más alto dentro de la cuña para cortos (cuña ascendente) o por debajo del punto más bajo de la cuña para largos (cuña descendente).</li>
        <li><strong>Objetivo de Beneficios:</strong> El objetivo principal de take profit se ubica en el origen de la cuña (el punto más ancho donde comenzó la formación del patrón). Este es un nivel de liquidez natural muy fuerte.</li>
      </ol>
      <div class="alert-box">
        <strong>⚠️ Alerta de Volatilidad:</strong> Las cuñas suelen resolverse con rupturas sumamente rápidas y verticales debido a que atrapan a muchos traders que operaban a favor de la pendiente de la cuña. Asegúrate de calcular tu tamaño de posición con cuidado, ya que el stop loss inicial puede ser amplio.
      </div>
    `
  },
  day36: {
    id: "day36",
    pilar: 10,
    title: "Gaps y Brechas de Apertura: Flujo de Órdenes Oculto",
    unlocked: false,
    completed: false,
    challenge: "Analiza el gráfico diario de un futuro (por ejemplo, ES) e identifica un Gap de Escape (Breakaway Gap) o un Gap de Continuación (Runaway Gap). Describe cómo afectó el volumen de apertura a este movimiento.",
    content: `
      <p>Bienvenidos al <strong>Módulo 10: Brechas de Volumen y Gaps de Apertura</strong>. En el trading de futuros de índices (como ES y NQ), los gaps representan desequilibrios significativos entre la oferta y la demanda que ocurren fuera del horario regular de mercado (RTH) o debido a noticias macroeconómicas de alto impacto. Entender cómo interpretar y operar los gaps proporciona una ventaja estadística tremenda al trader minorista.</p>
      <h3>1. ¿Qué es un Gap y por qué ocurre?</h3>
      <p>Un Gap (brecha) es un espacio vacío en el gráfico donde no se realizaron transacciones debido a que el precio de apertura de una vela es significativamente diferente al precio de cierre de la vela anterior. En los futuros sobre índices, distinguimos principalmente entre:</p>
      <ul>
        <li><strong>Gap de Apertura (Opening Gap):</strong> La diferencia entre el cierre del mercado regular (a las 16:15 EST) y la apertura del mercado regular del día siguiente (a las 09:30 EST). Refleja toda la actividad del mercado nocturno (Globex).</li>
        <li><strong>Gap de Escape (Breakaway Gap):</strong> Ocurre cuando el precio rompe fuera de un rango de consolidación lateral o de un patrón de acumulación con fuerte volumen. Rara vez se llena en el corto plazo y marca el inicio de una nueva tendencia fuerte.</li>
        <li><strong>Gap de Continuación o de Medición (Runaway/Measuring Gap):</strong> Se produce a la mitad de una tendencia fuerte y acelerada. Muestra un incremento del pánico o entusiasmo y confirma que la tendencia está en su fase de mayor fuerza.</li>
        <li><strong>Gap de Agotamiento (Exhaustion Gap):</strong> Ocurre cerca del final de una tendencia de largo plazo. Tras una subida o bajada parabólica, el precio da un último salto con volumen extremo, solo para revertirse rápidamente ese mismo día o el siguiente, marcando el fin de la tendencia.</li>
      </ul>
      <h3>2. Táctica Operativa: Rellenar el Gap (Gap Fade) vs. Continuación</h3>
      <p>La regla más popular es que "todos los gaps tienden a llenarse" (es decir, el precio regresa a la zona del cierre anterior). Sin embargo, un trader estoico opera con estadísticas, no con mitos:</p>
      <ol>
        <li><strong>Estrategia de Relleno del Gap (Gap Fade):</strong> Si el precio abre con un gap moderado y, en los primeros 15-30 minutos de la sesión regular, muestra señales de rechazo (velas de mecha larga contra la dirección del gap y RSI cruzando 50 en dirección opuesta), operamos buscando el cierre del gap. El objetivo es el precio de cierre de la sesión de ayer. El stop se coloca detrás del máximo de la sesión de hoy.</li>
        <li><strong>Estrategia de Continuación del Gap (Gap Go):</strong> Si el precio abre con un gap amplio acompañado de un volumen masivo y rompe un soporte/resistencia clave del gráfico diario, no intentes buscar el relleno. Opera a favor del gap (compra en gap alcista, vende en gap bajista) en el primer retroceso ordenado de 5 minutos, buscando la proyección del movimiento.</li>
      </ol>
      <div class="strategy-box">
        <strong>💡 Regla de Oro sobre Gaps:</strong> Monitorea siempre el volumen de los primeros 5 minutos tras la apertura de Nueva York. Si el volumen es bajo, la probabilidad de que el gap se llene durante la mañana supera el 70%. Si el volumen es inusualmente alto, la tendencia probablemente continuará en la dirección del gap.
      </div>
    `
  },
  day37: {
    id: "day37",
    pilar: 11,
    title: "Patrones de Ruptura y Falsos Rompimientos (Fakeouts)",
    unlocked: false,
    completed: false,
    challenge: "Documenta un escenario de falso rompimiento de un nivel clave de soporte. Describe la formación de la vela (tipo pinbar o martillo) que confirmó la absorción y cómo podrías haber operado la reversión a favor de las manos fuertes.",
    content: `
      <p>Bienvenidos al <strong>Módulo 11: Patrones de Ruptura y Falsos Rompimientos (Trampas de Liquidez)</strong>. El falso rompimiento (fakeout o caza de stops) es el fenómeno más común y frustrante para el trader novato. Sin embargo, para el operador profesional, representa la mejor oportunidad de entrada debido a que proporciona liquidez inmediata y ratios de riesgo/beneficio excepcionales.</p>
      <h3>1. La Mecánica de las Trampas de Liquidez (Bull Trap y Bear Trap)</h3>
      <p>El mercado se mueve buscando liquidez (órdenes de compra y venta pendientes). Las zonas más obvias donde se acumula esta liquidez son justo por encima de las resistencias clave (donde están los Stop Losses de los vendedores y las órdenes de compra stop de los traders de ruptura) y por debajo de los soportes clave (donde están los Stop Losses de los compradores y órdenes de venta stop):</p>
      <ul>
        <li><strong>Trampa de Toros (Bull Trap):</strong> El precio sube por encima de una resistencia importante, atrayendo a operadores minoristas ansiosos que compran la ruptura. Al mismo tiempo, se activan los stops de los vendedores en corto (que son órdenes de compra al mercado). Las instituciones financieras aprovechan esta avalancha de órdenes de compra para vender y llenar sus posiciones cortas masivas sin desplazar el precio en su contra. Una vez que absorben la demanda, el precio cae rápidamente de vuelta al rango, dejando a los compradores atrapados con pérdidas.</li>
        <li><strong>Trampa de Osos (Bear Trap):</strong> El precio cae por debajo de un soporte obvio, induciendo a vender a los operadores minoristas y activando stops de compra. Las instituciones compran toda esa oferta barata y suben el precio inmediatamente.</li>
      </ul>
      <h3>2. Cómo Identificar y Operar Falsos Rompimientos de Forma Segura</h3>
      <p>Para no ser la presa y convertirte en el cazador, aplica el siguiente protocolo técnico:</p>
      <ol>
        <li><strong>Identificación del Rechazo:</strong> Espera a que el precio perfore un nivel de soporte o resistencia. Si el precio penetra el nivel pero la vela cierra rápidamente dentro del rango previo, dejando una mecha larga (vela Pinbar, Martillo o Estrella Fugaz), tenemos la primera señal de trampa.</li>
        <li><strong>Confirmación por Estructura (BOS):</strong> Espera a que el precio rompa la estructura menor en el gráfico de 1 o 2 minutos en la dirección opuesta al rompimiento inicial.</li>
        <li><strong>Gatillo de Entrada:</strong> Entra al mercado inmediatamente al cierre de la vela de rechazo confirmada o en el retesteo del nivel roto. El stop loss técnico obligatorio se coloca de forma muy ajustada justo en el extremo de la mecha de la trampa.</li>
        <li><strong>Take Profit:</strong> Apunta al extremo opuesto del rango lateral o al soporte/resistencia contrario. Esto suele dar ratios de beneficio/riesgo de 1:3 o superiores.</li>
      </ol>
      <h3>3. La Psicología de las Manos Fuertes vs. Operadores Minoristas</h3>
      <p>Es fundamental comprender que el mercado no es un juego de azar, sino un campo de batalla de oferta y demanda donde los grandes fondos necesitan crear la ilusión de un movimiento para conseguir contrapartida. Cuando un nivel de soporte se rompe, los minoristas se asustan y venden con pérdidas, o entran en corto persiguiendo el precio. En ese exacto momento de pánico masivo, la mano fuerte coloca órdenes de compra masivas. Al entender que el volumen minorista es absorbido por el dinero institucional, el trader profesional cambia de perspectiva y opera en la misma dirección de la absorción, no de la ruptura inicial.</p>
      <div class="alert-box">
        <strong>⚠️ Regla de Autocontrol:</strong> Si estás en una posición de ruptura y el precio regresa y cierra dentro del rango anterior, cierra la operación manualmente a breakeven o con pérdida pequeña. No esperes a que toque tu stop loss completo; la reentrada al rango es una señal objetiva de que la ruptura ha fallado.
      </div>
    `
  },
  day38: {
    id: "day38",
    pilar: 12,
    title: "Confirmación con Volumen: La Huella Profesional en los Gráficos",
    unlocked: false,
    completed: false,
    challenge: "Analiza tu última operación en el simulador. Evalúa si el volumen en la barra de entrada fue superior o inferior al promedio de las últimas 20 barras y argumenta si la entrada tenía alta probabilidad de éxito según este filtro.",
    content: `
      <p>Bienvenidos al <strong>Módulo 12: Reglas de Confirmación con Volumen en Patrones (La Huella Profesional)</strong>. En este último módulo del programa avanzado de transformación, aprenderás a validar todo lo aprendido utilizando la única variable que los grandes participantes del mercado no pueden ocultar: el volumen de transacciones. El volumen es el combustible del precio y la huella real del dinero institucional.</p>
      <h3>1. La Relación Esencial entre Precio y Volumen</h3>
      <p>Operar patrones gráficos basándose únicamente en la forma de las velas es incompleto. El volumen nos proporciona la confirmación objetiva de si un movimiento tiene respaldo profesional o si es una trampa minorista. Basamos nuestro análisis en la metodología del flujo de órdenes:</p>
      <ul>
        <li><strong>Armonía Precio-Volumen:</strong> Si el precio rompe una resistencia importante con una vela de rango amplio y el volumen es inusualmente alto, hay armonía. Significa que las instituciones están participando activamente y respaldando la ruptura, lo que aumenta drásticamente la probabilidad de éxito.</li>
        <li><strong>Divergencia Precio-Volumen:</strong> Si el precio rompe una resistencia con velas pequeñas o mechas largas y el volumen es bajo, hay divergencia. Demuestra una falta de interés profesional por defender ese movimiento, indicando un probable falso rompimiento (fakeout).</li>
      </ul>
      <h3>2. Las Cuatro Reglas Innegociables de Confirmación por Volumen</h3>
      <p>Aplica estas reglas antes de ejecutar cualquier setup de patrón gráfico en tu plataforma de futuros:</p>
      <ol>
        <li><strong>Validación de Soportes/Resistencias:</strong> Un soporte o resistencia de alta probabilidad debe haberse formado originalmente con un volumen alto (acumulación/distribución). Si el precio regresa a ese nivel con volumen decreciente, es un testeo exitoso y una zona excelente para operar el rebote.</li>
        <li><strong>La Vela de Intención de Ruptura:</strong> La vela que rompe una bandera, cuña o línea de cuello de un HCH debe tener un volumen que supere al menos en un 1.5x el volumen promedio de las últimas 20 velas. Esto confirma la iniciativa institucional.</li>
        <li><strong>El Testeo de Bajo Volumen:</strong> Tras la ruptura, el precio suele retroceder a testear el nivel roto (pullback). Este retroceso debe realizarse obligatoriamente con volumen bajo, indicando que no hay interés vendedor real contra la tendencia recién establecida.</li>
        <li><strong>Absorción en los Extremos:</strong> Si el precio intenta hacer un nuevo máximo (por ejemplo, el segundo techo de un Doble Techo) y vemos un volumen muy alto pero el precio no logra subir y cierra dejando una mecha superior larga, estamos ante una absorción institucional (vendedores absorbiendo todas las compras minoristas). Es una señal bajista extremadamente potente.</li>
      </ol>
      <h3>3. El Volumen como Filtro de Falsas Señales en Sesiones de Baja Liquidez</h3>
      <p>Una de las mayores utilidades prácticas de la confirmación por volumen es evitar la sobreoperativa en horarios de baja participación profesional, como el almuerzo de Nueva York o los días festivos bancarios. Durante estas horas muertas, el volumen disminuye y los patrones gráficos formados son de baja fidelidad y propensos a generar ruido y falsos rompimientos constantes. Si el precio rompe un patrón sin el volumen institucional de soporte, el trader consistente descarta la entrada de inmediato, protegiendo así su cuenta del desgaste innecesario y el pago excesivo de comisiones.</p>
      <div class="strategy-box">
        <strong>🏆 Manifiesto de Consistencia:</strong> Has finalizado las 38 lecciones de Visión Trading Pro. Ahora tienes en tus manos las herramientas mentales, de gestión de riesgo, análisis de precio puro y validación por volumen que separan al 95% de traders perdedores del 5% consistente. Recuerda: la consistencia no es ganar siempre, sino ejecutar tu plan repetible con disciplina férrea y dejar que las matemáticas de la probabilidad hagan su trabajo.
      </div>
    `
  }
};

// Weekly Pillar Quizzes
const pilarQuizzes = {
  1: [
    {
      q: "¿Cuál es el enfoque estoico principal ante un resultado perdedor en una operación individual?",
      options: [
        "Aceptar que el mercado es probabilístico y el resultado de un trade individual no está bajo tu control.",
        "Buscar la revancha inmediata para recuperar la pérdida antes del cierre.",
        "Cambiar de estrategia porque el sistema ha fallado."
      ],
      answer: 0,
      explanation: "Aceptar que el resultado de un trade individual es incierto y fuera de tu control reduce el apego y la frustración emocional."
    },
    {
      q: "¿Qué es el sesgo de falsas expectativas en el trading de futuros?",
      options: [
        "Pensar que puedes obtener dinero fácil y rápido sin un control estricto de riesgo.",
        "Aceptar que el drawdown es una parte normal del negocio.",
        "Entender que la consistencia requiere tiempo y disciplina."
      ],
      answer: 0,
      explanation: "El sesgo de falsas expectativas nubla el juicio técnico y lleva al trader a asumir riesgos desproporcionados buscando enriquecimiento rápido."
    },
    {
      q: "¿Cómo se define un Short Squeeze en el mercado de futuros?",
      options: [
        "Un aumento acelerado de precio provocado por la liquidación forzosa de posiciones vendedoras.",
        "Una caída abrupta de precio debido a ventas institucionales.",
        "Una consolidación lateral del precio con bajo volumen."
      ],
      answer: 0,
      explanation: "El cierre forzado de posiciones cortas (que se ejecuta como órdenes de compra al mercado) provoca un aumento parabólico en el precio."
    },
    {
      q: "¿Qué es una trampa técnica o 'fakeout' en la lectura de precios?",
      options: [
        "Un rompimiento falso de soporte o resistencia diseñado para atrapar liquidez antes de un giro.",
        "Una orden de mercado que se ejecuta con deslizamiento.",
        "El cruce de una media móvil en un gráfico de velas."
      ],
      answer: 0,
      explanation: "Los fakeouts se producen cuando las instituciones empujan el precio más allá de un soporte/resistencia para activar stops minoristas y contrapartida."
    },
    {
      q: "¿Cuál es la única variable que un trader controla al 100% en el mercado de futuros?",
      options: [
        "El riesgo exacto que asume en cada operación antes de entrar.",
        "La dirección exacta que tomará el precio en la sesión.",
        "El balance neto de ganancias al final del mes."
      ],
      answer: 0,
      explanation: "Controlar el riesgo unitario (dónde sitúas tu stop loss y con qué volumen entras) es la única variable controlable bajo tu poder."
    }
  ],
  2: [
    {
      q: "Si arriesgas el 1% de una cuenta de $10,000, ¿cuál es tu pérdida máxima en dólares por operación?",
      options: ["$10.00 USD", "$100.00 USD", "$1,000.00 USD"],
      answer: 1,
      explanation: "El 1% de $10,000 es exactamente $100. Este es tu límite financiero por operación."
    },
    {
      q: "Con un ratio de Riesgo/Beneficio (R:R) de 1:2, ¿qué tasa de acierto necesitas para estar en equilibrio (sin pérdidas)?",
      options: ["50%", "34%", "20%"],
      answer: 1,
      explanation: "Al ganar el doble de lo que pierdes, con solo un 34% de acierto cubres tus pérdidas y comisiones operativas."
    },
    {
      q: "¿Qué indica la regla del Drawdown Máximo Diario?",
      options: [
        "El límite de pérdida en dólares tras el cual apagas la plataforma inmediatamente.",
        "El objetivo de ganancia diario para retirarte.",
        "El capital mínimo necesario para operar futuros MES."
      ],
      answer: 0,
      explanation: "El drawdown diario actúa de freno automático: una vez tocado, detienes la operativa para evitar dañar más tu capital."
    },
    {
      q: "¿Cuál es el propósito de registrar tus operaciones en la Bitácora de Trading?",
      options: [
        "Identificar patrones de comportamiento repetibles para construir consistencia.",
        "Mostrar tus resultados en redes sociales para ganar seguidores.",
        "Evitar pagar comisiones al broker."
      ],
      answer: 0,
      explanation: "La bitácora proporciona datos objetivos sobre tus decisiones pasadas para evaluar tu apego al plan y corregir desviaciones."
    },
    {
      q: "¿Cómo se calcula el tamaño de posición (contratos) óptimo?",
      options: [
        "Contratos = Riesgo ($) / (Distancia SL x Valor Punto del Contrato)",
        "Contratos = Capital x Apalancamiento",
        "Contratos = Capital / Margen de Garantía"
      ],
      answer: 0,
      explanation: "Esta fórmula vincula de manera científica la pérdida tolerada con la distancia del Stop Loss técnico en el activo operado."
    }
  ],
  3: [
    {
      q: "¿Por qué un trader institucional de futuros prefiere un gráfico limpio a uno lleno de indicadores rezagados?",
      options: [
        "Porque los indicadores secundarios causan parálisis por análisis y añaden ruido al precio puro.",
        "Porque los indicadores cuestan dinero en la plataforma de futuros.",
        "Porque el precio no tiene ninguna relación con las medias móviles."
      ],
      answer: 0,
      explanation: "El precio y la estructura de mercado son los únicos elementos líderes. Los osciladores y medias son sólo cálculos secundarios retrasados."
    },
    {
      q: "¿Qué es un BOS (Break of Structure) en una tendencia alcista?",
      options: [
        "El rompimiento al alza del último máximo de oscilación (HH) confirmando la tendencia.",
        "El quiebre a la baja del último mínimo ascendente (HL) sugiriendo un cambio de tendencia.",
        "Una vela japonesa de cuerpo muy grande con volumen bajo."
      ],
      answer: 1,
      explanation: "Romper el último HL implica el fin de la estructura de mínimos crecientes, sugiriendo que los vendedores toman el control."
    },
    {
      q: "Según la ley de polaridad, ¿qué sucede cuando se rompe una resistencia fuerte?",
      options: [
        "Tiende a actuar como soporte en testeos posteriores debido a la acumulación de órdenes.",
        "Pierde toda su relevancia y debe ser borrada del gráfico.",
        "El precio cae inmediatamente en una tendencia bajista."
      ],
      answer: 0,
      explanation: "Los vendedores rezagados cierran sus posiciones a breakeven, transformando el nivel roto en soporte ante el testeo del precio."
    },
    {
      q: "¿Cuál es la función principal de la EMA 200 en la lectura técnica?",
      options: [
        "Actuar como filtro direccional: solo largos sobre ella, solo cortos bajo ella.",
        "Dar la señal exacta de compra o venta en cada cruce.",
        "Determinar el tamaño de posición óptimo."
      ],
      answer: 0,
      explanation: "La EMA 200 sirve de brújula de tendencia: evita operar en contra del flujo dominante de capital institucional."
    },
    {
      q: "¿Cómo se utiliza el RSI de 14 períodos en una estrategia sin ruido?",
      options: [
        "Como medidor de momentum en el nivel central de 50 a favor de la tendencia.",
        "Para vender cuando toca 70 (sobrecompra) y comprar cuando toca 30 (sobreventa).",
        "Como indicador de la hora de apertura del mercado."
      ],
      answer: 0,
      explanation: "El nivel 50 determina el ecuador de la fuerza; cruzar sobre 50 en tendencia alcista es confirmación de momentum comprador."
    }
  ],
  4: [
    {
      q: "¿Qué comprende la rutina de pre-market de un trader profesional?",
      options: [
        "Preparar el gráfico, verificar noticias de alto impacto y validar la checklist antes de operar.",
        "Abrir varias operaciones en demo para ver el impulso.",
        "Revisar las redes sociales para ver qué recomiendan comprar."
      ],
      answer: 0,
      explanation: "La rutina asegura que estás alineado física y técnicamente antes del inicio de la sesión, evitando sorpresas informativas."
    },
    {
      q: "¿Cómo se clasifica un error en el diario operativo?",
      options: [
        "Como técnico (violación del setup) o emocional (violación del autocontrol).",
        "Como error del broker o error de la plataforma de gráficos.",
        "Como mala suerte o error por manipulación de mercado."
      ],
      answer: 0,
      explanation: "Dividirlos entre técnicos y emocionales te permite enfocar tu proceso correctivo de forma precisa sobre el conocimiento o el autocontrol."
    },
    {
      q: "¿Qué es la inactividad forzada en el protocolo de trading?",
      options: [
        "Retirarse inmediatamente tras tocar el límite de pérdida diaria para evitar la venganza.",
        "Esperar a que el mercado cierre para poder operar.",
        "Dejar de operar durante un año si tienes una pérdida."
      ],
      answer: 0,
      explanation: "La inactividad protege tu cuenta: te retiras al tocar tus límites para calmar la mente y preservar el capital restante."
    },
    {
      q: "¿Cuál es el objetivo de auditar de forma crítica tu diario de errores?",
      options: [
        "Identificar tus debilidades recurrentes y planificar acciones correctivas específicas.",
        "Saber cuánto dinero ganaste en comisiones.",
        "Justificar las pérdidas alegando manipulación de mercado."
      ],
      answer: 0,
      explanation: "La auditoría objetiva busca patrones débiles en tu operativa para mitigarlos con reglas escritas correctivas."
    },
    {
      q: "¿Cuál es la premisa fundamental del mercado de futuros para un operador estoico?",
      options: [
        "El mercado es un entorno de probabilidades, no de certezas.",
        "El mercado siempre sube a largo plazo.",
        "Se puede predecir el precio exacto con indicadores correctos."
      ],
      answer: 0,
      explanation: "El mercado opera bajo incertidumbre. Entenderlo como probabilidades erradica el dolor de perder y la necesidad de tener la razón."
    }
  ],
  5: [
    {
      q: "¿Cuándo se confirma la validez de un patrón de Doble Techo?",
      options: [
        "Al romperse y cerrarse la vela por debajo de la línea de cuello (neckline).",
        "Tan pronto como el precio toca el nivel del primer máximo por segunda vez.",
        "Cuando el RSI supera el nivel de 70 en el segundo techo."
      ],
      answer: 0,
      explanation: "Al igual que con todos los patrones estoicos, la paciencia es clave: la confirmación ocurre solo cuando el precio rompe y cierra por debajo de la línea de cuello."
    },
    {
      q: "¿Cómo se proyecta el objetivo de ganancia (Take Profit) en un Doble Suelo?",
      options: [
        "Proyectando la distancia vertical desde el suelo hasta la línea de cuello a partir de la ruptura.",
        "Proyectando 100 puntos en futuros MES sin importar la forma.",
        "Colocando el TP al doble de la distancia del hombro izquierdo."
      ],
      answer: 0,
      explanation: "La proyección de la altura vertical del patrón desde el punto de ruptura representa el objetivo técnico mínimo esperado."
    },
    {
      q: "¿Cuál es el error más común de los operadores principiantes con este patrón?",
      options: [
        "Anticipar la entrada vendiendo en el segundo techo antes de la ruptura confirmada de la línea de cuello.",
        "Colocar el stop loss por encima del segundo máximo.",
        "Esperar a que cierre la vela de ruptura para entrar."
      ],
      answer: 0,
      explanation: "El trader impaciente es castigado; anticipar la entrada antes del quiebre real del neckline convierte el trading en una apuesta de baja probabilidad."
    },
    {
      q: "En un Doble Suelo de alta probabilidad, ¿cómo suele comportarse el volumen en el segundo mínimo?",
      options: [
        "El volumen suele ser menor en el segundo mínimo respecto al primero, denotando falta de interés vendedor.",
        "El volumen debe ser tres veces mayor en el segundo mínimo.",
        "El volumen no tiene relevancia en este patrón."
      ],
      answer: 0,
      explanation: "Un menor volumen en el segundo testeo confirma técnicamente que la presión de venta se está agotando y que el mercado está listo para revertirse."
    },
    {
      q: "¿Dónde se coloca el Stop Loss técnico obligatorio en un Doble Techo?",
      options: [
        "Justo por encima del segundo máximo.",
        "Exactamente en la línea de cuello convertida en soporte.",
        "En el punto medio entre el primer máximo y el soporte intermedio."
      ],
      answer: 0,
      explanation: "El Stop Loss se sitúa por encima del segundo techo para invalidar la operación si el precio decide hacer un nuevo máximo alcista."
    }
  ],
  6: [
    {
      q: "¿Cuál es la anatomía correcta del Hombro-Cabeza-Hombro (HCH) bajista?",
      options: [
        "Hombro Izquierdo (menor), Cabeza (máximo más alto), Hombro Derecho (máximo más bajo que la cabeza).",
        "Tres picos de la misma altura conectados por un canal ascendente.",
        "Un mínimo de oscilación seguido de tres máximos crecientes y un FVG."
      ],
      answer: 0,
      explanation: "El HCH consta de tres máximos sucesivos donde el central (cabeza) es el más alto, y los extremos (hombros) son máximos más bajos de consolidación."
    },
    {
      q: "¿Qué representa el Hombro Derecho en un HCH tradicional?",
      options: [
        "El agotamiento definitivo de los compradores, al no poder hacer un nuevo máximo.",
        "La entrada agresiva del creador de mercado a breakeven.",
        "La consolidación alcista de mayor volumen de la sesión."
      ],
      answer: 0,
      explanation: "El fallo en alcanzar el nivel de la cabeza confirma que la demanda se ha debilitado significativamente y los vendedores toman el control."
    },
    {
      q: "¿Qué es la línea de cuello (neckline) en un Hombro-Cabeza-Hombro?",
      options: [
        "La línea de soporte que conecta los mínimos de las correcciones del hombro izquierdo y de la cabeza.",
        "La media móvil de 200 períodos que cruza el centro de la cabeza.",
        "El nivel de precio de la punta de la cabeza."
      ],
      answer: 0,
      explanation: "El neckline es la directriz que conecta los valles de soporte intermedios del patrón; su quiebre confirma la estructura bajista."
    },
    {
      q: "En un HCH Invertido, ¿cuál es la implicación y dirección esperada?",
      options: [
        "Reversión alcista mayor tras la ruptura al alza de la línea de cuello.",
        "Continuación bajista acelerada tras romper el hombro derecho.",
        "Lateralización indefinida del precio en la EMA 200."
      ],
      answer: 0,
      explanation: "El HCH invertido denota el agotamiento vendedor y anticipa un cambio de tendencia mayor hacia el lado alcista."
    },
    {
      q: "¿Cuál es la regla técnica para calcular el Take Profit objetivo en un HCH?",
      options: [
        "Medir la distancia desde el pico de la cabeza hasta la línea de cuello y proyectarla desde la ruptura.",
        "Utilizar siempre un ratio de riesgo beneficio fijo de 1:1.",
        "Proyectar la distancia entre el hombro izquierdo y el hombro derecho."
      ],
      answer: 0,
      explanation: "Medir la altura total de la cabeza al neckline y proyectarla desde la ruptura da el objetivo teórico del flujo de órdenes."
    }
  ],
  7: [
    {
      q: "¿Qué caracteriza a un Triángulo Simétrico?",
      options: [
        "Dos líneas de tendencia convergentes: soporte ascendente y resistencia descendente.",
        "Una resistencia horizontal arriba y un soporte descendente abajo.",
        "Un canal de consolidación paralelo que se mueve contra la tendencia mayor."
      ],
      answer: 0,
      explanation: "El triángulo simétrico se compone de dos directrices convergentes de la misma pendiente, reflejando compresión pura y equilibrio de fuerzas."
    },
    {
      q: "¿Por qué el Triángulo Ascendente se considera tradicionalmente un patrón alcista?",
      options: [
        "Por que muestra que los compradores están dispuestos a comprar a precios más altos (mínimos crecientes).",
        "Porque la línea superior de resistencia apunta directamente hacia arriba.",
        "Porque el volumen disminuye hasta llegar a cero en el soporte."
      ],
      answer: 0,
      explanation: "Los mínimos crecientes demuestran presión compradora acumulada chocando contra una barrera fija de oferta."
    },
    {
      q: "¿Cuál es el rango ideal para que ocurra la ruptura del triángulo y sea válida?",
      options: [
        "Entre el 60% y el 80% de la distancia total desde el inicio hasta el ápice.",
        "Justo al inicio del triángulo para aprovechar el impulso completo.",
        "Exactamente en el ápice, donde las dos líneas se cruzan."
      ],
      answer: 0,
      explanation: "Si el precio rompe muy tarde (cerca del ápice), el mercado suele encontrarse sin momentum y el movimiento se deshace."
    },
    {
      q: "¿Qué ocurre si un triángulo comprime el precio hasta el ápice sin romperlo?",
      options: [
        "El patrón suele perder fuerza y convertirse en un movimiento lateral sin interés.",
        "Se produce una ruptura del 100% de probabilidad al día siguiente.",
        "El stop loss debe ajustarse al triple de tamaño automáticamente."
      ],
      answer: 0,
      explanation: "La compresión tardía agota la energía del patrón técnico, dando lugar a un mercado ruidoso y sin dirección clara."
    },
    {
      q: "¿Dónde se coloca el Stop Loss técnico en un Triángulo Descendente?",
      options: [
        "Detrás del último máximo decreciente dentro del triángulo.",
        "Exactamente en la línea de soporte horizontal inferior.",
        "20 puntos por debajo de la ruptura."
      ],
      answer: 0,
      explanation: "El stop loss se ubica en el último pico decreciente para invalidar el trade si el precio recupera la estructura alcista menor."
    }
  ],
  8: [
    {
      q: "¿Cuál es la estructura de una Bandera Alcista (Bull Flag) de alta probabilidad?",
      options: [
        "Un mástil alcista rápido y vertical, seguido de un canal correctivo estrecho y descendente.",
        "Un retroceso lento bajista seguido de tres máximos ascendentes paralelos.",
        "Un rango lateral ancho de 30 días sin volumen institucional."
      ],
      answer: 0,
      explanation: "La bandera alcista muestra un impulso fuerte de iniciativa institucional seguido de una toma de ganancias sana y controlada."
    },
    {
      q: "¿Cuánto debe retroceder como máximo la consolidación de la bandera respecto al mástil?",
      options: [
        "No debe retroceder más del 50% del mástil (idealmente hasta el nivel 38.2%).",
        "Debe retroceder el 100% para rellenar completamente la liquidez.",
        "Debe cruzar la EMA 200 en sentido opuesto en temporalidad diaria."
      ],
      answer: 0,
      explanation: "Un retroceso mayor al 50% demuestra debilidad estructural de los compradores y cancela la probabilidad de una ruptura limpia."
    },
    {
      q: "¿Cuál es la diferencia principal entre una Bandera y un Banderín (Pennant)?",
      options: [
        "La bandera consolida en un canal paralelo; el banderín consolida en un pequeño triángulo simétrico.",
        "La bandera es bajista y el banderín es alcista.",
        "El banderín no tiene mástil de entrada impulsiva."
      ],
      answer: 0,
      explanation: "La diferencia es puramente geométrica en su fase de pausa, aunque ambos comparten la misma lógica de continuidad de tendencia."
    },
    {
      q: "¿Cómo se opera un canal descendente de forma pragmática a favor de la tendencia?",
      options: [
        "Buscando oportunidades de venta en corto en la parte superior del canal.",
        "Comprando rompimientos falsos en la línea de resistencia.",
        "Operando únicamente largos en el soporte del canal descendente."
      ],
      answer: 0,
      explanation: "En un canal descendente la fuerza dominante es bajista, por lo que buscamos cortos cerca de la línea superior de resistencia técnica."
    },
    {
      q: "¿Cómo se calcula el Take Profit objetivo al operar una Bandera?",
      options: [
        "Midiendo la altura del mástil y proyectándola desde el punto de ruptura o consolidación.",
        "Apuntando al inicio de la sesión del día anterior.",
        "Esperando a que el RSI llegue a 30 en velas de 15 minutos."
      ],
      answer: 0,
      explanation: "El principio del mástil establece que el segundo impulso proyectado suele ser equivalente en tamaño al impulso original."
    }
  ],
  9: [
    {
      q: "¿Qué diferencia principal hay entre una Cuña y un Triángulo?",
      options: [
        "En la cuña, ambas líneas (soporte y resistencia) apuntan en la misma dirección.",
        "En el triángulo, el volumen siempre aumenta, y en la cuña disminuye.",
        "Las cuñas no tienen un ápice de convergencia."
      ],
      answer: 0,
      explanation: "Mientras que los triángulos convergen con directrices de inclinación opuesta, las cuñas muestran ambas líneas apuntando al alza o a la baja."
    },
    {
      q: "¿Cuál es la implicación típica de una Cuña Ascendente (Rising Wedge)?",
      options: [
        "Es un patrón bajista (de reversión alcista-bajista o de continuación bajista).",
        "Es un patrón puramente alcista de continuación.",
        "Marca una lateralización sin dirección de mercado definida."
      ],
      answer: 0,
      explanation: "La cuña ascendente muestra compresión al alza con pérdida de momentum y volumen, por lo que se resuelve con rupturas bajistas."
    },
    {
      q: "¿Por qué la Cuña Descendente (Falling Wedge) tiene implicación alcista?",
      options: [
        "Porque la compresión a la baja se realiza con menor momentum, mostrando agotamiento vendedor.",
        "Porque rompe el soporte principal con velas de rango amplio alcistas.",
        "Porque el precio siempre sube antes de tocar la línea de tendencia inferior."
      ],
      answer: 0,
      explanation: "Los vendedores no logran desplazar el precio con la misma fuerza que al inicio, lo que culmina en un fuerte quiebre alcista."
    },
    {
      q: "Para validar técnicamente una cuña antes de operarla, ¿cuántos toques en sus líneas debe realizar el precio?",
      options: [
        "Al menos de 5 toques en total entre soporte y resistencia.",
        "Únicamente dos toques en la resistencia y ninguno en el soporte.",
        "Más de diez toques en gráficos de 1 minuto."
      ],
      answer: 0,
      explanation: "Cinco toques aseguran que el precio se ha comprimido lo suficiente y que las directrices del canal convergente son válidas."
    },
    {
      q: "¿Dónde se ubica el Take Profit objetivo principal de una cuña rota?",
      options: [
        "En el origen de la cuña (el punto más ancho de la formación).",
        "5 puntos por encima de la EMA 200.",
        "En la mitad de la altura total del mástil del pilar anterior."
      ],
      answer: 0,
      explanation: "El origen de la cuña representa la zona inicial de consolidación, constituyendo un imán de liquidez objetivo natural."
    }
  ],
  10: [
    {
      q: "¿Qué es un Gap de Apertura (Opening Gap) en futuros de índices?",
      options: [
        "La diferencia entre el precio de cierre de la sesión regular de ayer y la apertura de hoy a las 09:30 EST.",
        "El espacio de volumen vacío entre dos velas de 1 minuto durante la sesión europea.",
        "La diferencia de comisiones entre el broker CME y el simulador de trading."
      ],
      answer: 0,
      explanation: "El opening gap marca el salto de precio entre la RTH de la sesión anterior y el inicio del mercado de hoy."
    },
    {
      q: "¿Qué caracteriza a un Gap de Escape (Breakaway Gap)?",
      options: [
        "Rompe fuera de un rango de consolidación con fuerte volumen y no suele llenarse en el corto plazo.",
        "Se llena en los primeros 5 minutos de la sesión RTH de forma garantizada.",
        "Ocurre al final de una tendencia parabólica como señal de agotamiento extremo."
      ],
      answer: 0,
      explanation: "Los breakaway gaps indican un fuerte desequilibrio inicial que rompe estructuras laterales e inicia nuevas tendencias duraderas."
    },
    {
      q: "Al operar un Gap Fade (relleno de gap), ¿cuál es el objetivo de Take Profit?",
      options: [
        "El precio de cierre de la sesión regular anterior.",
        "La EMA 200 en temporalidad de 4 horas.",
        "El doble de la distancia de la apertura de Nueva York."
      ],
      answer: 0,
      explanation: "Buscamos el retorno a la polaridad previa, es decir, el precio en el que cerró la sesión regular de ayer."
    },
    {
      q: "¿Qué nos indica un volumen inusualmente alto en los primeros 5 minutos de la sesión ante un Gap?",
      options: [
        "Que la tendencia probablemente continuará en la dirección del gap (Gap Go).",
        "Que el gap se llenará de inmediato en el siguiente tick.",
        "Que el mercado cerrará sus operaciones temprano debido a la volatilidad."
      ],
      answer: 0,
      explanation: "El volumen masivo en la apertura refleja participación institucional respaldando el salto de precio, reduciendo la probabilidad de que se llene."
    },
    {
      q: "¿Qué representa un Gap de Agotamiento (Exhaustion Gap)?",
      options: [
        "Ocurre cerca del final de una tendencia fuerte, tras un salto rápido que es revertido casi de inmediato.",
        "La pausa de consolidación previa a una bandera de 30 días.",
        "La desconexión del servidor de cotizaciones del CME."
      ],
      answer: 0,
      explanation: "Es el último aliento de una tendencia parabólica donde los traders retrasados entran por FOMO antes del giro brusco del mercado."
    }
  ],
  11: [
    {
      q: "¿Por qué ocurren los falsos rompimientos (fakeouts o trampas de liquidez)?",
      options: [
        "Porque las instituciones necesitan absorber la liquidez de los stops minoristas para llenar sus posiciones.",
        "Debido a fallos técnicos en los servidores del broker regulado.",
        "Porque el precio siempre se mueve en dirección contraria al volumen de 1 minuto."
      ],
      answer: 0,
      explanation: "Las grandes órdenes institucionales necesitan contrapartida; inducir rupturas falsas les permite comprar barato o vender caro."
    },
    {
      q: "¿Qué es una Trampa de Toros (Bull Trap)?",
      options: [
        "Una ruptura alcista de resistencia que falla rápidamente, volviendo al rango y atrapando a los compradores.",
        "El cruce bajista de la EMA 200 con el RSI en 30.",
        "La colocación de un Take Profit incorrecto en un canal descendente."
      ],
      answer: 0,
      explanation: "La trampa activa órdenes de compra stop de traders minoristas que sirven de contrapartida para las ventas institucionales."
    },
    {
      q: "¿Qué vela de acción del precio nos da la primera alerta de un falso rompimiento?",
      options: [
        "Una vela que penetra el nivel pero cierra dentro del rango con mecha larga (tipo Pinbar o Martillo).",
        "Una vela Doji sin volumen durante la sesión asiática.",
        "Tres velas alcistas de rango amplio consecutivas."
      ],
      answer: 0,
      explanation: "La mecha larga fuera del nivel clave denota rechazo inmediato por absorción e iniciativa institucional opuesta."
    },
    {
      q: "¿Dónde se coloca el Stop Loss técnico obligatorio al operar un falso rompimiento de resistencia?",
      options: [
        "Justo por encima del extremo de la mecha de la vela de rechazo de la trampa.",
        "En la línea de soporte inferior del rango lateral.",
        "30 puntos por debajo de la entrada al mercado regular."
      ],
      answer: 0,
      explanation: "El extremo de la mecha invalida la trampa: si el precio supera ese punto, la hipótesis de absorción institucional es errónea."
    },
    {
      q: "Si estás en una posición de ruptura y el precio reingresa y cierra dentro del rango previo, ¿qué dicta la disciplina?",
      options: [
        "Cerrar la operación manualmente con pérdida mínima o a breakeven, ya que la ruptura ha fallado.",
        "Mover el Stop Loss en contra esperando que rebote tarde o temprano.",
        "Duplicar el tamaño de la posición para promediar a la baja."
      ],
      answer: 0,
      explanation: "Un trader pragmático no se aferra a la esperanza: si la estructura de ruptura falla, sale de inmediato para proteger el capital."
    }
  ],
  12: [
    {
      q: "¿Por qué el volumen se considera 'la huella del dinero profesional'?",
      options: [
        "Porque los grandes participantes no pueden ocultar las cantidades masivas de contratos negociados.",
        "Porque muestra el número exacto de traders minoristas conectados al simulador.",
        "Porque determina las comisiones cobradas por el broker en cada operación."
      ],
      answer: 0,
      explanation: "El volumen representa el intercambio real de contratos; las instituciones no pueden ocultar su actividad de alta densidad."
    },
    {
      q: "¿Qué indica una ruptura de resistencia con rango de vela amplio y volumen inusualmente alto?",
      options: [
        "Armonía precio-volumen, lo que confirma un fuerte respaldo institucional del movimiento.",
        "Una trampa inminente y que el precio caerá de inmediato.",
        "Que el mercado se ha quedado sin liquidez y entrará en rango lateral."
      ],
      answer: 0,
      explanation: "La coincidencia de volumen y rango amplio demuestra iniciativa de compras decididas a sostener precios superiores."
    },
    {
      q: "Al analizar un retroceso (pullback) técnico tras una ruptura alcista, ¿cómo debe ser el volumen?",
      options: [
        "El volumen debe disminuir notablemente, indicando falta de interés vendedor contra la nueva tendencia.",
        "El volumen debe ser igual o superior al volumen de la vela de ruptura.",
        "El volumen debe aumentar progresivamente hasta superar la media móvil."
      ],
      answer: 0,
      explanation: "Un pullback sano se realiza con volumen bajo, demostrando que los vendedores no están activos contra el movimiento principal alcista."
    },
    {
      q: "¿Qué es la absorción por volumen en un extremo del gráfico?",
      options: [
        "Un volumen muy alto en un testeo de máximo que no logra subir y cierra con mecha superior, indicando ventas institucionales.",
        "La anulación de las comisiones del broker tras completar 30 días de trading.",
        "La desactivación de la EMA 200 y el RSI en la plataforma de futuros."
      ],
      answer: 0,
      explanation: "El volumen alto sin avance del precio refleja que las compras minoristas están siendo bloqueadas y absorbidas por órdenes institucionales de venta limitadas."
    },
    {
      q: "¿Qué volumen de confirmación mínimo buscamos en la vela de ruptura de un patrón técnico respecto al promedio?",
      options: [
        "Que supere al menos en 1.5x el volumen promedio de las últimas 20 velas.",
        "Que sea exactamente igual al volumen de la apertura del mercado nocturno.",
        "Que sea inferior al 10% del promedio diario del CME."
      ],
      answer: 0,
      explanation: "La regla de confluencia institucional requiere que la barra de ruptura destaque sobre el promedio de volumen para confirmar el momentum."
    }
  ]
};

// Global App State
let activeSection = "welcome";
let activeDayId = "day1";
let activePilarAccordion = 1;
let activeQuizAnswers = {}; // { questionIndex: selectedOptionIndex }
let pilarPassedStates = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false };

// Load state from localStorage
const loadProgress = () => {
  const savedProgress = localStorage.getItem("vision_30day_progress");
  if (savedProgress) {
    try {
      const parsed = JSON.parse(savedProgress);
      Object.keys(parsed.days).forEach(key => {
        if (courseData[key]) {
          courseData[key].completed = parsed.days[key].completed;
          courseData[key].unlocked = parsed.days[key].unlocked;
        }
      });
      pilarPassedStates = parsed.quizzes;
    } catch (e) {
      console.error("Error parsing progress", e);
    }
  }
  updateUIProgress();
};

// Save state to localStorage
const saveProgress = () => {
  const daysState = {};
  Object.keys(courseData).forEach(key => {
    daysState[key] = {
      completed: courseData[key].completed,
      unlocked: courseData[key].unlocked
    };
  });
  const stateToSave = {
    days: daysState,
    quizzes: pilarPassedStates
  };
  localStorage.setItem("vision_30day_progress", JSON.stringify(stateToSave));
};

// Update progress bar and unlock states
const updateUIProgress = () => {
  let completedCount = 0;
  const totalDays = 38;

  Object.values(courseData).forEach(day => {
    if (day.completed) completedCount++;
  });

  const percentage = Math.round((completedCount / totalDays) * 100);
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");
  
  if (progressText) progressText.textContent = `${percentage}%`;
  if (progressBar) progressBar.style.width = `${percentage}%`;

  // Toggle Certificate tab in sidebar if course is completed
  const certMenuItem = document.getElementById("menu-item-certificate");
  if (certMenuItem) {
    const allPassed = Object.values(pilarPassedStates).every(state => state === true);
    certMenuItem.style.display = allPassed ? "block" : "none";
  }

  lucide.createIcons();
};

// Reset academy progress
window.resetAcademyProgress = () => {
  if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso del curso de 38 días y tu bitácora?")) {
    localStorage.removeItem("vision_30day_progress");
    Object.keys(courseData).forEach((key, index) => {
      courseData[key].completed = false;
      courseData[key].unlocked = index === 0;
      localStorage.removeItem(`vision_challenge_${key}`);
    });
    pilarPassedStates = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false };
    saveProgress();
    updateUIProgress();
    renderAcademicMenu();
    showSection("welcome");
  }
};

// Unlock all lessons and quizzes
window.unlockAllLessons = () => {
  if (confirm("¿Deseas desbloquear todas las lecciones del curso de 38 días y evaluaciones para navegar libremente?")) {
    Object.keys(courseData).forEach(key => {
      courseData[key].unlocked = true;
    });
    pilarPassedStates = { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 10: true, 11: true, 12: true };
    saveProgress();
    updateUIProgress();
    renderAcademicMenu();
    alert("¡Todas las lecciones y evaluaciones han sido desbloqueadas con éxito!");
  }
};

// Sidebar navigation click routing
const showSection = (sectionId) => {
  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));

  const targetSec = document.getElementById(sectionId);
  if (targetSec) {
    targetSec.classList.add("active");
  }

  const targetMenuItem = document.querySelector(`[data-target="${sectionId}"]`);
  if (targetMenuItem) {
    targetMenuItem.classList.add("active");
  }

  activeSection = sectionId;
  stopAllSpeech();

  if (sectionId === "glossary") {
    renderGlossary();
  } else if (sectionId === "certificate") {
    renderCertificate();
  }
};

// Open Specific Pilar from Welcome Screen
window.openPillar = (pilarId) => {
  // Find first unlocked day of this pilar
  const pilarDays = Object.values(courseData).filter(d => d.pilar === pilarId);
  const unlockedDays = pilarDays.filter(d => d.unlocked);
  
  if (unlockedDays.length > 0) {
    // Open the latest unlocked day of this pilar
    const targetDay = unlockedDays[unlockedDays.length - 1];
    window.loadDay(targetDay.id);
  } else {
    alert("Este pilar se encuentra bloqueado. Debes completar las lecciones y evaluaciones de la semana anterior.");
  }
};

// Render Collapsible sidebar week list
const renderAcademicMenu = () => {
  const container = document.getElementById("academic-menu-container");
  if (!container) return;

  let html = "";
  
  const pilares = [
    { id: 1, name: "Pilar 1: Mentalidad Ganadora", icon: "brain" },
    { id: 2, name: "Pilar 2: Gestión y Disciplina", icon: "shield-check" },
    { id: 3, name: "Pilar 3: Estrategia de Valor", icon: "trending-up" },
    { id: 4, name: "Pilar 4: Ejecución y Auditoría", icon: "activity" },
    { id: 5, name: "Pilar 5: Doble Techo y Suelo", icon: "arrow-down-up" },
    { id: 6, name: "Pilar 6: Hombro-Cabeza-Hombro", icon: "heading" },
    { id: 7, name: "Pilar 7: Triángulos de Consolidación", icon: "triangle" },
    { id: 8, name: "Pilar 8: Canales y Banderas", icon: "flag" },
    { id: 9, name: "Pilar 9: Cuñas y Agotamiento", icon: "trending-down" },
    { id: 10, name: "Pilar 10: Gaps y Brechas", icon: "split" },
    { id: 11, name: "Pilar 11: Rupturas y Trampas", icon: "alert-triangle" },
    { id: 12, name: "Pilar 12: Confirmación con Volumen", icon: "bar-chart-2" }
  ];

  pilares.forEach(pilar => {
    const pilarDays = Object.values(courseData).filter(d => d.pilar === pilar.id);
    const isOpen = activePilarAccordion === pilar.id;
    
    html += `
      <div class="pilar-group ${isOpen ? 'open' : ''}" id="pilar-group-${pilar.id}">
        <div class="pilar-header" onclick="window.togglePilarAccordion(${pilar.id})">
          <span style="display:flex; align-items:center; gap:8px;">
            <i data-lucide="${pilar.icon}" style="width:14px; height:14px; color: ${isOpen ? 'var(--color-accent)' : 'var(--text-secondary)'}"></i>
            ${pilar.name}
          </span>
          <i data-lucide="${isOpen ? 'chevron-down' : 'chevron-right'}" style="width: 14px; height: 14px; color: var(--text-muted);"></i>
        </div>
        <div class="pilar-sub-list">
    `;
    
    pilarDays.forEach(day => {
      const isActive = activeSection === "academy-day" && activeDayId === day.id;
      const isLocked = !day.unlocked;
      
      let statusIcon = '<i data-lucide="lock" class="status-locked" style="width:12px; height:12px;"></i>';
      if (day.completed) {
        statusIcon = '<i data-lucide="check-circle" class="status-completed" style="width:12px; height:12px; color:var(--color-bull);"></i>';
      } else if (day.unlocked) {
        statusIcon = '<i data-lucide="circle" class="status-unlocked" style="width:12px; height:12px; color:var(--color-accent);"></i>';
      }

      html += `
        <div class="day-item ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}" onclick="window.loadDay('${day.id}')">
          <span>Día ${day.id.replace("day", "")}: ${day.title}</span>
          <span class="menu-status">${statusIcon}</span>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
};

window.togglePilarAccordion = (pilarId) => {
  activePilarAccordion = activePilarAccordion === pilarId ? null : pilarId;
  renderAcademicMenu();
};

// Load Day details dynamically
window.loadDay = (dayId) => {
  const day = courseData[dayId];
  if (!day || !day.unlocked) return;

  activeDayId = dayId;
  activeSection = "academy-day";

  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));

  const academyDaySection = document.getElementById("academy-day");
  if (academyDaySection) {
    academyDaySection.classList.add("active");
  }

  // Set visual texts
  document.getElementById("academy-day-title").innerHTML = `<i data-lucide="book-open"></i> Día ${dayId.replace("day", "")}: ${day.title}`;
  document.getElementById("academy-day-content").innerHTML = day.content;
  document.getElementById("academy-challenge-text").innerText = day.challenge;
  
  document.getElementById("btn-narrate-day").setAttribute("data-day", dayId);

  // Load saved challenge text
  const savedResponse = localStorage.getItem(`vision_challenge_${dayId}`) || "";
  document.getElementById("challenge-response").value = savedResponse;

  // Toggle Quiz displaying if review day
  const dayNum = parseInt(dayId.replace("day", ""));
  const quizCard = document.getElementById("academy-quiz-card");
  
  if ([7, 15, 22, 30, 31, 32, 33, 34, 35, 36, 37, 38].includes(dayNum)) {
    quizCard.style.display = "block";
    renderPilarQuiz(day.pilar);
  } else {
    quizCard.style.display = "none";
  }

  // Toggle Next Lesson button
  const nextBtn = document.getElementById("btn-next-lesson-audio");
  if (nextBtn) {
    const nextDayId = `day${dayNum + 1}`;
    if (courseData[nextDayId]) {
      nextBtn.style.display = "inline-flex";
    } else {
      nextBtn.style.display = "none";
    }
  }

  activePilarAccordion = day.pilar;
  renderAcademicMenu();
  stopAllSpeech();
  lucide.createIcons();
};

// Render Pilar Quiz questions
const renderPilarQuiz = (pilarId) => {
  activeQuizAnswers = {};
  const container = document.getElementById("academy-quiz-container");
  if (!container) return;

  const questions = pilarQuizzes[pilarId];
  if (!questions) return;

  let html = `<div class="quiz-questions-wrapper">`;

  questions.forEach((qObj, qIndex) => {
    html += `
      <div class="quiz-question-block" style="margin-bottom: 24px; border-bottom: 1px dashed var(--border-color); padding-bottom: 20px;" data-q-index="${qIndex}">
        <p class="quiz-question" style="font-size: 1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">${qIndex + 1}. ${qObj.q}</p>
        <div class="quiz-options" style="display:flex; flex-direction:column; gap:8px;">
    `;

    qObj.options.forEach((opt, optIndex) => {
      html += `
        <button class="quiz-option" onclick="handleSelectOption(${pilarId}, ${qIndex}, ${optIndex}, this)">
          ${opt}
        </button>
      `;
    });

    html += `
        </div>
        <div class="quiz-feedback" id="feedback-pilar-${pilarId}-${qIndex}"></div>
      </div>
    `;
  });

  html += `</div>`;

  // Submit button
  html += `
    <div class="quiz-action-bar">
      <button class="btn btn-success" id="btn-submit-quiz-pilar" onclick="submitPilarQuiz(${pilarId})" disabled>
        <i data-lucide="check"></i> Evaluar Cuestionario Semanal
      </button>
    </div>
  `;

  container.innerHTML = html;
  lucide.createIcons();
};

// Handle quiz option selecting
window.handleSelectOption = (pilarId, qIndex, optIndex, buttonElement) => {
  if (pilarPassedStates[pilarId]) return; // Stop if already passed

  const questionBlock = buttonElement.closest(".quiz-question-block");
  questionBlock.querySelectorAll(".quiz-option").forEach(btn => {
    btn.classList.remove("correct", "incorrect");
    btn.style.borderColor = "var(--border-color)";
    btn.style.background = "var(--bg-tertiary)";
  });

  buttonElement.style.borderColor = "var(--color-accent)";
  buttonElement.style.background = "rgba(59, 130, 246, 0.08)";

  activeQuizAnswers[qIndex] = optIndex;

  const total = pilarQuizzes[pilarId].length;
  const answered = Object.keys(activeQuizAnswers).length;
  
  const submitBtn = document.getElementById("btn-submit-quiz-pilar");
  if (submitBtn) {
    submitBtn.disabled = answered !== total;
  }
};

// Evaluate Pilar Quiz answers
window.submitPilarQuiz = (pilarId) => {
  const container = document.getElementById("academy-quiz-container");
  const questions = pilarQuizzes[pilarId];
  let correctCount = 0;

  questions.forEach((qObj, qIndex) => {
    const selected = activeQuizAnswers[qIndex];
    const questionBlock = container.querySelector(`[data-q-index="${qIndex}"]`);
    const options = questionBlock.querySelectorAll(".quiz-option");
    const feedbackEl = document.getElementById(`feedback-pilar-${pilarId}-${qIndex}`);

    options.forEach(btn => btn.classList.add("disabled"));

    if (selected === qObj.answer) {
      correctCount++;
      options[selected].classList.add("correct");
      feedbackEl.className = "quiz-feedback correct";
      feedbackEl.innerHTML = `<strong>🟢 ¡Correcto!</strong> ${qObj.explanation}`;
    } else {
      options[selected].classList.add("incorrect");
      options[qObj.answer].classList.add("correct");
      feedbackEl.className = "quiz-feedback incorrect";
      feedbackEl.innerHTML = `<strong>🔴 Incorrecto.</strong> ${qObj.explanation}`;
    }
  });

  const passed = correctCount === questions.length;
  const actionBar = container.querySelector(".quiz-action-bar");

  if (passed) {
    pilarPassedStates[pilarId] = true;
    
    // Mark the review day as completed
    courseData[activeDayId].completed = true;
    
    // Unlock next day
    const dayNum = parseInt(activeDayId.replace("day", ""));
    const nextDayId = `day${dayNum + 1}`;
    if (courseData[nextDayId]) {
      courseData[nextDayId].unlocked = true;
    }

    saveProgress();
    updateUIProgress();
    renderAcademicMenu();

    actionBar.innerHTML = `
      <div class="quiz-completed-overlay" style="width: 100%;">
        <div class="quiz-score-circle">5/5</div>
        <h4 style="color: var(--color-bull); margin-bottom: 8px;">🎉 Pilar Aprobado con Éxito</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Has asimilado perfectamente las reglas innegociables de este pilar.</p>
        ${courseData[nextDayId]
          ? `<button class="btn btn-success" onclick="window.loadDay('${nextDayId}')">Siguiente Semana <i data-lucide='arrow-right'></i></button>`
          : `<button class="btn btn-success" onclick="showSection('certificate')">Obtener Mi Diploma <i data-lucide='award'></i></button>`
        }
      </div>
    `;
  } else {
    actionBar.innerHTML = `
      <div class="quiz-completed-overlay" style="width: 100%;">
        <div class="quiz-score-circle fail">${correctCount}/5</div>
        <h4 style="color: var(--color-bear); margin-bottom: 8px;">⚠️ Cuestionario No Superado</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Para avanzar de pilar debes responder correctamente el 100% de las preguntas operativas.</p>
        <button class="btn btn-secondary" onclick="renderPilarQuiz(${pilarId})">Reintentar Cuestionario</button>
      </div>
    `;
  }
  lucide.createIcons();
};

// Technical Glossary terms database
const glossaryTerms = [
  { term: "CME (Chicago Mercantile Exchange)", desc: "El mercado y bolsa regulada centralizada más grande del mundo para la negociación de contratos de futuros de índices, divisas y materias primas." },
  { term: "Margin Call (Llamada de Margen)", desc: "Aviso de advertencia del broker cuando el capital de tu cuenta cae por debajo del margen de mantenimiento debido a pérdidas flotantes. Conlleva la liquidación inmediata de posiciones." },
  { term: "Daily Drawdown", desc: "El límite máximo de pérdidas permitido en un solo día operativo. Sirve de freno financiero para proteger al trader de rachas perdedoras desastrosas." },
  { term: "BOS (Break of Structure)", desc: "Quiebre de Estructura. Ocurre cuando el precio quiebra con fuerza el último mínimo ascendente (HL) en tendencia alcista o el máximo descendente (LH) en tendencia bajista, indicando giros." },
  { term: "Tick y Punto", desc: "Fluctuaciones de precio. Un Tick es el movimiento mínimo de cotización (0.25 en ES/NQ). Un Punto equivale a 4 ticks enteros ($50 en ES, $20 en NQ por contrato)." },
  { term: "FVG (Fair Value Gap)", desc: "Iniciativa e ineficiencia en el precio provocada por compras o ventas agresivas que dejan un desequilibrio de liquidez en un patrón de 3 velas consecutivas." },
  { term: "Order Block (Bloque de Órdenes)", desc: "Zonas de precios donde las instituciones financieras acumularon un volumen masivo de órdenes de compra o venta en el pasado y donde se espera una reacción fuerte." },
  { term: "Slippage (Deslizamiento)", desc: "La diferencia de precio entre el valor solicitado de tu orden de compra/venta y el precio real al que se ejecuta en el mercado debido a la volatilidad." },
  { term: "Asimetría Matemática", desc: "La relación donde la ganancia promedio de tus aciertos es considerablemente mayor a la pérdida promedio de tus trades perdedores (R:B 1:2 o superior)." },
  { term: "FOMO", desc: "Miedo a quedar fuera (Fear of Missing Out). Impulso psicológico destructivo que empuja al trader a comprar precios inflados o vender precios bajos sin esperar a su setup." }
];

const renderGlossary = () => {
  const container = document.getElementById("glossary-container");
  if (!container) return;

  let html = "";
  glossaryTerms.forEach(item => {
    html += `
      <div class="concept-card">
        <div class="concept-card-title"><i data-lucide="book-open" style="width:14px; height:14px; color:var(--color-accent);"></i> ${item.term}</div>
        <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin-top: 5px;">${item.desc}</p>
      </div>
    `;
  });
  
  container.innerHTML = html;
  lucide.createIcons();
};

// Render Certificate Completion info
const renderCertificate = () => {
  const nameInput = document.getElementById("cert-student-name");
  const dateText = document.getElementById("cert-date-str");
  
  if (nameInput) {
    const storedName = localStorage.getItem("vision_student_name") || "Albert Sierra";
    nameInput.textContent = storedName;
  }
  if (dateText) {
    dateText.textContent = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  }
};

const getApiKey = () => {
  const stored = localStorage.getItem("vision_elevenlabs_api_key");
  if (!stored || stored === "null" || stored === "undefined" || stored.trim() === "") {
    return "sk_cf0eff44faa9a9838a53af3850a02dc60c96e883b95570ce";
  }
  return stored.trim();
};

const getVoiceId = () => {
  const stored = localStorage.getItem("vision_elevenlabs_voice_id");
  if (!stored || stored === "null" || stored === "undefined" || stored.trim() === "") {
    return "c6rAmJGsdzNWAIVkws45"; // Default voice ID (Albert Sierra)
  }
  return stored.trim();
};

// Audio Narration functions with ElevenLabs & Browser Web Speech
let activeAudio = null;
let activeNarratorButton = null;

const stopAllSpeech = () => {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  
  const btn = document.getElementById("btn-narrate-day");
  if (btn) {
    btn.classList.remove("active");
    btn.style.background = "";
    btn.style.color = "";
    btn.style.borderColor = "";
    const span = btn.querySelector("span");
    if (span) span.textContent = "Narrar Lección";
    const icon = btn.querySelector("i");
    if (icon) icon.setAttribute("data-lucide", "volume-2");
  }
  lucide.createIcons();
  activeNarratorButton = null;
};

const handleNarrateClick = async (dayId, button) => {
  if (button === activeNarratorButton) {
    stopAllSpeech();
    return;
  }

  stopAllSpeech();

  const day = courseData[dayId];
  if (!day) return;

  const container = document.getElementById("academy-day-content");
  if (!container) return;

  const textToRead = container.innerText || container.textContent;
  const apiKey = getApiKey();
  const voiceId = getVoiceId();

  if (apiKey) {
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
          text: textToRead.substring(0, 4800), // Safety cap limit
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.75,
            similarity_boost: 0.85,
            style: 0.05,
            use_speaker_boost: true
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
      console.warn(`Error con ElevenLabs: ${err.message}. Usando el narrador gratuito por defecto...`);
      speakBrowser(textToRead, button);
    }
  } else {
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
  const cleanText = text.replace(/\s+/g, " ").trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "es-ES";
  
  const voices = window.speechSynthesis.getVoices();
  // Intentar buscar una voz en español masculina por nombre/palabras clave
  let esVoice = voices.find(v => {
    const nameLower = v.name.toLowerCase();
    const isSpanish = v.lang.startsWith("es-ES") || v.lang.startsWith("es");
    const isMale = nameLower.includes("male") || 
                   nameLower.includes("hombre") || 
                   nameLower.includes("jorge") || 
                   nameLower.includes("alvaro") || 
                   nameLower.includes("david") || 
                   nameLower.includes("julio");
    return isSpanish && isMale;
  });

  if (!esVoice) {
    esVoice = voices.find(v => v.lang.startsWith("es-ES") || v.lang.startsWith("es"));
  }

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

// Export Trading Plan custom generator
const exportTradingPlan = () => {
  const capital = document.getElementById("calc-capital").value || "10000";
  const riskPct = document.getElementById("calc-risk-pct").value || "1";
  const assetSelect = document.getElementById("calc-asset");
  const assetName = assetSelect ? assetSelect.options[assetSelect.selectedIndex].text : "E-mini S&P 500 (ES)";
  const slPuntos = document.getElementById("calc-sl-ticks").value || "10";
  
  const riskMoney = document.getElementById("res-risk-money") ? document.getElementById("res-risk-money").textContent : `$${(capital * riskPct / 100).toFixed(2)}`;
  const contracts = document.getElementById("res-contracts") ? document.getElementById("res-contracts").textContent : "0 Contratos";
  
  const planWindow = window.open("", "_blank");
  planWindow.document.write(`
    <html>
    <head>
      <title>Plan de Trading Personalizado - Visión Trading Pro</title>
      <style>
        body {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          background-color: #ffffff;
          color: #0b0e14;
          padding: 45px;
          line-height: 1.6;
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #10b981;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          color: #0b0e14;
          margin: 0;
          letter-spacing: 1.5px;
        }
        .subtitle {
          font-size: 11px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-top: 5px;
        }
        .section {
          margin-bottom: 30px;
        }
        .section-title {
          font-size: 15px;
          font-weight: bold;
          color: #10b981;
          border-bottom: 1.5px solid #e5e7eb;
          padding-bottom: 5px;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .item {
          background: #f9fafb;
          padding: 12px 16px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }
        .label {
          font-size: 10px;
          color: #6b7280;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 0.5px;
        }
        .value {
          font-size: 16px;
          font-weight: bold;
          color: #0b0e14;
          margin-top: 4px;
        }
        .rules-list {
          padding-left: 20px;
          margin: 0;
        }
        .rules-list li {
          margin-bottom: 12px;
        }
        .footer {
          margin-top: 60px;
          text-align: center;
          font-size: 11px;
          color: #9ca3af;
          border-top: 1px solid #e5e7eb;
          padding-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="title">PLAN DE TRADING PERSONALIZADO</div>
        <div class="subtitle">Estrategia Cuantitativa - Visión Trading Pro</div>
      </div>
      
      <div class="section">
        <div class="section-title">Parámetros de Capital y Gestión de Riesgo</div>
        <div class="grid">
          <div class="item">
            <div class="label">Capital Operativo</div>
            <div class="value">$${parseFloat(capital).toLocaleString('en-US', {minimumFractionDigits: 2})} USD</div>
          </div>
          <div class="item">
            <div class="label">Riesgo Permitido por Operación</div>
            <div class="value">${riskPct}% por Operación</div>
          </div>
          <div class="item">
            <div class="label">Riesgo Máximo en Dinero</div>
            <div class="value" style="color: #ef4444;">${riskMoney}</div>
          </div>
          <div class="item">
            <div class="label">Tamaño de Posición Óptimo</div>
            <div class="value" style="color: #3b82f6;">${contracts}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Reglas Operativas de Ejecución</div>
        <ul class="rules-list">
          <li><strong>Dirección de Tendencia (Filtro EMA 200)</strong>: Solo buscar compras si el precio está arriba de la EMA 200. Solo buscar ventas si está abajo. Está terminantemente prohibido operar en contra de la pendiente de la EMA 200.</li>
          <li><strong>Gatillo de Impulso (RSI 14)</strong>: Esperar el cruce de RSI sobre la línea central de 50 (en vela cerrada) para largos o bajo 50 para cortos. La entrada se realiza estrictamente en la apertura de la vela siguiente.</li>
          <li><strong>Fijación del Stop Loss Técnico</strong>: Ubicar el Stop Loss 1 punto por debajo del mínimo de oscilación reciente (Swing Low) para largos o por encima del máximo reciente (Swing High) para cortos. No usar tamaños aleatorios.</li>
          <li><strong>Salida Asimétrica Take Profit</strong>: Colocar el Take Profit exactamente a un ratio 1:2. Por cada dólar arriesgado en el stop loss, ir a buscar dos dólares de ganancia en el take profit.</li>
          <li><strong>Drawdown Máximo Diario</strong>: Pérdida diaria máxima fijada en 2 operaciones fallidas consecutivas (2%). Al alcanzar este límite, se apagarán las pantallas de inmediato sin excepciones emocionales.</li>
        </ul>
      </div>

      <div class="section">
        <div class="section-title">Compromiso de Disciplina</div>
        <p><em>"Entiendo que el mercado es un entorno de probabilidades y no de certezas. Mi trabajo no es tener la razón en cada operación individual, sino ejecutar mi ventaja estadística con disciplina inquebrantable y dejar que las matemáticas jueguen a mi favor en el largo plazo."</em></p>
      </div>

      <div class="footer">
        Plan de Trading Personalizado &copy; 2026. Generado bajo la guía de Visión Trading Pro.
      </div>

      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `);
  planWindow.document.close();
};

// Initialize app components on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  // Force initialize or upgrade the API Key if empty, corrupt, or matching the old key
  const currentKey = localStorage.getItem("vision_elevenlabs_api_key");
  const defaultKey = "sk_cf0eff44faa9a9838a53af3850a02dc60c96e883b95570ce";
  const oldKey = "sk_d3c40fb422b9d257c30601542793b1787034f3e29f41d984";

  if (!currentKey || currentKey === "null" || currentKey === "undefined" || currentKey.trim() === "" || currentKey === oldKey) {
    localStorage.setItem("vision_elevenlabs_api_key", defaultKey);
  }

  // Force voice ID to c6rAmJGsdzNWAIVkws45
  localStorage.setItem("vision_elevenlabs_voice_id", "c6rAmJGsdzNWAIVkws45");

  // Navigation Menu Event Listeners
  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      showSection(target);
    });
  });

  // Narrate click listener
  const btnNarrate = document.getElementById("btn-narrate-day");
  if (btnNarrate) {
    btnNarrate.addEventListener("click", () => {
      const dayId = btnNarrate.getAttribute("data-day");
      handleNarrateClick(dayId, btnNarrate);
    });
  }

  // Save Challenge Response listener
  const btnSaveChallenge = document.getElementById("btn-save-challenge");
  if (btnSaveChallenge) {
    btnSaveChallenge.addEventListener("click", () => {
      const response = document.getElementById("challenge-response").value.trim();
      if (!response) {
        alert("Escribe una respuesta para el desafío de hoy antes de guardarlo en tu bitácora.");
        return;
      }

      localStorage.setItem(`vision_challenge_${activeDayId}`, response);
      alert("¡Entrada de Bitácora Guardada con Éxito!");

      const dayNum = parseInt(activeDayId.replace("day", ""));
      const isExamDay = [7, 15, 22, 30, 31, 32, 33, 34, 35, 36, 37, 38].includes(dayNum);

      if (!isExamDay) {
        courseData[activeDayId].completed = true;
        
        const nextDayId = `day${dayNum + 1}`;
        if (courseData[nextDayId]) {
          courseData[nextDayId].unlocked = true;
        }
        
        saveProgress();
        updateUIProgress();
        renderAcademicMenu();
      } else {
        const pilarId = courseData[activeDayId].pilar;
        if (pilarPassedStates[pilarId]) {
          courseData[activeDayId].completed = true;
          const nextDayId = `day${dayNum + 1}`;
          if (courseData[nextDayId]) {
            courseData[nextDayId].unlocked = true;
          }
          saveProgress();
          updateUIProgress();
          renderAcademicMenu();
        } else {
          alert("Desafío guardado. Recuerda que para avanzar debes aprobar el examen semanal de abajo con 100% de aciertos.");
        }
      }
    });
  }

  // Toggle Focus Mode listener
  const btnToggleFocus = document.getElementById("btn-toggle-focus");
  if (btnToggleFocus) {
    btnToggleFocus.addEventListener("click", () => {
      const body = document.body;
      body.classList.toggle("focus-mode-active");
      
      const span = btnToggleFocus.querySelector("span");
      const icon = btnToggleFocus.querySelector("i");
      
      if (body.classList.contains("focus-mode-active")) {
        span.textContent = "Salir Enfoque";
        if (icon) icon.setAttribute("data-lucide", "minimize-2");
      } else {
        span.textContent = "Modo Enfoque";
        if (icon) icon.setAttribute("data-lucide", "maximize-2");
      }
      lucide.createIcons();
    });
  }

  // Export Plan listener
  const btnExportPlan = document.getElementById("btn-export-plan");
  if (btnExportPlan) {
    btnExportPlan.addEventListener("click", exportTradingPlan);
  }

  // Print Certificate listener
  const btnPrintCert = document.getElementById("btn-print-cert");
  if (btnPrintCert) {
    btnPrintCert.addEventListener("click", () => {
      // Prompt for name customization
      const currentName = localStorage.getItem("vision_student_name") || "Albert Sierra";
      const customizedName = prompt("Escribe tu nombre y apellido tal como deseas que aparezca en tu diploma:", currentName);
      
      if (customizedName !== null && customizedName.trim() !== "") {
        localStorage.setItem("vision_student_name", customizedName.trim());
        renderCertificate();
        window.print();
      } else if (customizedName !== null) {
        alert("Por favor introduce un nombre válido.");
      }
    });
  }

  // Audio settings modal setup
  const btnAudioSettings = document.getElementById("btn-audio-settings");
  const audioSettingsModal = document.getElementById("audio-settings-modal");
  const btnCloseAudioModal = document.getElementById("btn-close-audio-modal");
  const btnSaveAudioSettings = document.getElementById("btn-save-audio-settings");
  const elApiKeyInput = document.getElementById("el-api-key");
  const elVoiceSelect = document.getElementById("el-voice-select");
  const elCustomVoiceGroup = document.getElementById("el-custom-voice-group");
  const elVoiceIdInput = document.getElementById("el-voice-id");

  if (btnAudioSettings) {
    elApiKeyInput.value = getApiKey();

    // Initialize voice select from localStorage
    const savedVoiceId = localStorage.getItem("vision_elevenlabs_voice_id") || "c6rAmJGsdzNWAIVkws45";
    if (elVoiceSelect) {
      if (["c6rAmJGsdzNWAIVkws45", "ErXwobaYiN019PkySvjV"].includes(savedVoiceId)) {
        elVoiceSelect.value = savedVoiceId;
        if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "none";
      } else {
        elVoiceSelect.value = "custom";
        if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "block";
      }
      if (elVoiceIdInput) elVoiceIdInput.value = savedVoiceId;
    }

    if (elVoiceSelect) {
      elVoiceSelect.addEventListener("change", () => {
        if (elVoiceSelect.value === "custom") {
          if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "block";
        } else {
          if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "none";
          if (elVoiceIdInput) elVoiceIdInput.value = elVoiceSelect.value;
        }
      });
    }

    btnAudioSettings.addEventListener("click", () => {
      audioSettingsModal.style.display = "flex";
    });

    btnCloseAudioModal.addEventListener("click", () => {
      audioSettingsModal.style.display = "none";
    });

    btnSaveAudioSettings.addEventListener("click", () => {
      const apiKey = elApiKeyInput.value.trim();
      const voiceId = elVoiceIdInput ? elVoiceIdInput.value.trim() : "";
      
      if (apiKey) {
        localStorage.setItem("vision_elevenlabs_api_key", apiKey);
      } else {
        localStorage.removeItem("vision_elevenlabs_api_key");
      }

      if (voiceId) {
        localStorage.setItem("vision_elevenlabs_voice_id", voiceId);
      } else {
        localStorage.removeItem("vision_elevenlabs_voice_id");
      }

      alert("Configuración de audio guardada correctamente.");
      audioSettingsModal.style.display = "none";
    });

    audioSettingsModal.addEventListener("click", (e) => {
      if (e.target === audioSettingsModal) {
        audioSettingsModal.style.display = "none";
      }
    });
  }

  // Load progress, render accordions, render glossary
  loadProgress();
  renderAcademicMenu();
  renderGlossary();
});

// Global Function to navigate to the next lesson and trigger audio narration automatically
window.goToNextLesson = (autoPlayAudio) => {
  const currentDayNum = parseInt(activeDayId.replace("day", ""));
  const nextDayId = `day${currentDayNum + 1}`;

  if (!courseData[nextDayId]) {
    alert("Has completado todo el curso. ¡Felicidades, Trader Soberano!");
    return;
  }

  // Save current challenge response automatically if they wrote something
  const responseField = document.getElementById("challenge-response");
  const responseText = responseField ? responseField.value.trim() : "";

  if (responseText) {
    localStorage.setItem(`vision_challenge_${activeDayId}`, responseText);
    const dayNum = parseInt(activeDayId.replace("day", ""));
    const isExamDay = [7, 15, 22, 30, 31, 32, 33, 34, 35, 36, 37, 38].includes(dayNum);

    if (!isExamDay) {
      courseData[activeDayId].completed = true;
      courseData[nextDayId].unlocked = true;
      saveProgress();
      updateUIProgress();
      renderAcademicMenu();
    } else {
      const pilarId = courseData[activeDayId].pilar;
      if (pilarPassedStates[pilarId]) {
        courseData[activeDayId].completed = true;
        courseData[nextDayId].unlocked = true;
        saveProgress();
        updateUIProgress();
        renderAcademicMenu();
      } else {
        alert("Desafío guardado. Recuerda que para avanzar de pilar debes aprobar la evaluación semanal de abajo.");
        return;
      }
    }
  } else if (!courseData[nextDayId].unlocked) {
    alert("Debes escribir y registrar tu respuesta al desafío de hoy antes de avanzar.");
    return;
  }

  // Load next day
  window.loadDay(nextDayId);

  // Auto-play audio if requested
  if (autoPlayAudio) {
    setTimeout(() => {
      const btnNarrate = document.getElementById("btn-narrate-day");
      if (btnNarrate) {
        handleNarrateClick(nextDayId, btnNarrate);
      }
    }, 450);
  }
};
