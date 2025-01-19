class Render {
    constructor(response) {
        this.aqi = response.aqi || 0;
        this.tp = response.tp || 0;
        this.ws = response.ws || 0;
        this.hu = response.hu || 0;
        this.ic = response.ic || 0;
        this.name = response.name || '';
    }

    async renderPage() {
        try {
            const aqi = document.querySelector('.percentual');
            const tp = document.querySelector('.valor');
            const ws = document.querySelector('.vento');
            const hu = document.querySelector('.umidade');
            const name = document.querySelector('.city');

            aqi.innerText = `${this.aqi}`
            tp.innerText = `${this.tp}C°`;
            ws.innerText = `${this.ws}m/s`;
            hu.innerText = `${this.hu}%/`;
            name.innerText = `${this.name}`;

            this.updateAQIBar();
        } catch (error) {
            console.error("Erro no DOM", error);
        }

        document.querySelector('.refresh').addEventListener('click', () => {
            try {
                const dica = document.querySelector('#dica');
                const dicas = this.generateTip();

                dica.innerText = '';

                const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
                dica.innerText = dicaAleatoria;
            } catch (error) {
                console.error('Erro ao exibir a dica:', error);
            }
        });

        try {
            this.updateWeatherIcon();
        } catch (error) {
            console.error("erro no icon", error);
        }
    }

    updateAQIBar() {
        const aqiLevel = document.querySelector('.nivel-aqi');
        const estadoSaude = document.querySelector('.estadoSaude');

        const colors = [
            { max: 50, color: '#4caf50', categoria: 'Boa' },
            { max: 100, color: '#ffeb3b', categoria: 'Moderada' },
            { max: 150, color: '#ff9800', categoria: 'Não saudável para sensíveis' },
            { max: 200, color: '#f44336', categoria: 'Não saudável' },
            { max: 300, color: '#9c27b0', categoria: 'Muito não saudável' },
            { max: 500, color: '#795548', categoria: 'Perigoso' }
        ];

        const aqiData = colors.find(c => this.aqi <= c.max);

        if (aqiData) {
            aqiLevel.style.width = `${(this.aqi / 500) * 100}%`;
            aqiLevel.style.backgroundColor = aqiData.color;
            estadoSaude.textContent = aqiData.categoria;
        } else {
            console.error('AQI fora do intervalo esperado.');
        }
    }

    generateTip() {
        const tips = [];

        if (this.aqi <= 50) {
            tips.push("O ar está limpo. A qualidade está excelente.");
            tips.push("Aproveite para praticar exercícios ao ar livre!");
            tips.push("Abra as janelas e deixe o ar fresco entrar.");

            if (this.tp > 30 && this.hu > 70) {
                tips.push("Está quente e úmido. Use roupas leves e beba muita água.");
            } else if (this.tp < 15 && this.hu < 30) {
                tips.push("Está frio e seco. Vista roupas quentes e use hidratante.");
            } else {
                tips.push("O clima está agradável. Faça uma caminhada ou uma atividade ao ar livre.");
            }
        } else if (this.aqi <= 100) {
            tips.push("A qualidade do ar é moderada. Pessoas sensíveis devem ter cautela.");
            tips.push("Considere usar máscara em locais com maior poluição.");
            tips.push("Monitore mudanças no clima durante o dia.");

            if (this.tp > 30) {
                tips.push("Evite exercícios intensos ao ar livre e hidrate-se devido ao calor.");
            } else if (this.tp < 10) {
                tips.push("A temperatura está baixa. Lembre-se de se aquecer ao sair.");
            }

            if (this.hu > 60) {
                tips.push("A umidade está alta. Prefira ambientes frescos e ventilados.");
            } else if (this.hu < 30) {
                tips.push("A umidade está baixa. Use um umidificador em ambientes fechados.");
            }
        } else {
            tips.push("O ar está poluído. Considere permanecer em ambientes fechados.");
            tips.push("Feche as janelas para evitar a entrada de poluentes.");
            tips.push("Use purificadores de ar em ambientes internos.");

            if (this.tp > 30) {
                tips.push("O calor é intenso. Evite a exposição ao sol por longos períodos.");
            } else if (this.tp < 10) {
                tips.push("Está frio. Mantenha-se aquecido em ambientes fechados.");
            }

            if (this.hu > 70) {
                tips.push("O clima está abafado. Evite sair e use máscara se necessário.");
            } else if (this.hu < 30) {
                tips.push("A umidade está baixa. Hidrate-se constantemente.");
            }
        }

        tips.push("Sempre confira a previsão do tempo e os níveis de qualidade do ar antes de sair.");
        tips.push("Lembre-se de hidratar-se, independente da temperatura ou umidade.");

        return tips;
    }

    updateWeatherIcon() {
        const iconContainer = document.querySelector('.iconTemp');

        let iconHTML;

        switch (this.ic) {
            case "01d":
                iconHTML = '<i class="fas fa-sun"></i>';
                break;
            case "01n":
                iconHTML = '<i class="fas fa-moon"></i>';
                break;
            case "02d":
                iconHTML = '<i class="fas fa-cloud-sun"></i>';
                break;
            case "02n":
                iconHTML = '<i class="fas fa-cloud-moon"></i>';
                break;
            case "03d":
                iconHTML = '<i class="fas fa-cloud"></i>';
                break;
            case "04d":
            case "04n":
                iconHTML = '<i class="fas fa-cloud-meatball"></i>';
                break;
            case "09d":
                iconHTML = '<i class="fas fa-cloud-showers-heavy"></i>';
                break;
            case "10d":
                iconHTML = '<i class="fas fa-cloud-rain"></i>';
                break;
            case "10n":
                iconHTML = '<i class="fas fa-cloud-rain"></i>';
                break;
            case "11d":
                iconHTML = '<i class="fas fa-bolt"></i>';
                break;
            case "13d":
                iconHTML = '<i class="fas fa-snowflake"></i>';
                break;
            case "50d":
                iconHTML = '<i class="fas fa-smog"></i>';
                break;
            default:
                iconHTML = '<i class="fas fa-question-circle"></i>';
        }

        iconContainer.innerHTML = iconHTML;
    }
}
class WeatherApp {
    constructor() {
        this.longitude = null;
        this.latitude = null;
    }

