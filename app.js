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
<p>Comenzamos el <strong>Módulo 1: Mentalidad Ganadora</strong>. Como trader estoico y pragmático, debes grabar en tu mente esta regla de oro inquebrantable: <strong>el precio es lo único que importa en el mercado financiero</strong>. El mercado es un mecanismo implacable y continuo de subasta, diseñado para facilitar transacciones entre compradores y vendedores de todo el mundo. Al mercado no le importa quién eres, cuánto dinero necesitas para pagar tus deudas, cuáles son tus opiniones sobre el futuro de la economía mundial, ni qué tan perfecto consideras que es tu análisis. La cotización en tiempo real es la única verdad objetiva disponible.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <line x1="50" y1="30" x2="50" y2="200" stroke="#1e293b" stroke-width="1.5" />
        <line x1="50" y1="200" x2="470" y2="200" stroke="#1e293b" stroke-width="1.5" />
        <text x="35" y="35" fill="#64748b" font-size="10" font-family="sans-serif">Precio</text>
        <text x="450" y="218" fill="#64748b" font-size="10" font-family="sans-serif">Tiempo</text>
        <!-- Expectation Path (Red) -->
        <path d="M 50 140 L 150 90 L 300 50 L 450 30" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5" />
        <text x="210" y="70" fill="#ef4444" font-size="10" font-family="sans-serif">Expectativa del Novato (Línea Recta)</text>
        <!-- Reality Path (Blue) -->
        <path d="M 50 140 Q 100 190 150 120 T 250 160 T 350 70 T 450 130" fill="none" stroke="#3b82f6" stroke-width="3" />
        <text x="260" y="110" fill="#3b82f6" font-size="11" font-family="sans-serif" font-weight="bold">Realidad del Flujo de Capital</text>
        <circle cx="50" cy="140" r="4.5" fill="#f59e0b" />
        <text x="250" y="235" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 1.1: Expectativa lineal frente a la fluctuación real del precio.</text>
      </svg>

      <h3>Desmitificando Sesgos y la Ilusión del Control</h3>
      <p>El principal enemigo del operador novato es su propia mente. Las falsas expectativas de dinero fácil y rápido deforman la realidad e inducen a cometer errores graves. Creer que el mercado se mueve de forma injusta o que el precio "debe" rebotar en un soporte simplemente porque está muy barato es un error cognitivo destructivo que nace del deseo de tener el control sobre lo incontrolable. Un trader estoico comprende la dicotomía del control descrita por Epicteto: no podemos controlar la dirección del precio, pero sí tenemos control absoluto sobre nuestras reacciones internas, la colocación de nuestras órdenes y la gestión del riesgo.</p>
      <p>Cuando pretendes que el mercado se comporte de acuerdo con tus opiniones o necesidades personales, estás operando desde el ego. Las manos fuertes y las instituciones financieras operan basándose en flujos de capital masivos y en la necesidad de liquidez, no en tu análisis. Si el precio sube contra tu posición corta, la cotización actual es la única reality física del mercado. Tu opinión sobre lo que debería estar sucediendo carece por completo de relevancia y debes aceptar el veredicto del precio de forma inmediata, sin albergar esperanzas de retrocesos ni justificaciones emocionales.</p>
      <h3>La Verdad de la Subasta en el Trading de Futuros</h3>
      <p>Para tener éxito consistente operando futuros de índices como el E-mini S&P 500 (ES) o el E-mini Nasdaq 100 (NQ), es fundamental comprender que el precio se mueve únicamente debido a la interacción agresiva entre la oferta y la demanda. Si hay más participantes dispuestos a comprar agresivamente al precio de Ask actual que participantes dispuestos a vender en el Bid, el precio subirá. Los indicadores técnicos promedio, las noticias y los informes macroeconómicos son interpretados de distintas maneras por los grandes algoritmos; por tanto, intentar operar basándote en lo que "debería significar" una noticia es especular sobre opiniones secundarias. Opera lo que ves en la estructura de precios en tiempo real, no lo que crees que debería ocurrir.</p>
      <h3>Aplicación Práctica del Enfoque Estoico</h3>
      <p>Para aplicar este principio a tu reto diario, debes sentarte frente a tu plataforma de trading y observar los gráficos históricos. Busca al menos tres ejemplos donde tu opinión subjetiva o tu análisis técnico te indicaban una dirección, pero el precio rompió en sentido contrario de forma violenta. Documenta con total honestidad cómo te sentiste en ese momento: ¿intentaste justificar la posición diciendo que era un error temporal o aceptaste de inmediato la pérdida? El objetivo de este ejercicio es adiestrar a tu mente para que asocie la salud de tu cuenta con la aceptación inmediata del precio, erradicando la falsa expectativa de que el mercado te debe un resultado positivo.</p>
      <div class="alert-box">
        <strong>📈 Regla Estoica del Día:</strong> La aceptación radical del precio elimina la frustración. El mercado es un reflejo neutro de las decisiones colectivas de compra y venta. No conspira contra ti; simplemente busca liquidez de manera eficiente.
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
<p>Hoy analizaremos los <strong>sesgos cognitivos</strong>. Los sesgos cognitivos son atajos mentales de adaptación evolutiva que nuestro cerebro utiliza de forma automática para ahorrar energía en la toma de decisiones diarias. Aunque son útiles para la supervivencia del ser humano, resultan fatales cuando se aplican a la operativa de los mercados financieros, donde las decisiones racionales y probabilísticas son la única vía para conservar el capital.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Brain Shape outline (simplified icon) -->
        <path d="M 180 120 C 180 80, 220 50, 250 50 C 280 50, 320 80, 320 120 C 320 150, 280 180, 250 180 C 220 180, 180 150, 180 120 Z" fill="none" stroke="#64748b" stroke-width="2" />
        <path d="M 210 120 Q 250 90 290 120" fill="none" stroke="#64748b" stroke-width="1.5" />
        <!-- Filters (Vertical Red and Green filters) -->
        <line x1="200" y1="70" x2="200" y2="170" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4,4" />
        <line x1="300" y1="70" x2="300" y2="170" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4,4" />
        <!-- Data inputs -->
        <path d="M 80 120 L 170 120" fill="none" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow)" />
        <text x="75" y="105" fill="#3b82f6" font-size="10" font-family="sans-serif">Información</text>
        <text x="75" y="117" fill="#3b82f6" font-size="10" font-family="sans-serif">Objetiva</text>
        <!-- Filter labels -->
        <text x="200" y="60" fill="#ef4444" font-size="9" font-family="sans-serif" text-anchor="middle">Aversión Pérdida</text>
        <text x="300" y="60" fill="#10b981" font-size="9" font-family="sans-serif" text-anchor="middle">Confirmación</text>
        <!-- Distorted output -->
        <path d="M 330 120 L 420 120" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow)" />
        <text x="425" y="105" fill="#ef4444" font-size="10" font-family="sans-serif">Decisión</text>
        <text x="425" y="117" fill="#ef4444" font-size="10" font-family="sans-serif">Distorsionada</text>

        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
        </defs>
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 1.2: Filtrado cognitivo subjetivo frente a la toma de datos objetiva.</text>
      </svg>

      <h3>Sesgos Principales que Amenazan al Especulador</h3>
      <p>Existen decenas de sesgos identificados por la psicología del comportamiento, pero en la práctica de la especulación de futuros de índices, tres de ellos sobresalen por su capacidad de destruir cuentas de trading en cuestión de minutos:</p>
      <ul>
        <li><strong>1. Sesgo de Aversión a la Pérdida:</strong> Teorizado por Daniel Kahneman, demuestra que el ser humano experimenta un dolor psicológico dos veces más intenso ante una pérdida que el placer que siente ante una ganancia equivalente. En el trading, esto se traduce en la incapacidad de aceptar pérdidas pequeñas, lo que lleva al operador novato a mover su Stop Loss en contra, promediar posiciones perdedoras o negarse a cerrar una operación fallida con la esperanza irracional de que el mercado regrese a su precio de entrada.</li>
        <li><strong>2. Sesgo de Confirmación:</strong> Es la tendencia de la mente a buscar, interpretar y valorar la información de manera que confirme las creencias preexistentes, ignorando de forma activa cualquier dato que las contradiga. Si un trader ha decidido que el Nasdaq 100 debe subir hoy, buscará cualquier señal de compra en su gráfico (como un indicador menor) e ignorará por completo la ruptura de un soporte clave y el volumen bajista que gritan que el mercado está colapsando.</li>
        <li><strong>3. Sesgo de Reciente (Recency Bias):</strong> Consiste en dar mayor peso a los eventos más recientes en detrimento de los datos históricos. Si sufres dos o tres operaciones perdedoras seguidas (un suceso estadístico normal en cualquier sistema), el sesgo de reciente te hará creer que tu estrategia ya no funciona, induciéndote a cambiar las reglas de tu sistema o a dejar de ejecutar los siguientes setups válidos, perdiendo así las operaciones ganadoras que habrían recuperado el saldo.</li>
      </ul>
      <p>Un trader estoico y profesional no intenta eliminar estos sesgos de forma voluntaria, ya que están grabados en la biología humana. En su lugar, diseña un sistema de reglas operativas escritas y rigurosas que actúan como un marco externo de toma de decisiones, neutralizando la intervención emocional de la mente consciente.</p>
      <h3>Aplicación Práctica para el Desafío del Día</h3>
      <p>Para superar el reto de hoy, debes analizar de forma reflexiva tus sesiones de trading recientes o tu proceso de estudio. Identifica cuál de los tres sesgos anteriores ha tenido una mayor influencia en tus errores operativos. Describe detalladamente una situación específica donde este sesgo haya tomado el control de tu comportamiento y qué regla objetiva habrías necesitado tener escrita en tu estación de trabajo para evitar cometer ese error.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> La bitácora objetiva es el antídoto contra el sesgo cognitivo. Lo que está escrito y medido de antemano escapa al control de la emoción y de la impaciencia irracional del momento.
      </div>
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
<p>El mercado financiero es un <strong>entorno puramente probabilístico, no de certezas</strong>. Uno de los mayores obstáculos para los traders novatos es comprender que una operación individual con un setup de alta probabilidad perfectamente ejecutado puede resultar perdedora. Esto no significa que el sistema esté roto o que el análisis haya sido incorrecto; simplemente es una demostración física de que los resultados individuales en el trading tienen una distribución aleatoria e independiente.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Distribution Curve -->
        <path d="M 50 180 C 150 180, 200 60, 250 60 C 300 60, 350 180, 450 180" fill="none" stroke="#64748b" stroke-width="2" />
        <line x1="50" y1="180" x2="450" y2="180" stroke="#1e293b" stroke-width="1.5" />
        <!-- Win and Loss Regions -->
        <path d="M 120 180 C 170 180, 200 90, 250 90 L 250 180 Z" fill="#ef4444" fill-opacity="0.15" />
        <path d="M 250 90 C 300 90, 330 180, 380 180 L 250 180 Z" fill="#10b981" fill-opacity="0.15" />
        <line x1="250" y1="60" x2="250" y2="180" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,3" />
        <text x="250" y="45" fill="#3b82f6" font-size="10" font-family="sans-serif" text-anchor="middle">Expectativa Media (Ventaja del 60%)</text>
        <text x="180" y="150" fill="#ef4444" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">Pérdida (40%)</text>
        <text x="320" y="150" fill="#10b981" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">Ganancia (60%)</text>
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 1.3: Distribución normal de resultados y distribución de probabilidad.</text>
      </svg>

      <h3>La Distribución de Resultados y la Muestra Estadística</h3>
      <p>Imagina que tienes una moneda trucada que cae en cara el 60% de las veces. Tienes una clara ventaja matemática a tu favor. Sin embargo, si lanzas la moneda únicamente 10 veces, es perfectamente posible que caiga en cruz 7 veces seguidas. Este suceso de corto plazo no invalida la ventaja del 60%; solo demuestra que el tamaño de la muestra es demasiado pequeño para que la probabilidad matemática se estabilice. En el trading ocurre exactamente lo mismo. Tu estrategia es la moneda trucada y cada trade es un lanzamiento individual.</p>
      <p>Un trader profesional evalúa su desempeño y su rentabilidad basándose en muestras grandes de operaciones (por ejemplo, bloques de 20, 50 o 100 operaciones consecutivas). Si tu sistema tiene un ratio de acierto estadístico demostrado del 55%, debes aceptar con total naturalidad que de vez en cuando experimentarás rachas de 5 o 6 pérdidas seguidas. El trader novato, cegado por la ilusión de la certeza, interpreta esta racha normal como un fracaso personal o un defecto del sistema, lo que le lleva a cometer errores emocionales graves. El trader estoico acepta la incertidumbre de la operación actual y se enfoca únicamente en ejecutar de forma perfecta y constante las reglas de su plan.</p>
      <h3>La Redención de las Falsas Expectativas</h3>
      <p>Aceptar el carácter probabilístico del mercado te libera de la ansiedad en la ejecución. Si no sabes ni necesitas saber qué hará el precio en el siguiente trade para ganar dinero a largo plazo, ya no sientes la necesidad de tener la razón. Eliminas la frustración y dejas de ver cada pérdida como un ataque del mercado a tu autoestima. La pérdida se convierte en un simple costo operativo de hacer negocios, similar al alquiler que paga el dueño de una tienda física.</p>
      <h3>Aplicación Práctica para el Reto Semanal</h3>
      <p>Tu desafío de hoy consiste en realizar un análisis probabilístico por escrito en tu bitácora. Explica detalladamente cómo una operación con un setup que cumple al 100% tus reglas puede terminar en pérdida debido a la aleatoriedad de los participantes del mercado. Define las acciones mentales específicas que realizarás la próxima vez que sufras una pérdida para recordarte que el resultado de un solo trade carece de valor frente a la ventaja estadística de tu sistema a lo largo del tiempo.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> No busques la certeza en un entorno aleatorio. Busca la consistencia en tu comportamiento y deja que las matemáticas de la probabilidad trabajen a favor de tu cuenta a largo plazo.
      </div>
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
<p>Para no convertirte en la presa de la volatilidad diaria de los futuros de índices, es indispensable que comprendas la anatomía de la manipulación de mercado. En el trading minorista suele difundirse el mito de que los mercados están manipulados de forma malintencionada por entidades ocultas que operan específicamente en tu contra. La realidad es mucho más sencilla y racional: el mercado es un entorno de búsqueda de <strong>liquidez institucional</strong> donde los grandes participantes actúan bajo reglas de oferta y demanda.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Support Level Line -->
        <line x1="50" y1="150" x2="450" y2="150" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4" />
        <text x="60" y="142" fill="#ef4444" font-size="9" font-family="sans-serif">Soporte Obvio Minorista</text>
        <!-- Price Path -->
        <path d="M 60 90 L 120 150 L 180 110 L 240 150 L 260 180 L 320 80 L 390 120 L 440 60" fill="none" stroke="#3b82f6" stroke-width="2.5" />
        <!-- Liquidity Sweep Circle -->
        <circle cx="260" cy="180" r="10" fill="none" stroke="#ef4444" stroke-width="1.5" />
        <text x="260" y="200" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Caza de Stops (Pool de Liquidez)</text>
        <circle cx="260" cy="180" r="3.5" fill="#f59e0b" />
        <!-- Reversal Arrow -->
        <path d="M 270 170 L 310 90" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-up)" />
        <text x="320" y="100" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold">Inyección Institucional</text>

        <defs>
          <marker id="arrow-up" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
          </marker>
        </defs>
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 1.4: Barrido de liquidez institucional en un nivel de soporte clave.</text>
      </svg>

      <h3>Mecánica de la Liquidez y Caza de Stops</h3>
      <p>Los grandes participantes (como bancos comerciales, creadores de mercado y fondos cuantitativos) operan con tamaños de posición gigantescos. Si un fondo institucional desea comprar 10,000 contratos de futuros de E-mini S&P 500 (ES) al precio de mercado actual, no puede hacerlo directamente porque provocaría un deslizamiento de precios brutal que encarecería su entrada. Para comprar de forma eficiente, necesitan una contrapartida masiva: participantes dispuestos a vender en el mismo nivel de precios. En el libro de órdenes, esto se visualiza en la profundidad de mercado (DOM), donde las órdenes límite de venta se emparejan con las compras a mercado.</p>
      <p>El lugar idóneo donde se concentra la mayor cantidad de órdenes de venta pendientes de ejecución es justo por debajo de los soportes obvios marcados por el análisis minorista. Los stop losses de los traders que compraron previamente son, en esencia, órdenes de venta al mercado que se activan si el precio cae por debajo del soporte. Al empujar el precio temporalmente por debajo de este nivel clave, las instituciones activan miles de órdenes de venta minoristas de forma simultánea. Las manos fuertes absorben todas esas ventas comprando a precios baratos, lo que detiene la caída y provoca un fuerte rebote alcista que deja a los minoristas fuera del mercado con pérdidas. Esta dinámica explica la aparición de las mechas largas en los extremos de los rangos operativos.</p>
      <p>Entender esta mecánica te permite cambiar tu perspectiva. En lugar de asustarte y vender en pérdidas cuando el precio rompe un soporte de forma temporal, aprendes a esperar pacientemente la absorción y la posterior confirmación estructural para operar en la misma dirección que las instituciones. Al filtrar tus entradas y buscar confluencias adicionales, aumentas drásticamente tu ventaja estadística frente a los operadores impulsivos.</p>
      <h3>Aplicación Práctica del Filtro de Caza de Stops</h3>
      <p>Para tu reto diario, abre tu plataforma de trading y busca ejemplos históricos en gráficos de 5 o 15 minutos. Encuentra al menos dos casos claros donde el precio haya perforado un soporte o resistencia obvio por una distancia muy corta para revertirse con fuerza de forma inmediata en la dirección opuesta. Documenta detalladamente cómo reaccionó el volumen de operaciones en la vela de ruptura y anota las conclusiones de este comportamiento técnico en tu bitácora.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> El mercado no busca arruinarte a ti en particular. Simplemente busca la liquidez necesaria para facilitar las transacciones institucionales de forma eficiente. Opera junto al flujo del dinero profesional, no contra él.
      </div>
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
<p>El <strong>Short Squeeze</strong> (estrangulamiento de cortos) es una de las dinámicas de mercado más rápidas, violentas y temidas por los operadores inexpertos en el trading de futuros. Representa una capitulación emocional masiva por parte de los vendedores en corto y proporciona una demostración física de la asimetría de riesgos entre las posiciones largas y cortas en los mercados de futuros altamente apalancados. Entender esta mecánica te protegerá de pérdidas catastróficas y te enseñará a respetar la inercia del precio.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Parabolic Move Path -->
        <path d="M 50 180 L 150 170 L 250 150 L 320 120 L 350 40" fill="none" stroke="#10b981" stroke-width="3" />
        <line x1="50" y1="190" x2="450" y2="190" stroke="#1e293b" stroke-width="1.5" />
        <!-- Stops exploding -->
        <circle cx="320" cy="120" r="6" fill="#ef4444" />
        <text x="310" y="110" fill="#ef4444" font-size="8" font-family="sans-serif" text-anchor="end">Stops de Cortos Activados</text>
        <circle cx="350" cy="40" r="6" fill="#ef4444" />
        <text x="340" y="30" fill="#ef4444" font-size="8" font-family="sans-serif" text-anchor="end">Pánico / Compra Forzada</text>
        <!-- Horizontal Resistance Broken -->
        <line x1="100" y1="150" x2="400" y2="150" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3" />
        <text x="405" y="145" fill="#64748b" font-size="8" font-family="sans-serif">Resistencia Clave</text>
        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 1.5: Mecánica de ascenso acelerado en un Short Squeeze.</text>
      </svg>

      <h3>La Mecánica Detrás de la Cascada de Compras Forzadas</h3>
      <p>Para entender un Short Squeeze, primero debes comprender la naturaleza técnica de una posición en corto. Vender en corto implica tomar prestado un activo para venderlo a precios altos con la expectativa de recomprarlo más barato en el futuro, devolviendo el activo prestado y quedándote con la diferencia. Sin embargo, para cerrar una posición en corto (ya sea para tomar ganancias o para limitar pérdidas), debes colocar obligatoriamente una orden de compra en el mercado. En futuros, esto se liquida mediante la cámara de compensación de forma inmediata.</p>
      <p>Cuando el precio de un activo sube de forma agresiva rompiendo niveles clave de resistencia, muchos vendedores en corto comienzan a incurrir en pérdidas insostenibles. Para detener la hemorragia de sus cuentas, colocan órdenes de compra para cerrar sus cortos. Al mismo tiempo, se activan los Stop Losses de otros vendedores (que también son órdenes de compra). Esta acumulación masiva de órdenes de compra al mercado, sumada a la entrada de traders alcistas que compran la ruptura, provoca un incremento violento de la fuerza compradora que empuja el precio al alza de forma casi vertical. Los liquidadores automáticos de los brokers y los algoritmos automáticos aceleran el movimiento sin importar el valor real del activo.</p>
      <p>En el trading de futuros de índices (como NQ o ES), la volatilidad intrínseca puede alimentar este círculo vicioso en cuestión de segundos. Intentar adivinar el "techo" de un movimiento parabólico vendiendo en corto sin confluencias estructurales es una irresponsabilidad. El precio puede subir mucho más de lo que tu cuenta puede soportar antes de mostrar cualquier señal de agotamiento. Debes centrarte en operar con micro contratos para mitigar el impacto de deslizamientos bruscos de precio durante estos eventos de alta volatilidad. La lección estoica aquí es aceptar que no controlas la altura de un movimiento irracional y que tu único deber es proteger tu capital manteniéndote al margen de peleas innecesarias contra tendencias aceleradas.</p>
      <p>Es importante notar que los short squeezes ocurren con mayor frecuencia en activos con un alto interés en corto (short interest) y baja liquidez relativa, pero en futuros sobre índices como el Nasdaq (NQ), los reajustes de cobertura de opciones por parte de los creadores de mercado (market makers) en niveles de strike clave pueden generar impulsos alcistas parabólicos muy similares. Nunca operes en contra de esta inercia alcista sin confirmación técnica de volumen decreciente y rechazo estructural sólido.</p>
      <h3>Aplicación Práctica del Short Squeeze</h3>
      <p>Tu reto para el día de hoy consiste en explicar con tus propias palabras e incluir en tu bitácora de trading la mecánica de flujo de órdenes de un Short Squeeze. Analiza por qué la pérdida teórica en una posición corta es ilimitada y define por qué está estrictamente prohibido por tu plan de trading intentar operar en corto contra un movimiento vertical alcista que no muestre una clara estructura de reversión y absorción institucional previa.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> Nunca pelees contra la inercia del mercado. El pánico comprador no responde a la lógica del precio barato o caro; responde a la urgencia matemática de la liquidación forzada de posiciones.
      </div>
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
<p>Los <strong>Fakeouts</strong> o falsos rompimientos representan uno de los mayores desafíos y, a la vez, una de las mejores oportunidades operativas dentro del trading de futuros. Ocurren de forma sistemática en zonas obvias de soporte y resistencia. Aprender a identificarlos de manera objetiva te impedirá caer en las trampas de las instituciones y te enseñará a operar con las probabilidades de tu lado.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Resistance line -->
        <line x1="50" y1="100" x2="450" y2="100" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
        <text x="60" y="92" fill="#ef4444" font-size="9" font-family="sans-serif">Zona de Resistencia</text>
        <!-- Price bar 1: Breakout Attempt -->
        <line x1="200" y1="50" x2="200" y2="150" stroke="#3b82f6" stroke-width="2" />
        <rect x="192" y="70" width="16" height="60" fill="#3b82f6" rx="2" />
        <text x="200" y="165" fill="#3b82f6" font-size="8" font-family="sans-serif" text-anchor="middle">Vela de Ruptura</text>
        <!-- Price bar 2: Fakeout Pinbar (Rejection) -->
        <line x1="320" y1="40" x2="320" y2="160" stroke="#ef4444" stroke-width="2" />
        <rect x="312" y="100" width="16" height="50" fill="#ef4444" rx="2" />
        <text x="320" y="175" fill="#ef4444" font-size="8" font-family="sans-serif" text-anchor="middle">Vela de Rechazo (Pinbar)</text>
        <circle cx="320" cy="40" r="4" fill="#f59e0b" />
        <text x="330" y="44" fill="#f59e0b" font-size="8" font-family="sans-serif" font-weight="bold">Trampa</text>
        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 1.6: Comparación visual de ruptura frente a trampa de liquidez.</text>
      </svg>

      <h3>La Diferencia Visual y de Volumen en las Velas</h3>
      <p>Una ruptura genuina de un nivel de soporte o resistencia se caracteriza por una vela de rango amplio que rompe la zona clave y cierra de manera contundente fuera de ella. Este movimiento debe estar respaldado por un incremento notable en el volumen de transacciones, confirmando la participación del capital institucional. Los cuerpos de las velas deben ser grandes, mostrando una intención clara y sostenida del precio. El cierre de la vela por encima o por debajo del nivel estructural es el factor clave para confirmar que los compradores o vendedores controlan la nueva zona.</p>
      <p>Por el contrario, un falso rompimiento (fakeout) se identifica por velas con mechas muy largas que sobresalen de las zonas clave, pero cuyos cuerpos cierran de vuelta dentro del rango previo. La formación clásica es la vela Pinbar o de rechazo (también llamada estrella fugaz para resistencias o martillo para soportes). Estas mechas representan el espacio donde las órdenes de stop losses minoristas fueron devoradas y absorbidas por las órdenes límite institucionales en sentido contrario. Para mitigar los falsos rompimientos, es recomendable utilizar múltiples temporalidades, analizando la estructura mayor (por ejemplo, en gráficos de 15 minutos o 1 hora) para definir las zonas y la temporalidad menor (1 o 2 minutos) para buscar la confirmación de velas limpias de rechazo y absorción.</p>
      <p>Al esperar pacientemente a que la vela de ruptura cierre por completo antes de ingresar, evitas caer en la trampa física de la toma de liquidez. La disciplina estoica consiste en aceptar que es preferible perderse un movimiento rápido a ingresar precipitadamente en una trampa de absorción institucional. Recuerda que las manos fuertes utilizan la impaciencia de los operadores minoristas como contrapartida para llenar sus propias órdenes comerciales. Tu ventaja reside en la paciencia y en la confirmación estadística.</p>
      <h3>Aplicación Práctica del Análisis de Cierre</h3>
      <p>Tu desafío para el día de hoy consiste en abrir tus gráficos históricos y documentar con capturas o anotaciones detalladas en tu bitácora de trading la diferencia visual entre tres rupturas limpias confirmadas en vela cerrada y tres falsos rompimientos con velas de mecha larga en el mismo activo. Describe qué ocurrió con el precio en las siguientes velas tras formarse cada uno de los escenarios y anota tus conclusiones.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> Esperar al cierre de la vela es el filtro definitivo de consistencia. El precio de cierre refleja la decisión consensuada del dinero profesional, mientras que el máximo o mínimo intradía suele ser solo ruido y manipulación de liquidez.
      </div>
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
<p>Felicidades por haber completado las primeras siete lecciones del <strong>Módulo 1: Mentalidad Ganadora</strong>. A lo largo de esta semana inicial de formación intensiva, has sentado las bases psicológicas indispensables para convertirte en un operador consistente de futuros. Has aprendido de manera profunda que el precio es la única realidad física del mercado, desmitificando la falsa ilusión de tener el control sobre la cotización de los activos. Analizaste detenidamente los sesgos cognitivos más dañinos que conducen de forma sistemática a la ruina de las cuentas de trading, comprendiste el carácter meramente probabilístico de la operativa y aprendiste a identificar las complejas trampas de liquidez y short squeezes institucionales que atrapan a los novatos.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Laurel Wreath Backdrop -->
        <path d="M 180 120 C 180 180, 320 180, 320 120" fill="none" stroke="#334155" stroke-width="3" />
        <!-- Badge Body -->
        <polygon points="250,40 300,90 280,160 220,160 200,90" fill="#1e293b" stroke="#3b82f6" stroke-width="3" />
        <!-- Star Symbol -->
        <polygon points="250,75 254,87 267,87 257,95 261,108 250,100 239,108 243,95 233,87 246,87" fill="#f59e0b" />
        <!-- Badge Text -->
        <text x="250" y="130" fill="#10b981" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">PILAR 1 OK</text>
        <text x="250" y="145" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">MENTALIDAD</text>
        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 1.7: Insignia de certificación del bloque de mentalidad estoica.</text>
      </svg>

      <h3>La Construcción de tu Manifiesto Personal</h3>
      <p>El trading profesional de futuros exige que actúes de manera alineada con tus reglas predefinidas, y no bajo los impulsos del momento, los deseos egoístas de ganancias rápidas o la necesidad de recuperar pérdidas acumuladas. Para lograr esto, hoy redactarás tu propio manifiesto personal de trading. Este manifiesto debe ser una declaración solemne redactada por escrito donde asumas la responsabilidad absoluta de tus resultados operativos, aceptes la naturaleza puramente probabilística de los mercados financieros y te comprometas firmemente a respetar tus límites de stop loss y drawdown diario sin excusas ni excepciones de ningún tipo. Debe ser una guía clara y estricta de conducta que no dependa en absoluto de tus emociones momentáneas o de la euforia pasajera de una racha ganadora.</p>
      <p>Un manifiesto no es una simple lista de buenos deseos; es la constitución inquebrantable que rige tu negocio de trading. Escríbelo de forma manuscrita o digital, colócalo en un lugar visible de tu escritorio y léelo en voz alta al inicio de cada jornada antes de la apertura del mercado regular. Al consolidar esta mentalidad estoica, dejas de operar con la actitud impulsiva del apostador y te conviertes en un operador profesional regido por la consistencia del proceso. Además, realiza auditorías psicológicas semanales puntuando tu calidad operativa (grados A, B, C) para identificar tus principales desencadenantes emocionales. Si descubres que tiendes a operar por venganza tras una pérdida, tu manifiesto debe obligarte a apagar la terminal de inmediato y a bloquear el software de operativa mediante herramientas externas.</p>
      <p>Recuerda que la mentalidad ganadora no es la ausencia de miedo o codicia, sino la capacidad de actuar con disciplina por encima de esas emociones naturales. Al finalizar este bloque inicial de mentalidad, estás listo para asumir el control total de las matemáticas de tu operativa. Asegúrate de comprender que el capital es tu inventario de negocio y que la consistencia es un hábito de comportamiento continuo que se construye paso a paso, operación tras operación, a lo largo de una muestra representativa de operaciones. No te dejes llevar por la euforia ni por el pánico; tu objetivo final es la ejecución inmaculada de un plan de negocio sostenible a largo plazo en un entorno probabilístico.</p>
      <h3>Instrucciones para la Evaluación Semanal</h3>
      <p>Tu reto de hoy consiste en resolver correctamente el cuestionario de mentalidad estoica detallado a continuación. Deberás responder a las 5 preguntas basándote en los principios de aceptación radical del precio y gestión estadística de riesgos que hemos estudiado durante las pasadas lecciones. Aprobar este examen con un 100% de aciertos es el requisito obligatorio para desbloquear el Módulo 2, donde entraremos de lleno en las matemáticas de la ruina, el cálculo dinámico del tamaño de posición y la construcción de un sistema de gestión de capital sumamente robusto.</p>
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
<p>Iniciamos el <strong>Módulo 2: Gestión y Disciplina</strong>. El trading profesional no consiste en predecir la dirección futura del precio mediante la intuición o la clarividencia; consiste en operar un negocio riguroso basado en la <strong>estadística y las matemáticas aplicadas</strong>. El capital operativo es tu inventario de trabajo, y protegerlo es tu primera y más importante responsabilidad de cada día de negociación regular.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Axes -->
        <line x1="50" y1="30" x2="50" y2="200" stroke="#1e293b" stroke-width="1.5" />
        <line x1="50" y1="200" x2="470" y2="200" stroke="#1e293b" stroke-width="1.5" />
        <text x="35" y="35" fill="#64748b" font-size="10" font-family="sans-serif">Capital</text>
        <text x="440" y="218" fill="#64748b" font-size="10" font-family="sans-serif">Operaciones</text>
        
        <!-- Risk 1% Line (Green, stable) -->
        <path d="M 50 60 L 90 62 L 130 61 L 170 65 L 210 63 L 250 66 L 290 64 L 330 68 L 370 67 L 410 70 L 450 69" fill="none" stroke="#10b981" stroke-width="2.5" />
        <text x="360" y="85" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold">Riesgo 1% (Seguro)</text>
        
        <!-- Risk 10% Line (Red, exponential decay) -->
        <path d="M 50 60 L 90 74 L 130 87 L 170 102 L 210 119 L 250 136 L 290 152 L 330 167 L 370 181 L 410 191 L 450 197" fill="none" stroke="#ef4444" stroke-width="2.5" />
        <text x="280" y="140" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold">Riesgo 10% (Ruina)</text>
        
        <text x="250" y="235" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 2.1: Curva de ruina matemática según el porcentaje de riesgo por operación.</text>
      </svg>

      <h3>La Preservación del Capital y la Asimetría del Drawdown</h3>
      <p>La diferencia principal entre un trader minorista perdedor y un gestor de fondos consistente reside en la comprensión y aplicación de las matemáticas de la ruina. Si arriesgas el 1% de tu capital por operación, necesitarías sufrir 100 operaciones perdedoras consecutivas para perder toda tu cuenta, lo cual es estadísticamente improbable en un sistema con una ventaja mínima. Sin embargo, si arriesgas el 10% por operación, una racha normal de tan solo 10 pérdidas consecutivas (un suceso bastante probable dentro de una muestra estadística representativa) destruirá por completo tu cuenta de trading de forma irreversible.</p>
      <p>Además, debes entender la matemática asimétrica de la recuperación de capital. Si sufres una pérdida del 10% de tu cuenta, necesitas generar un rendimiento del 11.1% sobre el saldo restante para volver al punto de partida (breakeven). Pero si dejas que tu cuenta sufra un drawdown (reducción) del 50%, necesitarás realizar un retorno del 100% solo para recuperar el capital original. Generar un 100% de rentabilidad en el mercado exige una precisión técnica y una tranquilidad mental excepcionales, las cuales suelen perderse por completo tras sufrir un drawdown tan agresivo. Cuanto más profundo sea tu pozo de pérdidas, más difícil será salir de él.</p>
      <p>El trader estoico comprende que el control del riesgo es la única variable que domina de forma absoluta. Al establecer una regla inquebrantable de no arriesgar jamás más del 1% de la cuenta en una sola operación, eliminas la posibilidad física de que una racha perdedora temporal destruya tu salud financiera. Esta disciplina reduce significativamente el estrés operativo y te permite enfocar tu atención en el proceso y no en el resultado monetario de cada trade. No busques ganancias astronómicas inmediatas; busca la consistencia a largo plazo mediante la preservación estricta de tu balance.</p>
      <h3>Aplicación Práctica de las Matemáticas de Gestión</h3>
      <p>Tu reto para el día de hoy consiste en calcular por escrito en tu bitácora de trading la tabla de degradación de una cuenta de $10,000 ante una racha de 10 operaciones fallidas seguidas, comparando el impacto de arriesgar el 1% ($100) contra arriesgar el 10% ($1,000) por trade. Calcula el saldo restante en cada paso y el porcentaje de ganancia necesario sobre ese saldo remanente para regresar a los $10,000 iniciales. Este ejercicio te demostrará la necesidad imperiosa de limitar tu riesgo de forma estricta.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> El trading es un juego de supervivencia. Quien conserva su capital operativo tiene siempre la oportunidad de aprovechar la siguiente gran ventaja del mercado, mientras que el arruinado queda fuera del negocio permanentemente.
      </div>
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
<p>Hoy analizaremos la **asimetría matemática** y la relación esencial entre la tasa de acierto (Win Rate) y la relación de Riesgo/Beneficio (Ratio R:R). Uno de los mayores errores de concepto del trader novato es la creencia errónea de que necesita adivinar la dirección correcta del precio en el 80% o 90% de sus operaciones para ser rentable a largo plazo. Esta falsa expectativa induce a cometer errores de sobreoperativa y genera una frustración severa cuando los trades fallan.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Matrix Table Headers -->
        <rect x="50" y="40" width="400" height="30" fill="#1e293b" rx="4" />
        <text x="100" y="58" fill="#94a3b8" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">Ratio R:R</text>
        <text x="220" y="58" fill="#94a3b8" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">Win Rate Mínimo</text>
        <text x="360" y="58" fill="#94a3b8" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">Expectativa</text>
        
        <!-- Row 1 -->
        <line x1="50" y1="100" x2="450" y2="100" stroke="#1e293b" stroke-width="1" />
        <text x="100" y="93" fill="#ffffff" font-size="10" font-family="sans-serif" text-anchor="middle">1 : 1</text>
        <text x="220" y="93" fill="#ffffff" font-size="10" font-family="sans-serif" text-anchor="middle">> 50%</text>
        <text x="360" y="93" fill="#64748b" font-size="9" font-family="sans-serif" text-anchor="middle">Neutral / Difícil</text>
        
        <!-- Row 2 -->
        <line x1="50" y1="140" x2="450" y2="140" stroke="#1e293b" stroke-width="1" />
        <text x="100" y="133" fill="#ffffff" font-size="10" font-family="sans-serif" text-anchor="middle">1 : 2</text>
        <text x="220" y="133" fill="#10b981" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">> 34%</text>
        <text x="360" y="133" fill="#10b981" font-size="9" font-family="sans-serif" text-anchor="middle">Rentable (Recomendado)</text>
        
        <!-- Row 3 -->
        <line x1="50" y1="180" x2="450" y2="180" stroke="#1e293b" stroke-width="1" />
        <text x="100" y="173" fill="#ffffff" font-size="10" font-family="sans-serif" text-anchor="middle">1 : 3</text>
        <text x="220" y="173" fill="#10b981" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">> 26%</text>
        <text x="360" y="173" fill="#10b981" font-size="9" font-family="sans-serif" text-anchor="middle">Alta Asimetría</text>
        
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 2.2: Matriz de viabilidad de la asimetría matemática del trading.</text>
      </svg>

      <h3>La Ventaja del Ratio R:R y la Esperanza Matemática</h3>
      <p>El ratio R:R es la relación entre la cantidad de capital que estás dispuesto a perder (riesgo) y la cantidad que buscas ganar (recompensa) en una operación. Por ejemplo, en un ratio R:R de 1:2, si arriesgas $100 en un stop loss, tu objetivo de take profit debe situarse obligatoriamente a una distancia que te devuelva $200 de beneficio neto. La esperanza matemática del sistema es el resultado de la interacción entre tu tasa de acierto y este ratio, calculándose como: (Probabilidad de ganar x Ganancia) - (Probabilidad de perder x Pérdida).</p>
      <p>Si operas sistemáticamente con un ratio R:R de 1:2, solo necesitas acertar el 34% de tus operaciones para mantenerte en breakeven. Si logras acertar el 40% o el 45% (una tasa bastante conservadora y asequible), tu cuenta generará beneficios consistentes a lo largo de una muestra representativa de operaciones. Esto se debe a que cada ganancia o acierto individual compensa dos pérdidas completas. Al comprender esta asimetría, te liberas de la necesidad psicológica de tener la razón en cada trade, permitiéndote tomar las pérdidas lógicas del sistema con total serenidad estoica.</p>
      <p>Muchos traders principiantes se centran en buscar el "Santo Grial" de los indicadores para aumentar su tasa de acierto, sin darse cuenta de que la clave de la rentabilidad es puramente matemática. Al redefinir tus objetivos y exigir un ratio mínimo de 1:2 en cada setup, reduces la presión sobre tus análisis y te conviertes en un gestor de riesgos enfocado en la rentabilidad neta.</p>
      <h3>Aplicación Práctica del Cálculo Neto</h3>
      <p>Para resolver tu reto de hoy, calcula manualmente en tu bitácora de trading los resultados económicos de la siguiente simulación: realizas una serie de 20 operaciones arriesgando exactamente $100 por operación. Consigues ganar únicamente 8 operaciones (40% de tasa de acierto) a un ratio R:R de 1:2 ($200 por acierto) y sufres 12 pérdidas ($100 por pérdida). Detalla la suma total de las ganancias brutas, la suma total de las pérdidas brutas y calcula el beneficio neto final. Este ejercicio te enseñará la potencia de la asimetría matemática.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> No busques la infalibilidad en tus análisis. Busca la asimetría matemática en tus setups: arriesga poco para buscar ganancias razonablemente grandes y deja que los números hagan el resto.
      </div>
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
<p>El <strong>Daily Drawdown</strong> o Límite de Pérdida Diaria es la válvula de seguridad y el escudo definitivo que protege a tu cuenta de trading de la ruina financiera y el desgaste psicológico. Consiste en definir un límite de dinero fijo y no negociable que estás dispuesto a perder en una sola sesión de mercado. Una vez superado este límite, tu única regla obligatoria es cerrar inmediatamente tu plataforma de trading y apartarte de los gráficos hasta el día de mañana.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Speedometer Outline -->
        <path d="M 150 170 A 110 110 0 0 1 350 170" fill="none" stroke="#1e293b" stroke-width="15" stroke-linecap="round" />
        <!-- Safe Zone (Green) -->
        <path d="M 150 170 A 110 110 0 0 1 230 80" fill="none" stroke="#10b981" stroke-width="15" stroke-linecap="round" />
        <!-- Danger Zone (Red) -->
        <path d="M 280 80 A 110 110 0 0 1 350 170" fill="none" stroke="#ef4444" stroke-width="15" stroke-linecap="round" />
        
        <!-- Needle (Points to Red/Danger) -->
        <line x1="250" y1="170" x2="310" y2="100" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />
        <circle cx="250" cy="170" r="8" fill="#3b82f6" />
        <text x="250" y="195" fill="#ef4444" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">¡LÍMITE EXCEDIDO!</text>
        <text x="250" y="215" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Protocolo de Cierre Activado</text>
        
        <!-- Caption -->
        <text x="250" y="235" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 2.3: Indicador de control de Drawdown diario.</text>
      </svg>

      <h3>La Psicología del Tilt y la Necesidad de un Límite Estricto</h3>
      <p>Cuando un trader sufre varias pérdidas consecutivas en la misma sesión, se activa de forma automática una respuesta de estrés agudo en su amígdala cerebral, lo que reduce drásticamente la capacidad de razonamiento lógico de la corteza prefrontal. Este estado emocional, conocido en psicología como tilt, induce al operador a intentar recuperar el dinero de forma desesperada, aumentando el tamaño de su posición de forma desproporcionada y abriendo operaciones aleatorias fuera de su plan de trading. El tilt es el causante del 90% de las cuentas de futuros quemadas en una sola sesión de pánico.</p>
      <p>Para evitar esta autodestrucción, debes comportarte de manera pragmática y aplicar la <strong>regla de las dos pérdidas</strong>. Si sufres dos operaciones consecutivas perdedoras en el mismo día, debes aceptar que no estás sincronizado con el flujo de órdenes del mercado actual o que tu estado mental está alterado por la frustración. La única acción racional es apagar la terminal de trading y alejarte de la computadora de inmediato. Esta autodisciplina estoica te permite limitar el daño financiero a un porcentaje menor de tu cuenta (por ejemplo, el 2% diario), asegurando tu supervivencia en el negocio de la especulación para la sesión del día siguiente. No dejes que una sola sesión de indisciplina tire a la basura el esfuerzo de meses de trabajo constante.</p>
      <p>Las principales empresas de fondeo (prop firms) vigilan este parámetro con total rigor, cancelando de inmediato las cuentas que excedan su drawdown diario. Si deseas operar con capital institucional en el futuro, debes habituarte desde hoy a tratar este límite diario como una frontera física impenetrable. Además, al diseñar un checklist de pre-mercado y puntuar tu tranquilidad emocional antes de cada entrada, creas una barrera protectora adicional contra los impulsos irracionales que provocan grandes pérdidas y dañan tu autodisciplina.</p>
      <h3>Aplicación Práctica del Protocolo de Cierre</h3>
      <p>Para superar el reto de hoy, redacta por escrito tu directriz obligatoria de Drawdown Diario en tu bitácora de trading. Define en términos monetarios exactos cuál es tu límite de pérdida máximo permitido por día (por ejemplo, $100 o $200 para una cuenta simulada) y los pasos del protocolo de apagado inmediato que ejecutarás sin excepción si este límite es alcanzado. Tómate el compromiso solemne de cumplir esta regla a rajatabla.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> La disciplina suprema consiste en saber detenerse. Aceptar que hoy no es tu día y apagar la plataforma de trading protege tu capital operativo y tu estabilidad mental frente al caos del mercado.
      </div>
