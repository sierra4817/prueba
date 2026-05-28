// Dynamic Course Manager - Visión Trading Pro (30-Day Intensive)

// 30 Days Syllabus Data
const courseData = {
  day1: {
    id: "day1",
    pilar: 1,
    title: "El Capital como Inventario",
    unlocked: true,
    completed: false,
    challenge: "Calcula la ruina matemática de una cuenta de $10,000 arriesgando el 1% frente al 10% en una racha de 10 operaciones perdedoras consecutivas. Escribe la diferencia en el balance final.",
    content: `
      <p>Bienvenido al <strong>Día 1</strong>. Como trader profesional, debes erradicar la mentalidad de casino. El dinero en tu cuenta de corretaje no son fichas para apostar; es el <strong>inventario de tu negocio</strong>.</p>
      
      <h3>La mentalidad del inventario</h3>
      <p>Un comerciante compra mercancía sabiendo que algunas unidades pueden salir defectuosas o no venderse (pérdidas controladas). Nunca arriesga todo su negocio en un solo lote. En el trading de futuros, cada operación es una transacción comercial donde arriesgas una parte de tu inventario para obtener un retorno mayor.</p>
      
      <ul>
        <li><strong>Capital Operativo:</strong> Es tu herramienta de trabajo. Si se agota, estás fuera del negocio.</li>
        <li><strong>Preservación de Capital:</strong> Tu prioridad número uno no es ganar dinero; es mantenerte en el juego el tiempo suficiente para que tu ventaja estadística funcione.</li>
      </ul>

      <div class="alert-box">
        <strong>📈 Regla Estoica:</strong> El mercado es un entorno de incertidumbre. Acepta que cualquier operación individual puede ser perdedora. La única variable que controlas al 100% es cuánto permites perder antes de entrar.
      </div>
    `
  },
  day2: {
    id: "day2",
    pilar: 1,
    title: "Asimetría Matemática y R:B",
    unlocked: false,
    completed: false,
    challenge: "Si realizas 20 operaciones con una tasa de acierto del 40% (8 ganadas, 12 perdidas) y un ratio R:B de 1:2 arriesgando $100 por trade, calcula tu P&L neto final.",
    content: `
      <p>Hoy estudiaremos la <strong>asimetría matemática</strong>. La rentabilidad en el trading no depende de tener la razón todo el tiempo, sino de cuánto ganas cuando aciertas frente a cuánto pierdes cuando fallas.</p>
      
      <h3>El Ratio Riesgo/Beneficio (R:B)</h3>
      <p>El ratio R:B es la proporción entre tu pérdida potencial (distancia al Stop Loss) y tu ganancia proyectada (distancia al Take Profit). Para ser rentable con consistencia, buscamos un ratio mínimo de <strong>1:2</strong>.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-family: var(--font-mono); font-size: 0.9rem; border: 1px solid var(--border-color);">
        <thead>
          <tr style="background: var(--bg-tertiary); text-align: left;">
            <th style="padding: 10px; border-bottom: 2px solid var(--border-color);">Ratio R:B</th>
            <th style="padding: 10px; border-bottom: 2px solid var(--border-color);">Tasa Acierto Mínima</th>
            <th style="padding: 10px; border-bottom: 2px solid var(--border-color);">Resultado a Largo Plazo</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 10px;">1:1</td>
            <td style="padding: 10px;">51%</td>
            <td style="padding: 10px; color: var(--text-secondary);">Difícil debido a comisiones</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 10px;"><strong>1:2</strong></td>
            <td style="padding: 10px; color: var(--color-bull);"><strong>34%</strong></td>
            <td style="padding: 10px; font-weight: bold; color: var(--color-bull);">Rentable con baja presión mental</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <td style="padding: 10px;">1:3</td>
            <td style="padding: 10px; color: var(--color-bull);">26%</td>
            <td style="padding: 10px;">Excelente, requiere alta paciencia</td>
          </tr>
        </tbody>
      </table>
    `
  },
  day3: {
    id: "day3",
    pilar: 1,
    title: "Cálculo de Lotes y Contratos",
    unlocked: false,
    completed: false,
    challenge: "Tienes una cuenta de $5,000, quieres arriesgar el 1% ($50) en un trade de Micro E-mini S&P 500 (MES). Tu Stop Loss técnico está a 10 puntos de distancia ($5 por punto por contrato). ¿Cuántos contratos debes abrir?",
    content: `
      <p>El tamaño de la posición nunca se decide al azar. Se calcula matemáticamente antes de abrir cada orden utilizando tres variables del mercado de futuros.</p>
      
      <h3>Fórmula del tamaño de posición</h3>
      <div class="highlight-box">
        <strong>Contratos = Riesgo Máximo ($) / (Distancia de Stop Loss en Puntos x Valor del Punto del Contrato)</strong>
      </div>
      
      <p>Por ejemplo, en el **E-mini S&P 500 (ES)**, cada punto vale $50 USD. Si tu Stop Loss es de 10 puntos, el riesgo de 1 contrato es $500. Si tu límite de riesgo por operación es de $100, no puedes operar contratos Mini; debes cambiar a contratos Micro (**MES**, donde 1 punto vale $5) y operar exactamente 2 contratos.</p>
    `
  },
  day4: {
    id: "day4",
    pilar: 1,
    title: "Límite de Pérdida Diaria",
    unlocked: false,
    completed: false,
    challenge: "Establece tu regla inquebrantable de límite de pérdida diaria en dólares basándote en un capital simulado de $15,000 arriesgando máximo 2% al día. ¿Qué harás físicamente al tocar este límite?",
    content: `
      <p>El <strong>Daily Drawdown</strong> o Límite de Pérdida Diaria es el freno de mano de tu negocio de trading. Evita que un mal día de operativa destruya semanas de ganancias consistentes.</p>
      
      <h3>La regla de los dos fallos</h3>
      <p>Una de las formas más efectivas de gestionar el drawdown es limitar tu operativa a un máximo de <strong>2 operaciones perdedoras consecutivas por día</strong>. Si fallas dos veces seguidas:</p>
      <ul>
        <li>Tu lectura del mercado está desalineada con el día actual.</li>
        <li>Tu estado mental entra en frustración (sesgo emocional).</li>
      </ul>
      <p>Al tocar este límite, la regla estoica dicta: <strong>apaga las pantallas inmediatamente</strong>. El mercado estará ahí mañana.</p>
    `
  },
  day5: {
    id: "day5",
    pilar: 1,
    title: "Costos Operativos y Apalancamiento",
    unlocked: false,
    completed: false,
    challenge: "Investiga las comisiones de ida y vuelta (round-trip) de tu broker para 1 contrato MES. Si realizas 5 trades al día en lugar de 1, calcula el costo total en comisiones en un mes (20 días hábiles).",
    content: `
      <p>El sobreoperar (overtrading) es el enemigo silencioso de las cuentas pequeñas. Cada vez que abres y cierras una posición, pagas comisiones de clearing y corretaje que merman tu balance.</p>
      
      <h3>El costo de hacer negocios</h3>
      <p>El apalancamiento excesivo magnifica este problema. Operar con márgenes intradía bajos te permite abrir más posiciones de las que tu cuenta puede soportar matemáticamente, elevando drásticamente el costo de comisiones relativo a tu capital.</p>
    `
  },
  day6: {
    id: "day6",
    pilar: 1,
    title: "Margen de Garantía y Margin Call",
    unlocked: false,
    completed: false,
    challenge: "Explica en tus palabras qué diferencia hay entre el margen inicial y el margen de mantenimiento, y qué ocurre si el balance neto de tu cuenta cae por debajo de este último.",
    content: `
      <p>Los contratos de futuros se operan mediante depósitos de garantía (márgenes). No pagas el valor total del activo, sino una fianza para respaldar la fluctuación del precio.</p>
      
      <ul>
        <li><strong>Margen Inicial:</strong> Capital mínimo requerido en la cuenta para abrir una posición.</li>
        <li><strong>Margen de Mantenimiento:</strong> Fianza mínima que debes conservar en balance mientras la posición siga abierta. Si tus pérdidas flotantes hacen que el balance caiga por debajo de este límite, el broker ejecutará una <em>llamada de margen (Margin Call)</em> y liquidará tu posición a precio de mercado con pérdidas inmediatas.</li>
      </ul>
    `
  },
  day7: {
    id: "day7",
    pilar: 1,
    title: "Evaluación y Manifiesto de Riesgo",
    unlocked: false,
    completed: false,
    challenge: "Redacta tu Manifiesto de Riesgo Innegociable. Debe incluir tu capital, tu riesgo por operación en %, tu ratio R:B y tus límites de pérdida diaria. Guárdalo como compromiso.",
    content: `
      <p>Felicidades por completar la primera semana. Hoy consolidaremos las matemáticas de tu operativa antes de pasar a los gráficos. Recuerda: un trader sin un plan de riesgo estricto es solo un apostador con una pantalla bonita.</p>
      
      <div class="alert-box" style="border-left-color: var(--color-bull); background: rgba(16, 185, 129, 0.03);">
        <strong>📝 Examen del Pilar 1:</strong> Para avanzar a la lectura técnica del pilar 2, debes responder correctamente el examen semanal disponible abajo.
      </div>
    `
  },
  day8: {
    id: "day8",
    pilar: 2,
    title: "El Gráfico Limpio y la Subasta",
    unlocked: false,
    completed: false,
    challenge: "Abre el simulador en la vista TradingView Real y localiza los precios máximos y mínimos de las últimas 24 horas en el gráfico de 5 minutos. Anota sus valores.",
    content: `
      <p>Comenzamos el <strong>Pilar 2</strong>. El gráfico no es una pintura abstracta; es el registro de una <strong>subasta continua</strong> en tiempo real donde interactúan compradores y vendedores institucionales.</p>
      
      <h3>La falacia de los indicadores rezagados</h3>
      <p>Llenar tu pantalla de indicadores como el MACD, Estocásticos y Bandas de Bollinger solo añade ruido y retrasa tu toma de decisiones. El precio es el único indicador líder. Todo lo demás son cálculos matemáticos de precios pasados.</p>
    `
  },
  day9: {
    id: "day9",
    pilar: 2,
    title: "Anatomía de Velas y Rechazo",
    unlocked: false,
    completed: false,
    challenge: "Busca en el gráfico una vela con una mecha superior que sea al menos tres veces más larga que su cuerpo. Explica qué ocurrió entre compradores y vendedores durante esa vela.",
    content: `
      <p>Una vela japonesa cuenta una historia de absorción y rechazo. La longitud de sus mechas (sombras) revela dónde se está agotando la iniciativa de un bando y dónde están ingresando órdenes limitadas del bando contrario.</p>
      
      <ul>
        <li><strong>Vela de Intención:</strong> Cuerpo grande con mechas pequeñas. Muestra control y continuidad.</li>
        <li><strong>Vela de Rechazo (Pin Bar):</strong> Cuerpo pequeño en un extremo y una mecha muy larga en el otro. Muestra absorción de liquidez y un probable giro de precio.</li>
      </ul>
    `
  },
  day10: {
    id: "day10",
    pilar: 2,
    title: "Estructura de Mercado y BOS",
    unlocked: false,
    completed: false,
    challenge: "Analiza el diagrama SVG de abajo. Define qué es un BOS (Break of Structure) y dibuja o describe en tu bitácora el cambio de una estructura alcista a una bajista.",
    content: `
      <p>El mercado se mueve en una serie de oscilaciones estructuradas. Identificar la estructura actual evita que metas compras en un mercado bajista o ventas en una tendencia fuerte alcista.</p>
      
      <h3>Quiebre de Estructura (BOS)</h3>
      <p>Una tendencia alcista hace máximos más altos (HH) y mínimos más altos (HL). Cuando el precio rompe a la baja el último mínimo de oscilación (HL), se produce un <strong>BOS (Break of Structure)</strong>, marcando el inicio de una tendencia bajista.</p>
      
      <svg width="100%" height="160" viewBox="0 0 500 160" style="background:#0b0e14; border:1px solid #242f3d; border-radius:8px; margin: 15px 0;">
        <line x1="0" y1="40" x2="500" y2="40" stroke="#17202b" stroke-width="1"/>
        <line x1="0" y1="80" x2="500" y2="80" stroke="#17202b" stroke-width="1"/>
        <line x1="0" y1="120" x2="500" y2="120" stroke="#17202b" stroke-width="1"/>
        <polyline points="40,130 90,60 140,110 190,40 240,90 290,20 330,60 380,140 430,110 480,150" fill="none" stroke="#6b7280" stroke-width="2"/>
        <circle cx="40" cy="130" r="4" fill="#10b981"/><text x="40" y="145" fill="#10b981" font-size="9" font-family="Space Grotesk">HL</text>
        <circle cx="140" cy="110" r="4" fill="#10b981"/><text x="140" y="125" fill="#10b981" font-size="9" font-family="Space Grotesk">HL</text>
        <circle cx="240" cy="90" r="4" fill="#ef4444"/><text x="240" y="105" fill="#ef4444" font-size="9" font-family="Space Grotesk">HL (Roto)</text>
        <circle cx="90" cy="60" r="4" fill="#3b82f6"/><text x="90" y="50" fill="#3b82f6" font-size="9" font-family="Space Grotesk">HH</text>
        <circle cx="190" cy="40" r="4" fill="#3b82f6"/><text x="190" y="30" fill="#3b82f6" font-size="9" font-family="Space Grotesk">HH</text>
        <circle cx="290" cy="20" r="4" fill="#3b82f6"/><text x="290" y="10" fill="#3b82f6" font-size="9" font-family="Space Grotesk">HH (Máximo)</text>
        <line x1="240" y1="90" x2="350" y2="90" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="260" y="83" fill="#ef4444" font-size="10" font-family="Space Grotesk" font-weight="bold">BOS (Quiebre)</text>
        <circle cx="380" cy="140" r="4" fill="#ef4444"/><text x="380" y="153" fill="#ef4444" font-size="9" font-family="Space Grotesk">LL</text>
      </svg>
    `
  },
  day11: {
    id: "day11",
    pilar: 2,
    title: "Ley de Polaridad S/R",
    unlocked: false,
    completed: false,
    challenge: "Encuentra en el gráfico en vivo un ejemplo de resistencia que, tras ser rota al alza, haya actuado como soporte. Anota los precios de ruptura y del testeo.",
    content: `
      <p>Las zonas de soporte y resistencia no son líneas delgadas, son <strong>áreas de acumulación de órdenes</strong>. La ley de polaridad demuestra la memoria del mercado.</p>
      
      <p>Cuando el precio rompe una zona de resistencia fuerte, los vendedores que estaban perdiendo esperan a que el mercado regrese a su punto de entrada para cerrar sin pérdidas (break-even). Ese flujo de órdenes vendedoras cerrándose se combina con nuevos compradores, transformando la antigua resistencia en soporte técnico.</p>
    `
  },
  day12: {
    id: "day12",
    pilar: 2,
    title: "La EMA 200 como Filtro",
    unlocked: false,
    completed: false,
    challenge: "Observa el gráfico SVG de abajo. ¿Por qué está prohibido comprar cuando el precio cotiza por debajo de la línea azul de la EMA 200, incluso si el RSI da señal de sobreventa?",
    content: `
      <p>La Media Móvil Exponencial de 200 períodos es nuestra brújula direccional institucional. Evita que operes en contra de la tendencia mayoritaria del mercado.</p>
      
      <ul>
        <li><strong>Filtro de Compra:</strong> Precio sobre la EMA 200. Solo se permiten largos.</li>
        <li><strong>Filtro de Venta:</strong> Precio bajo la EMA 200. Solo se permiten cortos.</li>
      </ul>
      
      <svg width="100%" height="160" viewBox="0 0 500 160" style="background:#0b0e14; border:1px solid #242f3d; border-radius:8px; margin: 15px 0;">
        <path d="M 20 140 Q 60 120 100 100 T 180 60 T 260 120 T 340 130 T 420 140 T 480 150" fill="none" stroke="#ef4444" stroke-width="2"/>
        <path d="M 20 40 Q 60 50 100 20 T 180 30 T 260 50" fill="none" stroke="#10b981" stroke-width="2"/>
        <path d="M 20 80 Q 120 60 220 80 T 420 110 T 480 130" fill="none" stroke="#3b82f6" stroke-width="3"/>
        <text x="30" y="70" fill="#3b82f6" font-size="10" font-family="Space Grotesk" font-weight="bold">EMA 200 (Filtro Direccional)</text>
        <rect x="60" y="10" width="160" height="20" rx="3" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.2)"/>
        <text x="70" y="23" fill="#10b981" font-size="9" font-family="Space Grotesk">Precio sobre EMA = COMPRAS</text>
        <rect x="280" y="125" width="160" height="20" rx="3" fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.2)"/>
        <text x="290" y="138" fill="#ef4444" font-size="9" font-family="Space Grotesk">Precio bajo EMA = VENTAS</text>
      </svg>
    `
  },
  day13: {
    id: "day13",
    pilar: 2,
    title: "Impulso y Momentum con RSI",
    unlocked: false,
    completed: false,
    challenge: "En el simulador, identifica un escenario donde el precio cotice por encima de la EMA 200 y el RSI de 14 cruce la línea central de 50 hacia arriba. Describe la fuerza del movimiento subsiguiente.",
    content: `
      <p>El RSI de 14 períodos no lo utilizamos para buscar sobrecompra (70) o sobreventa (30) extremas, ya que en tendencias fuertes estas zonas fallan. Lo usamos como un **medidor de aceleración (momentum)**.</p>
      
      <p>La línea de 50 en el RSI actúa como el ecuador de la fuerza del mercado. Cuando el RSI cruza sobre 50, confirma que el impulso alcista está acelerando en el marco temporal analizado, dándonos el gatillo de momentum.</p>
    `
  },
  day14: {
    id: "day14",
    pilar: 2,
    title: "Vacíos de Liquidez (FVG)",
    unlocked: false,
    completed: false,
    challenge: "Dibuja o describe en tu bitácora un Fair Value Gap (FVG) de 3 velas en un movimiento bajista. ¿Entre qué velas se localiza la ineficiencia de precio?",
    content: `
      <p>El <strong>Fair Value Gap (FVG)</strong> es una ineficiencia o desequilibrio en el precio originada por una inyección masiva de volumen institucional que no permite una subasta equilibrada.</p>
      
      <p>Se identifica en un grupo de 3 velas consecutivas. En un movimiento alcista, el FVG es el espacio vacío que queda entre el máximo de la Vela 1 y el mínimo de la Vela 3, dejando a la Vela 2 como una vela de fuerte expansión sin testear.</p>
    `
  },
  day15: {
    id: "day15",
    pilar: 2,
    title: "Evaluación de Lectura Técnica",
    unlocked: false,
    completed: false,
    challenge: "Explica detalladamente en tu bitácora por qué un trader profesional prefiere un gráfico limpio a uno lleno de indicadores cruzados.",
    content: `
      <p>Has completado la segunda semana. Ya conoces las estructuras de subasta limpia, rechazo de liquidez e ineficiencias de mercado. Estás listo para evaluar tus conocimientos antes de entrar al pilar de la psicología estoica.</p>
      
      <div class="alert-box" style="border-left-color: var(--color-bull); background: rgba(16, 185, 129, 0.03);">
        <strong>📝 Examen del Pilar 2:</strong> Completa y aprueba la evaluación técnica disponible en la parte inferior para desbloquear el Pilar de Autogestión Mental.
      </div>
    `
  },
  day16: {
    id: "day16",
    pilar: 3,
    title: "El Trading y el Estoicismo",
    unlocked: false,
    completed: false,
    challenge: "Escribe una reflexión sobre tu última operación fallida basándote en la dicotomía del control estoica: ¿Qué estuvo bajo tu control y qué no?",
    content: `
      <p>Comenzamos el <strong>Pilar 3</strong>. La maestría técnica no sirve si saboteas tu cuenta por falta de autocontrol. El estoicismo nos enseña la <strong>dicotomía del control</strong>.</p>
      
      <p>En el mercado, tienes control total sobre tus acciones (ejecutar el plan, colocar el Stop Loss, respetar el riesgo). No tienes ningún control sobre el comportamiento de la cotización. Aceptar esta falta de control elimina la frustración y la ira operativas.</p>
    `
  },
  day17: {
    id: "day17",
    pilar: 3,
    title: "FOMO: Miedo a Quedar Fuera",
    unlocked: false,
    completed: false,
    challenge: "Durante tu sesión de hoy, si ves que el precio hace un movimiento fuerte sin darte señal de tu setup, déjalo ir. Documenta la sensación de no entrar al mercado y cómo protegió tu balance.",
    content: `
      <p>El <strong>FOMO (Fear Of Missing Out)</strong> es el impulso irracional de entrar al mercado a precios desfavorables por miedo a perderse un movimiento fuerte ya iniciado.</p>
      
      <p>Un trader estoico entiende que el mercado es infinito y siempre da nuevas oportunidades. Perseguir el precio es entrar con una alta probabilidad de tocar el Stop Loss en el retroceso natural del precio.</p>
    `
  },
  day18: {
    id: "day18",
    pilar: 3,
    title: "Operativa de Venganza",
    unlocked: false,
    completed: false,
    challenge: "Describe una situación pasada donde hayas sobreoperado para recuperar una pérdida. ¿Cuál fue el resultado financiero final y qué aprendiste de ello?",
    content: `
      <p>La operativa de venganza ocurre cuando intentas \"recuperar\" inmediatamente el dinero perdido en un trade anterior. Este comportamiento nubla el juicio matemático y te lleva a aumentar el apalancamiento y cometer errores graves.</p>
      
      <p>Para combatirla, después de un trade perdedor, tómate un descanso físico de 10 minutos lejos de las pantallas para permitir que tu cerebro desactive el estado de alerta emocional.</p>
    `
  },
  day19: {
    id: "day19",
    pilar: 3,
    title: "Sesgo de Confirmación",
    unlocked: false,
    completed: false,
    challenge: "Antes de tu próxima simulación, haz una lista de 3 razones técnicas válidas por las cuales tu hipótesis de trade podría fallar. Escríbelas en tu bitácora.",
    content: `
      <p>El cerebro humano tiende de forma natural a buscar información que valide sus creencias previas e ignora las señales que las contradicen. Esto se conoce como <strong>sesgo de confirmación</strong>.</p>
      
      <p>Si crees que el precio va a subir, buscarás solo patrones alcistas e ignorarás que el precio cotiza bajo la EMA 200. Oblígate siempre a buscar la hipótesis contraria antes de ejecutar.</p>
    `
  },
  day20: {
    id: "day20",
    pilar: 3,
    title: "La Zona de No Operar",
    unlocked: false,
    completed: false,
    challenge: "Permanece 30 minutos frente al gráfico en vivo observando el precio en rango lateral sin abrir ninguna posición. Documenta la disciplina de la inacción.",
    content: `
      <p>El trading no consiste en hacer click constantemente. Gran parte del tiempo del trader profesional se pasa en la **Zona de No Operar**: periodos donde el mercado carece de tendencia o se encuentra comprimido en rangos estrechos sin confluencias claras.</p>
    `
  },
  day21: {
    id: "day21",
    pilar: 3,
    title: "El Diario Operativo",
    unlocked: false,
    completed: false,
    challenge: "Diseña tu plantilla de bitácora diaria que incluya: hora, activo, dirección, riesgo exacto, resultado en R y tu nivel de frustración del 1 al 10 antes del trade.",
    content: `
      <p>La bitácora de trading es la única herramienta objetiva para medir tu desempeño. Si no registras tus operaciones, estás jugando al azar. Tu diario operativo debe documentar no solo los precios, sino tu estado psicológico durante la ejecución.</p>
    `
  },
  day22: {
    id: "day22",
    pilar: 3,
    title: "Evaluación de Autogestión Mental",
    unlocked: false,
    completed: false,
    challenge: "Escribe una carta de 3 párrafos dirigida a ti mismo donde definas qué harás cuando entres en una racha perdedora de 5 operaciones seguidas.",
    content: `
      <p>Hemos finalizado la semana de psicología estoica. Has aprendido a desapegarte del resultado y a valorar las reglas matemáticas sobre las emociones. Evalúa tu mentalidad antes de estructurar tu sistema de confluencias final.</p>
      
      <div class="alert-box" style="border-left-color: var(--color-bull); background: rgba(16, 185, 129, 0.03);">
        <strong>📝 Examen del Pilar 3:</strong> Completa el test psicológico-técnico de abajo para habilitar la última semana de construcción de sistemas.
      </div>
    `
  },
  day23: {
    id: "day23",
    pilar: 4,
    title: "Definiendo tu Ventaja Estadística",
    unlocked: false,
    completed: false,
    challenge: "Define en una frase corta y clara cuál es la ventaja estadística (Edge) que buscarás explotar en tu sistema de trading.",
    content: `
      <p>Comenzamos el <strong>Pilar 4</strong>. Un sistema de trading es una serie de reglas mecánicas diseñadas para explotar una anomalía de comportamiento repetible en el precio que otorga una **ventaja de probabilidades**.</p>
      
      <p>Un Edge no necesita predecir el futuro; solo necesita que a lo largo de 100 operaciones, el balance neto de ganancias supere al de pérdidas gracias al ratio R:B y la consistencia del setup.</p>
    `
  },
  day24: {
    id: "day24",
    pilar: 4,
    title: "Setup Visión Pro v2",
    unlocked: false,
    completed: false,
    challenge: "Dibuja o describe en tu bitácora las condiciones exactas que deben ocurrir simultáneamente para validar una entrada en Compra (Long) según el Setup Visión Pro v2.",
    content: `
      <p>El setup de confluencia cuantitativa de Visión Trading Pro v2 combina dos filtros complementarios:</p>
      
      <ul>
        <li><strong>Dirección (EMA 200):</strong> El precio debe estar cotizando por encima de la EMA 200 (para largos) o por debajo (para cortos).</li>
        <li><strong>Fuerza e Impulso (RSI 14):</strong> El RSI de 14 períodos debe cruzar sobre la línea de 50 en vela cerrada (para largos) o bajo 50 (para cortos).</li>
      </ul>
      <p>La entrada se ejecuta inmediatamente en la apertura de la siguiente vela al cierre de confirmación de la señal.</p>
    `
  },
  day25: {
    id: "day25",
    pilar: 4,
    title: "Fijación del Stop Loss Técnico",
    unlocked: false,
    completed: false,
    challenge: "En el simulador, abre un trade simulado en Largo. Identifica el mínimo de las últimas 4 velas (Swing Low) y coloca tu Stop Loss exactamente 1 punto por debajo de ese nivel. Anota el precio.",
    content: `
      <p>El Stop Loss nunca se coloca en base a un número redondo de dinero. Debe colocarse en un nivel donde la estructura del mercado **invalide técnicamente** tu hipótesis de trade.</p>
      
      <p>Para una posición de Compra (Long), el Stop Loss se coloca justo por debajo del mínimo de oscilación reciente (Swing Low), sumándole un pequeño margen (filtro de ruido) para evitar barridas de liquidez institucionales.</p>
    `
  },
  day26: {
    id: "day26",
    pilar: 4,
    title: "Cálculo del Take Profit 1:2",
    unlocked: false,
    completed: false,
    challenge: "Si tu precio de entrada es 4800.00 y tu Stop Loss está en 4790.00 (riesgo de 10 puntos), calcula a qué precio debes situar tu orden de Take Profit para cumplir con el ratio 1:2.",
    content: `
      <p>Una vez definido el stop loss técnico en puntos, la salida en ganancias (Take Profit) se automatiza matemáticamente a una distancia equivalente a **dos veces el riesgo asumido (R:B 1:2)**.</p>
      
      <p>Esto asegura que tu rentabilidad dependa de la asimetría matemática del sistema y no de tu juicio emocional al ver fluctuar las ganancias en vivo.</p>
    `
  },
  day27: {
    id: "day27",
    pilar: 4,
    title: "Backtesting Manual",
    unlocked: false,
    completed: false,
    challenge: "Realiza 20 operaciones en el simulador aplicando estrictamente el Setup Visión Pro v2. Registra en tu bitácora cuántas ganaste y el balance final de tu capital simulado.",
    content: `
      <p>El backtesting manual consiste en probar tu sistema en datos históricos simulados para adquirir **confianza estadística** en la estrategia y familiarizarte con las rachas perdedoras normales.</p>
    `
  },
  day28: {
    id: "day28",
    pilar: 4,
    title: "La Checklist Operativa",
    unlocked: false,
    completed: false,
    challenge: "Escribe una lista de 4 confluencias obligatorias que debes verificar positivamente en el gráfico antes de atreverte a pulsar el botón de comprar o vender.",
    content: `
      <p>Una lista de verificación (checklist) elimina el error humano y la impulsividad en el trading. Actúa como el protocolo de despegue de un piloto de avión.</p>
      
      <p>Antes de abrir cualquier trade en el mercado real, debes validar visualmente cada punto de tu checklist física para garantizar que la operación cumple con las reglas del sistema.</p>
    `
  },
  day29: {
    id: "day29",
    pilar: 4,
    title: "Consolidación del Plan de Trading",
    unlocked: false,
    completed: false,
    challenge: "Genera tu Plan de Trading Personalizado utilizando el botón de la calculadora. Imprímelo, fírmalo físicamente y pégalo cerca de tu monitor de trading.",
    content: `
      <p>Tu Plan de Trading es el documento legal y moral que rige tu conducta financiera. Describe con precisión quirúrgica qué vas a operar, cómo vas a gestionar el riesgo, bajo qué condiciones exactas entrarás y cuándo te retirarás.</p>
    `
  },
  day30: {
    id: "day30",
    pilar: 4,
    title: "Examen de Certificación Final",
    unlocked: false,
    completed: false,
    challenge: "Completa y aprueba el examen final del Pilar 4 con 100%. Genera y descarga tu Diploma de Maestría en Futuros de Visión Trading Pro.",
    content: `
      <p>Has alcanzado el último día de este entrenamiento intensivo de 30 días. Has progresado desde entender el capital como inventario hasta codificar y probar un sistema mecánico innegociable con control mental estoico.</p>
      
      <div class="alert-box" style="border-left-color: gold; background: rgba(245, 158, 11, 0.03);">
        <strong>🏆 Examen de Certificación Final:</strong> Aprueba el examen técnico-práctico de 5 preguntas abajo para desbloquear la generación de tu Diploma de Maestría firmado por Albert Sierra.
      </div>
    `
  }
};