    static API_KEY = "d649f1da49ca79fd528f9d8d68e51df9";

    getLocalization() {
        return new Promise((resolve, reject) => {
            try {
                const success = (position) => {
                    this.longitude = position.coords.longitude;
                    this.latitude = position.coords.latitude;
                    resolve();  // Resolve a Promise quando as coordenadas forem obtidas
                };
                navigator.geolocation.getCurrentPosition(success, reject); // Caso haja erro na geolocalização
            } catch (error) {
                reject("Erro ao obter localização"); // Log de erro (mantido)
            }
        });
    }

    async getQuality() {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${WeatherApp.API_KEY}&units=metric`;
        const airPollutionUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${this.latitude}&lon=${this.longitude}&appid=${WeatherApp.API_KEY}`;
        try {
            const weatherData = await this.fetchData(weatherUrl);
            const airPollutionData = await this.fetchData(airPollutionUrl);

            const Dados = {
                "aqi": (airPollutionData.list[0].main.aqi / 5) * 100,
                "tp": weatherData.main.temp,
                "ws": weatherData.wind.speed,
                "hu": weatherData.main.humidity,
                "ic": weatherData.weather[0].icon,
                "name": weatherData.name
            }
            
            return Dados;
        } catch (error) {
            console.error('Erro ao buscar qualidade do ar:', error); // Log de erro (mantido)
        }
    }

    async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.log(`Erro ao processar a resposta: ${error}`);
            return null;
        }
    }

    verificarPrincipalPoluente(components) {
        const [poluentePrincipal, maiorValor] = Object.entries(components).reduce((prev, curr) => (curr[1] > prev[1] ? curr : prev));
        return `${poluentePrincipal[0]}: ${maiorValor}`;
    }
}

alert('O sistema pode demorar um pouco para confirmar a localização\nPor favor aguarde')

const app = new WeatherApp();

app.getLocalization().then(async () => {  // Aguarda as coordenadas antes de fazer as requisições
    const qualityData = await app.getQuality();

    if (qualityData) {
        const render = new Render(qualityData);
        render.renderPage();
    }
}).catch(error => {
    console.error("Erro na obtenção da localização:", error)
    alert('Por favor ative a localização')
    location.reload()
});

