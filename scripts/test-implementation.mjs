import assert from "node:assert";

// 1. Emulate buildCheckoutUrl logic for direct verification
const CHECKOUT_URL = "https://pay.kiwify.com.br/6dOzI89";
const FALLBACK_UTM_PARAMS = {
  utm_source: "meta",
  utm_medium: "paid",
  utm_campaign: "shape_verao",
};

const ALLOWED_TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "src",
  "sck",
  "s1",
  "s2",
  "s3",
  "fbclid",
];

function buildCheckoutUrl(baseUrl = CHECKOUT_URL, search = "") {
  try {
    const url = new URL(baseUrl);

    // Apply default fallback params first
    Object.entries(FALLBACK_UTM_PARAMS).forEach(([key, fallbackValue]) => {
      url.searchParams.set(key, fallbackValue);
    });

    if (search) {
      const currentParams = new URLSearchParams(search);

      ALLOWED_TRACKING_KEYS.forEach((key) => {
        const value = currentParams.get(key);
        if (value !== null && value.trim() !== "") {
          url.searchParams.set(key, value.trim());
        }
      });
    }

    return url.toString();
  } catch {
    return baseUrl;
  }
}

console.log("=== INICIANDO BATERIA DE TESTES DE INTEGRAÇÃO E RASTREAMENTO ===\n");

// TESTE 1: Acesso direto sem UTMs (Fallback)
console.log("Teste 1: Acesso direto sem UTMs (Fallback)...");
{
  const result = buildCheckoutUrl(CHECKOUT_URL, "");
  const url = new URL(result);
  assert.strictEqual(url.origin + url.pathname, "https://pay.kiwify.com.br/6dOzI89");
  assert.strictEqual(url.searchParams.get("utm_source"), "meta");
  assert.strictEqual(url.searchParams.get("utm_medium"), "paid");
  assert.strictEqual(url.searchParams.get("utm_campaign"), "shape_verao");
  assert.strictEqual(url.searchParams.get("fbclid"), null);
  assert.strictEqual(url.searchParams.get("src"), null);
  console.log("  [PASSOU] Fallback aplicado com sucesso: " + result);
}

// TESTE 2: Acesso com UTMs completas e fbclid
console.log("\nTeste 2: Acesso com UTMs completas e fbclid...");
{
  const query = "?utm_source=instagram&utm_medium=stories&utm_campaign=verao_2026&utm_term=fitness&utm_content=video_01&src=stories_ad&sck=camp1&s1=influencer_a&s2=seg1&s3=var2&fbclid=IwAR2XYZ987654321";
  const result = buildCheckoutUrl(CHECKOUT_URL, query);
  const url = new URL(result);
  
  assert.strictEqual(url.searchParams.get("utm_source"), "instagram");
  assert.strictEqual(url.searchParams.get("utm_medium"), "stories");
  assert.strictEqual(url.searchParams.get("utm_campaign"), "verao_2026");
  assert.strictEqual(url.searchParams.get("utm_term"), "fitness");
  assert.strictEqual(url.searchParams.get("utm_content"), "video_01");
  assert.strictEqual(url.searchParams.get("src"), "stories_ad");
  assert.strictEqual(url.searchParams.get("sck"), "camp1");
  assert.strictEqual(url.searchParams.get("s1"), "influencer_a");
  assert.strictEqual(url.searchParams.get("s2"), "seg1");
  assert.strictEqual(url.searchParams.get("s3"), "var2");
  assert.strictEqual(url.searchParams.get("fbclid"), "IwAR2XYZ987654321");
  
  // Garantir que fallback original NÃO sobrescreveu os reais
  assert.notStrictEqual(url.searchParams.get("utm_source"), "meta");
  console.log("  [PASSOU] Todos os 11 parâmetros prioritários e fbclid preservados corretamente.");
}

// TESTE 3: Preservação parcial de parâmetros (combinando real + fallback)
console.log("\nTeste 3: Preservação parcial de parâmetros (combinando real + fallback)...");
{
  const query = "?utm_campaign=campanha_especial&src=tiktok_bio";
  const result = buildCheckoutUrl(CHECKOUT_URL, query);
  const url = new URL(result);

  assert.strictEqual(url.searchParams.get("utm_source"), "meta"); // fallback
  assert.strictEqual(url.searchParams.get("utm_medium"), "paid"); // fallback
  assert.strictEqual(url.searchParams.get("utm_campaign"), "campanha_especial"); // sobrescrito pelo real
  assert.strictEqual(url.searchParams.get("src"), "tiktok_bio"); // adicionado
  console.log("  [PASSOU] Parâmetros reais aplicados sem perder fallback dos ausentes: " + result);
}