// Weekly Pillar Quizzes
const pilarQuizzes = {
  1: [
    {
      q: "Si tu cuenta de trading tiene un capital de $10,000, ¿cuál es el riesgo máximo permitido en dinero por operación según la regla del 1%?",
      options: ["$10.00 USD", "$100.00 USD", "$1,000.00 USD"],
      answer: 1,
      explanation: "El 1% de $10,000 es $100. Este es el límite absoluto de dólares arriesgados en la distancia de tu Stop Loss."
    },
    {
      q: "¿Qué ocurre si el balance de tu cuenta cae por debajo del margen de mantenimiento mientras tienes operaciones abiertas?",
      options: [
        "El broker te cobrará una comisión fija al final del mes.",
        "Se ejecutará un Margin Call y el broker cerrará tus posiciones automáticamente.",
        "La posición permanecerá abierta indefinidamente sin costo adicional."
      ],
      answer: 1,
      explanation: "El broker liquida forzosamente tus posiciones al mercado para protegerse de saldos negativos si caes por debajo del margen de mantenimiento."
    },
    {
      q: "Si tienes un ratio R:B de 1:2, ¿qué tasa de acierto necesitas para mantenerte en punto de equilibrio (sin pérdidas ni ganancias)?",
      options: ["50%", "34%", "25%"],
      answer: 1,
      explanation: "Con un ratio R:B 1:2, ganar el 34% de tus operaciones cubre todas tus pérdidas y comisiones, manteniéndote rentable."
    },
    {
      q: "¿Cuál es la forma correcta de calcular el tamaño de la posición (contratos)?",
      options: [
        "Dividiendo el riesgo máximo permitido en dólares por el costo individual del Stop Loss por contrato.",
        "Multiplicando el capital de la cuenta por el apalancamiento elegido.",
        "Operando siempre la misma cantidad fija de contratos sin importar la distancia del Stop Loss."
      ],
      answer: 0,
      explanation: "Contratos = Riesgo ($) / (SL en puntos x Valor Punto). Esto ajusta dinámicamente tu tamaño de posición para no violar el riesgo máximo."
    },
    {
      q: "¿Qué define a un trader profesional al alcanzar el límite diario de pérdida (Daily Drawdown)?",
      options: [
        "Aumentar el apalancamiento al doble para recuperar rápido en el siguiente trade.",
        "Apagar inmediatamente las pantallas, aceptar las pérdidas y retirarse hasta el día siguiente.",
        "Cambiar de activo para probar suerte en un mercado diferente."
      ],
      answer: 1,
      explanation: "Aceptar las pérdidas y desconectarse evita operar bajo frustración y sufrir pérdidas masivas descontroladas."
    }
  ],
  2: [
    {
      q: "¿Qué es un BOS (Break of Structure) en estructura de mercado?",
      options: [
        "El cruce de la EMA 200 con el RSI.",
        "El quiebre del último mínimo de oscilación relevante (HL) en una tendencia alcista, o el máximo (LH) en una tendencia bajista.",
        "El momento en que el broker cobra las comisiones intradía."
      ],
      answer: 1,
      explanation: "El BOS marca el quiebre de la estructura actual y señala un probable cambio de tendencia de alcista a bajista (o viceversa)."
    },
    {
      q: "Según la ley de polaridad de soportes y resistencias, ¿qué comportamiento se espera cuando se rompe una resistencia fuerte?",
      options: [
        "Que la resistencia rota actúe como un nuevo soporte al regresar el precio.",
        "Que el precio continúe subiendo indefinidamente en línea recta.",
        "La zona rota pierde toda su relevancia y debe borrarse del gráfico."
      ],
      answer: 0,
      explanation: "Las resistencias rotas tienden a convertirse en soportes debido al cierre de órdenes vendedoras a break-even y la entrada de nuevos compradores."
    },
    {
      q: "¿Por qué un trader institucional evita saturar sus pantallas con múltiples indicadores rezagados?",
      options: [
        "Porque encarecen las comisiones de la plataforma.",
        "Porque causan parálisis por análisis, retrasan las entradas y añaden ruido al precio puro.",
        "Los indicadores rezagados solo funcionan en cuentas demo."
      ],
      answer: 1,
      explanation: "El precio es el único indicador líder. Los indicadores técnicos secundarios son meros cálculos de precios pasados y añaden retraso."
    },
    {
      q: "¿Qué indica una mecha (sombra) muy larga en la parte superior de una vela en zona de resistencia?",
      options: [
        "Fuerte impulso comprador que continuará al alza.",
        "Absorción de compras por parte de vendedores institucionales y un fuerte rechazo del precio al alza.",
        "Indecisión temporal que requiere esperar al cierre del mercado diario."
      ],
      answer: 1,
      explanation: "Las mechas largas indican rechazo: los compradores empujaron el precio, pero los vendedores limitados absorbieron el volumen y obligaron al cierre abajo."
    },
    {
      q: "¿Qué representa un Fair Value Gap (FVG)?",
      options: [
        "Un área donde el precio se detiene por falta de volumen.",
        "Una ineficiencia o desequilibrio de precio originada por una inyección masiva de órdenes institucionales en una sola dirección.",
        "El valor medio ponderado del contrato de futuros durante el día."
      ],
      answer: 1,
      explanation: "Un FVG es un desequilibrio de mercado visible en 3 velas, donde la vela central no tiene testeo de mechas de sus laterales, dejando ineficiencias."
    }
  ],
  3: [
    {
      q: "¿Cómo se aplica la Dicotomía del Control estoica al trading?",
      options: [
        "Aceptando que controlas tu plan de trading y tu Stop Loss, pero no controlas el resultado de una operación individual.",
        "Intentando controlar los precios de mercado mediante órdenes de gran volumen.",
        "Evitando usar stop loss para no ceder el control de la posición al mercado."
      ],
      answer: 0,
      explanation: "Aceptar que el resultado de un trade individual es incierto y fuera de tu control reduce el apego y la frustración emocional."
    },
    {
      q: "¿Qué es el FOMO (Fear Of Missing Out) en la operativa?",
      options: [
        "El miedo a perder capital que impide abrir operaciones con setup válido.",
        "El impulso irracional de entrar tarde al mercado por miedo a perderse un movimiento fuerte iniciado.",
        "El cálculo exacto de la distancia de stop loss."
      ],
      answer: 1,
      explanation: "El FOMO te hace entrar tarde, a precios desfavorables y sin setup técnico, lo que generalmente termina en pérdidas inmediatas."
    },
    {
      q: "¿Cuál es la respuesta correcta de un trader disciplinado ante la operativa de venganza?",
      options: [
        "Aumentar el tamaño de lote para recuperar la pérdida rápidamente.",
        "Alejarse físicamente de las pantallas durante al menos 10 minutos para enfriar las emociones.",
        "Seguir operando con mayor velocidad para aprovechar la volatilidad."
      ],
      answer: 1,
      explanation: "Alejarte desactiva el estado de alerta cerebral (lucha o huida) provocado por la pérdida y protege tu balance del autosabotaje."
    },
    {
      q: "¿Qué es el sesgo de confirmación?",
      options: [
        "La tendencia a buscar y valorar solo la información técnica que confirma tu hipótesis del trade, ignorando las señales contrarias.",
        "El proceso de confirmación de tu orden por parte del libro de CME.",
        "La verificación matemática de las ganancias semanales."
      ],
      answer: 0,
      explanation: "El sesgo de confirmación te ciega ante las alertas de riesgo obvias (ej: buscar compras ignorando que cotizas bajo la EMA 200)."
    },
    {
      q: "¿Por qué es vital registrar las emociones en tu bitácora de trading?",
      options: [
        "Para mostrárselas al broker al final de la semana.",
        "Para identificar patrones de comportamiento repetibles que te llevan a cometer errores operativos y corregirlos.",
        "Las emociones no tienen impacto real en la rentabilidad si la matemática es buena."
      ],
      answer: 1,
      explanation: "Registrar tus emociones te ayuda a detectar qué estados mentales (ansiedad, codicia, cansancio) preceden a la violación de tus reglas operativas."
    }
  ],
  4: [
    {
      q: "¿Cuál es la regla de dirección del Setup Visión Pro v2?",
      options: [
        "Solo buscar compras si el precio está arriba de la EMA 200, y solo ventas si está abajo.",
        "Operar en contra de la EMA 200 cuando el RSI esté sobrecomprado.",
        "Utilizar la EMA 200 como el objetivo fijo de salida en ganancias (Take Profit)."
      ],
      answer: 0,
      explanation: "La EMA 200 es nuestro filtro de tendencia principal. Seguirla reduce las probabilidades de operar contra la liquidez institucional."
    },
    {
      q: "¿Cómo se confirma la señal de gatillo en el Setup Visión Pro v2?",
      options: [
        "Cuando el RSI de 14 períodos cruza la línea de 50 en dirección de la tendencia (en vela cerrada).",
        "En cuanto el precio toque la línea de la EMA 200.",
        "Cuando el RSI toque los niveles extremos de 70 o 30."
      ],
      answer: 0,
      explanation: "El cruce del RSI sobre la línea central de 50 (en vela cerrada) confirma la aceleración del momento a favor de la tendencia."
    },
    {
      q: "¿Cómo se calcula la distancia técnica del Stop Loss en una compra (Long)?",
      options: [
        "Colocándolo a una distancia aleatoria de 10 puntos en todos los activos.",
        "Colocándolo justo por debajo del mínimo de oscilación reciente (Swing Low) de las últimas 3 a 5 velas.",
        "Situándolo exactamente sobre la línea de la EMA 200."
      ],
      answer: 1,
      explanation: "El Stop Loss debe colocarse debajo del último mínimo relativo porque si el precio rompe ese nivel, la estructura alcista queda invalidada."
    },
    {
      q: "Si ejecutas un trade con un Stop Loss de 12 puntos en ES, ¿dónde debes situar tu Take Profit según el ratio matemático del sistema?",
      options: ["A 6 puntos de distancia.", "A 12 puntos de distancia.", "A 24 puntos de distancia."],
      answer: 2,
      explanation: "Para cumplir el ratio R:B 1:2, la distancia de tu ganancia (Take Profit) debe ser el doble de tu riesgo inicial (12 x 2 = 24 puntos)."
    },
    {
      q: "¿Cuál es el propósito fundamental de realizar un backtesting manual de 20 operaciones en el simulador?",
      options: [
        "Adquirir confianza estadística en la ventaja del sistema y familiarizarse con las fluctuaciones normales de ganancia/pérdida.",
        "Duplicar el balance de la cuenta simulada antes de abrir una cuenta real.",
        "Adivinar qué dirección tomará el precio en la siguiente sesión real."
      ],
      answer: 0,
      explanation: "El backtesting te demuestra empíricamente que tu sistema funciona a lo largo de una serie de trades, ayudándote a ser disciplinado."
    }
  ]
};

