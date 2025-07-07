# 🧠 LLM Parameter Calculator

An interactive web application to visualize and calculate Large Language Model sizes in GB based on parameters and precision settings.

![LLM Calculator Screenshot](images/screenshot.png)

## 🚀 Features

- **Interactive Parameter Slider**: Adjust model parameters from 0.1B to 200B
- **Precision Selection**: Choose between FP32, FP16, INT8, and INT4 quantization
- **Real-time Calculations**: Instant model size calculations as you adjust parameters
- **Visual Comparisons**: Compare your model with popular LLMs like GPT-2, GPT-3, LLaMA
- **Advanced Options**: Model overhead and custom parameter inputs
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Educational Tooltips**: Learn about technical terms and concepts

## 🔧 How It Works

The calculator uses the following formula:
Model Size (GB) = (Parameters × Precision_bits ÷ 8) ÷ (1024³) × (1 + Overhead)

Where:
- **Parameters**: Number of model parameters in billions
- **Precision**: Bits per parameter (32, 16, 8, or 4 bits)
- **Overhead**: Additional space for model metadata and optimizations

## 📊 Reference Models

The calculator includes comparisons with these popular models:

| Model | Size (GB) | Parameters | Use Case |
|-------|-----------|------------|----------|
| GPT-2 Small | 0.5 | 0.12B | Basic text generation |
| GPT-2 Large | 1.5 | 1.5B | Lightweight applications |
| LLaMA 7B | 13 | 7B | Open-source, efficient |
| LLaMA 13B | 26 | 13B | Research applications |
| GPT-3 (175B) | 700 | 175B | Advanced NLP tasks |
| GPT-4 | 800+ | 175B+ | State-of-the-art AI |

## 🌐 Live Demo

[View Live Demo](https://yourusername.github.io/llm-parameter-calculator/)

## 🛠️ Installation & Usage

### Option 1: Direct Download
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start calculating!

### Option 2: Local Development
```bash
git clone https://github.com/yourusername/llm-parameter-calculator.git
cd llm-parameter-calculator
# Open index.html in your browser or use a local server
python -m http.server 8000  # Python 3
# or
npx serve .  # Node.js