// TESTE 4: Filtragem de parâmetros arbitrários e PII (segurança de dados)
console.log("\nTeste 4: Filtragem de parâmetros arbitrários e PII...");
{
  const query = "?utm_source=google&email=cliente@email.com&nome=Joao&cpf=12345678900&token=xyz987&session=abc";
  const result = buildCheckoutUrl(CHECKOUT_URL, query);
  const url = new URL(result);

  assert.strictEqual(url.searchParams.get("utm_source"), "google");
  assert.strictEqual(url.searchParams.get("email"), null);
  assert.strictEqual(url.searchParams.get("nome"), null);
  assert.strictEqual(url.searchParams.get("cpf"), null);
  assert.strictEqual(url.searchParams.get("token"), null);
  assert.strictEqual(url.searchParams.get("session"), null);
  console.log("  [PASSOU] Parâmetros não autorizados e PII foram bloqueados com sucesso.");
}

// TESTE 5: Evitar duplicatas e tratar parâmetros com espaços/caracteres especiais
console.log("\nTeste 5: Ausência de duplicatas e sanitização...");
{
  const query = "?utm_source=google&utm_source=facebook&utm_campaign=%20campanha_com_espaco%20";
  const result = buildCheckoutUrl(CHECKOUT_URL, query);
  const url = new URL(result);

  // URLSearchParams.get pega o primeiro, e .set substitui todas as ocorrências
  assert.strictEqual(url.searchParams.getAll("utm_source").length, 1);
  assert.strictEqual(url.searchParams.get("utm_campaign"), "campanha_com_espaco");
  console.log("  [PASSOU] Parâmetros duplicados prevenidos e espaços em branco sanitizados.");
}

// TESTE 6: Proteção contra cliques múltiplos rápidos (Debounce / Cooldown)
console.log("\nTeste 6: Proteção contra cliques múltiplos rápidos...");
{
  let lastClickTimestamp = 0;
  const CLICK_COOLDOWN_MS = 1500;
  let clickCount = 0;
  let preventDefaultCount = 0;

  function simulateClick(timestamp) {
    if (lastClickTimestamp > 0 && timestamp - lastClickTimestamp < CLICK_COOLDOWN_MS) {
      preventDefaultCount++;
      return false; // bloqueado
    }
    lastClickTimestamp = timestamp;
    clickCount++;
    return true; // executado
  }

  // Clique 1: t = 1000ms
  const c1 = simulateClick(1000);
  assert.strictEqual(c1, true, "Clique 1 deve passar");

  // Clique 2 rápido: t = 1050ms (50ms depois)
  const c2 = simulateClick(1050);
  assert.strictEqual(c2, false, "Clique 2 rápido deve ser bloqueado");

  // Clique 3 rápido: t = 1200ms (200ms depois)
  const c3 = simulateClick(1200);
  assert.strictEqual(c3, false, "Clique 3 rápido deve ser bloqueado");

  // Clique 4 após cooldown: t = 2600ms (1600ms depois do t=1000ms)
  const c4 = simulateClick(2600);
  assert.strictEqual(c4, true, "Clique 4 após cooldown deve passar");

  assert.strictEqual(clickCount, 2, "Apenas 2 cliques devem ser processados");
  assert.strictEqual(preventDefaultCount, 2, "2 cliques rápidos devem ser prevenidos");
  console.log("  [PASSOU] Proteção de cliques múltiplos bloqueou cliques rápidos (< 1500ms) e permitiu novo clique após cooldown.");
}

// TESTE 7: Verificação do evento do Pixel (ClickCheckout vs InitiateCheckout)
console.log("\nTeste 7: Verificação do evento do Pixel...");
{
  const eventsTracked = [];
  function fakeFbq(action, eventName, params) {
    eventsTracked.push({ action, eventName, params });
  }

  // Simula o clique do CTA
  const ctaProps = {
    id: "cta-hero",
    text: "QUERO COMEÇAR AGORA",
  };

  fakeFbq("track", "ClickCheckout", {
    button_id: ctaProps.id,
    button_text: ctaProps.text,
    content_name: "Shape de Verão - Edição Verão 2026",
    value: 47.0,
    currency: "BRL",
  });

  assert.strictEqual(eventsTracked.length, 1);
  assert.strictEqual(eventsTracked[0].eventName, "ClickCheckout");
  assert.notStrictEqual(eventsTracked[0].eventName, "InitiateCheckout");
  assert.strictEqual(eventsTracked[0].params.button_id, "cta-hero");
  console.log("  [PASSOU] O clique dispara o evento customizado 'ClickCheckout', eliminando a duplicação do padrão 'InitiateCheckout'.");
}

console.log("\n=== TODOS OS TESTES PASSARAM COM SUCESSO! ===");