`
  },
  day11: {
    id: "day11",
    pilar: 2,
    title: "La Bitácora de Trading",
    unlocked: false,
    completed: false,
    challenge: "Documenta en tu bitácora una operation simulada (or real) reciente siguiendo estrictamente tus reglas de gestión: capital, riesgo exacto y R:R.",
    content: `
<p>Hoy analizaremos en profundidad la <strong>Bitácora de Trading</strong>, la herramienta técnica, cuantitativa e histórica más valiosa de la que dispone un operador profesional para auditar su toma de decisiones y perfeccionar su sistema probabilístico. Lo que no se mide no se puede mejorar, y en la especulación de futuros de índices, la memoria humana es selectiva y propensa a olvidar los errores cometidos para proteger el ego de la frustración o justificar comportamientos indisciplinados.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Ledger layout -->
        <rect x="30" y="40" width="440" height="150" fill="#1e293b" rx="6" stroke="#334155" stroke-width="1.5" />
        <!-- Table header lines -->
        <line x1="30" y1="70" x2="470" y2="70" stroke="#334155" stroke-width="1.5" />
        <!-- Vertical Column Lines -->
        <line x1="80" y1="40" x2="80" y2="190" stroke="#334155" stroke-width="1" />
        <line x1="150" y1="40" x2="150" y2="190" stroke="#334155" stroke-width="1" />
        <line x1="220" y1="40" x2="220" y2="190" stroke="#334155" stroke-width="1" />
        <line x1="300" y1="40" x2="300" y2="190" stroke="#334155" stroke-width="1" />
        <line x1="380" y1="40" x2="380" y2="190" stroke="#334155" stroke-width="1" />
        
        <!-- Table text headers -->
        <text x="55" y="58" fill="#94a3b8" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Fecha</text>
        <text x="115" y="58" fill="#94a3b8" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Activo</text>
        <text x="185" y="58" fill="#94a3b8" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Dirección</text>
        <text x="260" y="58" fill="#94a3b8" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Riesgo %</text>
        <text x="340" y="58" fill="#94a3b8" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Stop Loss</text>
        <text x="425" y="58" fill="#94a3b8" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Resultado</text>
        
        <!-- Row 1 data -->
        <text x="55" y="95" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">31/05</text>
        <text x="115" y="95" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">MES</text>
        <text x="185" y="95" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">LARGO</text>
        <text x="260" y="95" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">1%</text>
        <text x="340" y="95" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">12 pts</text>
        <text x="425" y="95" fill="#10b981" font-size="9" font-family="sans-serif" text-anchor="middle">+$240</text>
        
        <!-- Row 2 data -->
        <line x1="30" y1="115" x2="470" y2="115" stroke="#334155" stroke-width="1" />
        <text x="55" y="135" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">31/05</text>
        <text x="115" y="135" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">MNQ</text>
        <text x="185" y="135" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">CORTO</text>
        <text x="260" y="135" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">1%</text>
        <text x="340" y="135" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">45 pts</text>
        <text x="425" y="135" fill="#ef4444" font-size="9" font-family="sans-serif" text-anchor="middle">-$100</text>
        
        <!-- Caption -->
        <text x="250" y="220" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 2.4: Estructura y formato de la bitácora operativa científica.</text>
      </svg>

      <h3>La Bitácora como el Espejo Racional del Operador</h3>
      <p>La bitácora de trading no es un simple diario contable donde anotas cuánto dinero ganaste o perdiste al final de la sesión; es un registro riguroso de procesos técnicos donde dejas constancia científica de las condiciones del mercado y del cumplimiento estricto de las reglas del plan en cada operación individual. La estructura de un registro profesional debe abarcar parámetros objetivos claros: el activo operado (ES, NQ, MES o MNQ), la dirección del trade (largo o corto), el precio exacto de entrada y salida, la distancia del Stop Loss en puntos, el porcentaje de capital arriesgado, y los desencadenantes técnicos del setup (por ejemplo, el cruce del RSI y el rebote en la EMA 200).</p>
      <p>El verdadero valor de la bitácora radica en su posterior análisis estadístico semanal y mensual. Al revisar de forma retrospectiva y honesta los datos de tus operaciones, podrás identificar patrones de comportamiento recurrente, determinar la tasa de acierto real del sistema (Win Rate) y calcular tu ratio R:R promedio realizado. Esto te permite separar la influencia aleatoria del mercado en el corto plazo de la ventaja estadística real de tu estrategia a lo largo del tiempo, consolidando una confianza profunda y racional en tu proceso operativo. Documentar detalladamente aspectos como la duración de la operación, el deslizamiento (slippage) del precio y los enlaces a las capturas de tus gráficos aumentará significativamente la calidad de tus procesos analíticos futuros.</p>
      <p>Al auditar tu bitácora de forma periódica, te obligas a ti mismo a ser consciente de tus desviaciones, lo que te permite diseñar medidas correctivas concretas en tu rutina operativa semanal para erradicar las conductas perjudiciales de forma definitiva y científica. A largo plazo, esta disciplina te ahorrará miles de dólares en pérdidas innecesarias y te consolidará como un operador profesional e independiente del ruido diario del mercado. La bitácora científica es, en definitiva, el único documento objetivo que te protegerá del autoengaño y validará tu consistencia a largo plazo frente a las fluctuaciones aleatorias del mercado financiero.</p>
      <h3>Aplicación Práctica del Registro Semanal</h3>
      <p>Para resolver con éxito el reto del día de hoy, crea y personaliza tu propio formato digital o manuscrito de bitácora de trading utilizando los campos descritos anteriormente. Registra de forma detallada una operación reciente realizada en tu entorno de simulación o cuenta real, asegurándote de rellenar cada columna de forma honesta. Escribir los detalles te enseñará a analizar tus decisiones bajo un marco frío, científico y desprovisto de juicios emocionales destructivos.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> El registro riguroso de tus operaciones es la única verdad objetiva de tu desempeño. Al documentar tus datos sin juzgarte de forma emocional, dejas de depender de la suerte y asumes el control absoluto de tu consistencia.
      </div>
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
<p>Hoy profundizaremos en el proceso de <strong>documentar procesos operativos</strong>. Llevar una bitácora científica no se limita únicamente a rellenar columnas con números al finalizar la sesión de trading. Un trader consistente documenta la calidad de su ejecución técnica y analiza de forma minuciosa los costes asociados a su negocio, como las comisiones de la plataforma y el deslizamiento (slippage) del precio.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Flow diagram for Documenting -->
        <!-- Step 1: Capture -->
        <rect x="50" y="40" width="100" height="40" rx="5" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
        <text x="100" y="65" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">1. Capturar Gráfico</text>
        
        <!-- Arrow 1 -->
        <path d="M 150 60 L 190 60" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-flow)" />
        
        <!-- Step 2: Slippage -->
        <rect x="200" y="40" width="100" height="40" rx="5" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
        <text x="250" y="65" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">2. Medir Slippage</text>
        
        <!-- Arrow 2 -->
        <path d="M 300 60 L 340 60" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-flow)" />
        
        <!-- Step 3: Psychology -->
        <rect x="350" y="40" width="100" height="40" rx="5" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
        <text x="400" y="65" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">3. Puntuación Mental</text>
        
        <!-- Bottom: Analysis Box -->
        <rect x="50" y="110" width="400" height="70" rx="6" fill="#0b0f19" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.5" />
        <text x="250" y="135" fill="#ef4444" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">AUDITORÍA DE DESVIACIÓN OPERATIVA</text>
        <text x="250" y="155" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Compara el Stop Loss teórico del plan contra el Stop Loss real ejecutado.</text>

        <defs>
          <marker id="arrow-flow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
        </defs>
        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 2.5: Ciclo de auditoría operativa de costes y desviaciones.</text>
      </svg>

      <h3>Slippage, Comisiones y la Desviación del Plan de Trading</h3>
      <p>En el trading de futuros, cada transacción real tiene asociados unos costes de ejecución ineludibles que reducen de forma directa tu rentabilidad neta. Las comisiones son las tarifas fijas que te cobra el broker por cada contrato comprado o vendido. El deslizamiento (slippage) es la diferencia entre el precio exacto al que solicitaste ingresar a mercado y el precio al que tu orden fue realmente completada en el libro de órdenes debido a la velocidad del mercado y la falta de contrapartida inmediata. Ignorar estos costes puede hacer que un sistema teóricamente rentable sea perdedor en la práctica real.</p>
      <p>Documentar estos costes te ayuda a evaluar la viabilidad de tu operativa. Si realizas demasiadas operaciones rápidas buscando pequeños movimientos de precio (scalping agresivo), el impacto de las comisiones y del slippage consumirá la mayor parte de tus ganancias brutas. Además, debes calificar en cada operación tu nivel de cumplimiento del plan con una puntuación del 1 al 10. Si ejecutas una operación ganadora pero que violó tus reglas, debes registrarla como un error operativo de indisciplina. A largo plazo, las operaciones ganadoras fuera de tu plan son más perjudiciales que las operaciones perdedoras ejecutadas con total rigor, ya que premian de forma errónea conductas indisciplinadas y azarosas que destruirán tu cuenta cuando el mercado cambie de ciclo.</p>
      <p>Mantener un desglose preciso de tus gastos de transacción te convertirá en un verdadero gestor empresarial de tu capital. Analizar la relación entre el volumen operativo y las comisiones pagadas te ayudará a evitar la sobreoperativa y a seleccionar únicamente los setups que ofrezcan una ventaja estadística robusta y un margen de beneficio adecuado. Adicionalmente, medir el deslizamiento de tus órdenes te permitirá optimizar tus entradas limitadas y tu velocidad de conexión a los servidores del broker. Esta auditoría sistemática es lo que distingue a los operadores consistentes de los apostadores que buscan dinero fácil. Recuerda que cada dólar ahorrado en comisiones o deslizamientos es un dólar que se suma directamente a tu rentabilidad final.</p>
      <h3>Aplicación Práctica del Análisis de Desviación</h3>
      <p>Tu reto de hoy es examinar tu última operación (simulada o real) e identificar la presencia de slippage comparando el precio al que hiciste clic contra el precio de entrada real registrado en tu plataforma. Calcula además los costes de comisiones correspondientes a la compra y venta de los contratos operados y anota en tu bitácora de trading tu beneficio neto real tras deducir estos valores.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> La disciplina neta es la única métrica empresarial válida en el trading. Al medir de forma precisa cada uno de los costes asociados a tu operativa, evitas las sorpresas financieras y actúas como un gestor de capital serio.
      </div>
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
<p>La consistencia en el trading de futuros de índices no es el resultado de tener la razón constantemente o de encontrar una fórmula secreta que anticipe con precisión cada movimiento de los gráficos. Proviene del diseño y la <strong>ejecución sistemática de un proceso repetible</strong> llevado a cabo con la disciplina férrea de una máquina. Un sistema repetible elimina la necesidad de tomar decisiones basadas en intuiciones o corazonadas sesgadas por el estado de ánimo.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Flowchart of Repeatable System -->
        <!-- Inputs (Strict) -->
        <rect x="40" y="60" width="100" height="40" rx="4" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1.5" />
        <text x="90" y="85" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Reglas Fijas</text>
        
        <!-- Arrow 1 -->
        <path d="M 140 80 L 190 80" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-system)" />
        
        <!-- Process (Execution) -->
        <rect x="200" y="60" width="100" height="40" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
        <text x="250" y="85" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Muestra 50 Trades</text>
        
        <!-- Arrow 2 -->
        <path d="M 300 80 L 350 80" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-system)" />
        
        <!-- Output (Positive expectancy) -->
        <rect x="360" y="60" width="100" height="40" rx="4" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5" />
        <text x="410" y="85" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Ventaja Realizada</text>
        
        <!-- Line dividing alternative (Random inputs) -->
        <line x1="50" y1="130" x2="450" y2="130" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,3" />
        
        <!-- Random system -->
        <rect x="40" y="150" width="100" height="40" rx="4" fill="#ef4444" fill-opacity="0.1" stroke="#ef4444" stroke-width="1.5" />
        <text x="90" y="175" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Reglas Variables</text>
        <path d="M 140 170 L 190 170" fill="none" stroke="#64748b" stroke-width="1.5" />
        <rect x="200" y="150" width="100" height="40" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
        <text x="250" y="175" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Muestra 50 Trades</text>
        <path d="M 300 170 L 350 170" fill="none" stroke="#64748b" stroke-width="1.5" />
        <rect x="360" y="150" width="100" height="40" rx="4" fill="#ef4444" fill-opacity="0.2" stroke="#ef4444" stroke-width="1.5" />
        <text x="410" y="175" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Ruina / Ruido</text>

        <defs>
          <marker id="arrow-system" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
        </defs>
        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 2.6: Contraste de entrada repetible frente a entradas variables aleatorias.</text>
      </svg>

      <h3>La Trampa del Strategy Hopping</h3>
      <p>Uno de los errores más comunes y destructivos de los operadores principiantes es el hábito de cambiar de estrategia o modificar sus indicadores de entrada cada vez que experimentan una o dos pérdidas consecutivas (práctica conocida en inglés como strategy hopping). Si cambias tus parámetros de entrada, la colocación de tu Stop Loss o las condiciones técnicas de tus operaciones en cada trade, estás introduciendo un ruido constante en tu operativa. Esto destruye por completo la representatividad de tu muestra estadística e impide evaluar si la estrategia básica realmente tiene una ventaja esperable positiva.</p>
      <p>Para verificar de forma científica si tu sistema de trading posee una ventaja de probabilidad a tu favor en el mercado, debes ejecutar las mismas reglas de forma invariable durante una muestra significativa (de al menos 50 o 100 operaciones consecutivas). Si respetas tus directrices de entrada (por ejemplo, cruce de RSI y alineación con la EMA 200) y dejas que la distribución de probabilidad actúe sin intervención emocional, los números estabilizarán los resultados de tu cuenta demostrando la consistencia de tu proceso operativo. Esta disciplina te protegerá del sobreoperar y te dará una base estadística sólida sobre la cual realizar ajustes reales basados en datos cuantitativos y no en frustraciones pasajeras.</p>
      <p>Operar con un sistema repetible reduce además el desgaste mental y la toma de decisiones precipitadas durante el horario operativo del mercado. Cuando sabes de antemano bajo qué condiciones exactas vas a operar y cómo vas a gestionar tu riesgo de forma inflexible, la sesión se convierte en una simple tarea de ejecución objetiva, alejándote del estrés y del ruido informativo que domina los mercados financieros de futuros. Esto te permite mantener la calma bajo presión y actuar como un profesional de las probabilidades, liberando tu cerebro del peso de decidir bajo incertidumbre extrema en cada vela que se dibuja en tu pantalla de trading. La consistencia conductual es el único camino real para lograr el éxito sostenible en este negocio altamente competitivo.</p>
      <h3>Aplicación Práctica de la Consistencia</h3>
      <p>Tu reto de hoy consiste en redactar de forma manuscrita o digital una pequeña declaración donde argumentes de forma lógica por qué operar de manera aleatoria, modificando tus condiciones analíticas diariamente, destruye tu esperanza matemática. Comprométete formalmente a mantener las condiciones de tu sistema de simulación invariables durante las próximas 20 operaciones y documenta este compromiso en tu bitácora técnica.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> Un trader rentable ejecuta las mismas reglas todos los días con la frialdad de un proceso automatizado. No busques la emoción en la aleatoriedad; busca la paz mental en la consistencia matemática del método.
      </div>
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
<p>El tamaño de tu posición operativa nunca debe establecerse al azar o en base al sentimiento de confianza que tengas antes de hacer clic. En el trading profesional de futuros, el tamaño de tu posición en contratos (o microcontratos) se <strong>calcula de forma matemática y dinámica antes de cada trade</strong>, basándote en la distancia exacta de tu Stop Loss técnico.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Scale Body -->
        <line x1="250" y1="50" x2="250" y2="180" stroke="#475569" stroke-width="4" />
        <line x1="150" y1="90" x2="350" y2="90" stroke="#64748b" stroke-width="3" />
        <circle cx="250" cy="90" r="6" fill="#3b82f6" />
        
        <!-- Left Pan (Contract Size - Low) -->
        <line x1="150" y1="90" x2="120" y2="150" stroke="#3b82f6" stroke-width="1.5" />
        <line x1="150" y1="90" x2="180" y2="150" stroke="#3b82f6" stroke-width="1.5" />
        <rect x="110" y="150" width="80" height="10" rx="3" fill="#10b981" />
        <text x="150" y="175" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Contratos (Menor Size)</text>
        <circle cx="150" cy="142" r="6" fill="#10b981" />
        
        <!-- Right Pan (Stop Distance - High) -->
        <line x1="350" y1="90" x2="320" y2="150" stroke="#ef4444" stroke-width="1.5" />
        <line x1="350" y1="90" x2="380" y2="150" stroke="#ef4444" stroke-width="1.5" />
        <rect x="310" y="150" width="80" height="10" rx="3" fill="#ef4444" />
        <text x="350" y="175" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Stop Loss (Mayor Distancia)</text>
        <circle cx="350" cy="140" r="10" fill="#ef4444" />
        
        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 2.7: Balanza dinámica entre la distancia del Stop y el tamaño de posición.</text>
      </svg>

      <h3>La Regla Inalterable del Riesgo Financiero Constante</h3>
      <p>El E-mini S&P 500 (ES) tiene un valor de $50 por punto por contrato, mientras que su versión micro, el Micro E-mini S&P 500 (MES), tiene un valor de $5 por punto por contrato. Si tu plan de trading establece que el riesgo financiero máximo por operación es del 1% de tu cuenta de $5,000, estás autorizado a arriesgar un total de $50 por trade. Si tu stop loss técnico (el nivel de precio donde la estructura del mercado invalida tu hipótesis de compra o venta) se encuentra a una distancia de 10 puntos en el gráfico, tu cálculo dinámico de posición arroja que debes operar exactamente 1 contrato del micro (MES): 10 puntos x $5/punto x 1 contrato = $50.</p>
      <p>Si en la siguiente operación el stop loss técnico debe colocarse a una distancia mayor (por ejemplo, a 20 puntos debido a un aumento de la volatilidad intradía), debes reducir tu tamaño de contratos obligatoriamente a la mitad (operando solo 0.5 contratos del micro, o buscando otro setup), asegurando que tu riesgo financiero siga siendo exactamente de $50. Bajo ninguna circunstancia debes operar un tamaño fijo de contratos sin calcular previamente la distancia del stop, ya que esto provocaría que tu riesgo financiero oscilara de forma descontrolada, destruyendo la asimetría del drawdown y la consistencia matemática de tu bitácora.</p>
      <p>Este principio dinámico se aplica a todos los futuros, ya sean índices (ES, NQ, RTY, YM) o materias primas (Petróleo CL, Oro GC). Calcula siempre el valor nominal por punto de tu contrato antes de ingresar órdenes reales y utiliza márgenes adecuados para evitar deslizamientos de ejecución y liquidaciones indeseadas por parte del broker.</p>
      <h3>Aplicación Práctica de la Fórmula de Posición</h3>
      <p>Para resolver tu reto de hoy, calcula manualmente el tamaño en contratos que debes operar en el siguiente escenario real: tu cuenta de trading dispone de $5,000 de capital y decides aplicar un riesgo del 1% ($50). Tu Stop Loss técnico en futuros del Micro Nasdaq (MNQ), cuyo valor es de $2 por punto por contrato, se encuentra a una distancia de 25 puntos en tu gráfico. Calcula el número de contratos exactos que debes abrir a mercado de forma que tu riesgo sea de $50. Anota el desglose de la fórmula y los pasos en tu bitácora.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> El tamaño de posición se adapta a la volatilidad de la estructura, no a tus ganas de ganar más rápido. Mantén el riesgo financiero constante para mantener tu balance y tu paz mental estables.
      </div>
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
<p>Felicidades por completar las lecciones teóricas y prácticas del <strong>Módulo 2: Gestión y Disciplina</strong>. A lo largo de esta segunda semana de entrenamiento estoico, has adquirido los conocimientos de control de capital e indisciplina más valiosos que separan a los traders aficionados de los especuladores profesionales consistentes. Aprendiste las leyes matemáticas de la preservación de capital y del drawdown, la ventaja de la asimetría y del ratio R:R, la necesidad empresarial de la bitácora técnica de procesos y el cálculo dinámico del tamaño de posición.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Laurel Wreath Backdrop -->
        <path d="M 180 120 C 180 180, 320 180, 320 120" fill="none" stroke="#334155" stroke-width="3" />
        <!-- Badge Body (Shield) -->
        <polygon points="250,40 295,70 295,130 250,170 205,130 205,70" fill="#1e293b" stroke="#3b82f6" stroke-width="3" />
        <!-- Key Symbol in Center -->
        <circle cx="250" cy="85" r="10" fill="none" stroke="#f59e0b" stroke-width="2.5" />
        <line x1="250" y1="95" x2="250" y2="135" stroke="#f59e0b" stroke-width="2.5" />
        <line x1="250" y1="115" x2="265" y2="115" stroke="#f59e0b" stroke-width="2.5" />
        <line x1="250" y1="128" x2="265" y2="128" stroke="#f59e0b" stroke-width="2.5" />
        <!-- Badge Text -->
        <text x="250" y="190" fill="#10b981" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">PILAR 2 OK</text>
        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 2.8: Insignia de superación del bloque de gestión y riesgo matemático.</text>
      </svg>

      <h3>La Firma de tu Compromiso Inalterable de Riesgo</h3>
      <p>Hoy darás el paso definitivo de este módulo redactando y firmando tu manifiesto oficial de riesgo y gestión de capital. Este manifiesto no es una recomendación flexible o una sugerencia opcional; es la ley suprema que rige la supervivencia de tu cuenta. Define de forma explícita qué porcentaje máximo de tu capital estás autorizado a arriesgar por operación en tu plataforma simulada o real, y cuál será tu límite de drawdown diario expresado en dólares. Debe ser una guía innegociable de comportamiento operativo que debas acatar sin excusas ni retrasos de ningún tipo, protegiéndote a ti mismo del descontrol mental provocado por rachas perdedoras.</p>
      <p>Una vez redactado y firmado, colócalo de forma muy destacada en tu escritorio de trabajo. Al comprometerte ante ti mismo a acatar estas directrices de forma inquebrantable, dejas de especular bajo la influencia de impulsos emocionales y asumes la responsabilidad absoluta de la salud financiera de tu cuenta de trading. En el siguiente módulo (Módulo 3), iniciaremos el bloque de **Estrategia Técnica de Alta Probabilidad**, donde aprenderás a leer la estructura de subasta de mercado pura y limpia, libre de indicadores con retraso, complementada con los filtros de confluencia técnica. Debes comprender que un trader sin gestión es solo un jugador de casino con prisa por perder su dinero.</p>
      <p>Asegúrate de repasar las fórmulas de cálculo de posición y las reglas de drawdown antes de realizar la evaluación. La disciplina demostrada en este módulo será la base sobre la cual implementaremos tus estrategias en gráficos reales. Conservar tu capital es lo único que garantiza tu supervivencia a largo plazo en este exigente negocio competitivo. Ningún sistema técnico de alta probabilidad funcionará a tu favor si eres incapaz de controlar tus riesgos y proteger tu cuenta con reglas sólidas e inamovibles. El trading es un maratón de consistencia matemática, no una carrera de velocidad temeraria.</p>
      <h3>Instrucciones para la Evaluación Semanal</h3>
      <p>Para desbloquear el Módulo 3, debes enfrentarte al cuestionario teórico práctico de gestión de riesgo detallado a continuación. Deberás responder a las 5 preguntas basándote en la matemática del drawdown, el ratio R:R y la asimetría. Aprobar este examen con un 100% de aciertos es el requisito ineludible para avanzar en tu programa de entrenamiento de Visión Trading Pro.</p>
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
<p>Bienvenido al <strong>Módulo 3: Lectura Técnica Avanzada</strong>. En esta sección nos enfocaremos en interpretar los movimientos del precio de manera limpia y sin la distorsión de indicadores desfasados. La base de cualquier análisis técnico serio es comprender la estructura de mercado real, la cual representa la huella física y el flujo de órdenes del dinero institucional. La cotización de futuros no se mueve de forma aleatoria ni lineal; fluctúa en una serie de impulsos y retrocesos que reflejan el desequilibrio entre compradores y vendedores.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Grid Lines -->
        <line x1="50" y1="200" x2="450" y2="200" stroke="#1e293b" stroke-width="1" />
        <line x1="50" y1="50" x2="50" y2="200" stroke="#1e293b" stroke-width="1" />
        <!-- Trend line representing HH/HL -->
        <path d="M 50 180 L 100 160 L 160 90 L 220 130 L 290 70 L 350 110 L 420 50" fill="none" stroke="#3b82f6" stroke-width="3" />
        <!-- Circles at vertices -->
        <circle cx="100" cy="160" r="4" fill="#10b981" />
        <circle cx="160" cy="90" r="4" fill="#3b82f6" />
        <circle cx="220" cy="130" r="4" fill="#10b981" />
        <circle cx="290" cy="70" r="4" fill="#3b82f6" />
        <circle cx="350" cy="110" r="4" fill="#10b981" />
        <circle cx="420" cy="50" r="4" fill="#3b82f6" />
        <!-- Labels -->
        <text x="100" y="180" fill="#10b981" font-size="9" font-family="sans-serif" text-anchor="middle">HL (Mínimo Alto)</text>
        <text x="160" y="75" fill="#3b82f6" font-size="9" font-family="sans-serif" text-anchor="middle">HH (Máximo Alto)</text>
        <text x="220" y="150" fill="#10b981" font-size="9" font-family="sans-serif" text-anchor="middle">HL</text>
        <text x="290" y="55" fill="#3b82f6" font-size="9" font-family="sans-serif" text-anchor="middle">HH</text>
        <text x="350" y="130" fill="#10b981" font-size="9" font-family="sans-serif" text-anchor="middle">HL</text>
        <text x="420" y="35" fill="#3b82f6" font-size="9" font-family="sans-serif" text-anchor="middle">HH</text>
        <!-- Trend Direction Arrow -->
        <path d="M 50 190 L 420 65" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4,4" />
        <text x="230" y="220" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Estructura Alcista Sostenible (HH / HL)</text>
        <!-- Caption -->
        <text x="250" y="240" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Ilustración 3.1: Secuencia de máximos y mínimos crecientes en tendencia.</text>
      </svg>

      <h3>La Anatomía de las Tendencias y los Swings</h3>
      <p>Según los principios fundamentales de la Teoría de Dow, una tendencia alcista se define estrictamente como una sucesión ordenada de Máximos más Altos (HH - Higher Highs) y Mínimos más Altos (HL - Higher Lows). En contraste, una tendencia bajista consiste en una serie de Máximos más Bajos (LH - Lower Highs) y Mínimos más Bajos (LL - Lower Lows). Estos puntos de giro, conocidos técnicamente como "swings", representan las zonas donde la presión compradora o vendedora del mercado ha revertido la dirección del precio de forma temporal para capturar liquidez de los minoristas.</p>
      <p>El mercado es intrínsecamente fractal. Esto significa que la estructura alcista visible en un gráfico diario se compone de múltiples sub-estructuras alcistas y bajistas en gráficos de menor temporalidad, como el de 5 o 15 minutos. Un error muy común de los traders novatos es confundir un retroceso en una temporalidad mayor con un cambio de tendencia completo en su gráfico de operativa diaria. Para evitar esto, el operador profesional debe realizar un análisis macro que defina la dirección del flujo de órdenes principal antes de buscar entradas en temporalidades menores. Al alinear tu operativa con la estructura de mayor escala, aumentas de forma drástica la probabilidad de éxito de tus setups de trading.</p>
      <p>Los algoritmos institucionales se valen de la estructura para acumular y distribuir posiciones. Cuando el precio hace un retroceso hacia un mínimo previo más alto (HL), los creadores de mercado inyectan liquidez de compra aprovechando la acumulación de órdenes de stop loss de los operadores posicionados en largo. Comprender esta dinámica te permite esperar pacientemente el retroceso técnico de valor antes de ejecutar tu orden de entrada, evitando así comprar en máximos por efecto FOMO (miedo a quedarse fuera). La disciplina estoica consiste en saber esperar la confirmación de la estructura en la zona de valor adecuada.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Para completar el reto del día de hoy, abre tu simulador en un gráfico limpio de futuros del Nasdaq (NQ) o del S&P 500 (ES). Identifica visualmente e ilustra con una herramienta de dibujo de tu plataforma una serie de al menos tres máximos más altos (HH) y tres mínimos más altos (HL) consecutivos. Documenta las cotizaciones de estos puntos en tu bitácora técnica de operativa.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> No intentes adivinar hacia dónde irá el precio. La estructura de mercado te indica con absoluta claridad el camino que sigue el dinero institucional. Sigue su tendencia y reduce tu riesgo.
      </div>
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
<p>Hoy analizaremos la <strong>Ruptura de Estructura</strong> o <strong>BOS (Break of Structure)</strong>, que constituye el evento técnico confirmatorio más importante para validar la continuación de una tendencia de mercado. En una tendencia alcista en curso, el precio realiza constantemente impulsos que sobrepasan la altura del máximo anterior (HH). Cuando este máximo es quebrado con claridad y el precio cierra con el cuerpo de la vela por encima del nivel del swing high previo, declaramos de forma científica la presencia de un BOS.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Axis Grid -->
        <line x1="50" y1="200" x2="450" y2="200" stroke="#1e293b" stroke-width="1" />
        <!-- Price line showing HL -> HH -> HL -> BOS breakout -->
        <path d="M 50 170 L 120 120 L 180 150 L 300 80 L 330 100 L 420 40" fill="none" stroke="#94a3b8" stroke-width="2" />
        <!-- Horizontal resistance line at HH (300, 80) -->
        <line x1="280" y1="80" x2="400" y2="80" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
        <!-- BOS circle and label -->
        <circle cx="360" cy="80" r="5" fill="#ef4444" />
        <text x="360" y="70" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">BOS (Ruptura)</text>
        <!-- Highlights for swings -->
        <circle cx="120" cy="120" r="3" fill="#3b82f6" />
        <circle cx="300" cy="80" r="3" fill="#3b82f6" />
        <text x="120" y="110" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Swing H</text>
        <text x="300" y="68" fill="#3b82f6" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Último Máximo</text>
        <!-- Retest arrow -->
        <path d="M 400 53 L 400 80" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2" />
        <text x="400" y="93" fill="#10b981" font-size="8" font-family="sans-serif" text-anchor="middle">Retest Zona</text>
        <!-- Caption -->
        <text x="250" y="230" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 3.2: Confirmación técnica de Ruptura de Estructura (BOS).</text>
      </svg>

      <h3>Mecánica de la Ruptura y Validación del Cierre</h3>
      <p>Es vital aprender a distinguir una ruptura genuina (BOS) de una simple toma de liquidez o barrido (sweep). Para que una ruptura sea clasificada como un BOS válido por un operador cuantitativo, la vela debe cerrar por fuera de la frontera física marcada por el máximo anterior. Si el precio atraviesa el máximo pero se retrae rápidamente dejando únicamente una mecha larga por encima de la resistencia, no ha ocurrido un BOS. En cambio, ha tenido lugar un "falso rompimiento" o caza de stop losses de vendedores minoristas llevado a cabo por el dinero institucional para revertir la cotización del activo.</p>
      <p>El concepto complementario al BOS es el **CHoCH (Change of Character)** o Cambio de Carácter. Mientras que el BOS valida la continuación de la tendencia alcista o bajista actual, el CHoCH representa la primera señal estructural de una reversión de la tendencia. El CHoCH ocurre cuando el precio rompe el último mínimo más alto (HL) en una tendencia alcista, indicando que los compradores han perdido el control del mercado y que el flujo de órdenes institucional ha cambiado a favor de las ventas. Saber mapear estos eventos estructurales te evitará entrar a contra-tendencia en el mercado.</p>
      <p>Además, comprender el BOS te ayuda a identificar piscinas de liquidez (liquidity pools). Los máximos y mínimos previos actúan como zonas donde se concentran grandes cantidades de órdenes de compra pendientes (buy stops) y venta pendientes (sell stops). Cuando el precio rompe este nivel con volumen, se produce una inyección masiva de capital que acelera el movimiento. Por tanto, el trader inteligente no entra en corto inmediatamente después de un BOS bajista, sino que espera pacientemente a que el precio regrese a testear la zona del bloque de órdenes que originó el quiebre, optimizando su rentabilidad.</p>
      <p>En el trading de futuros, operar la continuación mediante BOS te permite unirte al movimiento direccional más fuerte. En lugar de buscar adivinar el final de la tendencia comprando en soportes desvalidos, el trader consistente espera que la estructura declare la intención del dinero institucional y luego busca entradas de bajo riesgo en el retroceso del precio hacia el nivel de soporte originador. Esto requiere paciencia emocional para no perseguir el precio en medio del breakout violento de la cotización.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Tu reto del día de hoy consiste en abrir tu plataforma operativa e identificar un ejemplo claro de ruptura de estructura (BOS) de tendencia en un gráfico de 5 o 15 minutos. Mide la cotización exacta del máximo roto y el precio de cierre de la vela de ruptura. Documenta detalladamente estas observaciones en tu bitácora técnica.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> La paciencia técnica rinde frutos matemáticos. Esperar la confirmación del cierre de la vela en un BOS te protege de las trampas de los creadores de mercado que buscan cazar tu stop loss.
      </div>
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
<p>Hoy estudiaremos los <strong>Soportes y Resistencias de Valor</strong>. En los manuales clásicos de trading, se enseña erróneamente al estudiante que un soporte o resistencia es una línea horizontal exacta en el gráfico. Sin embargo, en el mercado real de futuros de índices, los niveles estáticos no existen. El mercado se rige por la subasta en zonas dinámicas de acumulación y distribución de órdenes institucionales llamadas áreas de oferta y demanda.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Resistance Zone Box -->
        <rect x="50" y="45" width="400" height="25" fill="rgba(239, 68, 68, 0.08)" stroke="rgba(239, 68, 68, 0.4)" stroke-width="1" />
        <text x="250" y="60" fill="#ef4444" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">ZONA DE RESISTENCIA / OFERTA INSTITUCIONAL</text>
        
        <!-- Support Zone Box -->
        <rect x="50" y="160" width="400" height="25" fill="rgba(16, 185, 129, 0.08)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1" />
        <text x="250" y="177" fill="#10b981" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">ZONA DE SOPORTE / DEMANDA INSTITUCIONAL</text>
        
        <!-- Price path bouncing between zones -->
        <path d="M 60 170 L 120 58 L 180 168 L 260 55 L 320 165 L 380 58 L 440 170" fill="none" stroke="#94a3b8" stroke-width="2" />
        
        <!-- Rejection circles -->
        <circle cx="120" cy="58" r="4" fill="#ef4444" />
        <circle cx="260" cy="55" r="4" fill="#ef4444" />
        <circle cx="380" cy="58" r="4" fill="#ef4444" />
        <circle cx="180" cy="168" r="4" fill="#10b981" />
        <circle cx="320" cy="165" r="4" fill="#10b981" />
        
        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 3.3: Interacción del precio en zonas de oferta y demanda con múltiples rebotes.</text>
      </svg>

      <h3>La Física de la Oferta, Demanda e Imbalance</h3>
      <p>Un soporte de valor es un rango de cotización donde la demanda latente excede con creces la oferta disponible, lo que obliga a que el precio detenga su descenso e inicie un rebote alcista. Por el contrario, una resistencia de valor representa una franja de precios donde la oferta bloquea de manera contundente la demanda de compra minorista. Estas zonas no se definen por azar; coinciden con áreas donde los grandes fondos e instituciones financieras tienen millones de dólares en órdenes pendientes de ejecución en el libro de órdenes (order book).</p>
      <p>Las zonas más potentes y valiosas para buscar operaciones se originan cuando el precio sufre un desequilibrio drástico (imbalance), saliendo despedido del área con mucha intención y alto volumen. Esto nos indica que las instituciones entraron con mucha fuerza y dejaron órdenes de compra o venta incompletas en esa zona, las cuales actuarán como un imán para el precio en el futuro. Al esperar a que la cotización regrese a estas áreas mitigadas, nos unimos a la inyección masiva de liquidez institucional, logrando ratios de riesgo y recompensa excepcionales para nuestra cuenta.</p>
      <p>Un aspecto crítico es el concepto de mitigación o frescura de la zona. Una zona de soporte o demanda es sumamente fuerte en su primer testeo (testeo fresco), ya que contiene el mayor número de órdenes institucionales pendientes de ejecución. Sin embargo, cada vez que el precio regresa y rebota en la misma zona, consume la liquidez remanente. Un soporte testeado tres, cuatro o cinco veces no se vuelve más fuerte, sino que se debilita progresivamente hasta que finalmente se rompe con violencia cuando las órdenes de compra se agotan por completo.</p>
      <p>El trader novato comete el error de marcar docenas de líneas horizontales débiles en su pantalla, lo que genera confusión, parálisis por análisis y entradas tardías. El trader consistente simplifica su análisis delimitando únicamente las 2 o 3 zonas principales de mayor temporalidad, esperando con paciencia que el precio reaccione en ellas y valide sus setups con rechazos claros. Esto requiere no anticiparse a la reacción del precio y respetar de forma inflexible los límites lógicos de tu stop loss.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Abre el gráfico del simulador de futuros y localiza las zonas de soporte y resistencia institucionales más representativas del día anterior. Dibuja rectángulos semi-transparentes alrededor de estos puntos extremos de cotización. Anota los límites superior e inferior de cada zona en tu diario de operaciones y espera a que el mercado vuelva a testear estas áreas.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> Deja que las zonas trabajen para ti. No busques operaciones en el medio del rango estructural del precio. Ejecuta de forma exclusiva en los extremos y protege la salud matemática de tu cuenta.
      </div>
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
<p>En el entrenamiento de hoy estudiaremos la **Acción del Precio Pura** (Price Action). El precio es la única variable física directa del mercado de futuros que no tiene ningún retardo de cálculo. Mientras que los indicadores populares como el MACD o el oscilador estocástico promedian datos matemáticos del pasado de la cotización, la acción del precio en los gráficos revela la lucha entre la oferta y la demanda institucional en tiempo real.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Support line -->
        <line x1="50" y1="160" x2="450" y2="160" stroke="#3b82f6" stroke-width="2" />
        <text x="70" y="180" fill="#3b82f6" font-size="9" font-family="sans-serif" font-weight="bold">Soporte Clave</text>

        <!-- Bearish Candle 1 -->
        <line x1="150" y1="60" x2="150" y2="140" stroke="#ef4444" stroke-width="2" />
        <rect x="140" y="70" width="20" height="60" fill="#ef4444" />
        
        <!-- Bearish Candle 2 -->
        <line x1="200" y1="90" x2="200" y2="160" stroke="#ef4444" stroke-width="2" />
        <rect x="190" y="100" width="20" height="50" fill="#ef4444" />
        
        <!-- Rejection Hammer/Pinbar Candle at support -->
        <line x1="250" y1="140" x2="250" y2="195" stroke="#10b981" stroke-width="2" />
        <rect x="240" y="140" width="20" height="15" fill="#10b981" />
        <text x="280" y="150" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold">Pinbar Alcista (Rechazo)</text>
        <path d="M 275 185 L 255 185" fill="none" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arrow-wick)" />
        <text x="280" y="190" fill="#f59e0b" font-size="8" font-family="sans-serif">Rechazo de Liquidez por debajo del soporte</text>
        
        <!-- Bullish Candle 4 (Confirmation) -->
        <line x1="310" y1="110" x2="310" y2="150" stroke="#10b981" stroke-width="2" />
        <rect x="300" y="115" width="20" height="30" fill="#10b981" />

        <defs>
          <marker id="arrow-wick" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
          </marker>
        </defs>
        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 3.4: Patrón de vela Pinbar de rechazo en nivel de soporte.</text>
      </svg>

      <h3>Velas de Intención y la Psicología del Rechazo</h3>
      <p>Operar con gráficos limpios te obliga a prestar atención al comportamiento individual y colectivo de las velas japonesas. Una sola vela puede contar la historia del flujo de órdenes en un período determinado. Por ejemplo, una vela tipo martillo o pinbar con una mecha inferior extremadamente larga y un cuerpo pequeño alcista indica que, aunque los vendedores empujaron la cotización inicialmente con fuerza, los compradores institucionales reaccionaron masivamente en esa zona absorbiendo toda la oferta disponible y revirtiendo la dirección de la subasta antes del cierre.</p>
      <p>El análisis de la acción del precio se apoya en tres principios inseparables: la ubicación del precio, la forma de la vela y el volumen de transacciones de la sesión. Un patrón de vela Pinbar alcista no tiene ningún valor si se forma a mitad de un canal alcista sin confluencia técnica relevante. Sin embargo, si esa misma vela se forma testeando un soporte de valor institucional de una temporalidad mayor, se convierte en un disparador de altísima probabilidad matemática para estructurar un trade en largo con un stop loss ajustado y protegido por debajo de la mecha de rechazo.</p>
      <p>Además, al leer las velas, debemos evaluar el tamaño del cuerpo frente a las mechas. Los cuerpos grandes representan el dominio absoluto y la convicción de un grupo de participantes (compradores o vendedores), mientras que las mechas largas reflejan rechazo de zonas de precios inaceptables por falta de volumen e interés de negociación a esos niveles. Integrar esta lectura contextual te permitirá evitar entrar en mercados sin volumen o en consolidaciones estrechas, previniendo pérdidas por ruido y deslizamiento innecesarios.</p>
      <p>Aprender a confiar en los gráficos limpios requiere liberarse del sesgo cognitivo de necesitar indicadores complejos para validar las decisiones operativas. El precio te da la señal de forma inmediata, permitiéndote entrar en el mercado con una velocidad óptima y sin el retardo de cálculo típico de los osciladores. Al refinar tu capacidad de interpretar el comportamiento del precio de esta manera, actúas como un profesional con años de experiencia en la lectura del mercado de futuros de índices.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Desactiva temporalmente todos los indicadores técnicos de tu gráfico de futuros. Analiza la estructura del mercado apoyándose de manera exclusiva en las formas de las velas y la ubicación de las zonas de soporte y resistencia. Documenta en tu bitácora de trading los niveles donde el precio muestre mechas de rechazo notables y los resultados correspondientes a las reacciones posteriores.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> La sencillez es la máxima sofisticación analítica. Al eliminar el ruido de los indicadores complejos de tu pantalla, logras enfocar tu atención en el único dato real y directo: la acción del precio.
      </div>
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
<p>Hoy nos enfocaremos en una de las leyes estructurales más consistentes y operables en el análisis técnico: <strong>La Ley de Polaridad</strong>. Este principio establece que cuando una zona de soporte técnico relevante es fracturada de manera clara por la cotización del precio con intención alcista o bajista, dicho nivel invierte su rol físico y psicológico en el mercado de futuros de índices.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Polar Level line -->
        <line x1="50" y1="120" x2="450" y2="120" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" />
        <text x="70" y="110" fill="#f59e0b" font-size="9" font-family="sans-serif" font-weight="bold">Línea de Polaridad</text>

        <!-- Price line showing bounce, break, retest, and bounce -->
        <path d="M 60 180 L 120 120 L 170 155 L 230 120 L 260 135 L 340 75 L 380 120 L 440 60" fill="none" stroke="#94a3b8" stroke-width="2" />
        
        <!-- Labels and circles -->
        <circle cx="120" cy="120" r="4" fill="#ef4444" />
        <text x="120" y="105" fill="#ef4444" font-size="9" font-family="sans-serif" text-anchor="middle">Resistencia</text>
        
        <circle cx="230" cy="120" r="4" fill="#ef4444" />
        
        <!-- Breakout label -->
        <text x="310" y="70" fill="#3b82f6" font-size="9" font-family="sans-serif" font-weight="bold">Ruptura</text>
        
        <!-- Retest as Support -->
        <circle cx="380" cy="120" r="4" fill="#10b981" />
        <text x="380" y="140" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Soporte (Testeo)</text>
        
        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 3.5: Resistencia convertida en soporte tras ruptura e intención.</text>
      </svg>

      <h3>La Psicología de las Órdenes en Niveles Rotos</h3>
      <p>Para comprender la Ley de Polaridad, es indispensable conocer la psicología colectiva de los participantes del mercado. Cuando el precio choca con una resistencia importante, muchos operadores minoristas deciden abrir posiciones cortas (ventas). Si el precio rompe con violencia esa zona alcista impulsado por órdenes institucionales, todos esos vendedores quedan atrapados en pérdidas severas. El mercado no tardará en retroceder hacia la zona rota debido a la toma de beneficios y la falta de liquidez compradora temporal.</p>
      <p>Cuando el precio desciende de nuevo hacia la antigua zona de resistencia, los vendedores que estaban atrapados en pérdidas tienen la oportunidad de cerrar sus posiciones con una pérdida cercana a cero o "breakeven" (cero ganancias/pérdidas), lo que requiere introducir órdenes de compra de contrapartida. Al mismo tiempo, los traders de tendencias que no habían entrado inicialmente en largo identifican la zona rota como un retroceso de gran descuento y colocan órdenes de compra limitadas. Esta confluencia natural de órdenes de compra genera un rebote alcista inmediato en la antigua zona rota, convirtiéndola en un soporte activo.</p>
      <p>Para aumentar la efectividad de esta ley, podemos combinarla con los retrocesos de Fibonacci. Los niveles horizontales rotos de polaridad suelen coincidir con niveles del 50% o 61.8% del retroceso del impulso de ruptura, lo que añade una capa de confluencia matemática crucial. Operar este setup de retesteo sistemático te dotará de la paciencia necesaria para evitar perseguir breakouts ruidosos en la apertura, limitando tus entradas únicamente a zonas de alta precisión probabilística.</p>
      <p>Operar testeos de polaridad es una de las estrategias con mayor ratio riesgo:recompensa (R:R) de las que dispone el trader. Al entrar exactamente en la antigua zona de resistencia que ahora actúa como soporte, el stop loss puede colocarse cómodamente y a muy pocos puntos por debajo del nivel de polaridad, buscando como objetivo el último máximo de la tendencia. Esperar pacientemente el retroceso hacia la polaridad rota te evitará perseguir el precio de manera impulsiva en pleno breakout alcista.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Busca en tu plataforma operativa un activo de futuros e identifica un nivel horizontal de soporte o resistencia relevante que haya sido roto con cuerpo de vela. Espera y dibuja la posterior fase de retesteo del precio en dicho nivel. Registra en tu bitácora de trading las cotizaciones y las características de las velas de confirmación que validaron el cambio de polaridad.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> La polaridad del mercado te enseña a adaptarte. Un nivel que antes era una barrera insuperable de ventas ahora es la base que sostiene tu entrada compradora. Fluye con la estructura del precio.
      </div>
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
<p>Hoy estudiaremos los <strong>Filtros Técnicos de Confluencia</strong>. El concepto de confluencia técnica consiste en la alineación de múltiples herramientas independientes en la misma zona del gráfico. Operar con un único factor técnico (por ejemplo, buscar una compra únicamente porque el precio está sobrevendido) tiene una esperanza matemática muy baja en el dinámico mercado de futuros de índices.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Division line -->
        <line x1="40" y1="150" x2="460" y2="150" stroke="#1e293b" stroke-width="1.5" />
        
        <!-- Price Chart (Top) -->
        <!-- EMA 200 (Blue Curve) -->
        <path d="M 50 120 Q 150 110 250 115 T 450 90" fill="none" stroke="#3b82f6" stroke-width="2" />
        <text x="410" y="85" fill="#3b82f6" font-size="8" font-family="sans-serif" font-weight="bold">EMA 200</text>
        
        <!-- Price line bouncing on EMA -->
        <path d="M 60 80 L 120 100 L 180 60 L 250 115 L 320 80 L 380 95 L 440 50" fill="none" stroke="#94a3b8" stroke-width="1.5" />
        <!-- Bouncing circle -->
        <circle cx="250" cy="115" r="4" fill="#10b981" />
        <text x="250" y="130" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Rebote en EMA</text>

        <!-- RSI Chart (Bottom) -->
        <rect x="60" y="165" width="380" height="50" fill="#0b0f19" stroke="#1e293b" stroke-width="1" />
        <line x1="60" y1="180" x2="440" y2="180" stroke="rgba(239, 68, 68, 0.3)" stroke-width="1" stroke-dasharray="2,2" /> <!-- Overbought 70 -->
        <line x1="60" y1="200" x2="440" y2="200" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" stroke-dasharray="2,2" /> <!-- Oversold 30 -->
        <text x="45" y="183" fill="#ef4444" font-size="7" font-family="sans-serif">70</text>
        <text x="45" y="203" fill="#10b981" font-size="7" font-family="sans-serif">30</text>
        
        <!-- RSI line -->
        <path d="M 60 175 L 120 185 L 180 170 L 250 202 L 320 180 L 380 190 L 440 172" fill="none" stroke="#f59e0b" stroke-width="1.5" />
        <circle cx="250" cy="202" r="3.5" fill="#10b981" />
        <text x="295" y="212" fill="#10b981" font-size="8" font-family="sans-serif" font-weight="bold">RSI Sobrevendido</text>

        <!-- Caption -->
        <text x="250" y="238" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Ilustración 3.6: Confluencia técnica (EMA 200 y RSI en sobreventa).</text>
      </svg>

      <h3>EMA 200, Momentum y Puntos de Apoyo Estructural</h3>
      <p>Para construir una estrategia robusta de confluencia, utilizaremos tres filtros principales independientes: la tendencia direccional macro, la zona de valor estructural (Soporte o Resistencia) y el impulso del oscilador. En primer lugar, empleamos la media móvil exponencial de 200 períodos (EMA 200) como nuestro filtro de dirección principal. Si el precio cotiza con consistencia por encima de la EMA 200, nuestra única regla es buscar compras (largos). Si cotiza por debajo, buscaremos exclusivamente ventas (cortos).</p>
      <p>Una vez definida la tendencia mediante la EMA 200, esperamos a que el precio haga un retroceso hacia una zona de soporte o resistencia de valor. En este punto de contacto estructural, introducimos el oscilador de momentum RSI (Índice de Fuerza Relativa) de 14 períodos. Si el precio testea un soporte en una tendencia alcista y simultáneamente el RSI cotiza en zona de sobreventa (por debajo de 30), tenemos una confluencia de tres factores a nuestro favor. La EMA 200 actúa como filtro tendencial, el soporte actúa como punto de apoyo y el RSI valida el agotamiento del impulso bajista.</p>
      <p>Para llevar esta confluencia un paso más allá, podemos incorporar referencias de volumen macro. Si la zona de polaridad estructural coincide plenamente con el Punto de Control (POC) de volumen de la sesión previa, la probabilidad del rebote se eleva exponencialmente. De esta forma, cada uno de los filtros técnicos que empleamos añade una justificación objetiva a tu trade, eliminando por completo las entradas precipitadas por aburrimiento o ansiedad y permitiéndote actuar bajo un marco rigurosamente cuantitativo y consistente.</p>
      <p>El trader profesional no opera únicamente porque un indicador cruce una línea; busca la confluencia de argumentos para justificar cada entrada en su bitácora técnica de procesos. Operar de esta manera reduce considerablemente las señales falsas y te enseña a ignorar las operaciones de baja probabilidad que desgastan tu capital. La disciplina consiste en sentarte a esperar que se alineen todos tus filtros de confluencia antes de ejecutar tus contratos.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Agrega a tu plataforma la EMA 200 y el oscilador RSI de 14 períodos. Localiza una zona de confluencia en el gráfico donde el precio rebote sobre la EMA y el oscilador RSI confirme sobreventa o sobrecompra en los límites correspondientes. Toma una captura de pantalla del evento y documenta los valores exactos en tu bitácora de trading.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> La confluencia técnica es tu mayor aliada estadística. Nunca entres al mercado por la señal de una sola herramienta; espera que los filtros de confluencia validen tu trade y ejecútalo con total calma.
      </div>
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
<p>Felicidades por haber completado las lecciones teóricas y prácticas del <strong>Módulo 3: Lectura Técnica Avanzada</strong>. A lo largo de esta semana, has dado un salto técnico de nivel profesional en tu comprensión de la subasta de mercado de futuros. Has aprendido a mapear la estructura de tendencia a través de máximos y mínimos crecientes (HH/HL), a confirmar la continuación de los movimientos mediante rupturas estructurales (BOS) y a identificar zonas institucionales de soporte y resistencia basadas en oferta y demanda latentes.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Laurel Wreath Backdrop -->
        <path d="M 180 120 C 180 180, 320 180, 320 120" fill="none" stroke="#334155" stroke-width="3" />
        <!-- Badge Body (Diamond shape) -->
        <polygon points="250,35 305,90 250,155 195,90" fill="#1e293b" stroke="#3b82f6" stroke-width="3" />
        <!-- Graduation cap icon inside -->
        <polygon points="250,60 275,70 250,80 225,70" fill="#f59e0b" />
        <line x1="250" y1="80" x2="250" y2="92" stroke="#f59e0b" stroke-width="2" />
        <rect x="242" y="92" width="16" height="8" fill="#f59e0b" />
        <!-- Badge Text -->
        <text x="250" y="125" fill="#10b981" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">PILAR 3 OK</text>
        <text x="250" y="140" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">ESTRUCTURA</text>
        <!-- Caption -->
        <text x="250" y="215" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 3.7: Insignia de finalización del módulo de lectura de mercado.</text>
      </svg>

      <h3>La Integración del Análisis Estructural Limpio</h3>
      <p>Comprender las leyes físicas del mercado te ha permitido prescindir de indicadores complejos que solo entorpecen la toma de decisiones rápidas bajo presión. Al analizar gráficos limpios basándote en la acción del precio pura y la ley de polaridad, dejas de ser un espectador pasivo y te conviertes en un analista objetivo del flujo de órdenes real. En el próximo módulo (Módulo 4: Psicología de Ejecución y Rutinas), nos adentraremos en el diseño de un protocolo diario de alto rendimiento pre-market y post-market, auditorías de bitácora y diarios de errores operativos. Esta consistencia en tu comportamiento diario consolidará tu avance.</p>
      <p>Antes de enfrentarte a la evaluación teórica de este módulo, asegúrate de repasar cada concepto estudiado. Recuerda que no existen atajos en el camino del trader; la consistencia exige el dominio riguroso del análisis técnico y la disciplina para esperar tus setups de alta probabilidad en las zonas predefinidas. Ningún sistema de trading será rentable si no respetas las directrices de tu plan y te dejas llevar por las emociones del momento. En el examen final deberás certificar tus aciertos para poder avanzar en la academia.</p>
      <p>Asimismo, te aconsejamos encarecidamente practicar este método de análisis limpio en un entorno simulado de pruebas antes de comprometer capital real en tu cuenta. La repetición de este proceso operativo te brindará una solidez mental inigualable y te ayudará a disociar las ganancias inmediatas del éxito real del sistema en una muestra grande de trades. El dominio técnico no consiste en adivinar el futuro, sino en dominar el propio comportamiento frente al mercado.</p>
      <p>Tu preparación técnica está casi consolidada. A partir de aquí, las operaciones simuladas o reales que documentes deben reflejar este marco de lectura estructural limpio. Con la correcta confluencia técnica, el control dinámico de contratos y la paciencia estoica, has desarrollado las herramientas indispensables de un operador consistente. No te apresures; el éxito técnico se consolida trade a trade, respetando siempre el proceso del método.</p>
      <h3>Instrucciones para la Evaluación Semanal</h3>
      <p>Tu reto final de hoy consiste en resolver con éxito el examen del Módulo 3 detallado a continuación. Deberás responder correctamente a las 5 preguntas basándote en el análisis estructural limpio de mercado, quiebres de estructura, zonas de oferta y demanda y filtros de confluencia. Aprobar con un 100% de aciertos es el requisito para desbloquear el Módulo 4 de rutinas y psicología del trader.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 3:</strong> Responde correctamente el cuestionario de abajo para certificar tu comprensión y desbloquear el Módulo 4 de Rutinas y Psicología de Ejecución.
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
<p>Bienvenido al <strong>Módulo 4: Rutina y Psicología de Ejecución</strong>. A lo largo de esta semana, aprenderás a estructurar tu negocio de especulación de futuros con el rigor operativo y el profesionalismo que exige el mercado real. Un trader consistente no opera de manera improvisada al levantarse de la cama; se prepara con el rigor de un atleta olímpico o un cirujano. La calidad de tus decisiones depende de tu preparación mental y física previa.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Timeline central line -->
        <line x1="50" y1="120" x2="450" y2="120" stroke="#334155" stroke-width="3" />
        
        <!-- Steps/Points -->
        <!-- Step 1: Prep -->
        <circle cx="90" cy="120" r="8" fill="#3b82f6" />
        <text x="90" y="100" fill="#3b82f6" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Descanso/Físico</text>
        <text x="90" y="145" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Sueño & Enfoque</text>
        
        <!-- Step 2: News -->
        <circle cx="180" cy="120" r="8" fill="#3b82f6" />
        <text x="180" y="100" fill="#3b82f6" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Noticias/Macro</text>
        <text x="180" y="145" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Calendario Económico</text>
        
        <!-- Step 3: Analysis -->
        <circle cx="270" cy="120" r="8" fill="#f59e0b" />
        <text x="270" y="100" fill="#f59e0b" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Niveles/Sesgo</text>
        <text x="270" y="145" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Gráfico Limpio</text>
        
        <!-- Step 4: Execution -->
        <circle cx="360" cy="120" r="8" fill="#10b981" />
        <text x="360" y="100" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Ejecución</text>
        <text x="360" y="145" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Cumplir Plan</text>
        
        <!-- Step 5: Audit -->
        <circle cx="430" cy="120" r="8" fill="#10b981" />
        <text x="430" y="100" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. Bitácora</text>
        <text x="430" y="145" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Auditar & Cerrar</text>

        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 4.1: Cronograma secuencial de la rutina diaria de alto rendimiento.</text>
      </svg>

      <h3>La Preparación Física, Mental y Técnica de Alto Rendimiento</h3>
      <p>El trading profesional es una actividad intelectualmente demandante que genera una gran acumulación de estrés fisiológico en el organismo. La toma de decisiones financieras complejas consume una inmensa cantidad de energía de nuestra corteza prefrontal. Si te sientas a operar habiendo dormido pocas horas, con una mala alimentación o con problemas personales activos que distraen tu atención, tu capacidad de autocontrol y paciencia se verá gravemente reducida. Esto facilitará que actúes de manera impulsiva e indisciplinada, rompiendo los límites estrictos de gestión de capital que definiste en tu manifiesto personal.</p>
      <p>La rutina diaria de un trader consistente debe estructurarse en tres bloques secuenciales obligatorios. El primer bloque consiste en el cuidado físico: asegurar un descanso óptimo de al menos 7 u 8 horas, realizar respiraciones para centrar tu atención y desayunar de forma ligera para evitar la fatiga digestiva. El segundo bloque comprende el análisis macro: abrir el calendario económico del día para identificar noticias de alto impacto (como reportes de inflación IPC o declaraciones de la Fed) que generen picos insostenibles de volatilidad, y delimitar tus 2 o 3 zonas de soporte y resistencia institucionales clave del día previo en gráficos limpios. El tercer bloque es el protocolo de pre-mercado y checklist que veremos a continuación.</p>
      <p>A esta rutina debes añadir un componente de entrenamiento de concentración y atención plena. Realizar ejercicios de meditación de solo cinco minutos antes de la apertura te ayudará a reducir el ritmo cardíaco y a mantener un estado mental enfocado y calmado. Asimismo, realizar estiramientos ligeros de las articulaciones y del cuello te evitará tensiones físicas durante las horas sentados frente a las pantallas analizando los gráficos de futuros. La salud de tu cuerpo y de tu cerebro están íntimamente vinculadas con tu rentabilidad operativa a largo plazo.</p>
      <p>Establecer esta rutina estoica te permitirá afrontar la sesión de futuros con una total claridad mental, reduciendo considerablemente la influencia de la ansiedad en tu operativa diaria. Al tratar la especulación bursátil como un negocio estructurado con horarios fijos y protocolos ineludibles, dejas de operar bajo impulsos emocionales erráticos y te conviertes en un operador frío y consistente que domina su proceso. Tu rutina es tu mayor escudo protector frente a la aleatoriedad del mercado.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Tu reto del día de hoy consiste en diseñar por escrito tu propia rutina operativa diaria para los próximos días, detallando los horarios de preparación física, el bloque técnico de análisis y las actividades de desconexión. Registra esta rutina en tu bitácora de trading y comprométete formalmente a acatarla sin excepciones.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> La consistencia operativa nace de la consistencia conductual diaria. Si dominas tus hábitos antes de que abra el mercado, dominarás tus decisiones en pleno flujo de órdenes.
      </div>
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
<p>Hoy analizaremos el <strong>Protocolo Pre-market y Checklist</strong>. En profesiones donde un solo error operativo puede resultar catastrófico, como la aviación o la medicina de emergencias, el uso de listas de comprobación (checklists) es obligatorio. En la especulación de futuros de índices, tu capital está expuesto en cada operación. Diseñar y completar una checklist técnica antes de cada entrada es tu última barrera de defensa contra las decisiones irracionales causadas por el aburrimiento o el FOMO.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Clipboard Body -->
        <rect x="180" y="40" width="140" height="160" fill="#1e293b" rx="8" stroke="#334155" stroke-width="2" />
        <!-- Clipboard Header (Clip) -->
        <rect x="230" y="28" width="40" height="18" fill="#475569" rx="4" stroke="#64748b" stroke-width="1.5" />
        <circle cx="250" cy="37" r="3" fill="#0b0f19" />

        <!-- Checklist lines and checkmarks -->
        <!-- Item 1 -->
        <rect x="200" y="70" width="10" height="10" fill="none" stroke="#10b981" stroke-width="2" />
        <path d="M 200 75 L 204 78 L 209 71" fill="none" stroke="#10b981" stroke-width="2" />
        <line x1="220" y1="75" x2="300" y2="75" stroke="#94a3b8" stroke-width="2" />
        
        <!-- Item 2 -->
        <rect x="200" y="95" width="10" height="10" fill="none" stroke="#10b981" stroke-width="2" />
        <path d="M 200 100 L 204 103 L 209 96" fill="none" stroke="#10b981" stroke-width="2" />
        <line x1="220" y1="100" x2="300" y2="100" stroke="#94a3b8" stroke-width="2" />
        
        <!-- Item 3 -->
        <rect x="200" y="120" width="10" height="10" fill="none" stroke="#10b981" stroke-width="2" />
        <path d="M 200 125 L 204 128 L 209 121" fill="none" stroke="#10b981" stroke-width="2" />
        <line x1="220" y1="125" x2="300" y2="125" stroke="#94a3b8" stroke-width="2" />

        <!-- Item 4 -->
        <rect x="200" y="145" width="10" height="10" fill="none" stroke="#f59e0b" stroke-width="2" />
        <line x1="220" y1="150" x2="300" y2="150" stroke="#64748b" stroke-width="1.5" />

        <text x="250" y="180" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">CHECKLIST LISTO</text>

        <!-- Caption -->
        <text x="250" y="230" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 4.2: Representación del protocolo pre-market y lista de verificación.</text>
      </svg>

      <h3>La Eliminación del Sesgo Subjetivo mediante Reglas Fijas</h3>
      <p>Una lista de verificación obligatoria nos obliga a someter cada idea de inversión a un filtro objetivo y riguroso. Tu checklist de entrada debe contar con al menos 5 puntos clave técnicos y psicológicos: 1) ¿El precio está reaccionando dentro de una zona de soporte o resistencia de valor previamente marcada? 2) ¿Existe confirmación por acción del precio (vela de rechazo con volumen)? 3) ¿El ratio riesgo-recompensa (R:R) proyectado para la operación es de al menos 1:2? 4) ¿He calculado de forma correcta mi número de contratos de acuerdo a la distancia exacta de mi stop loss? y 5) ¿Me encuentro en un estado emocional de calma absoluta y libre de deseos de venganza?</p>
      <p>Implementar esta checklist de manera física (marcando de forma manuscrita las casillas en un papel o pizarra sobre tu escritorio) crea un límite psicológico y táctil tangible. Esto interrumpe la conducta apresurada de comprar o vender por impulso. La checklist te protege del sesgo de reciprocidad o de tendencia reciente (recency bias), que es la tendencia inconsciente de creer que el mercado repetirá de inmediato lo que hizo en la operación anterior. Cumplir con cada filtro innegociable te garantizará operar únicamente los setups institucionales de mayor calidad probabilística.</p>
      <p>Si la respuesta a cualquiera de estas preguntas es negativa, tu única acción permitida por tu plan de trading es mantener las manos fuera del teclado y abortar la operación de inmediato. En el trading consistente, evitar un trade de baja calidad es tan valioso como ejecutar un trade ganador, ya que preserva tu inventario de capital operativo y protege tu disciplina mental frente al descontrol operacional. Tratar tu operativa de futuros bajo este marco cuantitativo riguroso te distanciará definitivamente de los apostadores minoristas que entran de forma impulsiva al mercado.</p>
      <p>Al convertir tu checklist en un ritual diario obligatorio que documentas en tu bitácora técnica de procesos, eliminas de raíz las decisiones improvisadas y disminuyes radicalmente tu fatiga cognitiva durante la sesión regular de futuros de Nasdaq o S&P 500. Tu mente descansará sabiendo que solo actuarás cuando el mercado cumpla con tus estrictos parámetros objetivos de selección.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Escribe tu checklist oficial de 5 puntos técnicos y mentales obligatorios utilizando los criterios indicados anteriormente. Colócala en un formato visible en tu estación de trading o dentro de tu diario de operaciones digital. Realiza el ejercicio de verificar punto por punto esta lista antes de realizar tu próximo trade de simulación.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> El checklist es tu seguro de vida financiero. Si el setup no cumple con cada una de las 5 condiciones del plan, la operación no existe. Respeta las reglas del método de forma incondicional.
      </div>
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
<p>Hoy abordaremos el reto de la <strong>Ejecución bajo Presión</strong>. Saber identificar una zona de soporte y resistencia en un gráfico estático es una tarea analítica relativamente sencilla. Sin embargo, presionar el botón de ejecutar en tu plataforma de futuros con dinero real en una sesión de alta volatilidad es un desafío psicológico inmenso. El miedo a perder capital y la prisa por ganar activan de forma automática hormonas como el cortisol y la adrenaline.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Balance Stand -->
        <line x1="250" y1="70" x2="250" y2="180" stroke="#475569" stroke-width="5" />
        <polygon points="230,180 270,180 280,195 220,195" fill="#334155" />
        
        <!-- Balance Beam (Tilted to represent discipline winning over emotion) -->
        <line x1="130" y1="120" x2="370" y2="80" stroke="#475569" stroke-width="4" />
        <circle cx="250" cy="95" r="6" fill="#64748b" />

        <!-- Left Scale (Discipline - Down/Heavier) -->
        <line x1="130" y1="120" x2="130" y2="150" stroke="#64748b" stroke-width="1.5" />
        <polygon points="100,150 160,150 145,170 115,170" fill="#1e293b" stroke="#10b981" stroke-width="2" />
        <text x="130" y="145" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">DISCIPLINA</text>

        <!-- Right Scale (Emotion - Up/Lighter) -->
        <line x1="370" y1="80" x2="370" y2="110" stroke="#64748b" stroke-width="1.5" />
        <polygon points="340,110 400,110 385,130 355,130" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
        <text x="370" y="105" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">EMOCIÓN</text>

        <!-- Caption -->
        <text x="250" y="225" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 4.3: Balanza de control operacional: proceso técnico sobre sesgo emocional.</text>
      </svg>

      <h3>Manejo del Click-Fear y la Calma Fisiológica</h3>
      <p>Cuando un trader se enfrenta al mercado, suele sufrir dos problemas extremos de ejecución: el miedo a hacer clic (click-fear) debido a la aversión al fracaso y a pérdidas recientes, o la sobreoperativa impulsiva provocada por el deseo codicioso de ganar dinero rápido. Para erradicar el miedo al clic, debes adoptar una mentalidad probabilística estoica. Acepta de forma radical que cada operación individual tiene un resultado incierto y aleatorio, pero que tu conjunto de 50 o 100 operaciones posee una esperanza matemática positiva a tu favor si eres capaz de ejecutar siempre con la disciplina de una máquina.</p>
      <p>Para calmar tu respuesta fisiológica antes de hacer clic en tu terminal, implementa la **respiración cuadrada (box breathing)**: inhala durante 4 segundos, mantén el aire 4 segundos, exhala durante 4 segundos y permanece vacío otros 4 segundos. Adicionalmente, utiliza la técnica del **suspiro fisiológico**: toma dos inhalaciones rápidas y profundas por la nariz seguidas de una exhalación lenta y completa por la boca. Este ejercicio estimula tu nervio vago y reduce el ritmo cardíaco de manera inmediata, restaurando el control lógico de tu corteza prefrontal sobre los impulsos emocionales primitivos de tu amígdala. Operar calmado te permite seguir las reglas de Stop Loss con total entereza.</p>
      <p>El trader consistente mide su nivel de paz interior antes de cada entrada. Si detectas que tus manos tiemblan o que tu mente está obsesionada con el resultado monetario en lugar de con la calidad del proceso técnico, aléjate del monitor de inmediato. La ejecución bajo presión se domina aceptando el riesgo de forma honesta desde el momento en que colocas tu orden límite en el mercado de futuros de índices. Al repetir este protocolo en simulación, entrenas a tu sistema nervioso a tolerar la incertidumbre del mercado de forma adaptativa y saludable.</p>
      <p>Asimismo, el operador debe comprender que la toma de decisiones financieras en vivo es un ejercicio cognitivo continuo. Si estás lidiando con pérdidas de capital previas o si sientes la imperiosa necesidad de "demostrar que tienes razón" frente al mercado, estarás operando con un sesgo cognitivo severo que nublará tu juicio y te conducirá a errores operacionales devastadores. Desarrollar un estado mental frío, escéptico y desapegado del dinero individual es la única vía real para alcanzar la rentabilidad sostenible y proteger la integridad de tu cuenta de futuros. Esta práctica constante de autocontrol te capacitará para convertirte en un operador profesional sumamente frío frente al comportamiento aleatorio de las cotizaciones de futuros.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Ejecuta hoy 5 operaciones de simulación en tu plataforma. Antes de presionar el botón de comprar o vender en cada una de ellas, puntúa con total honestidad en tu diario tu grado de calma del 1 (pánico absoluto) al 10 (calma zen). Tu meta hoy no es ganar dinero, sino lograr que las 5 puntuaciones de calma estén por encima del valor 7.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> La ejecución impecable requiere desapego emocional. En el momento en que entras a mercado, asume la pérdida teórica de tu stop loss y enfócate únicamente en vigilar la disciplina de tu proceso.
      </div>
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
<p>En el entrenamiento del día de hoy analizaremos el <strong>Protocolo de Cierre Post-Sesión</strong>. Muchos operadores prestan una gran atención a su preparación previa pero ignoran por completo cómo finalizar su sesión diaria de trading de futuros. No cerrar de manera adecuada conduce a la sobreoperativa tardía, a operar por venganza tras las horas de alta liquidez y a acumular fatiga cognitiva destructiva para los días siguientes.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Monitor border -->
        <rect x="130" y="40" width="240" height="140" rx="8" fill="#1e293b" stroke="#334155" stroke-width="3" />
        <!-- Monitor Stand -->
        <rect x="230" y="180" width="40" height="20" fill="#334155" />
        <ellipse cx="250" cy="200" rx="40" ry="8" fill="#1e293b" />
        
        <!-- Monitor screen contents (Locked) -->
        <rect x="145" y="52" width="210" height="116" fill="#0b0f19" rx="4" />
        
        <!-- Padlock -->
        <rect x="238" y="90" width="24" height="20" rx="3" fill="#ef4444" />
        <path d="M 243 90 L 243 78 C 243 73, 257 73, 257 78 L 257 90" fill="none" stroke="#ef4444" stroke-width="2" />
        <circle cx="250" cy="100" r="2.5" fill="#0b0f19" />
        
        <text x="250" y="132" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">SESIÓN TERMINADA</text>
        <text x="250" y="145" fill="#94a3b8" font-size="7" font-family="sans-serif" text-anchor="middle">Plataforma bloqueada de forma segura</text>

        <!-- Caption -->
        <text x="250" y="230" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 4.4: Visualización del protocolo de cierre y desconexión tecnológica.</text>
      </svg>

      <h3>Evitando la Sobreoperativa y Cerrando el Negocio Diario</h3>
      <p>El protocolo de cierre post-sesión es el límite físico y mental que protege tu capital financiero de la impulsividad. Una vez que has alcanzado tu objetivo de beneficio diario (Profit Target), tu límite de pérdida máximo (Daily Drawdown) o has completado las operaciones permitidas por tu plan técnico, debes iniciar el cierre sistemático. Este proceso abarca tres pasos ineludibles: 1) Exportar tu registro exacto de ejecuciones a tu bitácora cuantitativa de trading. 2) Guardar capturas de pantalla de los gráficos con tus entradas y salidas señaladas y 3) Apagar por completo tu plataforma de negociación de futuros y bloquear tu acceso a la terminal.</p>
      <p>Muchos traders cometen el grave error de dejar su plataforma encendida mientras realizan otras tareas en su computadora. Ver la cotización del precio moverse genera una tentación irracional constante de "abrir un trade rápido" sin confluencia técnica, arruinando así las ganancias del día por pura indisciplina. Debes aprender a tratar la terminal de trading de la misma forma que un comerciante trata su tienda física: una vez cerrada la persiana del negocio, no se permite ninguna otra transacción hasta el inicio del día de mañana.</p>
      <p>Establece además un anclaje físico y ritual de cierre. Levantarte del escritorio de inmediato, apagar los monitores de tu computadora de trading y realizar una pequeña caminata o estiramientos fuera de tu espacio de trabajo enviará una señal neurológica clara a tu cerebro de que el "modo cazador/trader" ha finalizado. Esto facilitará tu transición mental a la vida diaria y te ayudará a disipar la adrenalina y el estrés acumulados durante la jornada. Recuerda que la especulación es tu negocio, no tu identidad personal estoica.</p>
      <p>Además de la desconexión física de la plataforma, el protocolo post-sesión exige una desconexión mental activa. Realizar alguna actividad física, dar un paseo al aire libre o meditar te ayudará a disipar el estrés fisiológico acumulado durante la jornada de subasta. Evita que las ganancias o pérdidas de tu sesión diaria influyan en tu estado de ánimo familiar o personal; recuerda que el trading es solo un juego probabilístico que requiere constancia en el proceso y serenidad estoica.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Diseña detalladamente tu propio protocolo de cierre post-sesión de 3 pasos, especificando las actividades de exportación de datos de tu plataforma y tu método de desconexión física y mental. Documenta este protocolo por escrito en tu bitácora técnica de operativa diaria y aplícalo estrictamente al finalizar tu sesión de simulación.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> Saber apagar la plataforma de trading es la mayor demostración de autodisciplina. Al desconectar a tiempo, proteges el beneficio acumulado en tu cuenta y preservas tu salud mental estoica.
      </div>
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
<p>Hoy profundizaremos en el proceso de la <strong>Auditoría Crítica de Operaciones</strong>. Un trader profesional es, en esencia, un auditor científico de su propia conducta y de sus datos estadísticos. No podemos depender de la suerte o de la intuición selectiva de nuestro cerebro; debemos apoyarnos en los números fríos que arroja nuestra bitácora técnica para corregir errores operativos recurrentes.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Chart Axes -->
        <line x1="60" y1="180" x2="440" y2="180" stroke="#334155" stroke-width="1.5" />
        <line x1="60" y1="40" x2="60" y2="180" stroke="#334155" stroke-width="1.5" />
        
        <!-- Bar 1 (Win Rate) -->
        <!-- Target (Blue) -->
        <rect x="90" y="80" width="30" height="100" fill="rgba(59, 130, 246, 0.4)" stroke="#3b82f6" stroke-width="1.5" />
        <!-- Actual (Green) -->
        <rect x="130" y="90" width="30" height="90" fill="rgba(16, 185, 129, 0.4)" stroke="#10b981" stroke-width="1.5" />
        <text x="125" y="195" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Tasa de Acierto</text>
        
        <!-- Bar 2 (Profit Factor) -->
        <!-- Target (Blue) -->
        <rect x="220" y="70" width="30" height="110" fill="rgba(59, 130, 246, 0.4)" stroke="#3b82f6" stroke-width="1.5" />
        <!-- Actual (Green) -->
        <rect x="260" y="60" width="30" height="120" fill="rgba(16, 185, 129, 0.4)" stroke="#10b981" stroke-width="1.5" />
        <text x="255" y="195" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Factor de Beneficio</text>
        
        <!-- Bar 3 (Drawdown) -->
        <!-- Target (Blue) -->
        <rect x="340" y="120" width="30" height="60" fill="rgba(59, 130, 246, 0.4)" stroke="#3b82f6" stroke-width="1.5" />
        <!-- Actual (Red - Bad Deviation) -->
        <rect x="380" y="100" width="30" height="80" fill="rgba(239, 68, 68, 0.4)" stroke="#ef4444" stroke-width="1.5" />
        <text x="375" y="195" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Drawdown Máx</text>

        <!-- Legend -->
        <rect x="320" y="30" width="10" height="10" fill="#3b82f6" />
        <text x="335" y="38" fill="#94a3b8" font-size="8" font-family="sans-serif">Teórico / Plan</text>
        <rect x="320" y="45" width="10" height="10" fill="#10b981" />
        <text x="335" y="53" fill="#94a3b8" font-size="8" font-family="sans-serif">Ejecutado Real</text>

        <!-- Caption -->
        <text x="250" y="230" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 4.5: Análisis comparativo de métricas planificadas vs realizadas.</text>
      </svg>

      <h3>Métricas Críticas y el Cálculo del Profit Factor</h3>
      <p>La auditoría crítica de tus datos semanales exige el cálculo de tres métricas operativas clave. La primera es tu tasa de acierto (Win Rate), que es el porcentaje de operaciones ganadoras sobre el total de trades realizados. La segunda es tu ratio de riesgo:recompensa (R:R) promedio real ejecutado, que se calcula dividiendo la ganancia promedio de tus trades ganadores entre la pérdida promedio de tus trades perdedores. La tercera métrica indispensable es tu **Profit Factor (Factor de Beneficio)**, que representa la suma total de tus ganancias dividida por la suma total de tus pérdidas en dólares.</p>
      <p>Un Profit Factor superior a 1.5 indica que tu sistema de trading tiene una ventaja probabilística robusta y saludable en el mercado de futuros de índices. Si tu Profit Factor es menor que 1.0, estás en un sistema perdedor y debes detener tu operativa para analizar las desviaciones. Al auditar tus operaciones de forma científica, debes buscar "operaciones fantasma": aquellas que abriste fuera de tu checklist y de tus reglas de setup predefinidas. Identificar cuántos dólares has perdido por indisciplina te motivará a respetar tu plan técnico de forma inquebrantable.</p>
      <p>Para complementar tu auditoría, calcula también tu **Índice de Calidad de Ejecución (EQI)**. Este índice mide el porcentaje de operaciones en las que seguiste tus reglas técnicas de forma perfecta, independientemente del resultado monetario final. Si tu tasa de acierto es del 60% pero tu EQI es del 40%, significa que la mayoría de tus ganancias ocurrieron por suerte en trades indisciplinados, lo que representa un peligro extremo para tu cuenta a largo plazo. Mantener un EQI superior al 90% debe ser tu meta diaria prioritaria.</p>
      <p>Realizar una auditoría honesta de tus números te brindará una gran solidez mental. Dejarás de sentirte frustrado por pérdidas individuales al comprender que forman parte de la distribución normal de probabilidades de un sistema estadísticamente rentable a largo plazo en tu cuenta. La auditoría crítica de tus datos de trading es la única vía real para lograr la consistencia matemática de tu negocio especulativo.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Revisa detalladamente la totalidad de tus operaciones registradas en tu bitácora durante la última semana de simulación o cuenta real. Calcula tu tasa de acierto promedio, tu ratio R:R real ejecutado y tu Profit Factor de la semana. Registra estos números por escrito en tu diario e identifica si existieron operaciones tomadas fuera de tu plan técnico.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> Los números no mienten ni tienen ego. Auditar tus datos de forma crítica y honesta te muestra la realidad objetiva de tu desempeño operacional y te guía hacia la consistencia real del método.
      </div>
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
<p>Hoy analizaremos la creación y mantenimiento de un <strong>Diario de Errores Operativos</strong>. En el trading de futuros de índices, aprender a evitar errores y a proteger el capital es una tarea significativamente más valiosa que buscar el setup perfecto. Cada error operativo que cometes consume tu inventario de dinero y daña tu autodisciplina. Llevar un registro sistemático de tus fallos te permite identificar tus principales debilidades técnicas y de comportamiento.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Left circle (Technical) -->
        <circle cx="200" cy="110" r="70" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" stroke-width="2" />
        <text x="170" y="110" fill="#3b82f6" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">Errores</text>
        <text x="170" y="125" fill="#3b82f6" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">Técnicos</text>
        
        <!-- Right circle (Emotional) -->
        <circle cx="300" cy="110" r="70" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="2" />
        <text x="330" y="110" fill="#ef4444" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">Errores</text>
        <text x="330" y="125" fill="#ef4444" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">Emocionales</text>
        
        <!-- Intersection Text -->
        <text x="250" y="100" fill="#f59e0b" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">FOMO &</text>
        <text x="250" y="115" fill="#f59e0b" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Sobreoperar</text>
        
        <!-- Description labels on sides -->
        <text x="100" y="60" fill="#94a3b8" font-size="8" font-family="sans-serif">Mala entrada, Stop mal puesto</text>
        <text x="400" y="60" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="end">Operar por venganza, frustración</text>

        <!-- Caption -->
        <text x="250" y="220" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 4.6: Diagrama de Venn de clasificación de desviaciones operacionales.</text>
      </svg>

      <h3>Clasificación de Desviaciones: Errores Técnicos vs Emocionales</h3>
      <p>Un error operativo debe clasificarse estrictamente en una de dos categorías. La primera categoría son los **errores técnicos**: fallos en la lectura del mercado o en la ejecución del setup (por ejemplo, colocar el stop loss en el nivel incorrecto, ingresar tarde por falta de velocidad en la orden o no identificar un BOS real). La segunda categoría son los **errores emocionales o cognitivos**: romper deliberadamente las reglas de tu plan debido a impulsos irracionales (por ejemplo, sobreoperar por aburrimiento, operar por venganza tras una pérdida para intentar recuperar el capital o aumentar el tamaño de la posición por avaricia).</p>
      <p>El diario de errores debe registrar tres campos de datos obligatorios en cada entrada: 1) Descripción detallada del error cometido y la pérdida monetaria asociada. 2) Desencadenante (trigger): ¿qué evento técnico o mental provocó tu fallo? y 3) Medida correctiva: ¿qué regla estricta implementarás para evitar que este error vuelva a suceder? Al documentar y clasificar tus desviaciones de esta forma, obligas a tu cerebro a tomar conciencia racional de sus impulsos emocionales destructivos, lo que debilita tus conductas dañinas a largo plazo.</p>
      <p>Al auditar tu diario de errores, descubrirás el fenómeno de la **disonancia cognitiva**. Este es un mecanismo psicológico de defensa por el cual intentas justificar una mala operación (como operar por venganza) inventando explicaciones técnicas "a posteriori" para proteger tu ego de la frustración de haber fallado. Ser radicalmente honesto contigo mismo en tu diario romperá este patrón defensivo y te forzará a madurar como operador consistente de futuros.</p>
      <p>Aprender a gestionar los errores de forma fría e inteligente te evitará dañar la consistencia de tu cuenta. Todo especulador profesional experimenta fallos técnicos y psicológicos; la diferencia radica en que los operadores consistentes los registran científicamente y aplican medidas correctivas inmediatas, mientras que los aficionados ocultuamente sus errores para proteger su ego y siguen repitiéndolos hasta quemar su capital.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Examina con absoluta honestidad tus últimas operaciones registradas e identifica 5 errores cometidos durante tus sesiones de simulación o cuenta real. Clasifica cada uno de ellos de forma clara como técnico o emocional en tu diario de errores y calcula el impacto total de pérdidas financieras ocasionadas por estas indisciplinas.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> Reconocer un error de forma objetiva es el primer paso hacia la consistencia real. Al registrar tus fallos sin castigarte emocionalmente, asumes el control absoluto del perfeccionamiento de tu proceso.
      </div>
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
<p>Hoy analizaremos la filosofía estoica de la <strong>Mejora Continua</strong> aplicada al trading de futuros de índices (Kaizen). El perfeccionamiento operacional no se logra mediante cambios drásticos e improvisados de tu sistema técnico; se construye mediante la corrección diaria de pequeños fallos y la optimización continua de tu proceso conductual de forma científica y estructurada.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Circular Arrow Path (Loop) -->
        <circle cx="250" cy="110" r="60" fill="none" stroke="#334155" stroke-width="4" />
        
        <!-- Curved sector highlights -->
        <!-- Plan (Top-Right) -->
        <path d="M 250 50 A 60 60 0 0 1 310 110" fill="none" stroke="#3b82f6" stroke-width="6" />
        <!-- Execute (Bottom-Right) -->
        <path d="M 310 110 A 60 60 0 0 1 250 170" fill="none" stroke="#10b981" stroke-width="6" />
        <!-- Audit (Bottom-Left) -->
        <path d="M 250 170 A 60 60 0 0 1 190 110" fill="none" stroke="#f59e0b" stroke-width="6" />
        <!-- Improve (Top-Left) -->
        <path d="M 190 110 A 60 60 0 0 1 250 50" fill="none" stroke="#ef4444" stroke-width="6" />

        <!-- Labels -->
        <text x="250" y="35" fill="#3b82f6" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. PLANIFICAR</text>
        <text x="380" y="115" fill="#10b981" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="start">2. EJECUTAR</text>
        <text x="250" y="195" fill="#f59e0b" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. AUDITAR (DATOS)</text>
        <text x="120" y="115" fill="#ef4444" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="end">4. CORREGIR</text>

        <!-- Center Text -->
        <text x="250" y="115" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">MEJORA</text>
        <text x="250" y="130" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">CONTINUA</text>

        <!-- Caption -->
        <text x="250" y="230" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 4.7: Bucle estoico de mejora continua y control operativo.</text>
      </svg>

      <h3>El Bucle de Retroalimentación y Medidas Correctivas</h3>
      <p>La mejora continua estoica se apoya en el concepto del control dicotómico de Epícteto: debes centrar el 100% de tu energía intelectual y atención en aquellas variables que se encuentran bajo tu control absoluto (tus reglas de entrada, el tamaño de tu stop loss y tu conducta frente a la terminal de futuros), mientras aceptas de forma radical e imperturbable aquellos factores externos que no puedes controlar (el resultado aleatorio de un trade individual o la dirección de la vela). Enfocarte en el proceso operativo y desapegarte de las ganancias inmediatas te dotará de una gran paz mental.</p>
      <p>Para aplicar esta filosofía estoica a tu trading, debes establecer un bucle semanal de retroalimentación constructiva. Cada fin de semana, analiza tu bitácora cuantitativa y tu diario de errores para determinar cuál ha sido tu desviación más costosa en dólares. Diseña de inmediato una medida correctiva específica y procesable para erradicar ese error. Por ejemplo, si tu fallo más recurrente es operar por venganza tras sufrir una pérdida, tu medida correctiva debe ser: "Si experimento dos pérdidas consecutivas en la misma sesión, apagaré la terminal de trading y bloquearé el acceso a la cuenta durante el resto del día de forma automatizada".</p>
      <p>En este sentido, debemos diferenciar entre las **métricas de retraso (lagging measures)**, como tu balance de cuenta diario o tus ganancias semanales, y las **métricas de anticipación (leading measures)**, como tu tasa de adherencia al protocolo pre-market o tu puntuación en el diario de errores. Centrar tu esfuerzo mental en perfeccionar las métricas de anticipación (sobre las cuales posees un control absoluto) garantizará que las métricas de retraso mejoren por simple inercia matemática a lo largo de una muestra grande de operaciones.</p>
      <p>Al implementar barreras estructurales externas para contener tus impulsos emocionales, dejas de depender de la fuerza de voluntad momentánea de tu cerebro y asumes el control científico de tu comportamiento. Esta autodisciplina estoica sostenida a lo largo de una muestra representativa de operaciones es el único camino real para lograr la consistencia matemática a largo plazo en tu negocio de trading.</p>
      <h3>Instrucciones para el Ejercicio Técnico</h3>
      <p>Identifica en tu diario cuál fue tu error operacional más recurrente y costoso de la última semana. Diseña y redacta por escrito una medida correctiva específica, accionable e innegociable para erradicar por completo este fallo de tu operativa de futuros. Documenta este compromiso formal de comportamiento en tu bitácora técnica.</p>
      <div class="alert-box">
        <strong>📝 Regla Estoica del Día:</strong> Centra tu atención y energía en perfeccionar tu comportamiento y tu disciplina operativa. Si controlas tu proceso con rigor, los resultados matemáticos favorables llegarán por añadidura.
      </div>
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
<p>Felicidades por haber completado las lecciones teóricas y prácticas del <strong>Módulo 4: Rutinas y Psicología de Ejecución</strong>. A lo largo de esta cuarta semana de entrenamiento estoico intensivo de Visión Trading Pro, has adquirido las herramientas y los hábitos de comportamiento indispensables que rigen el negocio de la especulación profesional de futuros de índices. Has aprendido a estructurar rutinas de alto rendimiento pre-market y post-market, a rellenar listas de verificación objetivas antes de operar, a calmar tu fisiología bajo presión, a auditar tus estadísticas clave como el Profit Factor y a registrar de forma científica tus desviaciones en tu diario de errores operativos.</p>

      <svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Laurel Wreath Backdrop -->
        <path d="M 180 120 C 180 180, 320 180, 320 120" fill="none" stroke="#334155" stroke-width="3" />
        <!-- Badge Body (Hexagon shape) -->
        <polygon points="250,35 295,65 295,125 250,155 205,125 205,65" fill="#1e293b" stroke="#3b82f6" stroke-width="3" />
        <!-- Checkmark shield icon inside -->
        <path d="M 235 90 L 245 100 L 265 80" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <!-- Badge Text -->
        <text x="250" y="125" fill="#10b981" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">PILAR 4 OK</text>
        <text x="250" y="140" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">EJECUCIÓN</text>
        <!-- Caption -->
        <text x="250" y="215" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 4.8: Insignia de certificación del bloque de psicología de ejecución y rutinas.</text>
      </svg>

      <h3>La Consolidación del Bucle de Alto Rendimiento</h3>
      <p>El dominio mental y la autodisciplina estoica son el pegamento indispensable que une la teoría técnica y la gestión de riesgo. Ningún sistema de lectura estructural o de patrones gráficos avanzados será rentable en tu cuenta si eres incapaz de controlar tus emociones de FOMO, venganza y codicia durante el horario regular de subasta. Al implementar de forma inflexible tu protocolo de pre-mercado y post-mercado, proteges tu cuenta y sientas las bases de la consistencia operativa a largo plazo en un entorno probabilístico.</p>
      <p>En el próximo módulo (Módulo 5 al 12), iniciaremos el bloque avanzado de **Patrones de Gráficos e Ilustraciones Avanzadas**, donde entraremos de lleno en la lectura técnica de patrones de reversión y continuación como el Doble Techo/Suelo, Hombro-Cabeza-Hombro, Triángulos, Banderas, Cuñas, Gaps y Rupturas de liquidez institucional con confirmación por volumen de transacciones en tus pantallas de operativa. Asegúrate de comprender cada uno de estos conceptos antes de realizar la evaluación final de este bloque. Aprobar el cuestionario teórico-práctico de psicología de ejecución abajo con un 100% de aciertos es el requisito obligatorio para avanzar en tu formación de Visión Trading Pro.</p>
      <p>Esta progresión académica hacia los patrones gráficos te exigirá aplicar todo el control de riesgo y la paciencia operativa aprendidos en las primeras cuatro semanas. El análisis de figuras complejas no consiste en buscar ganancias rápidas o atajos fáciles, sino en aplicar la misma disciplina de ejecución mecánica sobre formaciones chartistas con confluencia estructural y volumen validado. La consistencia se forja a través de la repetición sistemática de un proceso sólido.</p>
      <p>Tu preparación operacional está casi lista. Continúa registrando tus datos, auditando tus métricas estadísticas y aplicando tus medidas correctivas estoicas de comportamiento con total constancia y honestidad. La disciplina que has desarrollado será la base firme sobre la cual estructuraremos tus setups técnicos avanzados. Mantén la calma fisiológica y respeta tu proceso.</p>
      <h3>Instrucciones para la Evaluación Semanal</h3>
      <p>Tu reto de hoy consiste en resolver con éxito el cuestionario del Módulo 4 detallado de forma interactiva abajo. Deberás responder correctamente a las 5 preguntas basándote en la gestión operativa del drawdown, el cálculo de métricas en tu bitácora y la autodisciplina pre-market y post-market. Aprobar con un 100% de aciertos es indispensable para avanzar.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 4:</strong> Aprueba la evaluación del Módulo 4 abajo para certificar tu comprensión y desbloquear el bloque avanzado de Patrones de Gráficos.
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
<svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Resistance Level -->
        <line x1="50" y1="60" x2="450" y2="60" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4" />
        <text x="60" y="50" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold">Resistencia</text>

        <!-- Neckline -->
        <line x1="50" y1="150" x2="450" y2="150" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,3" />
        <text x="60" y="142" fill="#3b82f6" font-size="9" font-family="sans-serif" font-weight="bold">Línea de Cuello</text>

        <!-- Price path (M-shape Double Top) -->
        <path d="M 60 200 L 150 60 L 250 150 L 330 60 L 380 180 L 410 150 L 450 220" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Circles at peaks and retest -->
        <circle cx="150" cy="60" r="5" fill="#ef4444" />
        <circle cx="330" cy="60" r="5" fill="#ef4444" />
        <circle cx="410" cy="150" r="5" fill="#10b981" />

        <!-- Labels -->
        <text x="150" y="45" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">Primer Techo</text>
        <text x="330" y="45" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">Segundo Techo</text>
        <text x="410" y="135" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Retest (Polaridad)</text>
        <text x="385" y="195" fill="#ef4444" font-size="8" font-family="sans-serif" font-weight="bold">Ruptura</text>

        <!-- Caption -->
        <text x="250" y="240" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Ilustración 5.1: Formación de Doble Techo (M) y confirmación de reversión bajista.</text>
      </svg>

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
<svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Neckline -->
        <line x1="50" y1="160" x2="450" y2="160" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,4" />
        <text x="60" y="150" fill="#3b82f6" font-size="9" font-family="sans-serif" font-weight="bold">Línea de Cuello</text>

        <!-- HCH Path -->
        <path d="M 60 200 L 120 100 L 180 160 L 250 50 L 320 160 L 380 100 L 420 210" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Circles at extreme swing points -->
        <circle cx="120" cy="100" r="4" fill="#ef4444" />
        <circle cx="250" cy="50" r="5" fill="#ef4444" />
        <circle cx="380" cy="100" r="4" fill="#ef4444" />

        <!-- Labels -->
        <text x="120" y="85" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">Hombro Izq</text>
        <text x="250" y="35" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">Cabeza</text>
        <text x="380" y="85" fill="#ffffff" font-size="9" font-family="sans-serif" text-anchor="middle">Hombro Der</text>
        <text x="425" y="190" fill="#ef4444" font-size="8" font-family="sans-serif" font-weight="bold">Breakout</text>

        <!-- Projection Target -->
        <line x1="250" y1="50" x2="250" y2="160" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2" />
        <path d="M 420 160 L 420 210" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2" />
        <text x="430" y="175" fill="#f59e0b" font-size="8" font-family="sans-serif">Proyección H = Target</text>

        <!-- Caption -->
        <text x="250" y="240" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Ilustración 6.1: Formación Hombro-Cabeza-Hombro y proyección de precio bajista.</text>
      </svg>

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
<svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Converging trendlines (Triángulo Simétrico) -->
        <line x1="80" y1="50" x2="380" y2="125" stroke="#3b82f6" stroke-width="2" />
        <line x1="80" y1="200" x2="380" y2="125" stroke="#3b82f6" stroke-width="2" />
        
        <!-- Price path compressing -->
        <path d="M 90 60 L 130 180 L 170 80 L 210 160 L 250 95 L 290 140 L 330 110 L 410 60" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        
        <!-- Breakout label -->
        <path d="M 330 110 L 360 120" fill="none" stroke="#10b981" stroke-width="2" />
        <circle cx="410" cy="60" r="4.5" fill="#10b981" />
        <text x="410" y="48" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Ruptura Alcista</text>

        <!-- Labels -->
        <text x="250" y="215" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Compresión de Volatilidad en Rango</text>
        <!-- Caption -->
        <text x="250" y="240" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Ilustración 7.1: Triángulo Simétrico: compresión del precio y ruptura con volumen.</text>
      </svg>

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
<svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Mast (Flagpole) -->
        <line x1="80" y1="210" x2="180" y2="70" stroke="#3b82f6" stroke-width="4" />
        <text x="110" y="160" fill="#3b82f6" font-size="9" font-family="sans-serif" font-weight="bold" transform="rotate(-54 110 160)">MÁSTIL (Impulso)</text>

        <!-- Channel/Flag lines -->
        <line x1="180" y1="70" x2="330" y2="120" stroke="#f59e0b" stroke-width="2" />
        <line x1="205" y1="45" x2="355" y2="95" stroke="#f59e0b" stroke-width="2" />

        <!-- Price path within flag and breakout -->
        <path d="M 180 70 L 220 50 L 250 95 L 280 70 L 310 115 L 390 35" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        
        <circle cx="390" cy="35" r="4.5" fill="#10b981" />
        <text x="390" y="20" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Ruptura (BOS)</text>
        <text x="260" y="125" fill="#f59e0b" font-size="9" font-family="sans-serif" text-anchor="middle">Bandera de Consolidación</text>

        <!-- Caption -->
        <text x="250" y="240" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Ilustración 8.1: Patrón de Bandera Alcista (Bull Flag) y continuación de tendencia.</text>
      </svg>

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
<svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Converging Wedge Lines (Ascending Wedge) -->
        <line x1="80" y1="120" x2="380" y2="50" stroke="#ef4444" stroke-width="2" />
        <line x1="80" y1="180" x2="380" y2="70" stroke="#ef4444" stroke-width="2" />

        <!-- Price path inside wedge -->
        <path d="M 90 170 L 140 110 L 190 140 L 240 90 L 290 110 L 340 70 L 380 140" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        
        <circle cx="360" cy="78" r="4" fill="#ef4444" />
        <circle cx="380" cy="140" r="4.5" fill="#ef4444" />
        <text x="390" y="155" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">Ruptura Bajista</text>
        <text x="230" y="175" fill="#ef4444" font-size="9" font-family="sans-serif" text-anchor="middle">Cuña Ascendente (Agotamiento Alcista)</text>

        <!-- Caption -->
        <text x="250" y="240" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Ilustración 9.1: Cuña Ascendente de agotamiento con ruptura bajista con intención.</text>
      </svg>

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
<svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Prev Day Close Line -->
        <line x1="50" y1="150" x2="450" y2="150" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
        <text x="60" y="142" fill="#64748b" font-size="8" font-family="sans-serif">Cierre Día Anterior</text>

        <!-- Candlesticks showing gap -->
        <!-- Candle 1: Bullish prior day (120, 180 -> 150) -->
        <rect x="120" y="150" width="20" height="30" fill="#10b981" />
        <line x1="130" y1="140" x2="130" y2="190" stroke="#10b981" stroke-width="1.5" />

        <!-- GAP ZONE Bracket -->
        <path d="M 230 90 L 250 90 L 250 150 L 230 150" fill="none" stroke="#f59e0b" stroke-width="1.5" />
        <text x="260" y="125" fill="#f59e0b" font-size="9" font-family="sans-serif" font-weight="bold">BRECHA / GAP</text>

        <!-- Candle 2: Bullish open higher (170, 90 -> 70) -->
        <rect x="170" y="70" width="20" height="20" fill="#10b981" />
        <line x1="180" y1="60" x2="180" y2="100" stroke="#10b981" stroke-width="1.5" />

        <!-- Candle 3: Bearish gap fill (220, 90 -> 160) -->
        <rect x="220" y="90" width="20" height="70" fill="#ef4444" />
        <line x1="230" y1="80" x2="230" y2="170" stroke="#ef4444" stroke-width="1.5" />
        <text x="210" y="185" fill="#ef4444" font-size="8" font-family="sans-serif" text-anchor="middle">Llenado del Gap</text>

        <!-- Caption -->
        <text x="250" y="235" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 10.1: Simulación de Gap de Apertura y posterior llenado (Gap Fill).</text>
      </svg>

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
<svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Resistance Line -->
        <line x1="50" y1="100" x2="450" y2="100" stroke="#ef4444" stroke-width="2" />
        <text x="70" y="90" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold">Resistencia Clave</text>

        <!-- Price path showing breakout then collapse -->
        <path d="M 60 180 L 150 100 L 200 130 L 270 70 L 340 160 L 410 180" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        
        <!-- Rejection wick on breakout -->
        <line x1="270" y1="70" x2="270" y2="50" stroke="#ef4444" stroke-width="2" />
        <circle cx="270" cy="50" r="4" fill="#ef4444" />
        
        <!-- Highlight box -->
        <rect x="240" y="40" width="60" height="70" fill="rgba(239, 68, 68, 0.08)" stroke="rgba(239, 68, 68, 0.4)" stroke-dasharray="2,2" stroke-width="1" />
        <text x="270" y="32" fill="#ef4444" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">FAKEOUT (Trampa de Toros)</text>

        <!-- Downward arrow -->
        <path d="M 310 90 L 330 130" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-fake)" />
        
        <defs>
          <marker id="arrow-fake" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
          </marker>
        </defs>
        <!-- Caption -->
        <text x="250" y="235" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle">Ilustración 11.1: Falso rompimiento de resistencia (Bull Trap) y colapso.</text>
      </svg>

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
<svg viewBox="0 0 500 250" style="background:#0b0f19; border: 1px solid #1e293b; border-radius: 8px; margin: 15px auto; display: block; max-width: 100%;">
        <!-- Split screen line -->
        <line x1="40" y1="160" x2="460" y2="160" stroke="#1e293b" stroke-width="1.5" />

        <!-- Price Chart (Top) -->
        <line x1="50" y1="100" x2="450" y2="100" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,3" />
        <text x="60" y="90" fill="#3b82f6" font-size="8" font-family="sans-serif">Resistencia Rota</text>
        <path d="M 60 140 L 140 120 L 220 100 L 300 50 L 380 70 L 440 40" fill="none" stroke="#94a3b8" stroke-width="2" />
        <circle cx="300" cy="50" r="4.5" fill="#10b981" />
        <text x="300" y="38" fill="#10b981" font-size="8" font-family="sans-serif" font-weight="bold" text-anchor="middle">Ruptura Genuina</text>

        <!-- Volume Bars (Bottom) -->
        <rect x="95" y="210" width="10" height="30" fill="rgba(148, 163, 184, 0.3)" />
        <rect x="135" y="200" width="10" height="40" fill="rgba(148, 163, 184, 0.3)" />
        <rect x="175" y="205" width="10" height="35" fill="rgba(148, 163, 184, 0.3)" />
        <rect x="215" y="195" width="10" height="45" fill="rgba(148, 163, 184, 0.3)" />
        
        <!-- Breakout Volume Spike (Green) -->
        <rect x="295" y="170" width="10" height="70" fill="rgba(16, 185, 129, 0.7)" stroke="#10b981" stroke-width="1" />
        <text x="300" y="165" fill="#10b981" font-size="8" font-family="sans-serif" font-weight="bold" text-anchor="middle">PICO VOLUMEN</text>

        <rect x="375" y="210" width="10" height="30" fill="rgba(148, 163, 184, 0.3)" />
        <rect x="435" y="190" width="10" height="50" fill="rgba(148, 163, 184, 0.3)" />

        <!-- Caption -->
        <text x="250" y="242" fill="#94a3b8" font-size="10" font-family="sans-serif" text-anchor="middle">Ilustración 12.1: Confirmación de ruptura genuina mediante pico de volumen de transacciones.</text>
      </svg>

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

  // Toggle Previous Lesson button
  const prevBtn = document.getElementById("btn-prev-lesson");
  if (prevBtn) {
    const prevDayId = `day${dayNum - 1}`;
    if (courseData[prevDayId] && courseData[prevDayId].unlocked) {
      prevBtn.style.display = "inline-flex";
    } else {
      prevBtn.style.display = "none";
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

// Global Function to navigate to the previous lesson
window.goToPrevLesson = () => {
  const currentDayNum = parseInt(activeDayId.replace("day", ""));
  const prevDayId = `day${currentDayNum - 1}`;
  if (courseData[prevDayId] && courseData[prevDayId].unlocked) {
    window.loadDay(prevDayId);
  }
};

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