// Global App State
let activeSection = "welcome";
let activeDayId = "day1";
let activePilarAccordion = 1;
let activeQuizAnswers = {}; // { questionIndex: selectedOptionIndex }
let pilarPassedStates = { 1: false, 2: false, 3: false, 4: false };

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
  const totalDays = 30;

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
    const allPassed = pilarPassedStates[1] && pilarPassedStates[2] && pilarPassedStates[3] && pilarPassedStates[4];
    certMenuItem.style.display = allPassed ? "block" : "none";
  }

  lucide.createIcons();
};

// Reset academy progress
window.resetAcademyProgress = () => {
  if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso del curso de 30 días y tu bitácora?")) {
    localStorage.removeItem("vision_30day_progress");
    Object.keys(courseData).forEach((key, index) => {
      courseData[key].completed = false;
      courseData[key].unlocked = index === 0;
      localStorage.removeItem(`vision_challenge_${key}`);
    });
    pilarPassedStates = { 1: false, 2: false, 3: false, 4: false };
    saveProgress();
    updateUIProgress();
    renderAcademicMenu();
    showSection("welcome");
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
    { id: 1, name: "Pilar 1: Riesgo Innegociable", icon: "shield-check" },
    { id: 2, name: "Pilar 2: Lectura Técnica", icon: "trending-up" },
    { id: 3, name: "Pilar 3: Control Estoico", icon: "brain" },
    { id: 4, name: "Pilar 4: Sistema Repetible", icon: "activity" }
  ];

  pilares.forEach(pilar => {
    const pilarDays = Object.values(courseData).filter(d => d.pilar === pilar.id);
    const isOpen = activePilarAccordion === pilar.id;
    
    html += `
      <div class="pilar-group ${isOpen ? 'open' : ''}" id="pilar-group-${pilar.id}">
        <div class="pilar-header" onclick="window.togglePilarAccordion(${pilar.id})">
          <span style="display:flex; align-items:center; gap:8px;">
            <i data-lucide="${pilar.id === 1 ? 'shield-check' : pilar.id === 2 ? 'trending-up' : pilar.id === 3 ? 'heart' : 'activity'}" style="width:14px; height:14px; color: ${isOpen ? 'var(--color-accent)' : 'var(--text-secondary)'}"></i>
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
  
  if ([7, 15, 22, 30].includes(dayNum)) {
    quizCard.style.display = "block";
    renderPilarQuiz(day.pilar);
  } else {
    quizCard.style.display = "none";
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
  const voiceId = "c6rAmJGsdzNWAIVkws45";

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
      const isExamDay = [7, 15, 22, 30].includes(dayNum);

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

  if (btnAudioSettings) {
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
        alert("Configuración guardada. Se utilizará tu clave API de ElevenLabs para las narraciones.");
      } else {
        localStorage.removeItem("vision_elevenlabs_api_key");
        alert("Configuración guardada. Se utilizará la clave de ElevenLabs por defecto.");
      }
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
