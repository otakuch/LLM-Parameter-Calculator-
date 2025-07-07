const models = [
  { name: "GPT-2 Small", size: 0.5, params: 0.12, useCase: "Basic text generation, experimentation" },
  { name: "GPT-2 Large", size: 1.5, params: 1.5, useCase: "More coherent text, lightweight apps" },
  { name: "LLaMA 7B", size: 13, params: 7, useCase: "Open-source, efficient inference" },
  { name: "LLaMA 13B", size: 26, params: 13, useCase: "Better quality, research applications" },
  { name: "GPT-3 (175B)", size: 700, params: 175, useCase: "Advanced NLP tasks, chatbots" },
  { name: "GPT-4", size: 800, params: 175, useCase: "State-of-the-art AI assistant" },
  { name: "Tiny Model", size: 0.3, params: 0.06, useCase: "Edge devices, mobile apps" },
  { name: "Medium Model", size: 5, params: 3, useCase: "Balanced performance/size" }
];

function calculateModelSize() {
  const params = parseFloat(document.getElementById('parameters').value);
  const precision = parseInt(document.getElementById('precision').value);
  const overhead = parseFloat(document.getElementById('overhead').value) / 100;
  const customParams = parseFloat(document.getElementById('customParams').value);

  const actualParams = customParams || params;
  const bytesPerParam = precision / 8;
  const baseSize = (actualParams * 1e9 * bytesPerParam) / (1024 ** 3);
  const totalSize = baseSize * (1 + overhead);

  document.getElementById('modelSize').textContent = totalSize.toFixed(1);
  document.getElementById('paramValue').textContent = actualParams.toFixed(1) + 'B';

  updateComparison(totalSize);
}

function updateComparison(userSize) {
  const container = document.getElementById('modelComparison');
  container.innerHTML = '';

  const maxSize = Math.max(...models.map(m => m.size), userSize);

  models.forEach(model => {
    const card = document.createElement('div');
    card.className = 'model-card';

    const sizeDiff = Math.abs(model.size - userSize);
    const isClose = sizeDiff < userSize * 0.2;

    if (isClose) {
      card.classList.add('highlight');
    }

    const barWidth = (model.size / maxSize) * 100;

    card.innerHTML = `
      <div class="model-name">${model.name}</div>
      <div class="model-size">${model.size.toFixed(1)} GB</div>
      <div class="model-params">${model.params.toFixed(1)}B parameters</div>
      <div class="size-visual">
        <div class="size-bar" style="width: ${barWidth}%"></div>
      </div>
      <div class="model-use-case">${model.useCase}</div>
    `;

    container.appendChild(card);
  });

  const userCard = document.createElement('div');
  userCard.className = 'model-card highlight';
  userCard.style.border = '3px solid #667eea';
  userCard.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))';

  const userBarWidth = (userSize / maxSize) * 100;
  const userParams = parseFloat(document.getElementById('customParams').value) || parseFloat(document.getElementById('parameters').value);

  userCard.innerHTML = `
    <div class="model-name">Your Model 🎯</div>
    <div class="model-size">${userSize.toFixed(1)} GB</div>
    <div class="model-params">${userParams.toFixed(1)}B parameters</div>
    <div class="size-visual">
      <div class="size-bar" style="width: ${userBarWidth}%; background: linear-gradient(90deg, #667eea, #764ba2);"></div>
    </div>
    <div class="model-use-case">Your custom configuration</div>
  `;

  container.appendChild(userCard);
}

function toggleAdvanced() {
  const options = document.getElementById('advancedOptions');
  options.classList.toggle('hidden');
}

document.getElementById('parameters').addEventListener('input', calculateModelSize);
document.getElementById('precision').addEventListener('change', calculateModelSize);
document.getElementById('overhead').addEventListener('input', calculateModelSize);
document.getElementById('customParams').addEventListener('input', calculateModelSize);

calculateModelSize();
